import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Building, CheckCircle, XCircle, Clock3 } from "lucide-react";

interface Appointment {
  id: string;
  scheduled_at: string;
  status: string;
  notes: string | null;
  leads: {
    first_name: string | null;
    last_name: string | null;
    company: string | null;
    email: string;
  } | null;
}

const AppointmentsView = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*, leads(first_name, last_name, company, email)')
        .eq('user_id', user?.id)
        .order('scheduled_at', { ascending: true });

      if (error) throw error;
      if (data) setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'cancelled': return <XCircle className="w-5 h-5 text-destructive" />;
      case 'no_show': return <XCircle className="w-5 h-5 text-amber-500" />;
      default: return <Clock3 className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500/10 text-emerald-500';
      case 'cancelled': return 'bg-destructive/10 text-destructive';
      case 'no_show': return 'bg-amber-500/10 text-amber-500';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const upcomingAppointments = appointments.filter(
    apt => new Date(apt.scheduled_at) >= new Date() && apt.status === 'scheduled'
  );

  const pastAppointments = appointments.filter(
    apt => new Date(apt.scheduled_at) < new Date() || apt.status !== 'scheduled'
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading text-foreground mb-2">Appointments</h1>
        <p className="text-muted-foreground">View and manage your scheduled meetings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold text-foreground">{appointments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Upcoming</p>
            <p className="text-2xl font-bold text-primary">{upcomingAppointments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-emerald-500">
              {appointments.filter(a => a.status === 'completed').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">This Week</p>
            <p className="text-2xl font-bold text-blue-500">
              {upcomingAppointments.filter(apt => {
                const aptDate = new Date(apt.scheduled_at);
                const now = new Date();
                const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
                return aptDate <= weekFromNow;
              }).length}
            </p>
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
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : upcomingAppointments.length > 0 ? (
            <div className="space-y-3">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {apt.leads?.first_name} {apt.leads?.last_name}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        {apt.leads?.company && (
                          <span className="flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {apt.leads.company}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(apt.scheduled_at).toLocaleString([], {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(apt.status)}`}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No upcoming appointments</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Past Appointments */}
      {pastAppointments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              Past Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pastAppointments.slice(0, 10).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg opacity-75">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(apt.status)}
                    <div>
                      <p className="font-medium text-foreground">
                        {apt.leads?.first_name} {apt.leads?.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(apt.scheduled_at).toLocaleString([], {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(apt.status)}`}>
                    {apt.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentsView;
