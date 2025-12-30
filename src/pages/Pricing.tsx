import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Calendar, AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";

const pricingTiers = [
  {
    name: "Foundation",
    subtitle: "For teams getting started with safe outbound",
    price: "$2,500",
    period: "/month",
    commitment: "90-day minimum",
    features: [
      "Up to 5,000 leads/month vetted & enriched",
      "2 active email campaigns",
      "All safety checks (DNC, domain health, dedup)",
      "Campaigns start paused—you approve before sending",
      "Weekly optimization reports",
      "Dedicated Slack channel",
      "Domain health monitoring",
    ],
    highlight: false,
    cta: "Start Foundation",
  },
  {
    name: "Growth",
    subtitle: "For teams scaling predictable outbound",
    price: "$5,000",
    period: "/month",
    commitment: "90-day minimum",
    features: [
      "Up to 15,000 leads/month vetted & enriched",
      "5 active email campaigns",
      "All Foundation features",
      "A/B testing with staged rollout",
      "Weekly optimization calls",
      "Priority support response",
      "Custom ICP research",
      "Multi-domain strategy",
    ],
    highlight: true,
    cta: "Start Growth",
    badge: "Most Popular",
  },
  {
    name: "Scale",
    subtitle: "For teams running high-volume, high-stakes outbound",
    price: "$10,000",
    period: "/month",
    commitment: "90-day minimum",
    features: [
      "Up to 50,000 leads/month vetted & enriched",
      "Unlimited active campaigns",
      "All Growth features",
      "Dedicated account manager",
      "Custom integrations (CRM, Slack, etc.)",
      "Advanced analytics & reporting",
      "Quarterly strategy sessions",
      "Enterprise SLA",
    ],
    highlight: false,
    cta: "Start Scale",
  },
];

const commitmentReasons = [
  {
    icon: Shield,
    title: "Domain reputation takes time to build",
    description: "Rushing email volume destroys deliverability. We ramp carefully over 90 days to protect your sender reputation.",
  },
  {
    icon: Clock,
    title: "Optimization compounds over time",
    description: "Each week we learn what works for your ICP. The best results come from weeks 6-12, not week 1.",
  },
  {
    icon: Calendar,
    title: "Real pipelines need consistency",
    description: "Outbound isn't a one-off blast. It's a predictable system that improves every month you run it.",
  },
];

const notForYou = [
  "One-off 'blast' campaigns that burn domains",
  "$500/mo 'try it for a month' experiments",
  "Anyone unwilling to respect sending limits",
  "Teams who want overnight results",
];

const faqs = [
  {
    question: "Why a 90-day minimum commitment?",
    answer: "Building a safe, effective outbound engine takes time. Domain reputation builds gradually, optimization compounds over weeks, and rushing leads to burned domains. The 90-day window lets us do it right—protecting your deliverability while scaling results."
  },
  {
    question: "What happens if my domain reputation drops?",
    answer: "Every campaign starts paused. You approve before we send. We monitor domain health continuously and automatically throttle or pause if we detect any issues. You also have a one-click kill switch at any time."
  },
  {
    question: "How do you handle unsubscribes and compliance?",
    answer: "All leads are screened against DNC lists before entering any campaign. We automatically process unsubscribes and maintain compliance with CAN-SPAM, GDPR, and other regulations. Every action is logged in your audit trail."
  },
  {
    question: "What's included in the 'safety checks'?",
    answer: "Before any lead enters a campaign: DNC list verification, domain health scoring, duplicate detection across all your campaigns, email validity verification, and company/role validation against your ICP criteria."
  },
  {
    question: "Can I pause or cancel mid-commitment?",
    answer: "You can pause campaigns at any time with our one-click kill switch. The 90-day commitment is for billing purposes—we need that runway to build your engine properly. Early termination requires paying out the remaining commitment."
  },
  {
    question: "When do I start seeing results?",
    answer: "Weeks 1-3: Infrastructure setup and careful warmup. Weeks 4-6: First campaigns launch (with your approval). Weeks 6-12: Optimization kicks in and results compound. Most clients see their strongest performance in months 2-3."
  },
];

const Pricing = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="exclusive-badge mb-6 inline-block">
              <Shield className="w-3 h-3" />
              90-Day Commitment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Pricing built for{" "}
              <span className="gradient-text">long-term results</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't do month-to-month experiments. Our 90-day minimum ensures we have the time to build a safe, compounding outbound engine—not a domain-burning sprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative premium-card rounded-2xl p-8 ${
                  tier.highlight ? "ring-2 ring-primary/50" : ""
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-medium gradient-bg text-primary-foreground rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-heading mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading gradient-text">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-primary mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tier.commitment}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={tier.highlight ? "hero" : "outline"}
                  className="w-full"
                  onClick={() => setCalendlyOpen(true)}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 90 Days Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Why we require a{" "}
              <span className="gradient-text">90-day commitment</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Short-term thinking destroys outbound. Here's why we're different.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commitmentReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not For You Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto premium-card rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-heading mb-1">This is NOT for you if...</h3>
                <p className="text-sm text-muted-foreground">
                  We're selective about who we work with. This protects both of us.
                </p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What's Included in Every Tier */}
      <section className="py-20 relative">
        <div className="absolute inset-0 hero-glow opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Included in{" "}
              <span className="gradient-text">every tier</span>
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "Full safety suite", desc: "DNC, dedup, domain health" },
              { icon: Clock, label: "Paused-by-default", desc: "You approve before sending" },
              { icon: Calendar, label: "Weekly optimization", desc: "Continuous improvement loop" },
              { icon: Check, label: "Audit trail", desc: "Full transparency & logs" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about our commitment model and safety guarantees.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="premium-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Ready to build a{" "}
              <span className="gradient-text">predictable outbound engine</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a safety walkthrough to see how we protect your domain while scaling your pipeline.
            </p>
            <Button variant="hero" size="lg" onClick={() => setCalendlyOpen(true)}>
              Book a Safety Walkthrough
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </div>
  );
};

export default Pricing;
