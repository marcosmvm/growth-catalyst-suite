import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mail, TrendingUp, Users, Calendar, BarChart3 } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  status: string;
  emails_sent: number;
  emails_delivered: number;
  opens: number;
  replies: number;
  meetings_booked: number;
  created_at: string;
}

const CampaignsView = () => {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchCampaigns();
    }
  }, [user]);

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setCampaigns(data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/10 text-emerald-500';
      case 'paused': return 'bg-amber-500/10 text-amber-500';
      case 'completed': return 'bg-blue-500/10 text-blue-500';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const calculateRate = (numerator: number, denominator: number) => {
    if (denominator === 0) return 0;
    return ((numerator / denominator) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading text-foreground mb-2">Campaigns</h1>
        <p className="text-muted-foreground">View your email campaign performance</p>
      </div>

      {/* Campaign Cards */}
      {loading ? (
        <div className="text-center py-8 text-muted-foreground">Loading campaigns...</div>
      ) : campaigns.length > 0 ? (
        <div className="space-y-4">
          {campaigns.map((campaign) => {
            const openRate = Number(calculateRate(campaign.opens, campaign.emails_delivered));
            const replyRate = Number(calculateRate(campaign.replies, campaign.emails_delivered));
            const deliverability = Number(calculateRate(campaign.emails_delivered, campaign.emails_sent));

            return (
              <Card key={campaign.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{campaign.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Created {new Date(campaign.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{campaign.emails_sent}</p>
                      <p className="text-xs text-muted-foreground">Sent</p>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{campaign.emails_delivered}</p>
                      <p className="text-xs text-muted-foreground">Delivered</p>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{campaign.opens}</p>
                      <p className="text-xs text-muted-foreground">Opens</p>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <Users className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{campaign.replies}</p>
                      <p className="text-xs text-muted-foreground">Replies</p>
                    </div>
                    <div className="text-center p-3 bg-secondary/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-foreground">{campaign.meetings_booked}</p>
                      <p className="text-xs text-muted-foreground">Meetings</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Deliverability</span>
                        <span className="font-medium text-foreground">{deliverability}%</span>
                      </div>
                      <Progress value={deliverability} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Open Rate</span>
                        <span className="font-medium text-foreground">{openRate}%</span>
                      </div>
                      <Progress value={openRate} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Reply Rate</span>
                        <span className="font-medium text-foreground">{replyRate}%</span>
                      </div>
                      <Progress value={replyRate} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No campaigns yet</p>
              <p className="text-sm">Your campaigns will appear here once they are created</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CampaignsView;
