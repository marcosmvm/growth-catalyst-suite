import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  UserCheck, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Target,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Every lead is screened against your criteria before scheduling. We verify authority, budget, need, and timeline so your sales team only meets real buyers."
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Seamless integration with your team's calendars. Meetings are booked directly into available slots, with automatic confirmations and reminders."
  },
  {
    icon: MessageSquare,
    title: "Response Management",
    description: "We handle all inbound replies, nurturing interested prospects through qualification conversations and objection handling."
  },
  {
    icon: Clock,
    title: "Same-Day Handoff",
    description: "Qualified meetings are handed to your sales team within hours, complete with context on the prospect's pain points and interests."
  }
];

const qualificationCriteria = [
  "Decision-maker authority verified",
  "Budget range confirmed",
  "Timeline for purchase identified",
  "Specific pain point discussed",
  "Interest in solution validated",
  "Meeting purpose clearly defined"
];

const stats = [
  { value: "85%", label: "Meeting show rate" },
  { value: "10-20", label: "Qualified meetings/month" },
  { value: "<4hr", label: "Average response time" },
  { value: "3x", label: "Sales team efficiency" }
];

const AppointmentSetting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Appointment Setting
              </span>
              <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
                Your Calendar, Filled With Qualified Meetings
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We handle everything from lead response to qualification to scheduling. Your sales team just shows up and closes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Start Booking Meetings <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-card border-y border-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                End-to-End Appointment Setting
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From first reply to confirmed meeting, we manage the entire scheduling process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualification Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                    What Makes a "Qualified" Meeting?
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We don't count tire-kickers. Every meeting on your calendar meets strict qualification criteria tailored to your sales process.
                  </p>
                  <ul className="space-y-4">
                    {qualificationCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">30-min qualification conversation</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">BANT Qualified</h4>
                        <p className="text-sm text-muted-foreground">Budget, Authority, Need, Timeline</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Sales-Ready</h4>
                        <p className="text-sm text-muted-foreground">Context brief for your team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Handoff */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                The Seamless Handoff
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every meeting comes with everything your sales team needs to close.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-foreground mb-2">Calendar Invite</h3>
                <p className="text-sm text-muted-foreground">
                  Meeting booked directly into your sales rep's calendar with all details
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-foreground mb-2">Context Brief</h3>
                <p className="text-sm text-muted-foreground">
                  Summary of prospect's pain points, interests, and qualification notes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-foreground mb-2">CRM Update</h3>
                <p className="text-sm text-muted-foreground">
                  Lead record updated with all activity and qualification data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Let Us Fill Your Sales Calendar
            </h2>
            <p className="text-muted-foreground mb-8">
              Stop chasing leads. Start closing deals. We'll handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentSetting;
