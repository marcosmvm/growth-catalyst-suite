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

    // Log the webhook
    await supabase.from("webhook_logs").insert({
      webhook_type: payload.type,
      payload: payload.data,
      status: "processing",
    });

    // If a webhook URL is provided, forward the data to N8N
    if (payload.webhook_url) {
      console.log("Forwarding to N8N webhook:", payload.webhook_url);
      
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

      // Update log with response
      await supabase.from("webhook_logs").update({
        status: "completed",
        response: { status: n8nResponse.status, body: responseData },
      }).eq("webhook_type", payload.type).order("created_at", { ascending: false }).limit(1);

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
