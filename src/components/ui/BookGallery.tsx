import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Asset Imports
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";
import nailImage from "../../assets/nail_art.png";
import interiorImage from "../../assets/salon_interior_luxury.png";
import logoImage from "../../assets/zentonsz.png";

const BookGallery: React.FC = () => {
  const [openPage, setOpenPage] = useState<number | null>(null);

  const flippingPages = [
    { id: 1, front: interiorImage, back: bridalImage },
    { id: 2, front: hairImage, back: skinImage },
    { id: 3, front: spaImage, back: makeupImage },
    { id: 4, front: nailImage, back: logoImage },
  ];

  const handlePageClick = (index: number) => {
    if (openPage === index) {
      setOpenPage(index - 1 >= 0 ? index - 1 : null);
    } else {
      setOpenPage(index);
    }
  };

  const handleBackgroundClick = () => {
    setOpenPage(null);
  };

  const handleReset = async () => {
    if (openPage === null) return;
    let current: number | null = openPage;
    while (current !== null) {
      const next: number | null = current === 0 ? null : current - 1;
      setOpenPage(next);
      current = next;
      await new Promise(r => setTimeout(r, 450));
    }
  };

  const isAnyPageOpen = openPage !== null;
  const text = "BOOK GALLERY";

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden"
      onClick={handleBackgroundClick}
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-10">
        <h1 className="text-[10vw] font-black text-black leading-none whitespace-nowrap uppercase tracking-tighter mix-blend-multiply flex gap-2">
          {text.split("").map((char, i) => (
            <motion.span 
              key={i}
              whileHover={char === "A" ? { scale: 1.2, color: "#735c00" } : {}}
              onClick={(e) => {
                if (char === "A") {
                  e.stopPropagation();
                  handleReset();
                }
              }}
              className={char === "A" ? "cursor-pointer pointer-events-auto" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* 3D Book Container */}
      <motion.div 
        layout
        className="relative perspective-2000 preserve-3d z-30"
        style={{ height: "280px" }}
        animate={{ 
          width: isAnyPageOpen ? "400px" : "200px",
          x: isAnyPageOpen ? 0 : 100 
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full preserve-3d shadow-2xl">
          
          {/* Static Back Plate (Right side endpoint) */}
          <div className="absolute top-0 right-0 w-[200px] h-full bg-linear-to-r from-surface to-surface-dim border-r border-black/5 shadow-inner overflow-hidden flex flex-col items-center justify-center p-8 text-center bg-white">
             <div className="absolute inset-0 opacity-5" 
                  style={{ backgroundImage: `url(${interiorImage})`, backgroundSize: 'cover' }} />
             <div className="relative z-10">
               <div className="w-10 h-0.5 bg-primary/20 mb-4 mx-auto" />
               <p className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase mb-1">Finest Reflections</p>
               <p className="text-[6px] italic text-slate-400">By Zentonsz</p>
             </div>
             <div className="absolute inset-0 bg-linear-to-l from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Flipping Pages */}
          {flippingPages.map((page, index) => {
            const isFlipped = openPage !== null && index <= openPage;
            const zIndex = isFlipped ? index + 1 : flippingPages.length - index + 1;

            return (
              <motion.div
                key={page.id}
                className="absolute top-0 right-0 w-[200px] h-full origin-left preserve-3d cursor-pointer"
                style={{ zIndex }}
                initial={false}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handlePageClick(index)}
              >
                {/* Front of Page */}
                <div 
                  className="absolute inset-0 backface-hidden bg-white border-l border-black/5 shadow-[5px_0_15px_rgba(0,0,0,0.1)] overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${page.front})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Back of Page */}
                <div 
                  className={cn(
                    "absolute inset-0 backface-hidden bg-white border-r border-black/5 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] overflow-hidden",
                    page.id === 4 ? "bg-contain bg-center bg-no-repeat p-8 bg-white" : "bg-cover bg-center"
                  )}
                  style={{ 
                    transform: "rotateY(180deg)",
                    backgroundImage: `url(${page.back})`
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-l from-black/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}

          {/* Book Spine Shadow */}
          {isAnyPageOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-0 left-0 w-4 h-full bg-linear-to-r from-black/10 via-transparent to-black/10 -translate-x-1/2 z-50 pointer-events-none" 
            />
          )}
        </div>
      </motion.div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
};

export default BookGallery;
