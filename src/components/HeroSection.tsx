import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import GetStartedModal from "./GetStartedModal";

const HeroSection = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        {/* Animated background orbs */}
        <div className="orb-glow w-[600px] h-[600px] bg-primary/20 -top-[200px] -left-[200px]" />
        <div className="orb-glow w-[500px] h-[500px] bg-accent/20 -bottom-[100px] -right-[100px]" style={{ animationDelay: '-5s' }} />
        <div className="orb-glow w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2" style={{ animationDelay: '-10s' }} />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Hero glow */}
        <div className="absolute inset-0 hero-glow" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-12 md:pt-24">
            
            {/* Exclusive badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="exclusive-badge rounded-full mb-8"
            >
              <Sparkles className="w-3 h-3" />
              Elite Automation Technology
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.1] tracking-tight text-balance"
            >
              The future of{" "}
              <span className="gradient-text italic">outbound</span>
              <br />
              <span className="text-muted-foreground/80">is already here</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Advanced AI automation that operates at scale. Reserved for those who understand that the right technology creates unfair advantages.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12"
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

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              {[
                "White-glove onboarding",
                "Enterprise-grade security",
                "Dedicated success manager"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-20 w-full max-w-5xl"
            >
              <div className="relative rounded-2xl overflow-hidden gradient-border">
                {/* Glow behind image */}
                <div className="absolute inset-0 glow-effect rounded-2xl" />
                
                <img 
                  src={heroImage} 
                  alt="Advanced AI outreach platform dashboard"
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Floating Stats */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-8 left-8 glass-strong rounded-xl p-5 hidden md:block"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Open Rate</p>
                  <p className="text-3xl font-heading gradient-text">67.8%</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute bottom-8 right-8 glass-strong rounded-xl p-5 hidden md:block"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Replies Today</p>
                  <p className="text-3xl font-heading text-foreground">+284</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Proof Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-16 flex items-center gap-4 glass rounded-full px-8 py-4"
            >
              <div className="flex -space-x-3">
                {[0.4, 0.6, 0.8].map((opacity, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background"
                    style={{ background: `linear-gradient(135deg, hsl(185 85% 55% / ${opacity}), hsl(270 60% 60% / ${opacity}))` }}
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Trusted by elite teams</p>
                <p className="text-xs text-muted-foreground">500+ companies scaled with AI</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
    </>
  );
};

export default HeroSection;