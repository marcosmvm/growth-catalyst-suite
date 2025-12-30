import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import SafetySection from "@/components/SafetySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhatYouGetSection />
        <SafetySection />
        <HowItWorksSection />
        <WhoThisIsForSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
