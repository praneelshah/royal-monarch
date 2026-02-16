import Navbar from "@/components/Navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import WhatWeDo from "@/components/WhatWeDo";
import HeroParallax from "@/components/HeroParallax";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroGeometric
        badge="Royal Monarch Solutions"
        title1="Run Smarter."
        title2="Scale Faster."
      />
      <WhatWeDo />
      <HeroParallax />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
