import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Settings, 
  Send, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Calendar,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const phases = [
  {
    phase: "Phase 1",
    title: "Strategy & Audit",
    duration: "Week 1",
    icon: Search,
    description: "We start by understanding your business, your ideal customers, and what success looks like.",
    activities: [
      "Deep-dive into your Ideal Customer Profile (ICP)",
      "Audit current outbound efforts and results",
      "Define success metrics and KPIs",
      "Analyze competitor positioning",
      "Map decision-maker personas and pain points"
    ],
    deliverables: "ICP documentation, campaign strategy, success metrics framework"
  },
  {
    phase: "Phase 2",
    title: "Infrastructure Setup",
    duration: "Week 2",
    icon: Settings,
    description: "We build the technical foundation for successful outreach—domains, deliverability, and workflows.",
    activities: [
      "Set up dedicated sending domains",
      "Configure email warming and deliverability",
      "Connect CRM and lead handoff systems",
      "Build tracking and reporting dashboards",
      "Create lead qualification workflows"
    ],
    deliverables: "Fully configured sending infrastructure, CRM integration, tracking systems"
  },
  {
    phase: "Phase 3",
    title: "Campaign Launch",
    duration: "Weeks 3-4",
    icon: Send,
    description: "We build your prospect lists, write personalized sequences, and launch your first campaigns.",
    activities: [
      "Build targeted prospect lists using Apollo & enrichment tools",
      "Write personalized cold email sequences",
      "A/B test subject lines and messaging",
      "Launch multi-touch campaigns",
      "Monitor deliverability and engagement daily"
    ],
    deliverables: "Active campaigns, qualified prospect lists, email sequences"
  },
  {
    phase: "Phase 4",
    title: "Optimize & Scale",
    duration: "Ongoing",
    icon: TrendingUp,
    description: "We continuously improve performance based on data and feedback, scaling what works.",
    activities: [
      "Weekly performance analysis and optimization",
      "Refine targeting based on reply patterns",
      "Improve messaging using sales team feedback",
      "Scale successful segments and campaigns",
      "Add new markets and ICPs as results prove out"
    ],
    deliverables: "Weekly reports, monthly strategy reviews, continuous improvement"
  }
];

const expectations = [
  {
    icon: Calendar,
    title: "10-20 Qualified Meetings/Month",
    description: "Most clients see a steady flow of qualified opportunities once campaigns are optimized."
  },
  {
    icon: Users,
    title: "Decision-Maker Access",
    description: "Every meeting is with someone who has authority to make purchasing decisions."
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    description: "Weekly reports showing emails sent, engagement rates, SQLs, and pipeline value."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              From Zero to Pipeline in 30 Days
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A proven, systematic approach that delivers predictable results. Here's exactly how we build your outbound engine.
            </p>
            <Button variant="hero" size="lg" className="gap-2">
              Start Your Pilot <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute left-[27px] top-[72px] w-0.5 h-[calc(100%+48px)] bg-border" />
                  )}
                  
                  <div className="flex gap-6 md:gap-12">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center relative z-10">
                        <phase.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {phase.phase}
                        </span>
                        <span className="text-sm text-muted-foreground">{phase.duration}</span>
                      </div>
                      <h3 className="text-2xl font-heading text-foreground mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>

                      <div className="bg-background rounded-xl p-6 border border-border">
                        <h4 className="font-semibold text-foreground mb-4">What happens:</h4>
                        <ul className="space-y-3 mb-6">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-border">
                          <span className="text-sm font-medium text-foreground">Deliverables: </span>
                          <span className="text-sm text-muted-foreground">{phase.deliverables}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Results you can count on once your campaigns are running.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expectations.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting Preview */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Transparent Reporting
              </h2>
              <p className="text-muted-foreground">
                Weekly and monthly reports show exactly how your campaigns perform.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-heading text-primary mb-1">12,450</div>
                  <div className="text-sm text-muted-foreground">Emails Sent</div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-primary mb-1">68%</div>
                  <div className="text-sm text-muted-foreground">Open Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-primary mb-1">8.2%</div>
                  <div className="text-sm text-muted-foreground">Reply Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-primary mb-1">18</div>
                  <div className="text-sm text-muted-foreground">Meetings Booked</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                *Sample monthly metrics from an active Growth plan client
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Ready to Start Your Pilot?
            </h2>
            <p className="text-muted-foreground mb-8">
              See results in 30 days with our performance-focused pilot program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
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

export default HowItWorks;
