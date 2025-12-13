import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, Users, Mail, Calendar, LogOut, ArrowLeft,
  Target, Server, FileText
} from "lucide-react";
import AuditRequestsView from "@/components/admin/AuditRequestsView";

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0, totalCampaigns: 0, totalLeads: 0, totalAppointments: 0, totalAuditRequests: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const [profiles, campaigns, leads, appointments, auditRequests] = await Promise.all([
      supabase.from('profiles').select('id', { count: 'exact', head: true }),
      supabase.from('campaigns').select('id', { count: 'exact', head: true }),
      supabase.from('leads').select('id', { count: 'exact', head: true }),
      supabase.from('appointments').select('id', { count: 'exact', head: true }),
      supabase.from('audit_requests').select('id', { count: 'exact', head: true }),
    ]);
    setStats({
      totalUsers: profiles.count || 0,
      totalCampaigns: campaigns.count || 0,
      totalLeads: leads.count || 0,
      totalAppointments: appointments.count || 0,
      totalAuditRequests: auditRequests.count || 0,
    });
  };

  const engines = [
    { name: "Engine A - Onboarding", status: "active", uptime: "99.9%" },
    { name: "Engine B - ICP Definition", status: "active", uptime: "99.8%" },
    { name: "Engine C - Lead Generation", status: "active", uptime: "99.7%" },
    { name: "Engine D - Outreach", status: "active", uptime: "99.9%" },
    { name: "Engine E - Appointments", status: "active", uptime: "99.5%" },
    { name: "Engine F - Analytics", status: "active", uptime: "100%" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/portal" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4" /> Back to Portal
            </Link>
            <h1 className="text-3xl font-heading text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">System-wide performance overview</p>
          </div>
          <Button variant="outline" onClick={signOut}><LogOut className="w-4 h-4 mr-2" />Sign Out</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { title: "Total Users", value: stats.totalUsers, icon: Users, color: "text-primary" },
            { title: "Campaigns", value: stats.totalCampaigns, icon: Mail, color: "text-emerald-500" },
            { title: "Leads", value: stats.totalLeads, icon: Target, color: "text-blue-500" },
            { title: "Appointments", value: stats.totalAppointments, icon: Calendar, color: "text-amber-500" },
            { title: "Audit Requests", value: stats.totalAuditRequests, icon: FileText, color: "text-purple-500" },
          ].map((stat, i) => (
            <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card><CardContent className="pt-6 flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-secondary`}><stat.icon className={`w-6 h-6 ${stat.color}`} /></div>
                <div><p className="text-sm text-muted-foreground">{stat.title}</p><p className="text-2xl font-bold">{stat.value}</p></div>
              </CardContent></Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />Overview
            </TabsTrigger>
            <TabsTrigger value="audit-requests" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />Audit Requests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Server className="w-5 h-5 text-primary" />Engine Status</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {engines.map((engine) => (
                    <div key={engine.name} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-medium">{engine.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Uptime: {engine.uptime}</span>
                        <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-500 capitalize">{engine.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit-requests">
            <AuditRequestsView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
