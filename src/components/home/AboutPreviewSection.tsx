import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

import interiorImage from "../../assets/salon_interior_luxury.png";
import { ScrollReveal } from "./ScrollReveal";

const heritagePoints = [
  "Certified Aesthetic Professionals",
  "Premium International Brands",
  "State-of-the-Art Luxury Ambience",
];

export function AboutPreviewSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative" style={{ perspective: "1500px" }}>
              <motion.div
                whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-10 rounded-4xl sm:rounded-5xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
              >
                <img
                  src={interiorImage}
                  alt="Salon Luxury Interior"
                  loading="lazy"
                  className="w-full aspect-4/5 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-6 -right-3 sm:bottom-10 sm:-right-6 bg-surface/90 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-white"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary rounded-lg sm:rounded-xl text-white shadow-lg shadow-primary/20">
                      <Star size={20} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-on-surface">
                        12+ Years
                      </div>
                      <div className="text-xs text-on-surface/60 font-bold tracking-widest uppercase">
                        Excellence
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm">
                <Heart size={14} />
                <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
                  Our Heritage
                </span>
              </div>

              <h2 className="text-hero font-black text-on-surface leading-[0.9] uppercase tracking-tighter italic font-serif">
                Elegance Tailored <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-tertiary">
                  For You
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-on-surface/90 font-medium leading-relaxed italic">
                "Established in the heart of Trichy, Zen Tonez
                has been a sanctuary for those seeking a touch of luxury and
                professional care for over a decade."
              </p>

              <div className="space-y-3 sm:space-y-4">
                {heritagePoints.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-on-surface/80 font-bold text-xs sm:text-sm uppercase tracking-widest"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 sm:pt-6">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold px-8 py-3.5"
                  >
                    Discover Our Story
                  </motion.button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
