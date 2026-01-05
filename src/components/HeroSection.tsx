import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, PauseCircle, Eye } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import GetStartedModal from "./GetStartedModal";

const HeroSection = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  
  const reassuranceItems = [
    {
      icon: PauseCircle,
      text: "Every campaign starts paused — you approve before sending."
    },
    {
      icon: Shield,
      text: "Leads are screened for DNC, domain health, and duplicates."
    },
    {
      icon: Eye,
      text: "Weekly optimization loop improves reply rates over time, not overnight."
    }
  ];

  return <>
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        {/* Animated background orbs */}
        <div className="orb-glow w-[600px] h-[600px] bg-primary/20 -top-[200px] -left-[200px]" />
        <div className="orb-glow w-[500px] h-[500px] bg-accent/20 -bottom-[100px] -right-[100px]" style={{
        animationDelay: '-5s'
      }} />
        <div className="orb-glow w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2" style={{
        animationDelay: '-10s'
      }} />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Hero glow */}
        <div className="absolute inset-0 hero-glow" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-12 md:pt-24">
            
            {/* Safety badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="exclusive-badge rounded-full mb-8">
              <Shield className="w-3 h-3" />
              Domain-Safe Outbound
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.1] tracking-tight text-balance">
              Cold email that{" "}
              <span className="gradient-text">actually works.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              More meetings. Less work. We run your outbound so you can focus on closing deals.
            </motion.p>

            {/* CTA Button */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="mt-12">
              <Button variant="hero" size="lg" className="group text-base px-8 py-6 h-auto" onClick={() => setGetStartedOpen(true)}>
                Book a Safety Walkthrough
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Reassurance Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12 w-full max-w-2xl"
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                <div className="space-y-4">
                  {reassuranceItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm md:text-base text-foreground/90 text-left leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div initial={{
            opacity: 0,
            y: 60
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="mt-16 w-full max-w-5xl">
              <div className="relative rounded-2xl overflow-hidden gradient-border">
                {/* Glow behind image */}
                <div className="absolute inset-0 glow-effect rounded-2xl" />
                
                <img src={heroImage} alt="Safe cold email platform dashboard showing campaign controls" className="w-full h-auto rounded-2xl relative z-10" />
                
                {/* Floating Stats */}
                <motion.div initial={{
                opacity: 0,
                x: -30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 1,
                ease: [0.25, 0.1, 0.25, 1]
              }} className="absolute top-8 left-8 glass-strong rounded-xl p-5 hidden md:block">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Domain Health</p>
                  <p className="text-3xl font-heading text-green-400">98%</p>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: 30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }} className="absolute bottom-8 right-8 glass-strong rounded-xl p-5 hidden md:block">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Meetings This Week</p>
                  <p className="text-3xl font-heading text-foreground">+12</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Proof Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="mt-16 flex items-center gap-4 glass rounded-full px-8 py-4">
              <div className="flex -space-x-3">
                {[0.4, 0.6, 0.8].map((opacity, i) => <div key={i} className="w-10 h-10 rounded-full border-2 border-background" style={{
                background: `linear-gradient(135deg, hsl(185 85% 55% / ${opacity}), hsl(270 60% 60% / ${opacity}))`
              }} />)}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Trusted by B2B teams who care about reputation</p>
                <p className="text-xs text-muted-foreground">90-day commitment, predictable pipeline</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GetStartedModal open={getStartedOpen} onOpenChange={setGetStartedOpen} />
    </>;
};
export default HeroSection;
