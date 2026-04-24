import React from 'react';
import { motion } from 'framer-motion';
import ClippedShapeGallery from '../ui/clipped-shape-image';

// Import assets from specified directories
import bridal1 from "../../assets/bridalwebpimages/bridal1.webp";
import facial1 from "../../assets/facialwebpimages/facial1.webp";
import facial2 from "../../assets/facialwebpimages/facial2.webp";
import hairspa1 from "../../assets/hairspawebpimages/hairspa1.webp";
import hairspa2 from "../../assets/hairspawebpimages/hairspa2.webp";
import manicure1 from "../../assets/pedicurewebpimages/manicure1.webp";
import nail1 from "../../assets/nailwebpimages/nail1.webp";
import nail2 from "../../assets/nailwebpimages/nail2.webp";
import butterfly from "../../assets/hairwebp images/butterfly cut.webp";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  clipId: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: bridal1, alt: "Eternal Bridal", clipId: "clip-squiggle" },
  { id: 2, src: facial1, alt: "Skin Alchemy", clipId: "clip-rect" },
  { id: 3, src: facial2, alt: "Facial Rituals", clipId: "clip-another" },
  { id: 4, src: hairspa1, alt: "Luxe Hair Care", clipId: "clip-squiggle" },
  { id: 5, src: hairspa2, alt: "Scalp Therapy", clipId: "clip-rect" },
  { id: 6, src: manicure1, alt: "Artistic Hands", clipId: "clip-another" },
  { id: 7, src: nail1, alt: "Couture Nails", clipId: "clip-squiggle" },
  { id: 8, src: nail2, alt: "Precision Detail", clipId: "clip-rect" },
  { id: 9, src: butterfly, alt: "Signature Cut", clipId: "clip-another" },
];

const ClippedMediaGallery: React.FC = () => {
  const mediaItems = galleryItems.map((item, index) => ({
    src: item.src,
    alt: item.alt,
    type: 'image' as const,
    clipId: (`clip-another${(index % 3) + 1}`) as 'clip-another1' | 'clip-another2' | 'clip-another3'
  }));

  return (
    <section 
      id="gallery-section" 
      className="py-32 bg-white dark:bg-slate-950 overflow-hidden relative z-10"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-4 block">The Gallery</span>
          <h2 className="text-5xl md:text-6xl font-pacifico text-slate-900 dark:text-white mb-6">
            Curated Masterpieces
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            A visual symphony of our finest transformations, capturing the essence of artisanal beauty.
          </p>
        </motion.div>

        {/* The New Clipped Shape Gallery */}
        <ClippedShapeGallery 
          mediaItems={mediaItems} 
          className="border-none p-0 bg-transparent dark:bg-transparent"
        />
      </div>

      {/* Subtle Background Parallax Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-primary blur-[120px] rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-primary blur-[120px] rounded-full"
        />
      </div>

      <style>{`
        #gallery-section .shadow-soft {
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
        }
        
        #gallery-section .group:hover .shadow-soft {
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default ClippedMediaGallery;
