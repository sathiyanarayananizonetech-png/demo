import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Scissors, Sparkles, Heart, Star, Quote, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

// Asset Imports
import heroImage from "../assets/hero_salon.png";
import bridalImage from "../assets/bridal_makeup.png";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import makeupImage from "../assets/makeup_artist.png";
import nailImage from "../assets/nail_art.png";
import interiorImage from "../assets/salon_interior_luxury.png";
import VoyageSlider from "../components/VoyageSlider/VoyageSlider";
import { ScrollParallaxCard } from "../components/ScrollParallaxCard/ScrollParallaxCard";
import { ParallaxArrow } from "../components/ScrollParallaxCard/ParallaxArrow";

const carouselImages = [
  heroImage,
  bridalImage,
  hairImage,
  skinImage,
  spaImage,
  makeupImage,
  nailImage,
  interiorImage,
];

/* -------------------------------------------------------------------------- */
/*                                Scroll Reveal Hook Component                 */
/* -------------------------------------------------------------------------- */

const ScrollReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay, ease: "easeOut" },
        },
      }}
      initial="hidden"
      animate={controls}
      className=""
    >
      {children}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                Main Home Page Component                     */
/* -------------------------------------------------------------------------- */

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length,
      );
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Hair Styling",
      description:
        "Trendy cuts, vibrant coloring, and elegant styling. Transform your look with our expert hair specialists.",
      image: hairImage,
      icon: <Scissors size={24} />,
      buttonClass: "btn-premium-gold",
    },
    {
      title: "Premium Facials",
      description:
        "Rejuvenating skin care therapies that bring out your natural, radiant glow using top-tier products.",
      image: skinImage,
      icon: <Droplets size={24} />,
      buttonClass: "btn-premium-gold",
    },
    {
      title: "Bridal Makeover",
      description:
        "Exquisite bridal transformations tailored to make you look absolutely flawless on your dream day.",
      image: bridalImage,
      icon: <Heart size={24} />,
      buttonClass: "btn-premium-gold",
    },
    {
      title: "Spa Therapies",
      description:
        "Melt away your stress in our serene ambiance with a variety of luxurious relaxation treatments.",
      image: spaImage,
      icon: <Sparkles size={24} />,
      buttonClass: "btn-premium-gold",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* ------------------------------- HERO SECTION ------------------------------- */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background border-b border-primary-container/20">
        {/* Parallax Background Shapes */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_70%)] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(115,92,0,0.1),transparent_70%)] rounded-full" />
        </div>

        {/* Floating Icons (Framer Motion) */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-32 left-[10%] text-primary opacity-60"
        >
          <Sparkles size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-40 right-[15%] text-tertiary opacity-60"
        >
          <Heart size={56} />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left pt-32 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface-dim backdrop-blur-md border border-primary-container/30 shadow-sm mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-[10px]">
                Premium Parlour & Spa
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-on-surface leading-[0.9] mb-6 uppercase tracking-tighter italic font-serif">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary py-2">
                Radiance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface/80 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 italic">
              "Transform your look and uplift your spirit. Experience
              personalized beauty treatments crafted with precision, luxury, and
              care."
            </p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold"
                >
                  Book Your Session
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-dark"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image / 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <div
              style={{ transform: "scale(1.05)" }}
              className="relative z-10 w-full aspect-square max-w-lg mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center p-4 bg-surface"
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt={`Salon Hero ${currentImageIndex}`}
                  fetchPriority="high"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]"
                />
              </AnimatePresence>
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------- SERVICES CARDS SECTION ------------------------------- */}
      <section className="py-32 relative bg-background">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] rounded-full" />
          <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,217,204,0.3),transparent_70%)] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase tracking-tighter italic font-serif">
                Signature <span className="text-primary">Experiences</span>
              </h2>
              <p className="text-lg text-on-surface/70 max-w-2xl mx-auto font-medium leading-relaxed">
                Indulge in our carefully curated selection of premium beauty
                services designed to elevate your natural charm.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <VoyageSlider slides={services} />
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-20 text-center">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold"
                >
                  View All Treatments
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------- ABOUT PREVIEW SECTION ------------------------------- */}
      <section className="py-32 relative bg-surface-dim overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* 3D Image Preview */}
            <ScrollReveal>
              <div
                className="relative perspective-1000 group"
                style={{ perspective: "1500px" }}
              >
                <motion.div
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img
                    src={interiorImage}
                    alt="Salon Luxury Interior"
                    loading="lazy"
                    className="w-full aspect-4/5 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />

                  {/* Floating Stat Card */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-10 -right-6 bg-surface/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-xl text-white shadow-lg shadow-primary/20">
                        <Star size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-on-surface">
                          12+ Years
                        </div>
                        <div className="text-sm text-on-surface/60 font-bold tracking-widest uppercase">
                          Excellence
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Background decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/30 rounded-full blur-3xl -z-1" />
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-container/20 text-primary border border-primary-container/30 shadow-sm mb-2">
                  <Heart size={16} />
                  <span className="font-bold uppercase tracking-widest text-[10px]/[1.5]">
                    Our Heritage
                  </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-on-surface leading-[0.9] uppercase tracking-tighter italic font-serif">
                  Elegance Tailored <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-tertiary">
                    For You
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-on-surface/80 font-medium leading-relaxed italic">
                  "Established in the heart of Trichy, Zentonsz Beauty Parlour
                  has been a sanctuary for those seeking a touch of luxury and
                  professional care for over a decade."
                </p>

                <div className="space-y-4">
                  {[
                    "Certified Aesthetic Professionals",
                    "Premium International Brands",
                    "State-of-the-Art Luxury Ambience",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-on-surface/90 font-bold text-sm uppercase tracking-widest"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium-gold px-8 py-4 text-sm"
                    >
                      Discover Our Story
                    </motion.button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- COMPREHENSIVE SERVICES SHOWCASE ------------------------------- */}
      <section className="py-32 relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-container/10 text-primary border border-primary-container/20 shadow-sm mb-4">
                <Sparkles size={16} />
                <span className="font-bold uppercase tracking-widest text-[10px]">
                  Our Full Portfolio
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-on-surface mb-6 uppercase tracking-tighter italic font-serif">
                Everything You Need to <br className="hidden md:block" />
                <span className="text-primary">Shine Brighter</span>
              </h2>
              <p className="text-lg text-on-surface/60 max-w-2xl mx-auto font-medium">
                Explore our comprehensive collection of beauty therapies. From
                bridal masterpieces to routine pampering.
              </p>
            </div>
          </ScrollReveal>

          <div className="scroll-parallax-section">
            <h1 className="parallax-page__title">#EXPLORE</h1>
            <ParallaxArrow />

            <div className="parallax-content parallax-content--alternate parallax-content--padded">
              <ScrollParallaxCard
                index={0}
                title="Bridal Makeup"
                description="Exquisite bridal transformations tailored to your style and personality. We make your special day truly unforgettable."
                image={bridalImage}
                price="₹5000"
              />
              <ScrollParallaxCard
                index={1}
                title="Hair Styling"
                description="From trendy cuts to elegant updos, our expert stylists bring out the best in your hair with premium products."
                image={hairImage}
                price="₹800"
              />
              <ScrollParallaxCard
                index={2}
                title="Skin Care"
                description="Revitalize your glow with our customized facials and skin treatments designed for your unique skin type."
                image={skinImage}
                price="₹1200"
              />
              <ScrollParallaxCard
                index={3}
                title="Nail Art Studio"
                description="Express your elegance with intricate nail art, manicures, and extensions executed by our meticulous specialists."
                image={nailImage}
                price="₹1500"
              />
            </div>
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-16 text-center">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-8 py-4"
                >
                  View Detailed Service Menu
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------- GLASSMORPHISM PROMO SECTION ------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-primary-container/20">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="bg-surface/60 backdrop-blur-2xl border border-white rounded-[3rem] p-10 md:p-16 shadow-2xl text-center relative overflow-hidden">
              <Quote
                size={48}
                className="text-primary opacity-20 mx-auto mb-6 relative z-10"
              />

              <h3 className="text-3xl md:text-6xl font-black text-on-surface mb-6 uppercase tracking-tighter italic font-serif relative z-10">
                "Elegance is the beauty <br className="hidden md:block" /> that
                never fades."
              </h3>
              <p className="text-on-surface/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 relative z-10">
                Step into a world of relaxation and luxury. Let our experts
                craft the perfect look that reflects your true essence.
              </p>
              <div className="relative z-10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium-gold"
                  >
                    Start Your Journey Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
