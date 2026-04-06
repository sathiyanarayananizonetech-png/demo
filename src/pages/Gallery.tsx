import React from "react";
import GalleryBookHero from "../components/Gallery/GalleryBookHero";
import GalleryShuffleHero from "../components/Gallery/GalleryShuffleHero";
import GalleryChapters from "../components/Gallery/GalleryChapters";
import GalleryFooter from "../components/Gallery/GalleryFooter";

const Gallery: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-white text-slate-900 font-sans relative min-h-screen">
      {/* Dust overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-9999"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/white-dust-scratches-black-background_279525-2.jpg?w=640")',
          backgroundRepeat: "repeat",
        }}
      />

      <GalleryBookHero />
      <GalleryShuffleHero />
      <GalleryChapters />
      <GalleryFooter />
    </div>
  );
};

export default Gallery;
