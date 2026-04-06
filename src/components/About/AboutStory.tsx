import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import spaImage from "../../assets/spa_treatment.png";

const AboutStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden border-b border-primary-container/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl sm:rounded-4xl overflow-hidden shadow-luxury-deep aspect-4/5">
              <img
                src={spaImage}
                alt="Our Sanctuary"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-secondary/30">
              Our Legacy
            </div>
            <h2 className="text-hero italic text-on-surface leading-none">
              Crafting Timeless <br />
              <span className="text-primary">Beauty Stories</span> <br />{" "}
              Since 2010
            </h2>
            <p className="text-base sm:text-lg text-on-surface/80 font-sans leading-relaxed italic">
              "Founded on the belief that everyone deserves a sanctuary of
              self-care, Zentonsz has grown from a boutique salon into a
              hallmark of luxury."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-2">
              <div>
                <h4 className="text-lg sm:text-xl font-serif italic text-on-surface mb-2">
                  Our Vision
                </h4>
                <p className="text-sm text-on-surface/80 leading-relaxed font-medium">
                  To become the global standard for personalized luxury beauty
                  experiences.
                </p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif italic text-on-surface mb-2">
                  Our Mission
                </h4>
                <p className="text-sm text-on-surface/80 leading-relaxed font-medium">
                  Enhancing natural beauty through innovative techniques and
                  artisanal care.
                </p>
              </div>
            </div>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium-gold px-8 py-3.5"
              >
                Discover Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
