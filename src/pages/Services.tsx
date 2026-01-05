import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Target, 
  Mail, 
  Users, 
  BarChart3, 
  Calendar, 
  Zap,
  CheckCircle,
  ArrowRight,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: "Quick Form Submission",
          email: email.trim(),
          message: "User requested to get started via Services page form"
        });

      if (error) throw error;

      toast({
        title: "Request received!",
        description: "We'll be in touch within 24 hours to discuss your needs.",
      });
      setEmail("");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Our Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Pipeline built. Deals closed.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Research. Lists. Campaigns. Qualified meetings. We handle outbound so your team can sell.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="lg" className="gap-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                View Pricing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid with Premium Styling */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
          
          <div className="container mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Full-service outbound.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for predictable pipeline. No extra staff. No wasted budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Premium Styling */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                How it works.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Systematic approach. 10-20 qualified meetings per month for most B2B companies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Strategy & Audit", desc: "Define your ICP, current outbound efforts, and success metrics" },
                { step: "02", title: "Infrastructure Setup", desc: "Sending domains, deliverability, CRM connections, and workflows" },
                { step: "03", title: "Campaign Launch", desc: "Custom prospect lists, email sequences, and multi-touch campaigns" },
                { step: "04", title: "Optimize & Scale", desc: "Daily monitoring, weekly reports, and continuous improvement" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-5xl font-heading bg-gradient-to-br from-primary to-primary/30 bg-clip-text text-transparent mb-4 group-hover:from-primary group-hover:to-primary transition-all">{item.step}</div>
                  <h3 className="text-lg font-heading text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Premium Styling */}
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
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Ready for more meetings?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a pilot. See results before committing long term.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50"
                required
                disabled={isSubmitting}
              />
              <Button variant="hero" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Get Started"
                )}
              </Button>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;