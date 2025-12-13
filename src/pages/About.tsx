import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Target, Handshake, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by qualified meetings booked and pipeline created—not vanity metrics like opens and clicks."
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "We're an extension of your sales team. Your wins are our wins. We're in this together."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Every campaign teaches us something. We iterate relentlessly to improve lead quality and conversion rates."
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "No black boxes. You see exactly what we're doing, how campaigns perform, and where your investment goes."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              About OutreachAI
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Your Outsourced Outbound Engine
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl"
            >
              We help small and mid-sized B2B companies consistently fill their sales pipeline with qualified prospects—without hiring extra staff or wasting money on ineffective outreach.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading text-foreground mb-6">
                  Why We Exist
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Most small and mid-sized B2B companies know they need outbound sales. But building an internal SDR team is expensive, time-consuming, and risky. Hiring one SDR costs $60-80K+ in salary, tools, and training—with no guarantee they'll perform.
                  </p>
                  <p>
                    Meanwhile, agencies often overpromise and underdeliver, flooding inboxes with generic messages that damage your brand and generate zero real opportunities.
                  </p>
                  <p>
                    We built OutreachAI to be different: a done-for-you outbound service that combines AI-powered targeting with human expertise to deliver what actually matters—qualified meetings with decision-makers who want to talk to you.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-heading text-primary mb-1">500+</div>
                    <div className="text-muted-foreground">Campaigns delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading text-primary mb-1">10K+</div>
                    <div className="text-muted-foreground">Meetings booked</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading text-primary mb-1">$50M+</div>
                    <div className="text-muted-foreground">Pipeline generated</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading text-foreground mb-6 text-center">
                What We Actually Do
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                We function as your outsourced outbound engine, handling every step of the process.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Research your ideal buyers and their pain points",
                "Build targeted prospect lists matched to your ICP",
                "Set up sending infrastructure and deliverability",
                "Write personalized cold email sequences",
                "Run multi-touch campaigns with daily monitoring",
                "Qualify leads against your criteria",
                "Book meetings directly on your calendar",
                "Provide transparent performance reporting"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-heading text-foreground mb-12 text-center"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Let's Build Your Pipeline Together
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a strategy call to discuss your goals and see how we can help.
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
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;