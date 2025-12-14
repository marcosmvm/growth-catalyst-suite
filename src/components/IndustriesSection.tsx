import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Megaphone, Briefcase, Cpu, Users, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Code,
    title: "SaaS Companies",
    description: "Accelerate pipeline and reduce CAC with targeted outreach to your ideal buyers.",
    href: "/cold-email-for-saas",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Megaphone,
    title: "Agencies",
    description: "Build predictable client acquisition beyond referrals and word-of-mouth.",
    href: "/cold-email-for-agencies",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Connect with decision-makers ready for high-value advisory engagements.",
    href: "/cold-email-for-consulting",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Cpu,
    title: "Tech Companies",
    description: "Reach enterprise buyers and unlock partnership opportunities at scale.",
    href: "/cold-email-for-tech",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Staffing & Recruiting",
    description: "Fill your pipeline with companies actively looking to hire.",
    href: "/cold-email-for-staffing",
    gradient: "from-rose-500/20 to-red-500/20",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Works Across Industries
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Outbound That Speaks
            <span className="text-gradient"> Your Language</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every industry has unique buyers, pain points, and decision cycles. 
            We tailor every campaign to resonate with your specific market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={industry.href}
                className="group block h-full"
              >
                <div className={`glass-strong p-8 rounded-2xl h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium">
                      <span>See how it works</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Don't see your industry? <Link to="/contact" className="text-primary hover:underline">Let's talk</Link> — we've worked with 50+ verticals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
