import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Target, 
  Mail, 
  Users, 
  BarChart3, 
  Calendar, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    icon: Target,
    title: "ICP Research & List Building",
    description: "We deep-dive into your ideal customer profile—industry, company size, revenue, tech stack, and decision-maker titles—to build laser-targeted prospect lists using tools like Apollo and enrichment platforms.",
    features: [
      "Custom ICP development",
      "Data enrichment & validation",
      "Decision-maker identification",
      "Tech stack matching"
    ]
  },
  {
    icon: Mail,
    title: "Cold Email Campaign Management",
    description: "Full-service cold email campaigns designed to generate qualified replies and booked demos, not just opens or clicks. We handle everything from copywriting to deliverability.",
    features: [
      "Personalized email sequences",
      "A/B testing & optimization",
      "Deliverability management",
      "Multi-touch follow-ups"
    ]
  },
  {
    icon: Users,
    title: "Lead Qualification & Handoff",
    description: "Every lead is vetted against your qualification criteria before being handed to your sales team. We deliver sales-qualified leads (SQLs) and confirmed appointments with real decision-makers.",
    features: [
      "SQL qualification process",
      "CRM integration & sync",
      "Lead scoring system",
      "Seamless handoff workflows"
    ]
  },
  {
    icon: Calendar,
    title: "Appointment Setting",
    description: "We book qualified meetings directly on your sales team's calendar. Your reps spend more time closing and less time chasing unqualified contacts.",
    features: [
      "Calendar integration",
      "Meeting confirmation",
      "Pre-meeting briefs",
      "No-show follow-ups"
    ]
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description: "Weekly and monthly reports showing emails sent, engagement rates, SQLs created, and pipeline revenue. Full transparency with actionable insights.",
    features: [
      "Weekly performance calls",
      "Custom dashboards",
      "Pipeline tracking",
      "ROI analysis"
    ]
  },
  {
    icon: Zap,
    title: "Continuous Optimization",
    description: "We use feedback from your sales team to refine targeting, messaging, and qualification criteria. Lead quality continuously improves over time.",
    features: [
      "Message testing",
      "Targeting refinement",
      "Conversion optimization",
      "Segment expansion"
    ]
  }
];

const Services = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Request received!",
        description: "We'll be in touch within 24 hours to discuss your needs.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              Done-For-You B2B Lead Generation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We function as your outsourced outbound engine—researching ideal buyers, building targeted lists, running campaigns, and handing your sales team warm, sales-ready meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule a Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Full-Service Outbound Solution
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build a predictable pipeline without hiring extra staff or wasting money on ineffective outreach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Our Proven Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach that delivers 10-20 high-quality opportunities per month for most B2B companies.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Strategy & Audit", desc: "Define your ICP, current outbound efforts, and success metrics" },
                { step: "02", title: "Infrastructure Setup", desc: "Sending domains, deliverability, CRM connections, and workflows" },
                { step: "03", title: "Campaign Launch", desc: "Custom prospect lists, email sequences, and multi-touch campaigns" },
                { step: "04", title: "Optimize & Scale", desc: "Daily monitoring, weekly reports, and continuous improvement" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-heading text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-heading text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Ready to Fill Your Pipeline?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a performance-focused pilot and see results before committing long term.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button variant="hero" type="submit">
                Get Started
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
