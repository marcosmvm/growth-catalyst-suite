import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    quote: "3-4 meetings a month to over 20. Predictable pipeline for the first time.",
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
    quote: "No SDRs, but we needed enterprise meetings. Decision-maker access we couldn't get on our own.",
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
    quote: "Night and day. Every meeting is with someone who needs our solution and has budget authority.",
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
        {/* Hero Section with Premium Effects */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Case Studies
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Results. Not promises.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Real pipeline. Real clients. Real numbers.
            </motion.p>
          </div>
        </section>

        {/* Metrics Bar with Premium Styling */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                {metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-heading text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies with Premium Styling */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 md:p-10 border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                        <Building className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-heading text-foreground">{study.company}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                      {study.industry}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    <span className="font-medium text-foreground">Challenge:</span> {study.challenge}
                  </p>

                  {/* Results Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-background/50 rounded-xl p-4 border border-border text-center group-hover:border-primary/20 transition-colors">
                      <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.meetings}</div>
                      <div className="text-xs text-muted-foreground">Qualified Meetings</div>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 border border-border text-center group-hover:border-primary/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.pipeline}</div>
                      <div className="text-xs text-muted-foreground">Pipeline Created</div>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 border border-border text-center group-hover:border-primary/20 transition-colors">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-xl font-heading text-foreground">{study.results.timeframe}</div>
                      <div className="text-xs text-muted-foreground">Timeframe</div>
                    </div>
                  </div>

                  {/* Quote with Premium Styling */}
                  <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-primary/30 before:rounded-full">
                    <p className="text-foreground italic mb-3">"{study.quote}"</p>
                    <footer className="text-sm text-muted-foreground">
                      — {study.author}, <span className="text-primary">{study.role}</span>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Premium Styling */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center max-w-3xl relative z-10"
          >
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Your turn.
            </h2>
            <p className="text-muted-foreground mb-8">
              30 minutes. See what we can do for your pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;