import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "per month",
    description: "Perfect for small businesses testing outbound for the first time",
    features: [
      "Up to 2,000 prospects/month",
      "1 ICP/target market",
      "Basic email sequences",
      "Weekly reporting",
      "CRM integration",
      "Dedicated account manager"
    ],
    cta: "Start your pilot",
    popular: false
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "per month",
    description: "For growing companies ready to scale their pipeline predictably",
    features: [
      "Up to 5,000 prospects/month",
      "2-3 ICPs/target markets",
      "Advanced multi-touch sequences",
      "Bi-weekly strategy calls",
      "A/B testing & optimization",
      "Lead scoring system"
    ],
    prevPlanFeatures: "Everything in Starter, plus:",
    cta: "Start your pilot",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$5,000",
    period: "per month",
    description: "Full-scale outbound engine for aggressive growth goals",
    features: [
      "Unlimited prospects",
      "Unlimited ICPs/markets",
      "Custom email + LinkedIn campaigns",
      "Weekly strategy calls",
      "Dedicated SDR support",
      "Custom integrations"
    ],
    prevPlanFeatures: "Everything in Growth, plus:",
    cta: "Start your pilot",
    popular: false
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    description: "Designed for organizations with specialized outbound needs",
    features: [
      "White-glove onboarding and implementation",
      "Plan tailored to your business",
      "Dedicated service for seamless setup",
      "Priority customer support"
    ],
    prevPlanFeatures: "Everything in Enterprise, plus:",
    cta: "Schedule a demo",
    popular: false
  }
];

const faqs = [
  {
    question: "What's included in the pilot program?",
    answer: "Our pilot typically runs 60-90 days and includes full setup: ICP research, list building, email infrastructure, campaign creation, and optimization. You'll see real results before committing to a longer engagement."
  },
  {
    question: "How quickly can we expect results?",
    answer: "Most clients see their first qualified meetings within 2-3 weeks of campaign launch. By month 2, you should have a steady flow of 10-20 qualified opportunities per month depending on your plan."
  },
  {
    question: "What makes your leads 'sales-qualified'?",
    answer: "Every lead meets your specific qualification criteria—company size, role/title, budget indicators, and expressed interest. We don't count tire-kickers. Your sales team only talks to real decision-makers."
  },
  {
    question: "Do you guarantee a certain number of meetings?",
    answer: "While results vary by industry and ICP, we provide performance benchmarks based on your market. Our Growth and Enterprise plans include performance commitments, and we adjust strategy if targets aren't being met."
  },
  {
    question: "What tools and data sources do you use?",
    answer: "We use enterprise-grade tools including Apollo, ZoomInfo, and proprietary enrichment platforms for data. For email delivery, we use dedicated sending infrastructure with proper warmup and deliverability monitoring."
  },
  {
    question: "Can we pause or cancel anytime?",
    answer: "Yes. We offer month-to-month engagements after your initial pilot. We're confident in our results, so we don't lock you into long contracts. 30-day notice for cancellation."
  }
];

const Pricing = () => {
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
              Simple, Transparent Pricing
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight"
            >
              Invest in Pipeline, Not Overhead
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Monthly retainers that deliver predictable results. Start with a pilot, scale when you're ready.
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards with Premium Styling */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 border flex flex-col relative overflow-hidden ${
                    plan.popular
                      ? "glass border-primary/30 shadow-lg shadow-primary/10"
                      : "glass border-border/50 hover:border-primary/20 transition-colors"
                  }`}
                >
                  {plan.popular && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <span className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg gradient-bg text-primary-foreground text-xs font-medium whitespace-nowrap">
                        Most popular
                      </span>
                    </>
                  )}
                  <div className="mb-6 relative z-10">
                    <h3 className="text-lg font-heading text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-heading text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>

                  <Link to="/contact" className="w-full mb-6 relative z-10">
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className={`w-full ${!plan.popular && "border-primary/30 hover:bg-primary/10"}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  {plan.prevPlanFeatures && (
                    <p className="text-sm text-foreground font-medium mb-4 relative z-10">{plan.prevPlanFeatures}</p>
                  )}

                  <ul className="space-y-3 flex-1 relative z-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props with Premium Styling */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
          <div className="container mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
            >
              <div className="glass rounded-2xl p-6 border border-border/50">
                <div className="text-4xl font-heading text-primary mb-2">No</div>
                <div className="text-muted-foreground">Long-term contracts</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-border/50">
                <div className="text-4xl font-heading text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Transparent reporting</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-border/50">
                <div className="text-4xl font-heading text-primary mb-2">60-90</div>
                <div className="text-muted-foreground">Day pilot to prove ROI</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section with Premium Styling */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about our service.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary-foreground" />
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
              Ready to See It in Action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a 30-minute strategy call to discuss your goals and see if we're a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Contact Us
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

export default Pricing;