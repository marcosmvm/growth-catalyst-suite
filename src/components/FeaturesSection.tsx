import { motion } from "framer-motion";
import { Mail, Target, BarChart3, Zap, Users, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Intelligent Sequences",
    description: "AI-crafted email flows that adapt in real-time based on recipient behavior and engagement signals.",
  },
  {
    icon: Target,
    title: "Predictive Scoring",
    description: "Machine learning algorithms that identify your highest-value prospects before they even engage.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Real-time performance intelligence with actionable insights to optimize every touchpoint.",
  },
  {
    icon: Zap,
    title: "Autonomous Follow-ups",
    description: "Self-optimizing timing algorithms ensure perfect delivery moments for maximum response rates.",
  },
  {
    icon: Users,
    title: "Team Intelligence",
    description: "Unified workspace with shared learnings, templates, and performance benchmarks across your organization.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and advanced domain reputation management.",
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
            <Sparkles className="w-3 h-3" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            Technology that{" "}
            <span className="gradient-text italic">outperforms</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every feature engineered to give you an unfair advantage in outbound. This is what happens when AI meets precision.
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