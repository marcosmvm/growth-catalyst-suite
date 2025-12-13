import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-12 md:pt-20">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-tight animate-fade-up">
            Powerful tools for{" "}
            <span className="gradient-text">cold email outreach</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Optimize your outreach, automate follow-ups, and convert leads faster with AI-powered email intelligence.
          </p>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="group">
              Try free for 30 days
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>14-day money back</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 w-full max-w-5xl animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <img 
                src={heroImage} 
                alt="Cold email outreach platform dashboard showing email analytics and automation"
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating Stats */}
              <div className="absolute top-8 left-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 card-shadow hidden md:block animate-float">
                <p className="text-sm text-muted-foreground">Open Rate</p>
                <p className="text-2xl font-bold text-primary">67.8%</p>
              </div>
              <div className="absolute bottom-8 right-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 card-shadow hidden md:block animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm text-muted-foreground">Replies Today</p>
                <p className="text-2xl font-bold text-foreground">+284</p>
              </div>
            </div>
          </div>

          {/* Social Proof Badge */}
          <div className="mt-12 flex items-center gap-3 bg-secondary/50 rounded-full px-6 py-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-primary/50 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-primary/70 border-2 border-background" />
            </div>
            <span className="text-sm text-foreground font-medium">
              2024 #1 Best Email Outreach Tool
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
