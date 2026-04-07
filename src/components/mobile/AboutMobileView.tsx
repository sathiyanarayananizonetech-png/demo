import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Quote, 
  Award, 
  ShieldCheck, 
  Clock,
  Users,
  GraduationCap,
  Package,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import AboutExpertise from "../About/AboutExpertise";

// Import assets
import team1 from "../../assets/makeup_artist.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import testimonal1 from "../../assets/testimonals/testimonal1.jpeg";
import testimonal2 from "../../assets/testimonals/testimonal2.jpeg";
import testimonal3 from "../../assets/testimonals/testimonal3.jpeg";
import abouthero from "../../assets/abouthero.png";

export function AboutMobileView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialImages = [testimonal1, testimonal2, testimonal3];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialImages.length]);

  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    handleInteraction();
  }, [handleInteraction, testimonialImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
    handleInteraction();
  }, [handleInteraction, testimonialImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    handleInteraction();
  };

  return (
    <div className="bg-background text-on-surface antialiased pt-24 pb-32">
      {/* Header */}
      <section className="px-6 mb-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase tracking-[0.2em] text-[10px] text-[#C9A24A] font-bold mb-2 ml-1"
        >
          Our Story & Essence
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-[#2B2B2B] leading-tight"
        >
          Crafting <br/><span className="italic font-serif text-[#C9A24A]">Boutique</span> Beauty
        </motion.h1>
      </section>

      {/* Immersive Hero Visual - Full Edge-to-Edge View */}
      <section className="mb-20">
        <div className="relative w-full shadow-2xl overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={abouthero} 
            alt="Zen Tonez Hero" 
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
        </div>
      </section>

      {/* The Vision Section */}
      <section className="px-8 space-y-10 mb-24">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A24A]/10 flex items-center justify-center text-[#C9A24A]">
              <Sparkles size={20} />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#C9A24A]">The Vision</h2>
          </div>
          <p className="text-lg leading-relaxed text-[#2B2B2B]/80 font-medium">
            Founded on the belief that beauty is an <span className="italic font-serif text-[#C9A24A]">intimate art form</span>, Zen Tonez was born to provide more than just services—we provide a sanctuary.
          </p>
        </div>

        <div className="bg-[#E8E4DD]/30 p-8 rounded-3xl border border-white/40 space-y-6 shadow-sm">
           <Quote size={32} className="text-[#C9A24A] opacity-20" />
           <p className="text-xl font-serif italic text-[#2B2B2B]/90 leading-tight">
             "Our mission is to unveil the radiant essence that already exists within every client who walks through our doors."
           </p>
           <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-[#C9A24A]/30" />
             <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9A24A]">Our Philosophy</span>
           </div>
        </div>
      </section>

      {/* Why We Stand Out (Timeline Data) */}
      <section className="bg-[#E8E4DD]/40 py-24 px-8 rounded-[3rem] mb-24 border border-white/20">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A24A] font-bold block mb-2">The Difference</span>
          <h2 className="text-3xl font-bold text-[#2B2B2B] leading-tight">Why We <span className="italic font-serif text-[#C9A24A]">Stand Out</span></h2>
        </div>
        
        <div className="space-y-12">
          {[
            { icon: <Users size={20} />, title: "Largest Community", desc: "Connecting you with top beauty professionals." },
            { icon: <GraduationCap size={20} />, title: "Trained Masters", desc: "Skilled and certified international experts." },
            { icon: <Package size={20} />, title: "Branded Rituals", desc: "Premium products from trusted global brands." },
            { icon: <ShieldCheck size={20} />, title: "100% Hygienic", desc: "Medical-grade cleanliness for your safety." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#C9A24A] shadow-sm shrink-0 border border-[#C9A24A]/10">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-[#2B2B2B]">{item.title}</h3>
                <p className="text-[#2B2B2B]/60 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Excellence Standards (Values) */}
      <section className="px-8 mb-24">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Standards of Excellence</span>
          <h2 className="text-3xl font-bold leading-tight">Our Core <span className="italic font-serif text-primary">Pillars</span></h2>
        </div>

        <div className="space-y-6">
          {[
            { icon: <Award size={24} />, title: "Artisanal Excellence", desc: "Every service is a masterpiece, crafted with precision." },
            { icon: <ShieldCheck size={24} />, title: "Safe Sanctuary", desc: "Highest medical-grade sanitization protocols." },
            { icon: <Clock size={24} />, title: "Personalized Care", desc: "Bespoke rituals tailored uniquely to you." }
          ].map((value, i) => (
            <div key={i} className="p-8 bg-surface-dim/40 rounded-3xl border border-white/40 space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-serif italic">{value.title}</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <AboutExpertise isMobile />

      {/* Artisans (Team) */}
      <section className="py-24 px-8 mb-12">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">The Master Artisans</span>
          <h2 className="text-3xl font-bold">Meet the <span className="italic font-serif text-primary">Experts</span></h2>
        </div>

        <div className="space-y-16">
          {[
            { name: "Priya Raj", role: "Master Makeup Artist", img: team1 },
            { name: "Ananya Sharma", role: "Senior Hair Stylist", img: hairImage },
            { name: "Sanam Kapoor", role: "Skin Care Specialist", img: skinImage }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl mb-6">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{member.role}</p>
                  <h3 className="text-2xl font-serif italic text-[#2B2B2B] bg-white/80 px-2 py-1 rounded-lg backdrop-blur-sm shadow-sm">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel - Fixed for Maximum Visibility */}
      <section 
        className="bg-[#E8E4DD] py-24 px-8 rounded-b-[4rem]"
        style={{ color: '#2B2B2B' }}
      >
        <div className="text-center mb-16">
          <span 
            className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            style={{ color: '#C9A24A' }}
          >
            Client Love
          </span>
          <h2 
            className="text-3xl font-bold italic font-serif leading-tight"
            style={{ color: '#2B2B2B' }}
          >
            Trust Built on <br/>Results
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden relative aspect-square rounded-3xl shadow-2xl border border-white/10 group">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={testimonialImages[currentIndex]}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) nextSlide();
                  if (info.offset.x > 50) prevSlide();
                }}
                className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                alt={`Testimonial ${currentIndex + 1}`}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Moved to Bottom to avoid hiding text */}
          <div className="flex justify-center items-center gap-6 mt-12 pb-4">
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="w-10 h-10 rounded-full bg-[#2B2B2B]/5 flex items-center justify-center text-[#2B2B2B] border border-[#2B2B2B]/10 active:scale-90 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot Indicators - Fixed Colors */}
            <div className="flex items-center gap-3">
              {testimonialImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(i);
                  }}
                  className={`transition-all duration-300 rounded-full relative ${
                    currentIndex === i 
                      ? "w-8 h-2 bg-[#C9A24A]" 
                      : "w-2 h-2 bg-[#2B2B2B]/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="w-10 h-10 rounded-full bg-[#2B2B2B]/5 flex items-center justify-center text-[#2B2B2B] border border-[#2B2B2B]/10 active:scale-90 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {!isAutoPlaying && (
             <p 
               className="text-center text-[10px] uppercase tracking-widest mt-6 font-bold"
               style={{ color: 'rgba(43, 43, 43, 0.6)' }}
             >
               Manual Navigation Active
             </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center bg-[#F4F1EC]">
        <h2 className="text-4xl font-bold tracking-tight text-[#2B2B2B] mb-6">Ready to <span className="italic font-serif text-[#C9A24A]">Transform?</span></h2>
        <p className="text-[#2B2B2B]/60 mb-10 max-w-xs mx-auto font-medium">Step into our sanctuary and let your radiant essence unfold.</p>
        <Link to="/contact">
          <button className="w-full bg-[#C9A24A] text-[#2B2B2B] py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#C9A24A]/20 active:scale-95 transition-all">
            Book Your Ritual
          </button>
        </Link>
      </section>
    </div>
  );
}

