import { motion } from "framer-motion";
import { ArrowRight, Flower2, Gem } from "lucide-react";
import { Link } from "react-router-dom";

// Import local images from assets/services
import img1 from "../../assets/services/serviceimg1.jpeg";
import img2 from "../../assets/services/serviceimg2.jpeg";
import img3 from "../../assets/services/serviceimg3.jpeg";
import img4 from "../../assets/services/serviceimg4.jpeg";
import img5 from "../../assets/services/serviceimg5.jpeg";
import img6 from "../../assets/services/serviceimg6.jpeg";
import img7 from "../../assets/services/serviceimg7.jpeg";
import img8 from "../../assets/services/serviceimg8.jpeg";
import img9 from "../../assets/services/seviceimg9.jpeg";
import img10 from "../../assets/services/serviceimg10.jpeg";
import img11 from "../../assets/services/serviceimg11.jpeg";
import nail1 from "../../assets/services/nail.jpeg";
import nail2 from "../../assets/services/nail2.jpeg";
import serviceHero from "../../assets/beauty_treatment_hero.png";

const mainServices = [
  {
    id: "01",
    category: "Hair Artistry",
    title: "Signature Sculpture Cut",
    price: "₹1,250+",
    description: "A bespoke architectural cut designed to enhance your natural bone structure and hair texture.",
    image: img1
  },
  {
    id: "02",
    category: "Hair Artistry",
    title: "Artisanal Balayage",
    price: "₹3,500+",
    description: "Hand-painted highlights for a sun-kissed, dimensional look that grows out beautifully.",
    image: img2
  },
  {
    id: "03",
    category: "Hair Artistry",
    title: "Botanical Scalp Therapy",
    price: "₹1,800+",
    description: "A revitalizing treatment using plant-based essences to nourish and strengthen your hair from the root.",
    image: img3
  },
  {
    id: "04",
    category: "Skin Rejuvenation",
    title: "Ethereal Glow Facial",
    price: "₹2,500",
    description: "A multi-sensory journey involving deep sonic cleansing and a gold-infused glow mask.",
    image: img4
  },
  {
    id: "05",
    category: "Skin Rejuvenation",
    title: "Diamond Microdermabrasion",
    price: "₹3,200",
    description: "Advanced exfoliation that smooths fine lines and reveals your most radiant, youthful skin.",
    image: img5
  },
  {
    id: "06",
    category: "Skin Rejuvenation",
    title: "Hydra-Radiance Facial",
    price: "₹4,500",
    description: "Intense hydration and oxygenation for immediate plumping and long-term skin health.",
    image: img6
  },
  {
    id: "07",
    category: "Artisanal Makeup",
    title: "Couture Evening Look",
    price: "₹2,800",
    description: "A sophisticated makeup ritual tailored for high-profile events and evening galas.",
    image: img11
  },
  {
    id: "08",
    category: "Aroma Therapy",
    title: "Royal Swedish Massage",
    price: "₹2,200",
    description: "Full body relaxation using premium essential oils to melt away stress and muscle tension.",
    image: img8
  },
  {
    id: "09",
    category: "Advanced Waxing",
    title: "Full Body Silk Ritual",
    price: "₹3,500",
    description: "Premium chocolate wax treatment for a perfectly smooth, painless, and glowing skin experience.",
    image: img9
  },
  {
    id: "10",
    category: "Body Polishing",
    title: "Luminous Skin Scrub",
    price: "₹4,000",
    description: "A luxurious body treatment that removes dead skin cells and leaves you with a silken finish.",
    image: img10
  }
];

const specialtyServices = [
  {
    category: "Nail Artistry",
    title: "Signature Gel Polish",
    price: "₹850",
    icon: <Gem size={20} className="text-primary mb-2" />,
    image: nail1
  },
  {
    category: "Nail Artistry",
    title: "Luxury Spa Pedicure",
    price: "₹1,200",
    icon: <Flower2 size={20} className="text-primary mb-2" />,
    image: nail2
  }
];

