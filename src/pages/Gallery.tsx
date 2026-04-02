import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { ShuffleHero } from "../components/ui/ShuffleHero";
import BookGallery from "../components/ui/BookGallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

// Asset Imports
import bridalImage from "../assets/bridal_makeup.png";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import makeupImage from "../assets/makeup_artist.png";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Gallery: React.FC = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: "bridal",
      title: "Bridal Art",
      subtitle: "The First Impression",
      img: bridalImage,
      text: "Every transformation begins with silence. We craft the perfect base, ensuring your beauty radiates from within.",
    },
    {
      id: "hair",
      title: "Hair Mastery",
      subtitle: "Sculpting Elegance",
      img: hairImage,
      text: "Movement and form collide. Our stylists treat every strand as a thread in a larger, elegant tapestry.",
    },
    {
      id: "skin",
      title: "Skin Revival",
      subtitle: "The Radiant Ritual",
      img: skinImage,
      text: "Nourishment transcends the surface. We use precise rituals to reveal your skin's most authentic glow.",
    },
    {
      id: "spa",
      title: "Spa Sanctuary",
      subtitle: "Stillness in Movement",
      img: spaImage,
      text: "Step into a world where time stops. Our spa rituals are designed to nourish the soul through moments of care.",
    },
    {
      id: "masters",
      title: "The Masters",
      subtitle: "Creative Reflection",
      img: makeupImage,
      text: "Meet the visionaries. Every look is a collaboration between our expertise and your unique expression.",
    },
  ];


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


    // ------------------- SNAPPING CHAPTERS (HIGH-FIDELITY ZOOM SCROLL) -------------------
    gsap.utils.toArray<HTMLElement>(".chapter-snap-section").forEach((section, i) => {
      const content = section.querySelector(".content-outer");
      const img = section.querySelector("img");

      // 3-STAGE ZOOM SCROLL TIMELINE: Blur/Scale 0 -> Clear/Scale 1 -> Blur/Scale 1.5
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            onEnter: () => setActiveSection(i),
            onEnterBack: () => setActiveSection(i),
          },
          defaults: { force3D: true }, // Optimizes transform performance
        })
        // Phase 1: Enter & Zoom In (Blur/0 to Clear/1)
        .fromTo(
          content,
          { scale: 0, opacity: 0, filter: "blur(20px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power1.inOut",
          },
        )
        // Phase 2: Peak & Zoom Past (Clear/1 to Blur/1.5)
        .to(content, {
          scale: 1.5,
          opacity: 0,
          filter: "blur(15px)",
          duration: 0.5,
          ease: "power1.inOut",
        })
        // Simultaneous Image Counter-Scale for Depth
        .fromTo(
          img,
          { scale: 1.4 },
          { scale: 1, duration: 0.5, ease: "power1.inOut" },
          0,
        )
        .to(img, { scale: 1.2, duration: 0.5, ease: "power1.inOut" }, 0.5);
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-primary-container selection:text-on-primary-container relative snap-y snap-mandatory min-h-screen"
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
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }

         @property --page-rotate { syntax: "<angle>"; inherits: true; initial-value: 0deg; }
         @property --spine-shift { syntax: "<length>"; inherits: true; initial-value: 0px; }

         .hero-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: white;
          z-index: 100;
        }


        /* ------------------- SIGNATURE CHAPTERS (SNAPPING) ------------------- */
        .snap-section {
          height: 100vh;
          width: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          position: relative;
          overflow: hidden;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          will-change: transform;
        }

        .content-outer {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
          align-items: center;
        }

        .image-wrapper {
          grid-column: 1 / span 12;
          height: 60vh;
          border-radius: 3rem;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 100px -20px rgba(48, 43, 39, 0.2);
        }

        @media (min-width: 1024px) {
          .image-wrapper { grid-column: 2 / span 7; height: 75vh; }
          .text-reveal { grid-column: 9 / span 4; text-align: left; }
        }

        .indicator-nav {
          position: fixed;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 200;
        }
        .indicator-dot { width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--color-on-surface); transition: all 0.5s ease; cursor: pointer; }
        .indicator-dot.active { background-color: var(--color-primary); border-color: var(--color-primary); height: 30px; border-radius: 5px; }

        .portfolio-label {
          position: absolute;
          top: 10%;
          left: 5vw;
          font-family: "Outfit", sans-serif;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 800;
          opacity: 0.1;
          color: var(--color-on-surface);
          pointer-events: none;
        }
      `}</style>

       {/* ------------------- SECTION 0: BOOK GALLERY ------------------- */}
       <section className="snap-section !h-screen !min-h-screen">
         <BookGallery />
       </section>

       {/* ------------------- SECTION 1: SHUFFLE HERO (NORMAL SCROLL) ------------------- */}
       <section className="hero-section snap-section">
         <ShuffleHero />
       </section>

      {/* ------------------- SECTION 2: SNAPPING CHAPTERS (LOCALIZED SNAPPING) ------------------- */}
      <nav className="indicator-nav hidden md:flex">
        {chapters.map((_, i) => (
          <div
            key={i}
            className={`indicator-dot ${activeSection === i ? "active" : ""}`}
            onClick={() =>
              document
                .getElementById(chapters[i].id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        ))}
      </nav>

      <main className="w-full relative z-10">
        <div className="portfolio-label">Signature Chapters</div>
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="snap-section chapter-snap-section">
            <div className="content-outer">
              <div className="image-wrapper border border-on-surface/10">
                <img
                  src={chapter.img}
                  alt={chapter.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--color-primary-container) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary-container) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                <div className="absolute top-12 left-12">
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm mb-6">
                      <Sparkles size={16} />
                      <span className="font-bold uppercase tracking-widest text-[10px]">
                        The Lookbook
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-reveal col-span-12 lg:col-start-9 lg:col-span-4 self-center lg:self-end pb-12">
                <h3 className="text-slate-900/40 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 font-black">
                  {chapter.subtitle}
                </h3>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] uppercase italic font-serif text-slate-900">
                  {chapter.title}
                </h2>
                <div className="h-1 w-20 bg-primary mb-8" />
                <p className="text-xl md:text-2xl italic opacity-70 leading-relaxed max-w-[15ch] lg:max-w-none text-slate-900">
                  {chapter.text}
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* ------------------- FINAL FOOTER (SNAPPING) ------------------- */}
      <footer className="snap-section flex flex-col items-center justify-center p-8 bg-white/30">
        <Heart size={64} className="text-primary mb-8 animate-pulse" />
        <h2 className="text-5xl md:text-7xl font-black italic uppercase font-serif mb-12 text-center text-slate-900">
          End of <br />
          Reflections
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-premium-gold px-16 group"
        >
          Restart Journey
        </motion.button>
      </footer>
    </div>
  );
};

export default Gallery;
