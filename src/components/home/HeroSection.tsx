import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/hero_salon.png";
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";
import nailImage from "../../assets/nail_art.png";
import interiorImage from "../../assets/salon_interior_luxury.png";
import { SparkleHeading } from "../ui/SparkleHeading";

const carouselImages = [
  heroImage,
  bridalImage,
  hairImage,
  skinImage,
  spaImage,
  makeupImage,
  nailImage,
  interiorImage,
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((previousIndex) =>
        (previousIndex + 1) % carouselImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(217,195,165,0.3),transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.15),transparent_70%)] rounded-full blur-3xl" />
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-24 sm:top-32 left-[5%] sm:left-[10%] text-primary opacity-30 hidden xs:block"
      >
        <Sparkles size={36} className="sm:hidden" />
        <Sparkles size={48} className="hidden sm:block" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 right-[8%] sm:right-[15%] text-secondary opacity-30 hidden xs:block"
      >
        <Heart size={40} className="sm:hidden" />
        <Heart size={56} className="hidden sm:block" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 sm:py-24 lg:py-0 min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-display font-pacifico text-on-surface mb-4 sm:mb-6 mt-4 sm:mt-8 filter drop-shadow-xl normal-case">
            <SparkleHeading
              text="Discover Your"
              className="text-on-surface/90"
            />
            <div className="h-4 sm:h-6" />
            <SparkleHeading
              text="Radiance"
              className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-primary"
              sparkleScale={1.8}
            />
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-on-surface/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10">
            "Transform your look and uplift your spirit. Experience
            personalized beauty treatments crafted with precision, luxury, and
            care."
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold w-full sm:w-auto px-10 py-4 shadow-luxury-soft hover:shadow-luxury-deep"
              >
                Book Your Session
              </motion.button>
            </Link>

            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-outline w-full sm:w-auto px-10 py-4 border-primary/30 text-primary"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block relative"
          style={{ perspective: 1000 }}
        >
          <div className="relative z-10 w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-3xl sm:rounded-4xl overflow-hidden shadow-luxury-deep border-4 border-white bg-surface">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex]}
                alt={`Salon Hero ${currentImageIndex}`}
                fetchPriority="high"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
