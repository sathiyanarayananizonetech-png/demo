import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-16 overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary border border-secondary/30 shadow-sm mb-6 sm:mb-10">
            <Sparkles size={14} />
            <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
              Connect with us
            </span>
          </div>
          <h1 className="text-display font-pacifico text-on-surface mb-6 sm:mb-10 normal-case">
            Let's Start Your <br />
            <span className="text-primary">Journey</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface/90 leading-relaxed max-w-xl sm:max-w-2xl mx-auto italic font-medium">
            "We're here to answer your questions and help you book your next
            moment of self-care."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
