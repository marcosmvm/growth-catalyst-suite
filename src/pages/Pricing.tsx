import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "Perfect for small businesses testing outbound for the first time.",
    features: [
      "Up to 2,000 prospects/month",
      "1 ICP/target market",
      "Basic email sequences",
      "Weekly reporting",
      "CRM integration",
      "Dedicated account manager"
    ],
    cta: "Start Pilot",
    popular: false
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "/month",
    description: "For growing companies ready to scale their pipeline predictably.",
    features: [
      "Up to 5,000 prospects/month",
      "2-3 ICPs/target markets",
      "Advanced multi-touch sequences",
      "Bi-weekly strategy calls",
      "A/B testing & optimization",
      "Lead scoring system",
      "LinkedIn outreach add-on",
      "Priority support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$5,000",
    period: "/month",
    description: "Full-scale outbound engine for companies with aggressive growth goals.",
    features: [
      "Unlimited prospects",
      "Unlimited ICPs/markets",
      "Custom email + LinkedIn campaigns",
      "Weekly strategy calls",
      "Dedicated SDR support",
      "Custom integrations",
      "Revenue attribution tracking",
      "Quarterly business reviews",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              Invest in Pipeline, Not Overhead
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monthly retainers that deliver predictable results. Start with a pilot, scale when you're ready.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border ${
                    plan.popular
                      ? "bg-card border-primary shadow-lg shadow-primary/10 relative"
                      : "bg-card border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-heading text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-heading text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full gap-2"
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-heading text-primary mb-2">No</div>
                <div className="text-muted-foreground">Long-term contracts</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Transparent reporting</div>
              </div>
              <div>
                <div className="text-4xl font-heading text-primary mb-2">60-90</div>
                <div className="text-muted-foreground">Day pilot to prove ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about our service.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
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
                <Button variant="outline" size="lg">
                  Contact Us
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

export default Pricing;
