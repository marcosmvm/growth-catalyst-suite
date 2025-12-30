import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WebhookPayload {
  type: string;
  data: Record<string, any>;
  webhook_url?: string;
}

// Validate webhook URL to prevent SSRF attacks
function validateWebhookUrl(urlString: string): { valid: boolean; error?: string } {
  try {
    const url = new URL(urlString);
    
    // Only allow HTTPS for security
    if (url.protocol !== "https:") {
      return { valid: false, error: "Only HTTPS URLs are allowed" };
    }
    
    // Block private IP ranges and localhost
    const hostname = url.hostname.toLowerCase();
    
    // Block localhost variations
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1") {
      return { valid: false, error: "Localhost URLs are not allowed" };
    }
    
    // Block private IP ranges (RFC 1918)
    const privateIpPatterns = [
      /^10\./,                          // 10.0.0.0/8
      /^172\.(1[6-9]|2[0-9]|3[01])\./,  // 172.16.0.0/12
      /^192\.168\./,                     // 192.168.0.0/16
      /^127\./,                          // 127.0.0.0/8 (loopback)
      /^169\.254\./,                     // 169.254.0.0/16 (link-local)
      /^0\./,                            // 0.0.0.0/8
      /^224\./,                          // 224.0.0.0/4 (multicast)
      /^240\./,                          // 240.0.0.0/4 (reserved)
    ];
    
    for (const pattern of privateIpPatterns) {
      if (pattern.test(hostname)) {
        return { valid: false, error: "Private IP addresses are not allowed" };
      }
    }
    
    // Block cloud metadata endpoints
    const blockedHostnames = [
      "metadata.google.internal",
      "metadata.goog",
      "169.254.169.254",
    ];
    
    if (blockedHostnames.includes(hostname)) {
      return { valid: false, error: "Cloud metadata endpoints are not allowed" };
    }
    
    // Only allow known n8n domains (configurable via env)
    const allowedDomains = Deno.env.get("ALLOWED_WEBHOOK_DOMAINS")?.split(",") || [];
    
    // If allowed domains are configured, enforce them
    if (allowedDomains.length > 0) {
      const isAllowed = allowedDomains.some(domain => 
        hostname === domain.trim() || hostname.endsWith(`.${domain.trim()}`)
      );
      if (!isAllowed) {
        return { valid: false, error: `Domain not in allowlist. Allowed: ${allowedDomains.join(", ")}` };
      }
    } else {
      // If no allowlist configured, at least require known webhook providers
      const trustedPatterns = [
        /\.n8n\.cloud$/,
        /\.app\.n8n\.cloud$/,
        /\.hooks\.n8n\.io$/,
        /\.webhook\.site$/,
        /\.pipedream\.net$/,
        /\.make\.com$/,
        /\.zapier\.com$/,
      ];
      
      const isTrusted = trustedPatterns.some(pattern => pattern.test(hostname));
      if (!isTrusted) {
        return { valid: false, error: "Only trusted webhook provider domains are allowed (n8n.cloud, make.com, zapier.com, etc.)" };
      }
    }
    
    return { valid: true };
  } catch {
    return { valid: false, error: "Invalid URL format" };
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: WebhookPayload = await req.json();
    console.log("Received webhook request:", payload.type);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Create log entry and get its ID for accurate updates
    const { data: logEntry, error: logError } = await supabase.from("webhook_logs").insert({
      webhook_type: payload.type,
      payload: payload.data,
      status: "processing",
    }).select("id").single();

    if (logError) {
      console.error("Failed to create log entry:", logError);
    }

    // If a webhook URL is provided, validate and forward the data to N8N
    if (payload.webhook_url) {
      // Validate URL to prevent SSRF
      const validation = validateWebhookUrl(payload.webhook_url);
      if (!validation.valid) {
        console.error("Invalid webhook URL:", validation.error);
        
        // Update log with error
        if (logEntry?.id) {
          await supabase.from("webhook_logs").update({
            status: "error",
            response: { error: validation.error },
          }).eq("id", logEntry.id);
        }
        
        return new Response(JSON.stringify({ error: validation.error }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }
      
      console.log("Forwarding to validated N8N webhook:", payload.webhook_url);
      
      const n8nResponse = await fetch(payload.webhook_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload.data,
          timestamp: new Date().toISOString(),
          source: "outreachai",
        }),
      });

      const responseData = await n8nResponse.text();
      console.log("N8N response:", responseData);

      // Update log with response using the specific log ID
      if (logEntry?.id) {
        await supabase.from("webhook_logs").update({
          status: "completed",
          response: { status: n8nResponse.status, body: responseData },
        }).eq("id", logEntry.id);
      }

      return new Response(JSON.stringify({ success: true, n8n_status: n8nResponse.status }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Webhook logged" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
