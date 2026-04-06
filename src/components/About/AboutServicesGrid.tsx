import React from "react";
import {
  Scissors,
  Sparkles,
  Crown,
  Hand,
  Droplets,
  HeartPulse,
} from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Hair Styling",
    desc: "Achieve trendy and elegant hairstyles with our expert stylists.",
    icon: <Scissors size={26} strokeWidth={1.5} />,
  },
  {
    title: "Facial Treatments",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies.",
    icon: <Sparkles size={26} strokeWidth={1.5} />,
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services.",
    icon: <Crown size={26} strokeWidth={1.5} />,
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services.",
    icon: <Hand size={26} strokeWidth={1.5} />,
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage.",
    icon: <Droplets size={26} strokeWidth={1.5} />,
  },
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions.",
    icon: <HeartPulse size={26} strokeWidth={1.5} />,
  },
];

const ServiceCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
}> = ({ title, desc, icon }) => (
  <div className="group relative bg-secondary/10 p-5 sm:p-6 pt-10 sm:pt-12 rounded-3xl text-center shadow-luxury-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury-deep border border-secondary/20">
    <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-surface border-2 border-primary/30 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary">
      <div className="text-primary/60 transition-colors duration-500 group-hover:text-primary flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-on-surface/80 text-xs sm:text-sm leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

const AboutServicesGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-dim overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-14 sm:mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 sm:mb-6 block">
            Experience Our Expertise
          </span>
          <h2 className="text-hero italic text-on-surface">
            Our <span className="text-primary">Exclusive Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServicesGrid;
