import React from "react";
import { Sparkles } from "lucide-react";
import "./Gallery.css";

// Assets
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";

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

const GalleryChapters: React.FC = () => {
  return (
    <main className="w-full relative z-10">
      <div className="portfolio-label">Signature Chapters</div>
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="snap-section chapter-snap-section"
        >
          <div className="gallery-content-outer">
            <div className="gallery-image-wrapper">
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
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute top-6 sm:top-12 left-6 sm:left-12">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm">
                  <Sparkles size={12} />
                  <span className="font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">
                    The Lookbook
                  </span>
                </div>
              </div>
            </div>

            <div className="gallery-text-reveal col-span-12 lg:col-start-9 lg:col-span-4 self-center lg:self-end lg:pb-12">
              <h3 className="text-slate-900/40 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-3 sm:mb-4 font-black">
                {chapter.subtitle}
              </h3>
              <h2 className="text-display font-black mb-5 sm:mb-8 leading-[0.9] uppercase italic font-serif text-slate-900">
                {chapter.title}
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-primary mb-5 sm:mb-8" />
              <p className="text-base sm:text-xl md:text-2xl italic opacity-70 leading-relaxed text-slate-900">
                {chapter.text}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default GalleryChapters;
