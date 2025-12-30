import { motion } from "framer-motion";
import { Shield, PauseCircle, Power, GitBranch, ClipboardCheck, FileSearch } from "lucide-react";

const visibleBrakes = [
  {
    icon: PauseCircle,
    title: "Campaigns Start Paused",
    description: "All campaigns start paused by default — you approve before any emails send."
  },
  {
    icon: Power,
    title: "One-Click Kill Switch",
    description: "Pause everything instantly with a single click. Full control, always."
  },
  {
    icon: GitBranch,
    title: "Staged Changes",
    description: "Every optimization is staged and reviewed before deployment. No surprises."
  }
];

const governance = [
  {
    icon: ClipboardCheck,
    title: "Clear Approval Flows",
    description: "New campaigns and optimizations require your explicit sign-off."
  },
  {
    icon: FileSearch,
    title: "Full Audit Trail",
    description: "Every action logged in dashboards. See who did what and when."
  }
];

const SafetySection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="orb-glow w-[400px] h-[400px] bg-primary/15 top-0 left-0" style={{ animationDelay: '-3s' }} />
      
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
            <Shield className="w-3 h-3" />
            Built-in Safeguards
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            How it keeps you{" "}
            <span className="gradient-text italic">safe</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Automation without guardrails is dangerous. Here's how we ensure you stay in control 
            while the system does the heavy lifting.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Visible Brakes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-heading text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Visible Brakes
            </h3>
            
            <div className="space-y-6">
              {visibleBrakes.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong rounded-xl p-6 border border-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Governance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-heading text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-accent" />
              </div>
              Governance & Transparency
            </h3>
            
            <div className="space-y-6">
              {governance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-strong rounded-xl p-6 border border-accent/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Reinforcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
            >
              <p className="text-sm text-foreground/80 italic">
                "You're never out of the loop. Every decision the system makes is logged, 
                every change is staged, and you always have the final say."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
