import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Calendar, Building } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    company: "TechScale Solutions",
    industry: "SaaS / Software",
    challenge: "Struggling to generate consistent pipeline with a small sales team",
    results: {
      meetings: "24 meetings/month",
      pipeline: "$480K pipeline",
      timeframe: "90 days"
    },
    quote: "OutreachAI transformed our outbound. We went from 3-4 meetings a month to over 20, and our sales team finally has a predictable pipeline to work with.",
    author: "Sarah Chen",
    role: "VP of Sales"
  },
  {
    company: "CloudFirst Analytics",
    industry: "Data Analytics",
    challenge: "Needed to break into enterprise accounts without an SDR team",
    results: {
      meetings: "18 meetings/month",
      pipeline: "$1.2M pipeline",
      timeframe: "6 months"
    },
    quote: "We couldn't justify hiring SDRs, but we needed enterprise meetings. OutreachAI delivered decision-maker access we couldn't get on our own.",
    author: "Michael Torres",
    role: "CEO"
  },
  {
    company: "SecureNet IT",
    industry: "Cybersecurity",
    challenge: "Previous agency delivered low-quality leads that wasted sales time",
    results: {
      meetings: "15 meetings/month",
      pipeline: "$320K pipeline",
      timeframe: "60 days"
    },
    quote: "The difference is night and day. Every meeting is with someone who actually needs our solution and has budget authority. No more tire-kickers.",
    author: "David Park",
    role: "Head of Business Development"
  }
];

const metrics = [
  { value: "500+", label: "Campaigns Delivered" },
  { value: "10K+", label: "Meetings Booked" },
  { value: "$50M+", label: "Pipeline Generated" },
  { value: "92%", label: "Client Retention" }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              Real Results for Real Businesses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how B2B companies use OutreachAI to fill their pipeline with qualified opportunities.
            </p>
          </div>
        </section>

        {/* Metrics Bar */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-heading text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-primary" />
                      <span className="font-heading text-foreground">{study.company}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {study.industry}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    <span className="font-medium text-foreground">Challenge:</span> {study.challenge}
                  </p>

                  {/* Results Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-background rounded-xl p-4 border border-border text-center">
                      <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.meetings}</div>
                      <div className="text-xs text-muted-foreground">Qualified Meetings</div>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border text-center">
                      <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.pipeline}</div>
                      <div className="text-xs text-muted-foreground">Pipeline Created</div>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.timeframe}</div>
                      <div className="text-xs text-muted-foreground">Timeframe</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-primary pl-6">
                    <p className="text-foreground italic mb-3">"{study.quote}"</p>
                    <footer className="text-sm text-muted-foreground">
                      — {study.author}, {study.role}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a strategy call to see how we can help grow your pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule a Call <ArrowRight className="w-4 h-4" />
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

export default CaseStudies;
