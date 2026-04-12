import React from "react";
import { Sparkles } from "lucide-react";
import "./Gallery.css";

// Assets
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/hair_spa_treatment.png";
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
    id: "hair-spa",
    title: "Hair Spa Sanctuary",
    subtitle: "Stillness in Movement",
    img: spaImage,
    text: "Experience deep relaxation through our hair rituals, designed to nourish both your hair and soul with tender care.",
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
      <div className="portfolio-label translate-y-4 tb:translate-y-0">Signature Chapters</div>
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="snap-section chapter-snap-section py-10 tb:py-0"
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
              <div className="absolute top-6 tb:top-12 left-6 tb:left-12">
                <div className="inline-flex items-center gap-2 px-3 tb:px-4 py-1.5 tb:py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm">
                  <Sparkles size={12} />
                  <span className="font-bold uppercase tracking-widest text-[8px] tb:text-[10px]">
                    The Lookbook
                  </span>
                </div>
              </div>
            </div>

            <div className="gallery-text-reveal pb-12 tb:pb-20">
              <h3 className="text-slate-900/40 font-mono text-[9px] tb:text-[10px] uppercase tracking-[0.4em] tb:tracking-[0.5em] mb-3 tb:mb-4 font-black">
                {chapter.subtitle}
              </h3>
              <h2 className="text-4xl tb:text-5xl dt:text-6xl xl:text-7xl font-black mb-5 tb:mb-8 leading-[0.9] uppercase italic font-serif text-slate-900">
                {chapter.title}
              </h2>
              <div className="h-1 w-16 tb:w-20 bg-primary mb-5 tb:mb-8 mx-auto" />
              <p className="text-base tb:text-xl dt:text-2xl italic opacity-70 leading-relaxed text-slate-900 px-4 mb:px-0">
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
