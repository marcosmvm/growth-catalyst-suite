import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Database, 
  Search, 
  Filter, 
  CheckCircle, 
  ArrowRight,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "ICP-Based Targeting",
    description: "We research and define your Ideal Customer Profile based on industry, company size, revenue, tech stack, and decision-maker titles."
  },
  {
    icon: Database,
    title: "Premium Data Sources",
    description: "Access to enterprise-grade databases including Apollo, ZoomInfo, and proprietary enrichment platforms for accurate, verified contacts."
  },
  {
    icon: Search,
    title: "Intent Signal Tracking",
    description: "Identify prospects actively searching for solutions like yours through buying intent signals and trigger events."
  },
  {
    icon: Filter,
    title: "Multi-Layer Verification",
    description: "Every contact goes through email verification, role confirmation, and company validation before entering your campaigns."
  }
];

const benefits = [
  "Access to 200M+ B2B contacts",
  "Real-time data enrichment",
  "CRM-ready lead formatting",
  "Custom qualification criteria",
  "Continuous list optimization",
  "GDPR/CAN-SPAM compliant"
];

const stats = [
  { value: "95%", label: "Email accuracy rate" },
  { value: "10-20", label: "SQLs per month" },
  { value: "200M+", label: "B2B contacts database" },
  { value: "48hr", label: "List delivery time" }
];

const LeadGeneration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Lead Generation
              </span>
              <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
                Build Targeted Prospect Lists That Convert
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop wasting time on unqualified leads. We build custom prospect lists of decision-makers who match your exact Ideal Customer Profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
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
                Precision Lead Generation at Scale
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our data-driven approach ensures every prospect on your list is a potential buyer.
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

        {/* How It Works */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                    From ICP to Pipeline-Ready Leads
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We don't just pull a list and hand it over. Our process ensures every lead is validated, enriched, and ready for outreach.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Define Your ICP</h4>
                        <p className="text-sm text-muted-foreground">Industry, size, revenue, titles</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Build & Enrich</h4>
                        <p className="text-sm text-muted-foreground">Multi-source data aggregation</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading text-foreground">Deliver & Optimize</h4>
                        <p className="text-sm text-muted-foreground">CRM-ready, continuously refined</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Ready to Fill Your Pipeline?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a custom prospect list tailored to your ideal customer profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Start Your Pilot <ArrowRight className="w-4 h-4" />
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

export default LeadGeneration;
