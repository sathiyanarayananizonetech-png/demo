import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

// Asset Imports
import bridalImage from "../../assets/bridal_makeup.png";
import hairImage from "../../assets/hair_styling.png";
import skinImage from "../../assets/skin_care.png";
import spaImage from "../../assets/spa_treatment.png";
import makeupImage from "../../assets/makeup_artist.png";
import nailImage from "../../assets/nail_art.png";
import interiorImage from "../../assets/salon_interior_luxury.png";
import vesselImage from "../../assets/luxury_salon_vessel.png";
import heroImage from "../../assets/hero_salon.png";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 pt-20 pb-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="block mb-6 text-xs md:text-sm text-primary font-black uppercase tracking-[0.4em] font-sans">
          The Art of Precision
        </span>
        <h3 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] mb-10 uppercase tracking-tighter italic font-serif">
          The <span className="text-primary">Studio</span> <br /> 
          Collection
        </h3>
        <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed mb-12 max-w-xl">
          "A curated symphony of style, where every frame tells a story of transformation and timeless elegance."
        </p>
        <button 
          onClick={() => document.getElementById('bridal')?.scrollIntoView({ behavior: 'smooth' })}
          className={cn(
            "btn-premium-gold px-14 py-5 text-sm shadow-2xl shadow-primary/20 hover:shadow-primary/40",
            "transition-all duration-500 transform hover:-translate-y-1"
          )}
        >
          Explore Masterpieces
        </button>
      </motion.div>
      <div className="relative">
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
};

const squareData = [
  { id: 1, src: bridalImage }, { id: 2, src: hairImage }, { id: 3, src: skinImage },
  { id: 4, src: spaImage }, { id: 5, src: makeupImage }, { id: 6, src: nailImage },
  { id: 7, src: interiorImage }, { id: 8, src: vesselImage }, { id: 9, src: heroImage },
];

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [items, setItems] = useState(squareData);

  useEffect(() => {
    const shuffleItems = () => {
      setItems(prev => shuffle(prev));
      timeoutRef.current = setTimeout(shuffleItems, 4000);
    };
    
    timeoutRef.current = setTimeout(shuffleItems, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 w-full max-w-[600px] mx-auto">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          transition={{ 
            duration: 2, 
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 70,
            damping: 20
          }}
          className="aspect-square relative group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl border border-white/20">
             <motion.div 
               className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               style={{ backgroundImage: `url(${item.src})` }}
             />
             <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
