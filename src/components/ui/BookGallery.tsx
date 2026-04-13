import React from "react";

// Asset Imports
import interiorImg from "../../assets/salon_interior_luxury.png";
import heroImg from "../../assets/hero_salon.png";
import hairImg from "../../assets/hair_styling.png";
import makeupImg from "../../assets/makeup_artist.png";
import bridalImg from "../../assets/bridal_makeup.png";
import bridal2Img from "../../assets/bridal makeup2.png";
import skinImg from "../../assets/skin_care.png";
import spaImg from "../../assets/hair_spa_treatment.png";
import nailImg from "../../assets/nail_art.png";
import vesselImg from "../../assets/luxury_salon_vessel.png";
import logoImg from "../../assets/zentonez.png";

const BookGallery: React.FC = () => {
  const pages = [
    { front: heroImg, back: interiorImg },
    { front: hairImg, back: makeupImg },
    { front: bridalImg, back: bridal2Img },
    { front: skinImg, back: spaImg },
    { front: nailImg, back: vesselImg },
    { front: heroImg, back: logoImg }, // Final branded page
  ];

  return (
    <div className="book-gallery-container w-full h-full relative flex items-center justify-center overflow-hidden">
      <style>{`
        .scene {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }


        .galeria-book-3d {
          position: relative;
          width: 200px;
          height: 300px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          /* Removed spine-shift variable, GSAP will use x */
        }

        .book-page {
          position: absolute;
          width: 200px;
          height: 300px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: left center;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          /* No transition here, let GSAP control it */
        }

        .book-page img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          background: #fdfcfb;
          backface-visibility: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .book-page img:nth-child(2) {
          transform: rotateY(180deg) translateZ(1px);
          z-index: 1;
        }


        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .galeria-book-3d, .book-page {
            width: 140px !important;
            height: 210px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .galeria-book-3d, .book-page {
            width: 280px !important;
            height: 420px !important;
          }
        }

        @media (min-width: 1024px) {
          .galeria-book-3d, .book-page {
            width: 340px !important;
            height: 480px !important;
          }
        }
      `}</style>

      <div className="scene w-full h-full flex items-center justify-center">
        <div className="galeria-book-3d">
          {pages.map((page, index) => (
            <div
              key={index}
              className="book-page"
              data-index={index}
              style={
                {
                  "--i": index,
                  zIndex: 10 - index,
                } as React.CSSProperties
              }
            >
              <img src={page.front} alt={`Front ${index + 1}`} />
              <img src={page.back} alt={`Back ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookGallery;
