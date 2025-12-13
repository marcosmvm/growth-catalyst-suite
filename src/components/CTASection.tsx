import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GetStartedModal from "./GetStartedModal";

const CTASection = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 hero-glow opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6">
              Ready to transform your outreach?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start your free trial today. No credit card required. See results in your first campaign.
            </p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => setGetStartedOpen(true)}
              >
                Get Your Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Join 5,000+ companies already growing with OutreachAI
            </motion.p>
          </motion.div>
        </div>
      </section>

      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
    </>
  );
};

export default CTASection;
