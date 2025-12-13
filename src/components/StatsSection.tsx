import { motion } from "framer-motion";

const stats = [
  { value: "10M+", label: "Emails Sent Monthly" },
  { value: "68%", label: "Average Open Rate" },
  { value: "12%", label: "Average Reply Rate" },
  { value: "5,000+", label: "Happy Customers" },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
