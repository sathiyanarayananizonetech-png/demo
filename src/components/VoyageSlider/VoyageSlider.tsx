import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./VoyageSlider.css";

interface SlideData {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  buttonClass?: string;
}

interface VoyageSliderProps {
  slides: SlideData[];
}

const VoyageSlider: React.FC<VoyageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotDeg = useRef({ current: { x: 0, y: 0 }, target: { x: 0, y: 0 } });
  const bgPos = useRef({ current: { x: 0, y: 0 }, target: { x: 0, y: 0 } });
  const rafId = useRef<number | null>(null);

  const totalSlides = slides.length;

  const getSlideIndex = useCallback((index: number) => {
    return (index + totalSlides) % totalSlides;
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => getSlideIndex(prev + 1));
  }, [getSlideIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => getSlideIndex(prev - 1));
  }, [getSlideIndex]);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const updateTilt = useCallback(() => {
    const lerpAmount = 0.06;
    
    rotDeg.current.current.x = lerp(rotDeg.current.current.x, rotDeg.current.target.x, lerpAmount);
    rotDeg.current.current.y = lerp(rotDeg.current.current.y, rotDeg.current.target.y, lerpAmount);
    
    bgPos.current.current.x = lerp(bgPos.current.current.x, bgPos.current.target.x, lerpAmount);
    bgPos.current.current.y = lerp(bgPos.current.current.y, bgPos.current.target.y, lerpAmount);

    const targets = containerRef.current?.querySelectorAll(".voyage-slide__inner, .voyage-slide-info__inner");
    if (targets) {
      targets.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.setProperty("--rotX", rotDeg.current.current.y.toFixed(2) + "deg");
          el.style.setProperty("--rotY", rotDeg.current.current.x.toFixed(2) + "deg");
          el.style.setProperty("--bgPosX", bgPos.current.current.x.toFixed(2) + "%");
          el.style.setProperty("--bgPosY", bgPos.current.current.y.toFixed(2) + "%");
        }
      });
    }

    rafId.current = requestAnimationFrame(updateTilt);
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(updateTilt);
    rafId.current = frameId;
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateTilt]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const ox = (offsetX - rect.width * 0.5) / (Math.PI * 15);
    const oy = -(offsetY - rect.height * 0.5) / (Math.PI * 20);

    rotDeg.current.target = { x: ox, y: oy };
    bgPos.current.target = { x: -ox * 0.3, y: oy * 0.3 };
  };

  const handleMouseLeave = () => {
    rotDeg.current.target = { x: 0, y: 0 };
    bgPos.current.target = { x: 0, y: 0 };
  };

  return (
    <div 
      className="voyage-slider-root"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button className="voyage-slider--btn voyage-slider--btn__prev" onClick={prevSlide}>
        <ChevronLeft size={40} stroke="white" />
      </button>

      <div className="voyage-slides__wrapper">
        <div className="voyage-slides">
          {slides.map((slide, i) => {
            const isCurrent = i === currentIndex;
            const isNext = i === getSlideIndex(currentIndex + 1);
            const isPrev = i === getSlideIndex(currentIndex - 1);
            
            let status = "";
            if (isCurrent) status = "current";
            else if (isNext) status = "next";
            else if (isPrev) status = "previous";

            return (
              <React.Fragment key={i}>
                <div 
                  className="voyage-slide" 
                  {...(status ? { [`data-${status}`]: "" } : {})}
                  style={{ zIndex: isCurrent ? 20 : (isNext ? 10 : 30) }}
                >
                  <div className="voyage-slide__inner">
                    <div className="voyage-slide--image__wrapper">
                      <img className="voyage-slide--image" src={slide.image} alt={slide.title} />
                    </div>
                  </div>
                </div>
                <div 
                  className="voyage-slide__bg" 
                  style={{ "--bg": `url(${slide.image})` } as React.CSSProperties} 
                  {...(status ? { [`data-${status}`]: "" } : {})}
                ></div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="voyage-slides--infos">
          {slides.map((slide, i) => {
            const isCurrent = i === currentIndex;
            const isNext = i === getSlideIndex(currentIndex + 1);
            const isPrev = i === getSlideIndex(currentIndex - 1);
            
            let status = "";
            if (isCurrent) status = "current";
            else if (isNext) status = "next";
            else if (isPrev) status = "previous";

            return (
              <div 
                key={i} 
                className="voyage-slide-info" 
                {...(status ? { [`data-${status}`]: "" } : {})}
              >
                <div className="voyage-slide-info__inner">
                  <div className="voyage-slide-info--text__wrapper">
                    <div className="voyage-slide-info--icon">
                      {slide.icon}
                    </div>
                    <div data-title className="voyage-slide-info--text">
                      <span>{slide.title}</span>
                    </div>
                    <div data-description className="voyage-slide-info--text">
                      <span>{slide.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="voyage-slider--btn voyage-slider--btn__next" onClick={nextSlide}>
        <ChevronRight size={40} stroke="white" />
      </button>
    </div>
  );
};

export default VoyageSlider;
