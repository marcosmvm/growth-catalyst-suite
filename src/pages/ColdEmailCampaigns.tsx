import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Sparkles, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Personalization",
    description: "Every email is crafted with personalized hooks based on prospect data, ensuring each message feels 1-to-1, not bulk-sent."
  },
  {
    icon: Mail,
    title: "Multi-Touch Sequences",
    description: "Strategic follow-up sequences that nurture prospects through 5-7 touchpoints, maximizing response rates without being pushy."
  },
  {
    icon: Shield,
    title: "Deliverability Optimization",
    description: "Dedicated sending domains, proper warmup protocols, and continuous monitoring to ensure your emails land in inboxes, not spam."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track opens, clicks, replies, and meetings in real-time. Know exactly what's working and what needs optimization."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Infrastructure Setup",
    description: "We set up dedicated sending domains, warm them properly, and configure authentication (SPF, DKIM, DMARC) for maximum deliverability."
  },
  {
    step: "02",
    title: "Sequence Creation",
    description: "Our copywriters craft compelling email sequences tailored to your value proposition and target audience's pain points."
  },
  {
    step: "03",
    title: "A/B Testing",
    description: "We continuously test subject lines, opening hooks, CTAs, and send times to optimize performance."
  },
  {
    step: "04",
    title: "Launch & Monitor",
    description: "Campaigns go live with daily monitoring. We track metrics, handle responses, and hand off warm leads."
  }
];

const stats = [
  { value: "40-60%", label: "Average open rate" },
  { value: "8-15%", label: "Response rate" },
  { value: "99%", label: "Inbox placement" },
  { value: "24hr", label: "Lead response time" }
];

const ColdEmailCampaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Cold Email Campaigns
              </span>
              <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
                Cold Emails That Actually Get Replies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                High-converting email campaigns that cut through inbox noise, start real conversations, and book meetings with decision-makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Launch Your Campaign <ArrowRight className="w-4 h-4" />
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
                Email Outreach Done Right
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every campaign is built on proven frameworks, personalized copy, and meticulous deliverability management.
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

        {/* Process Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Our Campaign Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From strategy to launch, we handle every detail of your cold email campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-heading text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-heading text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                    Everything You Need for Success
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Our cold email service includes all the infrastructure, copy, and management needed to run high-performing campaigns.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Dedicated sending domains",
                      "Professional email infrastructure",
                      "Custom email sequences (5-7 touches)",
                      "Personalized copy for each prospect",
                      "A/B testing on every campaign",
                      "Daily deliverability monitoring",
                      "Response handling & qualification",
                      "Weekly performance reports"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Quick Launch</h4>
                        <p className="text-sm text-muted-foreground">Campaigns live in 2-3 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Precision Targeting</h4>
                        <p className="text-sm text-muted-foreground">Only reach qualified prospects</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Continuous Optimization</h4>
                        <p className="text-sm text-muted-foreground">Weekly improvements based on data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Ready to Start Booking Meetings?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your campaign strategy and get your outreach running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Book Strategy Call <ArrowRight className="w-4 h-4" />
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

export default ColdEmailCampaigns;
