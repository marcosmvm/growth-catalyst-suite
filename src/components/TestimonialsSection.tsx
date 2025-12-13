import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "This isn't just a tool—it's an unfair advantage. We 5x'd our pipeline in 90 days without adding headcount.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechFlow",
    avatar: "SC",
    result: "+500% pipeline",
  },
  {
    quote: "The AI personalization is on another level. Every email feels crafted by hand, but we're sending at massive scale.",
    author: "Marcus Johnson",
    role: "Growth Lead",
    company: "Startup Inc",
    avatar: "MJ",
    result: "25% reply rate",
  },
  {
    quote: "We evaluated every platform on the market. Nothing comes close. This is enterprise-grade automation made accessible.",
    author: "Emily Rodriguez",
    role: "Founder & CEO",
    company: "Scale Agency",
    avatar: "ER",
    result: "200+ meetings/mo",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="orb-glow w-[500px] h-[500px] bg-primary/10 -bottom-[200px] left-1/4" style={{ animationDelay: '-7s' }} />
      
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
            Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
            Trusted by the{" "}
            <span className="gradient-text italic">ambitious</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See why the fastest-growing companies choose us to power their outbound.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group premium-card p-8 rounded-2xl flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6 -scale-x-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-8 flex-1 font-light italic">
                "{testimonial.quote}"
              </p>

              {/* Result badge */}
              <div className="mb-6">
                <span className="exclusive-badge rounded-full text-[10px]">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;