export function ServicesMobileView() {
  return (
    <div className="bg-background font-sans text-on-surface antialiased overflow-x-hidden pb-32 max-w-lg mx-auto">
      {/* Hero Section (Home Style) */}
      <section className="flex flex-col pt-20">
        {/* Main Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-luxury-deep border-4 border-white bg-surface aspect-[4/5]">
            <img 
              src={serviceHero} 
              alt="Luxury Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Hero Content below image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-8 pt-8 pb-12 space-y-6"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-xs uppercase tracking-[0.4em] text-primary/80 mb-2 block font-bold"
            >
              The Art of Transformation
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl font-bold text-on-surface leading-[1.1] tracking-tight"
            >
              Artisanal Beauty <br/>
              <span className="italic font-serif text-primary">Tailored</span> For You.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-on-surface/70 text-lg leading-relaxed"
            >
              Discover a curated collection of rituals designed to enhance your natural essence and radiance.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => document.getElementById('treatment-gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#C9A24A] text-[#2B2B2B] py-4 px-8 rounded-2xl font-bold shadow-lg w-full text-lg tracking-wide shadow-[#C9A24A]/10 active:scale-95 transition-all border border-[#C9A24A]/20"
            >
              View Treatments
            </button>
          </div>
        </motion.div>
      </section>

      {/* Main Categories Intro */}
      <section id="treatment-gallery" className="px-6 space-y-2 pt-12">
        <p className="uppercase tracking-[0.2em] text-[10px] text-primary font-bold">Curated Excellence</p>
        <h2 className="text-3xl font-bold tracking-tight text-on-surface">The Service Gallery</h2>
      </section>

      {/* Main Categories */}
      {mainServices.map((service) => (
        <section key={service.id} className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-primary/10 pb-2">
            <h2 className="uppercase tracking-widest text-sm font-bold text-primary">{service.category}</h2>
            <span className="text-[10px] italic opacity-40">{service.id}</span>
          </div>

          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-dim/20 shadow-md border border-white/40"
          >
            <img 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={service.image} 
              alt={service.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
              <div className="flex justify-between items-end">
                <span className="bg-[#C9A24A] text-[#2B2B2B] text-[10px] px-3 py-1.5 rounded-full font-bold whitespace-nowrap shadow-sm border border-[#C9A24A]/20">
                  {service.price}
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <Link to="/contact" className="block w-full">
                <button className="w-full bg-[#C9A24A] text-[#2B2B2B] py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase shadow-lg active:scale-95 transition-all border border-[#C9A24A]/20">
                  Book This Ritual
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      ))}

      {/* Specialty Collections */}
      <section className="bg-surface-dim/40 -mx-6 p-10 space-y-10 rounded-t-[3rem] shadow-[inset_0_20px_40px_rgba(0,0,0,0.05)]">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C9A24A]">Specialty Collections</h2>
          <p className="font-serif text-3xl text-[#2B2B2B] italic">The Artisanal Extras</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {specialtyServices.map((specialty, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm mb-4">
                <img 
                  className="w-full h-full object-cover" 
                  src={specialty.image} 
                  alt={specialty.title} 
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="h-32 bg-white rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm border border-primary/5">
                {specialty.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24A]">{specialty.category}</span>
                <span className="font-bold text-[14px] mt-1 leading-tight text-[#2B2B2B]">{specialty.title}</span>
                <span className="font-bold text-[#C9A24A] mt-1 text-sm">{specialty.price}</span>
              </div>
            </div>
          ))}

          {/* Bridal Placeholder */}
          <div className="col-span-2 relative h-48 overflow-hidden rounded-[2rem] shadow-xl border-4 border-white mt-4">
            <img 
              className="w-full h-full object-cover" 
              src={img7} 
              alt="Bridal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="space-y-2">
                <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Signature Package</span>
                <h3 className="text-white text-2xl font-serif italic">The Bridal Concierge</h3>
                <Link to="/contact">
                  <button className="bg-[#C9A24A] text-[#2B2B2B] px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-all border border-[#C9A24A]/20">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing CTA */}
      <section className="text-center py-10 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#2B2B2B]">Need a Bespoke <span className="italic font-serif text-[#C9A24A]">Consultation?</span></h2>
        <p className="text-[#2B2B2B]/60 max-w-xs mx-auto font-medium">Our master artisans are here to guide your transformation.</p>
        <Link to="/contact">
          <button className="flex items-center gap-3 text-[#C9A24A] font-bold mx-auto group active:scale-95 transition-all">
            Contact Concierge 
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </section>
    </div>
  );
}
