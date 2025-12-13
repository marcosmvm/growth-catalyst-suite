import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import GetStartedModal from "./GetStartedModal";

const CTASection = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb-glow w-[600px] h-[600px] bg-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb-glow w-[400px] h-[400px] bg-accent/15 top-0 right-0" style={{ animationDelay: '-8s' }} />
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="exclusive-badge rounded-full mb-8 inline-flex">
              <Sparkles className="w-3 h-3" />
              Limited Availability
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-8 leading-tight text-balance">
              Ready to join the{" "}
              <span className="gradient-text italic">elite</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We partner with a select number of companies each quarter. If you're serious about scaling your outbound, request access today.
            </p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-base px-8 py-6 h-auto"
                onClick={() => setGetStartedOpen(true)}
              >
                Request Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              No commitment required • Get a response within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </section>

      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
    </>
  );
};

export default CTASection;