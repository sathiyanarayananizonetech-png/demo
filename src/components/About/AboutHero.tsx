import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SparkleHeading } from "../ui/SparkleHeading";

// Assets
import interiorImage from "../../assets/salon_interior_luxury.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";

const archImages = [interiorImage, hairImage, skinImage, spaImage];

const AboutHero: React.FC = () => {
  const [currentArchIndex, setCurrentArchIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArchIndex((prev) => (prev + 1) % archImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-10 text-center lg:text-left"
          >
            <div>
              <h1 className="text-display font-pacifico text-on-surface mb-6 glow-text leading-[1.1] normal-case">
                <SparkleHeading
                  text="Where Beauty"
                  className="text-on-surface"
                />
                <br className="max-lg:hidden" />
                <SparkleHeading
                  text="Meets Artistry"
                  className="text-primary"
                  sparkleScale={1.4}
                />
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-on-surface/90 leading-relaxed max-w-xl max-lg:mx-auto mb-10 font-medium">
                Step into a sanctuary of refined elegance, where every
                treatment is a personalized ritual crafted to celebrate your
                unique essence.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-lg:justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold px-10 sm:px-12 w-full sm:w-auto shadow-xl"
                  >
                    Book Your Ritual
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/60 hover:text-on-surface transition-colors duration-300"
                >
                  <span className="pb-1 border-b-2 border-on-surface/10 group-hover:border-primary transition-all duration-300">
                    Learn Our Story
                  </span>
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Arch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* The Arch Shape */}
            <div className="relative w-full max-w-[450px] aspect-4/5 rounded-t-full border-8 border-primary/5 p-4 sm:p-6 shadow-2xl bg-surface/95 overflow-visible">
              <div className="w-full h-full rounded-t-full overflow-hidden shadow-inner border border-primary/20 relative">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentArchIndex}
                    src={archImages[currentArchIndex]}
                    alt="Salon Luxury"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-1/4 -right-4 w-2 h-2 rounded-full bg-primary/40" />
              <div className="absolute bottom-1/3 -left-4 w-3 h-3 rounded-full border border-primary/40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
