import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-40 lg:py-60 text-center relative px-4 sm:px-6 border-t border-slate-900/10">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-display font-black mb-8 sm:mb-12 uppercase tracking-tighter italic font-serif leading-[0.9]">
          Custom <br />
          <span className="text-primary">Your Journey</span>
        </h2>
        <p className="text-base sm:text-xl text-on-surface/80 font-semibold max-w-xl mx-auto mb-10 sm:mb-16 italic leading-relaxed">
          "Beauty is not about being noticed, but being remembered. Let us
          craft a tailored package just for you."
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium-gold px-12 sm:px-20 py-4 text-base sm:text-lg"
          >
            Book Your Mastery
            </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;
