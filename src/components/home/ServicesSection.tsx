import { motion } from "framer-motion";
import { Droplets, Heart, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/hair_spa_treatment.png";
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
    title: "Artisan Hair Spa",
    description:
      "Deeply restorative hair treatments designed to nourish your scalp and revitalize your hair's natural shine.",
    image: spaImage,
    icon: <Sparkles size={24} />,
    buttonClass: "btn-premium-gold",
  },
];

export function ServicesSection() {
  return (
    <section className="py-10 tb:py-20 dt:py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 tb:mb-16 dt:mb-20">
            <h2 className="text-section-title font-black text-on-surface mb-4 tb:mb-6 uppercase tracking-tighter italic font-serif">
              Signature{" "}
              <span className="text-primary underline decoration-secondary/30 underline-offset-8">
                Experiences
              </span>
            </h2>
            <p className="text-base tb:text-lg text-on-surface/80 max-w-xl tb:max-w-2xl mx-auto font-medium leading-relaxed px-4 mb:px-0">
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
