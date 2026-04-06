import { motion } from "framer-motion";
import { Droplets, Heart, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import VoyageSlider from "../VoyageSlider/VoyageSlider";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "Hair Styling",
    description:
      "Trendy cuts, vibrant coloring, and elegant styling. Transform your look with our expert hair specialists.",
    image: hairImage,
    icon: <Scissors size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Premium Facials",
    description:
      "Rejuvenating skin care therapies that bring out your natural, radiant glow using top-tier products.",
    image: skinImage,
    icon: <Droplets size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Bridal Makeover",
    description:
      "Exquisite bridal transformations tailored to make you look absolutely flawless on your dream day.",
    image: bridalImage,
    icon: <Heart size={24} />,
    buttonClass: "btn-premium-gold",
  },
  {
    title: "Spa Therapies",
    description:
      "Melt away your stress in our serene ambiance with a variety of luxurious relaxation treatments.",
    image: spaImage,
    icon: <Sparkles size={24} />,
    buttonClass: "btn-premium-gold",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16 lg:mb-20">
            <h2 className="text-section-title font-black text-on-surface mb-4 sm:mb-6 uppercase tracking-tighter italic font-serif">
              Signature{" "}
              <span className="text-primary underline decoration-secondary/30 underline-offset-8">
                Experiences
              </span>
            </h2>
            <p className="text-base sm:text-lg text-on-surface/80 max-w-xl sm:max-w-2xl mx-auto font-medium leading-relaxed">
              Indulge in our carefully curated selection of premium beauty
              services designed to elevate your natural charm.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 sm:mt-12">
          <VoyageSlider slides={services} />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-16 lg:mt-20 text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold px-8 py-3.5"
              >
                View All Treatments
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
