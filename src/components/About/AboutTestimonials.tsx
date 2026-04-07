import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const AboutTestimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
            Client Voices
          </span>
          <h2 className="text-hero italic text-on-surface">
            Trust Built on <span className="text-primary">Results</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
          {[
            {
              text: "Zen Tonez isn't just a parlour; it's an experience. The attention to detail and the hygiene standards are unparalleled in the city.",
              author: "Meera Krishnan",
              tag: "Regular Client Since 2018",
            },
            {
              text: "My bridal transformation was exactly what I dreamed of. They understood my vision and executed it with such precision.",
              author: "Ritika Singh",
              tag: "Bridal Client 2023",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 bg-surface-dim/30 rounded-4xl sm:rounded-5xl border border-primary-container/20 relative group hover:bg-surface-dim hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <Quote
                size={32}
                className="text-primary-container absolute top-8 right-8 group-hover:text-primary-container/50 transition-colors"
              />
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-on-surface/80 leading-relaxed mb-6 sm:mb-8">
                "{item.text}"
              </p>
              <div className="text-on-surface">
                <h4 className="text-xl font-serif italic">{item.author}</h4>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary mt-1">
                  {item.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
