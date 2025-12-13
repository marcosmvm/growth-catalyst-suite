import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { 
  TrendingUp, 
  Mail, 
  Users, 
  Calendar, 
  ArrowUp, 
  ArrowDown,
  BarChart3,
  Target,
  CheckCircle,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CampaignMetrics {
  totalCampaigns: number;
  totalEmailsSent: number;
  totalDelivered: number;
  totalOpens: number;
  totalReplies: number;
  totalMeetings: number;
  openRate: number;
  replyRate: number;
  deliverabilityRate: number;
}

const ClientDashboard = () => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<CampaignMetrics>({
    totalCampaigns: 0,
    totalEmailsSent: 0,
    totalDelivered: 0,
    totalOpens: 0,
    totalReplies: 0,
    totalMeetings: 0,
    openRate: 0,
    replyRate: 0,
    deliverabilityRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      fetchMetrics();
      fetchRecentData();
    }
  }, [user]);

  const fetchMetrics = async () => {
    try {
      const { data: campaigns, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('user_id', user?.id);

      if (error) throw error;

      if (campaigns && campaigns.length > 0) {
        const totals = campaigns.reduce((acc, campaign) => ({
          totalCampaigns: acc.totalCampaigns + 1,
          totalEmailsSent: acc.totalEmailsSent + (campaign.emails_sent || 0),
          totalDelivered: acc.totalDelivered + (campaign.emails_delivered || 0),
          totalOpens: acc.totalOpens + (campaign.opens || 0),
          totalReplies: acc.totalReplies + (campaign.replies || 0),
          totalMeetings: acc.totalMeetings + (campaign.meetings_booked || 0),
        }), {
          totalCampaigns: 0,
          totalEmailsSent: 0,
          totalDelivered: 0,
          totalOpens: 0,
          totalReplies: 0,
          totalMeetings: 0,
        });

        setMetrics({
          ...totals,
          openRate: totals.totalDelivered > 0 ? (totals.totalOpens / totals.totalDelivered) * 100 : 0,
          replyRate: totals.totalDelivered > 0 ? (totals.totalReplies / totals.totalDelivered) * 100 : 0,
          deliverabilityRate: totals.totalEmailsSent > 0 ? (totals.totalDelivered / totals.totalEmailsSent) * 100 : 0,
        });
      }
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentData = async () => {
    try {
      // Fetch recent leads
      const { data: leads } = await supabase
        .from('leads')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (leads) setRecentLeads(leads);

      // Fetch upcoming appointments
      const { data: appointments } = await supabase
        .from('appointments')
        .select('*, leads(first_name, last_name, company)')
        .eq('user_id', user?.id)
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true })
        .limit(5);

      if (appointments) setUpcomingAppointments(appointments);
    } catch (error) {
      console.error('Error fetching recent data:', error);
    }
  };

  const statCards = [
    {
      title: "Deliverability Rate",
      value: `${metrics.deliverabilityRate.toFixed(1)}%`,
      icon: Target,
      trend: "+2.4%",
      trendUp: true,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Open Rate",
      value: `${metrics.openRate.toFixed(1)}%`,
      icon: Mail,
      trend: "+5.2%",
      trendUp: true,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Reply Rate",
      value: `${metrics.replyRate.toFixed(1)}%`,
      icon: BarChart3,
      trend: "+1.8%",
      trendUp: true,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Meetings Booked",
      value: metrics.totalMeetings.toString(),
      icon: Calendar,
      trend: "+12",
      trendUp: true,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading text-foreground mb-2">Campaign Dashboard</h1>
        <p className="text-muted-foreground">Real-time metrics from Engine F</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                    <div className={`flex items-center gap-1 mt-2 text-sm ${stat.trendUp ? 'text-emerald-500' : 'text-destructive'}`}>
                      {stat.trendUp ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      <span>{stat.trend}</span>
                      <span className="text-muted-foreground">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Campaign Summary & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Campaign Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-muted-foreground">Active Campaigns</span>
              <span className="font-bold text-foreground">{metrics.totalCampaigns}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-muted-foreground">Emails Sent</span>
              <span className="font-bold text-foreground">{metrics.totalEmailsSent.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-muted-foreground">Emails Delivered</span>
              <span className="font-bold text-foreground">{metrics.totalDelivered.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-muted-foreground">Total Opens</span>
              <span className="font-bold text-foreground">{metrics.totalOpens.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span className="text-muted-foreground">Total Replies</span>
              <span className="font-bold text-foreground">{metrics.totalReplies.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Recent Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentLeads.length > 0 ? (
              <div className="space-y-3">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">
                        {lead.first_name} {lead.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">{lead.company}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${lead.status === 'qualified' ? 'bg-emerald-500/10 text-emerald-500' :
                        lead.status === 'contacted' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-muted text-muted-foreground'}
                    `}>
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No leads yet</p>
                <p className="text-sm">Leads will appear here as campaigns run</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Upcoming Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-3">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {apt.leads?.first_name} {apt.leads?.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">{apt.leads?.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      {new Date(apt.scheduled_at).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(apt.scheduled_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No upcoming appointments</p>
              <p className="text-sm">Meetings will appear here when booked</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;
