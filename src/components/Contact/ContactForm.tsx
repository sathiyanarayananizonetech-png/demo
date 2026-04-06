import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-2 relative group"
    >
      {/* Rotating Border Beam (Framer Motion) */}
      <div className="absolute inset-0 p-[2px] rounded-4xl sm:rounded-[3.5rem] overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="-inset-full bg-[conic-gradient(from_0deg,transparent_0,var(--color-primary)_40deg,transparent_100deg)] opacity-30 blur-[2px]"
        />
      </div>

      <div className="bg-surface/60 backdrop-blur-xl p-7 sm:p-12 md:p-16 rounded-3xl sm:rounded-4xl shadow-luxury-deep border border-white/50 relative z-10 overflow-hidden transform-gpu">
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center p-8 text-center rounded-4xl"
          >
            <div className="p-5 sm:p-6 bg-primary rounded-2xl sm:rounded-4xl text-white mb-6 sm:mb-8 shadow-xl shadow-primary/20">
              <Sparkles size={40} />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black italic text-[#302b27] mb-4 font-serif uppercase leading-tight">
              Message Received!
            </h3>
            <p className="text-on-surface/80 font-semibold italic max-w-sm text-sm sm:text-base">
              Our specialists will reach out to you within the hour for your
              transformation consultation.
            </p>
          </motion.div>
        )}

        <h3 className="text-section-title font-black italic mb-8 sm:mb-12 uppercase font-serif tracking-tight">
          Send Us a <span className="text-primary">Note</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3">
              <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 sm:px-4">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/70 border border-secondary/20 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold text-sm sm:text-base text-on-surface"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 sm:px-4">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/50 border border-on-surface/10 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold text-sm sm:text-base text-on-surface"
                placeholder="+91 00000 00000"
                value={formState.phone}
                onChange={(e) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-on-surface/60 block px-3 sm:px-4">
              Your Vision
            </label>
            <textarea
              rows={5}
              required
              className="w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/50 border border-on-surface/10 rounded-2xl sm:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-on-surface/40 font-bold resize-none text-sm sm:text-base text-on-surface"
              placeholder="Share your beauty aspirations..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-premium-gold w-full flex items-center justify-center gap-3 py-5 sm:py-6 text-sm"
          >
            Send Mastery Request <Send size={16} />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
