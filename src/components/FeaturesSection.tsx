import { motion } from "framer-motion";
import { CheckCircle, Shield, Mail, TrendingUp, Users, Lock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Domain Protection",
    description: "Automated DNC compliance, domain health monitoring, and smart sending limits to protect your reputation.",
  },
  {
    icon: Mail,
    title: "Multi-Step Sequences",
    description: "Proven email sequences that adapt based on recipient behavior. Each step optimized for response rates.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Clear dashboards showing open rates, reply rates, and meetings booked. See what's working at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Improvements",
    description: "Every week, the system identifies weak points and proposes tested improvements — with your approval.",
  },
  {
    icon: Users,
    title: "Lead Verification",
    description: "Every lead is screened for duplicates, verified email, and compliance before entering any campaign.",
  },
  {
    icon: Lock,
    title: "Full Control",
    description: "Campaigns start paused. Changes are staged. You approve everything before it goes live.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="orb-glow w-[400px] h-[400px] bg-accent/15 top-0 right-0" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="exclusive-badge rounded-full mb-6 inline-flex">
            <CheckCircle className="w-3 h-3" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            Safer, more{" "}
            <span className="gradient-text italic">predictable</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every feature built to protect your domain while generating meetings. 
            No black boxes, no risky automation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group premium-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
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
