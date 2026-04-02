import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Scissors, Droplets, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

// Assets
import bridalImage from "../assets/bridal_makeup.png";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import makeupImage from "../assets/makeup_artist.png";
import nailImage from "../assets/nail_art.png";
import beautyHeroImage from "../assets/beauty_treatment_hero.png";

gsap.registerPlugin(ScrollTrigger, CustomEase);

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
  popular: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Bridal Transformation",
    category: "Makeup",
    description:
      "Our signature bridal service includes HD makeup, hairstyling, and draping. We craft the perfect base to ensure your beauty radiates from within.",
    price: "₹5000",
    image: bridalImage,
    icon: <Sparkles size={24} />,
    popular: true,
  },
  {
    id: 2,
    title: "Advanced Hair Styling",
    category: "Hair",
    description:
      "Professional cuts, vibrant global coloring, and deep conditioning treatments. Our stylists treat every strand as a thread in an elegant tapestry.",
    price: "₹1200",
    image: hairImage,
    icon: <Scissors size={24} />,
    popular: true,
  },
  {
    id: 3,
    title: "Radiance Skin Therapy",
    category: "Skin",
    description:
      "Customized facials using international products to restore your skin's health. Nurturing rituals reveal your skin's most authentic glow.",
    price: "₹1500",
    image: skinImage,
    icon: <Heart size={24} />,
    popular: false,
  },
  {
    id: 4,
    title: "Luxury Spa Rituals",
    category: "Spa",
    description:
      "Full body rejuvenation and relaxation therapies in a serene environment. Step into a world where time stops and healing begins.",
    price: "₹2500",
    image: spaImage,
    icon: <Droplets size={24} />,
    popular: false,
  },
  {
    id: 5,
    title: "Event HD Makeup",
    category: "Makeup",
    description:
      "Perfect for parties. Long-lasting, flawless finish for every occasion. Every look is a collaboration between our expertise and your unique expression.",
    price: "₹3000",
    image: makeupImage,
    icon: <Sparkles size={24} />,
    popular: true,
  },
  {
    id: 6,
    title: "Designer Nail Art",
    category: "Nails",
    description:
      "Creative extensions and intricate nail art designs by our master artists. Small canvases, massive impact for your personal style.",
    price: "₹1500",
    image: nailImage,
    icon: <Star size={24} />,
    popular: false,
  },
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgColors = [
      "#fff8f0",
      "#e1d9cc",
      "#fff8f0",
      "#e1d9cc",
      "#fff8f0",
      "#e1d9cc",
    ]; // Background & Surface Dim rotation
    // ------------------- INITIALIZE LENIS -------------------
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ------------------- GSAP ANIMATION -------------------
    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(".img-wrapper img");

      ScrollTrigger.matchMedia({
        // DESKTOP
        "(min-width: 769px)": function () {
          const mainTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".arch",
              start: "top top",
              end: "bottom bottom",
              pin: ".arch__right",
              scrub: true,
              anticipatePin: 1,
            },
          });

          gsap.set(imgs, {
            clipPath: "inset(0% 0% 0% 0%)",
            objectPosition: "0px 0%",
          });

          imgs.forEach((img, index) => {
            const currentImage = img;
            const nextImage = imgs[index + 1]
              ? (imgs[index + 1] as HTMLImageElement)
              : null;

            const sectionTimeline = gsap.timeline();

            if (nextImage) {
              sectionTimeline
                .to(
                  "body",
                  {
                    backgroundColor: bgColors[index % bgColors.length],
                    duration: 1.5,
                    ease: "power2.inOut",
                  },
                  0,
                )
                .to(
                  currentImage,
                  {
                    clipPath: "inset(0px 0px 100% 0px)",
                    objectPosition: "0px 60%",
                    duration: 1.5,
                    ease: "none",
                    force3D: true,
                  },
                  0,
                )
                .to(
                  nextImage,
                  {
                    objectPosition: "0px 40%",
                    duration: 1.5,
                    ease: "none",
                    force3D: true,
                  },
                  0,
                );
            }

            mainTimeline.add(sectionTimeline);
          });
        },
        // MOBILE
        "(max-width: 768px)": function () {
          gsap.set(imgs, { objectPosition: "0px 60%" });

          imgs.forEach((image, index) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: image as Element,
                  start: "top-=70% top+=50%",
                  end: "bottom+=200% bottom",
                  scrub: true,
                },
              })
              .to(image as Element, {
                objectPosition: "0px 30%",
                duration: 5,
                ease: "none",
              })
              .to("body", {
                backgroundColor: bgColors[index % bgColors.length],
                duration: 1.5,
                ease: "power2.inOut",
              });
          });
        },
      });

      // Mobile Layout Orders
      const handleMobileLayout = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const leftItems = gsap.utils.toArray<HTMLElement>(".arch__info");
        const rightItems = gsap.utils.toArray<HTMLElement>(".img-wrapper");

        if (isMobile) {
          leftItems.forEach(
            (item, i) => (item.style.order = (i * 2).toString()),
          );
          rightItems.forEach(
            (item, i) => (item.style.order = (i * 2 + 1).toString()),
          );
        } else {
          leftItems.forEach((item) => (item.style.order = ""));
          rightItems.forEach((item) => (item.style.order = ""));
        }
      };

      window.addEventListener("resize", handleMobileLayout);
      handleMobileLayout();

      return () => window.removeEventListener("resize", handleMobileLayout);
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container transition-colors duration-1000 uppercase-style"
    >
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
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;800&display=swap");
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        .arch { display: flex; gap: 80px; justify-content: space-between; max-width: 1280px; margin-inline: auto; padding: 2rem; position: relative; }
        .arch__left { display: flex; flex-direction: column; min-width: 300px; flex: 1; }
        .arch__info { height: 100vh; display: grid; place-items: center; padding-right: 2rem; }
        
        .arch__right { flex-shrink: 1; height: 100vh; width: 100%; max-width: 600px; position: relative; display: flex; flex-direction: column; }
        .img-wrapper { position: absolute; top: 50%; left: 0; transform: translateY(-50%); height: 500px; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05); will-change: transform; transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); will-change: clip-path, transform; }
        .img-wrapper:hover img { transform: scale(1.05); }

        @media (max-width: 768px) {
          .arch { flex-direction: column; gap: 20px; }
          .arch__left, .arch__right { display: contents; }
          .arch__right .img-wrapper { position: static; transform: none; height: 400px; margin-bottom: 2rem; }
          .arch__info { height: auto; padding: 10vh 0; }
        }
      `}</style>

      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-surface to-surface-dim overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side -> Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container shadow-sm mb-6"
            >
              <Sparkles size={16} />
              <span className="font-bold uppercase tracking-widest text-[10px]">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-on-surface leading-[1.1] mb-8 italic font-serif"
            >
              Luxury Beauty <br />
              <span className="text-primary-container">Services</span> <br />
              Tailored For You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-600 text-lg md:text-xl max-w-xl mb-12 leading-relaxed italic"
            >
              "From flawless makeup to rejuvenating skincare, we bring out your
              natural glow."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-10 py-4 text-sm"
                >
                  Book Appointment
                </motion.button>
              </Link>
              <button
                onClick={() => {
                  const element = document.querySelector(".arch");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-outline px-10 py-4 text-sm bg-white"
                >
                  View Services
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side -> Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 aspect-[4/5] lg:aspect-square">
              <img
                src={beautyHeroImage}
                alt="Luxury Beauty Treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl opacity-60 mix-blend-multiply"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-surface-dim rounded-full blur-3xl opacity-60 mix-blend-multiply"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------- ARCH ANIMATION SECTION ------------------- */}
      <div className="arch">
        <div className="arch__left">
          {services.map((service, i) => (
            <div key={service.id} className="arch__info" id={`info-${i}`}>
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20">
                    {service.icon}
                  </div>
                  <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-on-surface leading-none mb-6 uppercase italic font-serif">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="flex gap-8 items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                      Starting From
                    </span>
                    <span className="text-3xl font-black text-on-surface italic font-serif leading-none">
                      {service.price}
                    </span>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium-gold px-12"
                    >
                      Book Ritual
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arch__right" ref={rightColRef}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="img-wrapper"
              style={{ zIndex: services.length - i }}
            >
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ------------------- FOOTER CTA ------------------- */}
      <section className="py-60 text-center relative px-6 border-t border-slate-900/10">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic font-serif leading-[0.9]">
            Custom <br />
            <span className="text-primary">Your Journey</span>
          </h2>
          <p className="text-xl text-slate-900/60 font-medium max-w-xl mx-auto mb-16 italic leading-relaxed">
            "Beauty is not about being noticed, but being remembered. Let us
            craft a tailored package just for you."
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-gold px-20 text-lg"
            >
              Book Your Mastery
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
