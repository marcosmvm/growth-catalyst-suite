import { motion } from "framer-motion";
import { Shield, FileText, TrendingUp, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Automated DNC, domain health, and dedup checks before any lead ever hits a campaign.",
    bullets: [
      "Every lead verified against DNC and suppression lists",
      "Domain reputation monitored in real-time",
      "Duplicate detection across all your campaigns"
    ]
  },
  {
    icon: FileText,
    title: "Campaign Creation",
    description: "We turn your ICP + offer into multi-step email sequences based on proven patterns, not guesswork.",
    bullets: [
      "Multi-step sequences built from your positioning",
      "Personalization at scale without losing authenticity",
      "A/B testing built into every campaign"
    ]
  },
  {
    icon: TrendingUp,
    title: "Weekly Optimization",
    description: "Every week, the system finds weak steps, proposes new copy, and ships improvements with your approval.",
    bullets: [
      "Performance analysis identifies underperforming steps",
      "New copy suggestions based on what's working",
      "All changes staged for your review before sending"
    ]
  }
];

const WhatYouGetSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            What you{" "}
            <span className="gradient-text italic">get</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three pillars that turn cold outreach into a predictable meeting machine — 
            without putting your domain at risk.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group premium-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-heading text-foreground mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>
              
              <ul className="space-y-3">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
