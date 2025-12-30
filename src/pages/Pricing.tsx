import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Calendar, AlertTriangle, ArrowRight, HelpCircle, Users, Target, Zap, FileCheck, MessageSquare } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";

const pricingTiers = [
  {
    name: "Engine Pilot",
    subtitle: "90-Day Outbound Program",
    priceRange: "$3,000–$5,000",
    period: "/month",
    commitment: "3 months (non-cancellable)",
    description: "Full setup and deployment of your outbound engine with safety-first infrastructure.",
    features: [
      "Full setup and onboarding into the engine",
      "Lead vetting (compliance, domain health, dedup)",
      "Campaign creation and deployment",
      "Weekly optimization cycles",
      "Bi-weekly reporting and review calls",
      "Campaigns start paused—you approve before sending",
      "Dedicated Slack channel",
    ],
    volumeExpectations: [
      "1,500–3,000 net-new leads/month minimum",
      "3,000–5,000 emails sent/month minimum",
    ],
    highlight: true,
    cta: "Book a Walkthrough",
    badge: "Start Here",
  },
  {
    name: "Growth Retainer",
    subtitle: "Compounding Outbound",
    priceRange: "$4,000–$7,500",
    period: "/month",
    commitment: "3–6 months rolling",
    description: "For teams who've completed the pilot and want to scale with continuous optimization.",
    features: [
      "Continuous campaign creation and refresh",
      "Ongoing optimization cycles",
      "Expanded reporting and strategy iterations",
      "Multiple ICPs / segments supported",
      "Multiple domains / sending accounts",
      "Custom meeting volume targets",
      "Priority support response",
    ],
    volumeExpectations: [
      "Volume scales with your growth goals",
      "Custom lead targets per quarter",
    ],
    highlight: false,
    cta: "Talk to Us",
    badge: "Post-Pilot",
  },
];

const bestFitItems = [
  {
    icon: Target,
    text: "You sell B2B with meaningful deal sizes (e.g., $10k+ ACV)",
  },
  {
    icon: Calendar,
    text: "You're ready to commit at least 90 days to outbound—not 'try it for a month'",
  },
  {
    icon: Users,
    text: "You can provide or approve 1,500–3,000 leads/quarter that match a clear ICP",
  },
  {
    icon: Shield,
    text: "You care about protecting your domains and reputation",
  },
  {
    icon: MessageSquare,
    text: "You want qualified conversations, not just raw meetings",
  },
  {
    icon: Zap,
    text: "You're building a repeatable outbound engine, not running one-off blasts",
  },
];

const engagementRules = [
  {
    title: "Minimum Commitment",
    items: [
      "90-day minimum for any engagement (Engine Pilot)",
      "We only judge the program after at least 2 full optimization cycles (60–90 days of sends)",
    ],
  },
  {
    title: "Lead & Volume Requirements",
    items: [
      "Maintain at least 1,500 approved leads/month fit to your ICP",
      "Respect list quality requirements (no scraped junk, no compliance-violating lists)",
      "If lead quality is too low, we pause and fix the list before sending",
    ],
  },
  {
    title: "Governance & Safety",
    items: [
      "All campaigns start paused. Nothing sends until you approve",
      "DNC checks, domain health checks, deduplication, and role/free email filters",
      "Sending limits per domain and per mailbox—these cannot be overridden",
    ],
  },
  {
    title: "Collaboration & Responsiveness",
    items: [
      "Single main stakeholder for approvals and feedback",
      "Respond to campaign and optimization approvals within 48 hours",
      "We commit to weekly/bi-weekly reporting and transparent logs",
    ],
  },
];

const notForYouItems = [
  "Looking for $500–$1,500/mo 'test it and see' outbound",
  "Want a one-month trial or month-to-month agreement",
  "Expect 'guaranteed 20 meetings in 14 days' or similar",
  "Want to upload any list and override safety checks because 'everyone is doing it'",
  "Not willing to participate in defining ICP, reviewing campaigns, or giving feedback on lead quality",
];

const faqs = [
  {
    question: "Why a 90-day minimum commitment?",
    answer: "The first month is setup + warmup + first sends; months two and three are where our optimization engine has enough data to really work. Anything shorter is just testing if we can stand up infrastructure, not if this drives pipeline."
  },
  {
    question: "What happens if my domain reputation drops?",
    answer: "Every campaign starts paused. You approve before we send. We monitor domain health continuously and automatically throttle or pause if we detect any issues. You also have a one-click kill switch at any time."
  },
  {
    question: "Why can't I override the safety checks?",
    answer: "The rules about DNC, domain health, and sending limits protect your domains and everyone's inbox reputation. We don't turn those off, even if someone wants to go faster. This protects your domains, our shared data and infrastructure, and deliverability for current and future clients."
  },
  {
    question: "What's included in lead vetting?",
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
  {
    question: "What if I want a hybrid performance model?",
    answer: "We can discuss base + per-qualified-meeting pricing after the pilot, but for the initial 90 days, a clean retainer keeps operations simple and enforces seriousness from both sides."
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
              90-Day Commitment Required
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Pricing built for{" "}
              <span className="gradient-text">serious outbound</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not a "spray and pray" cold email shop. The engine is designed for B2B teams who care about domain safety and compounding performance—not one-month experiments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <p className="text-sm text-primary font-medium">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-heading gradient-text">{tier.priceRange}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tier.commitment}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" />
                    Volume expectations:
                  </h4>
                  <ul className="space-y-1">
                    {tier.volumeExpectations.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            Pricing is based on ICP complexity, number of domains/sending accounts, and required meeting volume. We'll discuss exact pricing on your walkthrough call.
          </motion.p>
        </div>
      </section>

      {/* Best Fit Section */}
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
              <span className="gradient-text">Best fit</span> if you...
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're selective about who we work with. This protects both of us and ensures you get results.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bestFitItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="premium-card rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Rules Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Engagement{" "}
              <span className="gradient-text">rules</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear expectations from both sides. This is how we work together.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {engagementRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card rounded-xl p-6"
              >
                <h3 className="text-lg font-heading mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {rule.title}
                </h3>
                <ul className="space-y-2">
                  {rule.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
            className="max-w-3xl mx-auto premium-card rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-heading mb-1">We're probably NOT a fit if...</h3>
                <p className="text-sm text-muted-foreground">
                  The engine works best with committed partners who value safety, data quality, and compounding performance.
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground italic">
                If you're looking for a short-term test or list-blast vendor, we're not the right fit—and we're happy to recommend other options.
              </p>
            </div>
          </motion.div>
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
              Common questions about our commitment model and how we work.
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
        <div className="absolute inset-0 hero-glow opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Ready to build a{" "}
              <span className="gradient-text">safe, compounding outbound engine</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a walkthrough to see how we protect your domain while building predictable pipeline over 90 days.
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
