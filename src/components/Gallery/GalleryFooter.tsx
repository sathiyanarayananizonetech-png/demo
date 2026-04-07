import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Gallery.css";

const GalleryFooter: React.FC = () => {
  return (
    <footer className="snap-section flex flex-col items-center justify-center p-6 sm:p-8 bg-white/30">
      <Heart
        size={48}
        className="sm:hidden text-primary mb-6 animate-pulse"
      />
      <Heart
        size={64}
        className="hidden sm:block text-primary mb-8 animate-pulse"
      />
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black italic uppercase font-serif mb-8 sm:mb-12 text-center text-slate-900">
        End of <br /> Reflections
      </h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn-premium-gold px-10 sm:px-16 py-4"
      >
        Restart Journey
      </motion.button>
    </footer>
  );
};

export default GalleryFooter;
