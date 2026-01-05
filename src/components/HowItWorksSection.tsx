import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We Review Your ICP & Offer",
    description: "You share who you're targeting and what you're selling. We verify the positioning makes sense for cold outreach.",
    features: ["ICP validation", "Offer positioning review", "Compliance check"],
  },
  {
    number: "02",
    title: "We Build Your Sequences",
    description: "Using proven patterns, we craft multi-step email sequences tailored to your market. No generic templates.",
    features: ["Custom sequences", "A/B testing built-in", "Personalization at scale"],
  },
  {
    number: "03",
    title: "Campaigns Start Paused",
    description: "Every campaign launches paused. You review leads, copy, and settings before anything sends.",
    features: ["You approve before sending", "Lead verification complete", "Domain health confirmed"],
  },
  {
    number: "04",
    title: "Weekly Optimization Cycles",
    description: "Each week, we analyze performance, identify weak steps, and propose improvements — with your approval.",
    features: ["Performance analysis", "Staged improvements", "Compounding results"],
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">
            How it works.
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear process. Built-in safeguards. You stay in control.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <span className="text-6xl font-heading gradient-text opacity-30 absolute top-4 right-6">
                  {step.number}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-3">
                    {step.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 rounded-full px-4 py-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
