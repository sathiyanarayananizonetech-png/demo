import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesArch from "../components/Services/ServicesArch";
import ServicesCTA from "../components/Services/ServicesCTA";

const Services: React.FC = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container transition-colors duration-1000">
      <ServicesHero />
      <ServicesArch />
      <ServicesCTA />
    </div>
  );
};

export default Services;
