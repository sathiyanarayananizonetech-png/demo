import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Scissors, Heart, Droplets, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesArch.css";

// Assets
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";
import nailImage from "../../assets/nail_art.png";

gsap.registerPlugin(ScrollTrigger);

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
    icon: <Sparkles size={22} />,
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
    icon: <Scissors size={22} />,
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
    icon: <Heart size={22} />,
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
    icon: <Droplets size={22} />,
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
    icon: <Sparkles size={22} />,
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
    icon: <Star size={22} />,
    popular: false,
  },
];

const ServicesArch: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgColors = [
      "#F4F1EC",
      "#E8E4DD",
      "#F4F1EC",
      "#E8E4DD",
      "#F4F1EC",
      "#E8E4DD",
    ];

    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(
        ".services-img-wrapper img",
      );

      // MatchMedia for Desktop Pinned Animation
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current, // STABLE REF TRIGGER
            start: "top top",
            end: "bottom bottom",
            pin: rightColRef.current, // STABLE REF PIN
            scrub: 1,
            anticipatePin: 1,
          },
        });

        gsap.set(imgs, { opacity: 0, scale: 1.1, objectPosition: "0px 0%" });
        gsap.set(imgs[0], { opacity: 1, scale: 1 });

        imgs.forEach((img, index) => {
          const nextImage = imgs[index + 1] as HTMLImageElement;
          if (nextImage) {
            const sectionTimeline = gsap.timeline();
            sectionTimeline
              .to(
                document.body,
                {
                  backgroundColor: bgColors[index % bgColors.length],
                  duration: 1.2,
                  ease: "power1.inOut",
                },
                0,
              )
              .to(
                img,
                {
                  opacity: 0,
                  scale: 0.9,
                  objectPosition: "0px 60%",
                  duration: 1.5,
                  ease: "power1.inOut",
                },
                0,
              )
              .to(
                nextImage,
                {
                  opacity: 1,
                  scale: 1,
                  objectPosition: "0px 40%",
                  duration: 1.5,
                  ease: "power1.inOut",
                },
                0,
              );
            mainTimeline.add(sectionTimeline);
          }
        });
      });

      mm.add("(max-width: 768px)", () => {
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
            .to(document.body, {
              backgroundColor: bgColors[index % bgColors.length],
              duration: 1.5,
              ease: "power2.inOut",
            });
        });

        const leftItems = gsap.utils.toArray<HTMLElement>(
          ".services-arch__info",
        );
        const rightItems = gsap.utils.toArray<HTMLElement>(
          ".services-img-wrapper",
        );
        leftItems.forEach((item, i) => (item.style.order = (i * 2).toString()));
        rightItems.forEach(
          (item, i) => (item.style.order = (i * 2 + 1).toString()),
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="services-arch" ref={containerRef}>
      <div className="services-arch__left">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="services-arch__info"
            id={`info-${i}`}
          >
            <div className="max-w-md w-full">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 bg-primary text-white rounded-xl sm:rounded-2xl shadow-xl shadow-primary/20">
                  {service.icon}
                </div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">
                  {service.category}
                </span>
              </div>
              <h2 className="text-section-title font-black text-on-surface leading-none mb-4 sm:mb-6 uppercase italic font-serif">
                {service.title}
              </h2>
              <p className="text-on-surface/80 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-semibold">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-end">
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Starting From
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-on-surface italic font-serif leading-none">
                    {service.price}
                  </span>
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold px-8 sm:px-12 py-3"
                  >
                    Book Ritual
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-arch__right" ref={rightColRef}>
        {services.map((service, i) => (
          <div
            key={service.id}
            className="services-img-wrapper"
            style={{ zIndex: services.length - i }}
          >
            <img
              src={service.image}
              alt={service.title}
              loading={i < 2 ? "eager" : "lazy"}
              className="opacity-95 contrast-[1.05]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesArch;
