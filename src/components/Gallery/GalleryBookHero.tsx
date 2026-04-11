import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparkleHeading } from "../ui/SparkleHeading";
import BookGallery from "../ui/BookGallery";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const GalleryBookHero: React.FC = () => {
  useEffect(() => {
    const bookHero = document.querySelector(".book-hero-section");
    const bookScaleContainer = document.querySelector(".galeria-book-3d");
    const pages = gsap.utils.toArray<HTMLElement>(".book-page");

    if (bookHero && bookScaleContainer && pages.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bookHero,
          start: "top top",
          end: "+=400%", // Cinematic experience
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Step 1: Scale up the book, shift spine, and fade out text
      tl.to(bookScaleContainer, {
        "--book-scale": 1.2,
        "--spine-shift": "140px",
        duration: 2,
        ease: "power2.inOut",
      });

      tl.to(
        ".book-text-overlay",
        {
          opacity: 0,
          y: -30,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Step 2: Flip pages sequentially
      pages.forEach((page, i) => {
        tl.to(
          page,
          {
            "--page-rotate": "-180deg",
            duration: 1.5,
            ease: "power1.inOut",
            onStart: () => {
              gsap.set(page, { zIndex: 20 + i });
            },
            onReverseComplete: () => {
              gsap.set(page, { zIndex: 10 - i });
            },
          },
          "-=0.2",
        );
      });

      // Final pause
      tl.to({}, { duration: 1 });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="snap-section book-hero-section min-h-svh! relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 sm:pt-32 px-4 text-center z-20 pointer-events-none book-text-overlay">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glow-text"
        >
          <h1 className="text-display font-pacifico text-slate-900 mb-4 sm:mb-6 normal-case glow-text mt-8 sm:mt-12">
            <SparkleHeading text="The Signature" className="text-slate-900" />
            <br />
            <SparkleHeading
              text="Lookbook"
              className="text-primary"
              sparkleScale={1.3}
            />
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-600/80 leading-relaxed max-w-2xl mx-auto">
            "A curated journey through the art of transformation, from our
            master stylists to your personal reflection."
          </p>
        </motion.div>
      </div>
      <BookGallery />
    </section>
  );
};

export default GalleryBookHero;
