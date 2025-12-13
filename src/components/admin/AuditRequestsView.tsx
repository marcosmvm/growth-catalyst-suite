import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { FileText, Mail, Clock, CheckCircle, XCircle, Eye } from "lucide-react";
import { format } from "date-fns";

interface AuditRequest {
  id: string;
  email: string;
  current_efforts: string;
  sending_cadence: string;
  reply_rate: string;
  email_example: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

const effortLabels: Record<string, string> = {
  "just-getting-started": "Just getting started",
  "poor-results": "Poor results (low replies/bookings)",
  "some-success": "Sending with some success",
  "exploring-new": "Exploring new strategy",
};

const cadenceLabels: Record<string, string> = {
  "not-sending": "Not sending yet",
  "1-500": "1-500 emails/day",
  "501-plus": "501+ emails/day",
};

const replyLabels: Record<string, string> = {
  "havent-sent": "Haven't sent yet",
  "less-than-1": "Less than 1%",
  "1-3": "1-3%",
  "dont-track": "Don't track/Not sure",
};

const AuditRequestsView = () => {
  const [requests, setRequests] = useState<AuditRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<AuditRequest | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('audit_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching audit requests:", error);
      toast({ title: "Error loading requests", variant: "destructive" });
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('audit_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: "Error updating status", variant: "destructive" });
    } else {
      toast({ title: "Status updated" });
      fetchRequests();
    }
  };

  const saveNotes = async () => {
    if (!selectedRequest) return;
    
    const { error } = await supabase
      .from('audit_requests')
      .update({ notes })
      .eq('id', selectedRequest.id);

    if (error) {
      toast({ title: "Error saving notes", variant: "destructive" });
    } else {
      toast({ title: "Notes saved" });
      setSelectedRequest(null);
      fetchRequests();
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'reviewed':
        return <Badge className="bg-blue-500/10 text-blue-500"><Eye className="w-3 h-3 mr-1" />Reviewed</Badge>;
      case 'completed':
        return <Badge className="bg-emerald-500/10 text-emerald-500"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading text-foreground flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Audit Requests ({requests.length})
        </h2>
      </div>

      {requests.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No audit requests yet.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="font-medium">{request.email}</span>
                      {getStatusBadge(request.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div>
                        <span className="text-foreground font-medium">Efforts: </span>
                        {effortLabels[request.current_efforts] || request.current_efforts}
                      </div>
                      <div>
                        <span className="text-foreground font-medium">Cadence: </span>
                        {cadenceLabels[request.sending_cadence] || request.sending_cadence}
                      </div>
                      <div>
                        <span className="text-foreground font-medium">Reply Rate: </span>
                        {replyLabels[request.reply_rate] || request.reply_rate}
                      </div>
                    </div>
                    {request.email_example && (
                      <div className="mt-2 p-3 bg-secondary/50 rounded-lg text-sm">
                        <p className="text-foreground font-medium mb-1">Email Example:</p>
                        <p className="text-muted-foreground whitespace-pre-wrap line-clamp-3">{request.email_example}</p>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Submitted: {format(new Date(request.created_at), 'MMM d, yyyy h:mm a')}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Select value={request.status} onValueChange={(value) => updateStatus(request.id, value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedRequest(request);
                        setNotes(request.notes || "");
                      }}
                    >
                      Add Notes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notes for {selectedRequest?.email}</DialogTitle>
          </DialogHeader>
          <Textarea
            placeholder="Add your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[150px]"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setSelectedRequest(null)}>Cancel</Button>
            <Button variant="hero" onClick={saveNotes}>Save Notes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuditRequestsView;
