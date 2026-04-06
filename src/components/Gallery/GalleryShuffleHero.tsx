import React from "react";
import { ShuffleHero } from "../ui/ShuffleHero";
import "./Gallery.css";

const GalleryShuffleHero: React.FC = () => {
  return (
    <section className="hero-section snap-section">
      <ShuffleHero />
    </section>
  );
};

export default GalleryShuffleHero;
