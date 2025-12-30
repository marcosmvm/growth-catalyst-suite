import { motion } from "framer-motion";
import { CheckCircle, XCircle, Users, Target, Clock, Zap, AlertTriangle, Ban } from "lucide-react";

const forItems = [
  {
    icon: Users,
    text: "B2B teams who care about domain reputation and long-term outbound."
  },
  {
    icon: Clock,
    text: "Founders willing to commit 90 days to build a predictable outbound engine."
  },
  {
    icon: Target,
    text: "Teams sending at least 500 leads per month who want compounding results."
  }
];

const notForItems = [
  {
    icon: Zap,
    text: "One-off 'blast' campaigns with no follow-up strategy."
  },
  {
    icon: AlertTriangle,
    text: "$500/mo 'try it for a month' experiments."
  },
  {
    icon: Ban,
    text: "Anyone unwilling to respect compliance and sending limits."
  }
];

const WhoThisIsForSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            Is this{" "}
            <span className="gradient-text italic">right for you?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're selective about who we work with. Here's how to know if we're a good fit.
          </p>
        </motion.div>

        {/* Two Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="premium-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-heading text-foreground">This is for you if...</h3>
            </div>
            
            <div className="space-y-6">
              {forItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="premium-card rounded-2xl p-8 border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-heading text-foreground">This is not for you if...</h3>
            </div>
            
            <div className="space-y-6">
              {notForItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Sound like you? {" "}
            <a href="#get-started" className="text-primary hover:underline">
              Let's talk about building your outbound engine.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
