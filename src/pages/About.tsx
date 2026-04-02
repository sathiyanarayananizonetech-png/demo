import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Award,
  ShieldCheck,
  Clock,
  Quote,
  Users,
  GraduationCap,
  CalendarDays,
  Wallet,
  Package,
  BookOpen,
  Handshake,
  Scissors,
  Crown,
  Hand,
  Droplets,
  HeartPulse,
} from "lucide-react";
import hairImage from "../assets/hair_styling.png";
import skinImage from "../assets/skin_care.png";
import spaImage from "../assets/spa_treatment.png";
import team1 from "../assets/makeup_artist.png";
import interiorImage from "../assets/salon_interior_luxury.png";
const team2 = hairImage; // reused


const SERVICES_DATA = [
  {
    title: "Hair Styling",
    desc: "Achieve trendy and elegant hairstyles with our expert stylists. We offer precision cuts, styling, and modern looks tailored to your personality and occasion.",
    icon: <Scissors size={28} strokeWidth={1.5} />,
  },
  {
    title: "Facial Treatments",
    desc: "Refresh and rejuvenate your skin with our advanced facial therapies. Our treatments deeply cleanse, hydrate, and restore your natural glow.",
    icon: <Sparkles size={28} strokeWidth={1.5} />,
  },
  {
    title: "Bridal Makeup",
    desc: "Look stunning on your special day with our professional bridal makeup services. We create flawless, long-lasting looks that enhance your natural beauty.",
    icon: <Crown size={28} strokeWidth={1.5} />,
  },
  {
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with our relaxing nail care services. Enjoy cleaning, shaping, polishing, and a soothing experience.",
    icon: <Hand size={28} strokeWidth={1.5} />,
  },
  {
    title: "Hair Spa",
    desc: "Revitalize your hair with nourishing spa treatments designed to repair damage. Get smooth, shiny, and healthy-looking hair with deep conditioning care.",
    icon: <Droplets size={28} strokeWidth={1.5} />,
  },
  {
    title: "Skin Care",
    desc: "Maintain radiant and healthy skin with our personalized skincare solutions. We target your skin concerns and enhance your natural glow.",
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
  },
];

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="group relative bg-primary-container/20 p-6 pt-12 rounded-2xl text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-surface border-2 border-primary-container rounded-full flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-105 group-hover:border-primary">
      <div className="text-secondary transition-colors duration-500 group-hover:text-primary flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-on-surface/60 text-sm leading-relaxed mb-4">
      {desc}
    </p>
  </div>
);

const TIMELINE_DATA = [
  {
    year: "01",
    title: "Largest Community",
    desc: "The largest B2C beauty community, directly connecting you with professionals.",
    icon: <Users size={24} />,
  },
  {
    year: "02",
    title: "Pocket Friendly",
    desc: "Explore various salons and filter prices to find the perfect fit for your budget.",
    icon: <Wallet size={24} />,
  },
  {
    year: "03",
    title: "Trained Professionals",
    desc: "Entrust your needs to our team of skilled and certified beauty professionals.",
    icon: <GraduationCap size={24} />,
  },
  {
    year: "04",
    title: "Branded Products",
    desc: "Premium products from trusted brands, selected to enhance your experience.",
    icon: <Package size={24} />,
  },
  {
    year: "05",
    title: "100% Hygienic",
    desc: "Stringent cleanliness standards for a worry-free, healthy experience.",
    icon: <ShieldCheck size={24} />,
  },
  {
    year: "06",
    title: "Exclusive Directory",
    desc: "Comprehensive directory of all beauticians, giving you wide access.",
    icon: <BookOpen size={24} />,
  },
  {
    year: "07",
    title: "Convenient Booking",
    desc: "Hassle-free booking with our user-friendly platform from your home.",
    icon: <CalendarDays size={24} />,
  },
  {
    year: "08",
    title: "Community Engagement",
    desc: "Join a vibrant community of beauty enthusiasts, sharing tips and experiences.",
    icon: <Handshake size={24} />,
  },
];

