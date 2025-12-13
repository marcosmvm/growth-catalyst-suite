import { motion } from "framer-motion";
import { Mail, Target, BarChart3, Zap, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Smart Email Sequences",
    description: "Create multi-step email campaigns with AI-powered personalization that adapts to recipient behavior.",
  },
  {
    icon: Target,
    title: "Lead Scoring",
    description: "Automatically prioritize your hottest leads with intelligent scoring based on engagement signals.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track open rates, click-through rates, and reply rates with comprehensive dashboards.",
  },
  {
    icon: Zap,
    title: "Automated Follow-ups",
    description: "Never miss a follow-up again. Smart scheduling ensures perfect timing for maximum response.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared templates, campaigns, and real-time performance insights.",
  },
  {
    icon: Shield,
    title: "Deliverability Protection",
    description: "Advanced warming and domain reputation management keeps your emails out of spam folders.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">
            Own every outreach touchpoint
          </h2>
          <p className="text-lg text-muted-foreground">
            From first contact to closed deal, our platform optimizes every step of your cold email journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
