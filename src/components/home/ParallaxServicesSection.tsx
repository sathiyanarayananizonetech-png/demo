import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import nailImage from "../../assets/nail_art.png";
import { ParallaxArrow } from "../ScrollParallaxCard/ParallaxArrow";
import { ScrollParallaxCard } from "../ScrollParallaxCard/ScrollParallaxCard";
import { ScrollReveal } from "./ScrollReveal";

const parallaxServices = [
  {
    title: "Bridal Makeup",
    description:
      "Exquisite bridal transformations tailored to your style. We make your special day truly unforgettable.",
    image: bridalImage,
    price: "Rs5000",
  },
  {
    title: "Hair Styling",
    description:
      "From trendy cuts to elegant updos, our expert stylists bring out the best in your hair.",
    image: hairImage,
    price: "Rs800",
  },
  {
    title: "Skin Care",
    description:
      "Revitalize your glow with customized facials designed for your unique skin type.",
    image: skinImage,
    price: "Rs1200",
  },
  {
    title: "Nail Art Studio",
    description:
      "Express your elegance with intricate nail art executed by our meticulous specialists.",
    image: nailImage,
    price: "Rs1500",
  },
];

export function ParallaxServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-secondary/10 text-primary border border-secondary/20 shadow-sm mb-4">
              <Sparkles size={14} />
              <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
                Our Full Portfolio
              </span>
            </div>
            <h2 className="text-section-title font-black text-on-surface mb-4 sm:mb-6 uppercase tracking-tighter italic font-serif">
              Everything You Need to <br className="hidden sm:block" />
              <span className="text-primary">Shine Brighter</span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface/80 max-w-xl sm:max-w-2xl mx-auto font-medium">
              Explore our comprehensive collection of beauty therapies. From
              bridal masterpieces to routine pampering.
            </p>
          </div>
        </ScrollReveal>

        <div className="scroll-parallax-section">
          <h1 className="parallax-page__title">#EXPLORE</h1>
          <ParallaxArrow />
          <div className="parallax-content parallax-content--alternate parallax-content--padded">
            {parallaxServices.map((service, index) => (
              <ScrollParallaxCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-16 text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold px-8 py-3.5"
              >
                View Detailed Service Menu
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