const About: React.FC = () => {
  React.useEffect(() => {
    const items = document.querySelectorAll(".timeline li");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.5 });

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      <style>{`
        .pagination-tabs { transition: 600ms ease-out all; }
        .pagination-tabs.active { width: 200px !important; opacity: 1 !important; }
        @media screen and (min-width: 1400px) {
          .pagination-tabs.active { width: 300px !important; }
        }

        /* TIMELINE STYLES (AS PROVIDED) */
        .timeline-section {
          background: linear-gradient(to bottom, var(--color-background), var(--color-surface-dim));
          color: var(--color-on-surface);
          padding-bottom: 50px;
          overflow-x: hidden;
        }

        .timeline ul li {
          list-style-type: none;
          position: relative;
          width: 6px;
          margin: 0 auto;
          padding-top: 50px;
          background: var(--color-primary-container); /* gold-200ish */
        }

        .timeline ul li::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) rotate(45deg);
          width: 20px;
          height: 20px;
          z-index: 2;
          background: var(--surface-dim);
        }

        .timeline ul li div.item-card {
          position: relative;
          bottom: 0;
          width: 400px;
          padding: 24px;
          background: var(--color-surface);
          box-shadow: 0 10px 40px -10px rgba(115, 92, 0, 0.1);
          border: 1px solid var(--color-primary-container);
          border-radius: 20px;
          display: flex;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }

        .timeline ul li:nth-of-type(odd) div.item-card {
          left: 45px;
          transform: translate3d(100px, -10px, 0) rotate(10deg);
        }

        .timeline ul li:nth-of-type(even) div.item-card {
          left: -439px;
          transform: translate3d(-100px, -10px, 0) rotate(10deg);
        }

        .timeline ul li.in-view div.item-card {
          transform: none;
          visibility: visible;
          opacity: 1;
        }

        .timeline ul li time {
          position: absolute;
          background: var(--color-primary);
          width: 80px;
          height: 30px;
          top: -15px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          letter-spacing: 2px;
          font-weight: bold;
          font-size: 14px;
        }

        .timeline ul li div.item-content {
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .timeline .discovery { margin-right: 10px; flex: 1; }
        .timeline .scientist { flex: 1; text-align: center; }

        .timeline h1 { font-size: 1.2rem; font-weight: bold; margin-bottom: 5px; color: var(--color-primary); }
        .timeline p, .timeline span { font-size: 0.9rem; text-align: center; }

        @media screen and (max-width: 900px) {
          .timeline ul li div.item-card {
            width: 250px;
            flex-direction: column;
          }
          .timeline ul li div.item-card div.item-content {
            width: 80%;
            margin: 10px;
          }
          .timeline ul li:nth-of-type(even) div.item-card {
            left: -289px;
          }
        }

        @media screen and (max-width: 600px) {
          .timeline ul li {
            margin-left: 20px;
          }
          .timeline ul li div.item-card {
            width: calc(100vw - 91px);
          }
          .timeline ul li:nth-of-type(even) div.item-card {
            left: 45px;
          }
        }
      `}</style>

      {/* ------------------------------- PROFESSIONAL HERO SECTION ------------------------------- */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 lg:py-0 overflow-hidden">
        {/* Full background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${interiorImage})` }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 z-1 bg-inverse-surface/60 transition-opacity duration-700 hover:opacity-50" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          <div className="max-w-4xl w-full space-y-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 mx-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                  Premium Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-[1.1] mb-8">
                Where <span className="text-primary-container">Beauty</span> <br className="hidden md:block" />
                Meets Artistry
              </h1>

              <p className="text-lg md:text-xl text-surface-dim font-sans leading-relaxed max-w-2xl mx-auto mb-12 italic">
                Step into a sanctuary of refined elegance, where every treatment is a personalized ritual
                crafted to celebrate your unique essence through professional mastery.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-12"
                >
                  Book Your Ritual
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                >
                  <span className="pb-1 border-b-2 border-white/20 group-hover:border-primary transition-all duration-300">
                    Learn Our Story
                  </span>
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------- STORY SECTION ------------------------------- */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-4/5">
                <img
                  src={spaImage}
                  alt="Our Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-surface-dim rounded-full blur-3xl opacity-60" />
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-surface/80 backdrop-blur-md p-8 rounded-2xl border border-surface shadow-xl rotate-6 max-w-[200px]">
                  <p className="text-3xl font-serif italic text-primary mb-2">"Beauty is an art form."</p>
                  <p className="text-xs font-bold text-on-surface/60 uppercase tracking-widest">— Our Founder</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary-container/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Our Legacy
              </div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-on-surface leading-tight">
                Crafting Timeless <br />
                <span className="text-primary">Beauty Stories</span> Since 2010
              </h2>
              <p className="text-lg text-on-surface/80 font-sans leading-relaxed">
                Founded on the belief that everyone deserves a sanctuary of self-care,
                Zentonsz has grown from a boutique salon into a hallmark of luxury
                and precision in the heart of the city.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <h4 className="text-xl font-serif italic text-on-surface mb-2">Our Vision</h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed">To become the global standard for personalized luxury beauty experiences.</p>
                </div>
                <div>
                  <h4 className="text-xl font-serif italic text-on-surface mb-2">Our Mission</h4>
                  <p className="text-sm text-on-surface/60 leading-relaxed">Enhancing natural beauty through innovative techniques and artisanal care.</p>
                </div>
              </div>
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold"
                >
                  Discover Our Services
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- PREMIUM SERVICES SECTION ------------------------------- */}
      <section className="py-24 px-6 bg-background overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Experience Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-on-surface leading-tight">
              Our <span className="text-primary">Exclusive Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ------------------------------- WHY WE STAND OUT SECTION (TIMELINE) ------------------------------- */}
      <section className="timeline-section py-24 timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Experience the difference today
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface leading-tight">
              Why We <br className="md:hidden" />
              <span className="text-6xl md:text-8xl lg:text-9xl text-primary underline decoration-primary-container underline-offset-[16px] block md:inline-block md:mt-4">
                Stand Out
              </span>
            </h2>
          </div>

          <ul>
            {TIMELINE_DATA.map((item, index) => (
              <li key={index}>
                <div className="item-card">
                  <time>{item.year}</time>
                  <div className="discovery item-content">
                    <h1>{item.title}</h1>
                    <div className="text-primary mb-2">
                      {item.icon}
                    </div>
                  </div>
                  <div className="scientist item-content">
                    <h1>Benefit</h1>
                    <span>{item.desc}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-24 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] flex items-center gap-3 mx-auto border-b border-primary-container pb-2 hover:border-primary transition-all duration-300"
            >
              Explore More <span className="text-lg">→</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ------------------------------- CORE VALUES SECTION ------------------------------- */}
      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface mb-6">
              The Standards of <span className="text-primary">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-primary-container mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: <Award size={32} strokeWidth={1} />,
                title: "Artisanal Excellence",
                desc: "Every service is a masterpiece, crafted with precision and a deep understanding of aesthetics.",
              },
              {
                icon: <ShieldCheck size={32} strokeWidth={1} />,
                title: "Safe Sanctuary",
                desc: "We adhere to the highest medical-grade sanitization protocols to ensure your absolute well-being.",
              },
              {
                icon: <Clock size={32} strokeWidth={1} />,
                title: "Personalized Care",
                desc: "We dedicate time to understand your unique needs, ensuring a result that is uniquely yours.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-10 bg-surface rounded-[2rem] border border-surface-dim text-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-on-surface mb-4">
                  {value.title}
                </h3>
                <p className="text-on-surface/60 font-sans leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Trust Points */}
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-primary-container/20 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <h4 className="text-3xl font-serif italic text-on-surface mb-6 underline decoration-primary-container underline-offset-8">Why Trust Zentonsz?</h4>
                  <p className="text-on-surface/60 leading-relaxed mb-8">
                    Trust isn't given; it's earned through consistent quality, unwavering discipline, and a genuine passion for beauty. At Zentonsz, every treatment is backed by years of research and the highest safety standards.
                  </p>
                </div>
                <div className="space-y-6 text-sm font-bold tracking-widest uppercase text-on-surface/60">
                  {[
                    "Medical-Grade Hygiene Standards",
                    "Internationally Certified Master Artists",
                    "Premium World-Class Product Portfolio",
                    "Transparent & Ethical Aesthetic Practices"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:text-primary transition-colors duration-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl rotate-2">
                  <img
                    src={interiorImage}
                    alt="Salon Hygiene"
                    className="rounded-[2.5rem] w-full aspect-video object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl opacity-60" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-surface-dim rounded-full blur-2xl opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- TEAM SECTION ------------------------------- */}
      <section className="py-24 bg-brand-cream relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block text-left">
                The Artisans
              </span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-on-surface leading-tight">
                Meet Our <span className="text-primary">Master Stylists</span>
              </h2>
            </div>
            <p className="text-lg text-on-surface/60 font-sans max-w-sm italic text-right">
              Curated experts committed to translating your inner beauty into an outward reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Priya Raj",
                role: "Master Makeup Artist",
                img: team1,
                bio: "Internationally certified, Priya specializes in high-definition bridal transformations."
              },
              {
                name: "Ananya Sharma",
                role: "Senior Hair Stylist",
                img: team2,
                bio: "With a decade of experience, Ananya is the architect of avant-garde hair design."
              },
              {
                name: "Sanam Kapoor",
                role: "Skin Care Specialist",
                img: skinImage,
                bio: "Sanam combines holistic knowledge with modern technology for radiant results."
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group"
              >
                <div className="relative rounded-[3rem] overflow-hidden mb-8 aspect-[3/4] shadow-xl group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 text-white translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-container mb-2">{member.role}</p>
                    <p className="text-sm font-sans leading-relaxed text-slate-200">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif italic text-on-surface mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm font-bold text-on-surface/60 uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- TESTIMONIALS SECTION ------------------------------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Voices</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface">
              Trust Built on <span className="text-primary">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {[
              {
                text: "Zentonsz isn't just a parlour; it's an experience. The attention to detail and the hygiene standards are unparalleled in the city. I've never felt more pampered or confident.",
                author: "Meera Krishnan",
                tag: "Regular Client Since 2018"
              },
              {
                text: "My bridal transformation was exactly what I dreamed of. They understood my vision and executed it with such precision. Truly the masters of their craft.",
                author: "Ritika Singh",
                tag: "Bridal Client 2023"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 bg-surface-dim/50 rounded-[3rem] border border-primary-container relative group hover:bg-surface hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <Quote size={40} className="text-primary-container absolute top-10 right-10 group-hover:text-primary-container/50 transition-colors" />
                <p className="text-lg md:text-xl font-serif italic text-on-surface/80 leading-relaxed mb-8 relative z-10">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="text-xl font-serif italic text-on-surface">{item.author}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">{item.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA SECTION ------------------------------- */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative bg-primary-container/20 rounded-[4rem] p-12 md:p-20 overflow-hidden border border-primary-container shadow-xl text-center">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-8"
            >
              <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto text-primary mb-8 border border-primary-container shadow-sm">
                <Sparkles size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-on-surface leading-tight">
                Begin Your Journey to <br />
                <span className="text-primary">Unrivaled Radiance</span>
              </h2>
              <p className="text-lg text-on-surface/60 font-sans max-w-2xl mx-auto leading-relaxed">
                Experience the perfect blend of artisanal skill and modern luxury.
                Your transformation awaits at Zentonsz.
              </p>
              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium-gold px-16"
                >
                  Book Your Appointment
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <Sparkles className="absolute top-10 right-10 text-primary-container/10 w-40 h-40" />
            <Heart className="absolute bottom-10 left-10 text-primary-container/10 w-40 h-40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
