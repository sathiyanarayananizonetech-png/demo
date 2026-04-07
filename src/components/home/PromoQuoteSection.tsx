import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "./ScrollReveal";

export function PromoQuoteSection() {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-10 relative overflow-hidden bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="bg-surface/60 backdrop-blur-2xl border border-white/50 rounded-3xl sm:rounded-4xl p-6 sm:p-16 md:p-20 shadow-luxury-deep text-center relative overflow-hidden mx-auto max-w-4xl">
            <Quote
              size={40}
              className="text-primary opacity-20 mx-auto mb-6 sm:mb-10 relative z-10"
            />
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-section-title font-black text-on-surface mb-6 sm:mb-10 uppercase tracking-tighter italic font-serif relative z-10 leading-tight">
              "Elegance is the beauty <br /> that never fades."
            </h3>
            <p className="text-on-surface/80 text-base sm:text-lg md:text-xl font-medium max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 relative z-10 balance">
              Step into a world of relaxation and luxury. Let our experts craft
              the perfect look that reflects your true essence.
            </p>
            <div className="relative z-10 flex justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-10 sm:px-14 py-4 sm:py-5 text-sm sm:text-base shadow-xl"
                >
                  Start Your Journey Today
                </motion.button>
              </Link>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
