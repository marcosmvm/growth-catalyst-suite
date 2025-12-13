import { motion } from "framer-motion";

const stats = [
  { value: "10M+", label: "Emails Delivered", sublabel: "Monthly" },
  { value: "68%", label: "Average Open Rate", sublabel: "Industry avg: 21%" },
  { value: "12%", label: "Reply Rate", sublabel: "4x industry standard" },
  { value: "500+", label: "Elite Companies", sublabel: "Trust our platform" },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading gradient-text mb-3 group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <p className="text-foreground font-medium text-sm md:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;