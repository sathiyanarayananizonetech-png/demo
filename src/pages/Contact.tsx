import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Send,
  Clock,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// ------------------- 3D TILT INFO CARD COMPONENT -------------------
interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoCard: React.FC<{ info: ContactInfo; idx: number }> = ({
  info,
  idx,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 15,
      rotateX: -y * 15,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-start gap-4 p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-slate-900/5 shadow-sm transition-all duration-300 cursor-pointer"
      >
        <div className="p-4 bg-white rounded-2xl shadow-sm text-primary">
          {info.icon}
        </div>
        <div>
          <h4 className="text-slate-900/40 text-[10px] uppercase tracking-[0.2em] mb-1 font-black leading-none">
            {info.title}
          </h4>
          <p className="text-[#302b27] font-bold text-lg italic tracking-tight leading-tight">
            {info.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // ------------------- INITIALIZE LENIS -------------------
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ------------------- PARALLAX HEADER -------------------
    gsap.to(".contact-header-title", {
      scrollTrigger: {
        trigger: ".header-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
      rotationX: 45,
      y: -50,
      scale: 0.9,
      opacity: 0.2,
      filter: "blur(10px)",
      ease: "none",
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Address",
      content: "Thillai Nagar, Trichy, Tamil Nadu",
    },
    { icon: <Phone size={24} />, title: "Call Us", content: "+91 98765 43210" },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: "hello@zentonszbeauty.com",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-primary-container selection:text-on-primary-container relative min-h-screen">
      {/* ------------------- GLOBAL DUST OVERLAY ------------------- */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15 mix-blend-overlay z-9999"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")',
          backgroundRepeat: "repeat",
        }}
      />

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap");
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-surface-dim to-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/10 text-primary border border-primary-container/20 shadow-sm mb-10">
              <Sparkles size={16} />
              <span className="font-bold uppercase tracking-widest text-[10px]">
                Connect with us
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] mb-10 uppercase tracking-tighter italic font-serif">
              Let's Start Your <br />
              <span className="text-primary">Journey</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed italic max-w-2xl mx-auto">
              "We're here to answer your questions and help you book your next
              moment of self-care. Reach out today."
            </p>
          </motion.div>

        </div>
      </section>

      <section className="py-12 bg-transparent overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Col: Contact Details */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <ContactInfoCard key={i} info={info} idx={i} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Clock className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-black italic mb-8 border-b border-white/10 pb-4 uppercase font-serif">
                  Opening Hours
                </h4>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center group">
                    <span className="text-white/60 font-medium tracking-widest uppercase text-[10px]">
                      Mon - Sat:
                    </span>
                    <span className="text-white font-bold tracking-tight">
                      10:00 AM - 08:30 PM
                    </span>
                  </li>
                  <li className="flex justify-between items-center group">
                    <span className="text-[#f8f6f2]/60 font-medium tracking-widest uppercase text-[10px]">
                      Sunday:
                    </span>
                    <span className="text-primary font-black italic">
                      Closed
                    </span>
                  </li>
                </ul>
                <div className="mt-12 flex gap-6">
                  {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      href="#"
                      className="p-4 bg-white/5 rounded-2xl hover:bg-primary transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Col: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/50 backdrop-blur-xl p-12 md:p-16 rounded-[3.5rem] shadow-2xl border border-white/50 relative overflow-hidden">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center p-8 text-center rounded-4xl"
                  >
                    <div className="p-6 bg-primary rounded-4xl text-white mb-8 shadow-xl shadow-primary/20">
                      <Sparkles size={48} />
                    </div>
                    <h3 className="text-4xl font-black italic text-[#302b27] mb-4 font-serif uppercase leading-tight">
                      Message Received!
                    </h3>
                    <p className="text-slate-900/60 font-medium italic max-w-sm">
                      Our specialists will reach out to you within the hour for
                      your transformation consultation.
                    </p>
                  </motion.div>
                )}

                <h3 className="text-4xl font-black italic mb-12 uppercase font-serif tracking-tight">
                  Send Us a <span className="text-primary">Note</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-4">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-8 py-5 bg-white/50 border border-[#302b27]/5 rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-4">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-8 py-5 bg-white/50 border border-[#302b27]/5 rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold"
                        placeholder="+91 00000 00000"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-900/30 block px-4">
                      Your Vision
                    </label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-8 py-5 bg-white/50 border border-[#302b27]/5 rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all placeholder:text-[#302b27]/20 font-bold resize-none"
                      placeholder="Share your beauty aspirations..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-premium-gold w-full flex items-center justify-center gap-4 py-6 text-sm shadow-2xl shadow-primary/20"
                  >
                    Send Mastery Request <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Section Placeholder */}
      <section className="h-[500px] mt-24 bg-white relative flex items-center justify-center overflow-hidden border-t border-[#302b27]/5">
        <div className="relative z-10 text-center">
          <MapPin className="text-primary w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-black italic uppercase font-serif tracking-tight">
            Thillai Nagar, Trichy
          </h3>
          <p className="text-slate-900/30 uppercase tracking-[0.4em] text-[10px] mt-4 font-black italic">
            The Heart of Luxury
          </p>
        </div>
        {/* Minimalist Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #302b27 1px, transparent 1px), linear-gradient(to bottom, #302b27 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-radial-to-c from-transparent to-white" />
      </section>
    </div>
  );
};

export default Contact;
