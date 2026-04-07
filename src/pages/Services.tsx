import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesArchAnimation from "../components/Services/ServicesArchAnimation";
import ServicesCTA from "../components/Services/ServicesCTA";
import { ServicesMobileView } from "../components/mobile/ServicesMobileView";

const Services: React.FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000">
      {/* Mobile View */}
      <div className="block lg:hidden">
        <ServicesMobileView />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <ServicesHero />
        <ServicesArchAnimation />
        <ServicesCTA />
      </div>
    </div>
  );
};

export default Services;
