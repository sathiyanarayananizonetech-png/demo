import { motion } from "framer-motion";
import { 
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/indexthero1.jpeg";
import beautyDetails from "../../assets/beauty_details.png";

export function ParlourMobileView() {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen pb-24">
      {/* Hero Section */}
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
              src={heroImage} 
              alt="Zen Tonez" 
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
              The Sanctuary of Self-Care
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl font-bold text-on-surface leading-[1.1] tracking-tight"
            >
              Unveil Your Most <span className="italic font-serif text-primary block">Radiant</span> Essence.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-on-surface/70 text-lg leading-relaxed"
            >
              Step into a realm where modern artistry meets timeless grace. Every ritual is a bespoke celebration of you.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/contact">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-[#C9A24A] text-[#2B2B2B] py-4 px-8 rounded-2xl font-bold shadow-lg w-full text-lg tracking-wide shadow-[#C9A24A]/20 active:scale-95 transition-all"
              >
                Book An Appointment
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-white/50 backdrop-blur-sm text-[#2B2B2B] py-4 px-8 rounded-2xl font-bold border border-[#C9A24A]/20 w-full shadow-sm text-lg active:scale-95 transition-all"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-dim/30 py-20 px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Artisanal Services</h2>
          <div className="h-1.5 w-16 bg-primary" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden group shadow-md border border-white/40">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600" 
              alt="Elite Styling" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24A] font-bold">Elite Styling</span>
              <h3 className="text-[#2B2B2B] text-2xl font-bold">The Golden Cut</h3>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm border border-white/40">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300" 
              alt="Skin Glow" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-[#2B2B2B] text-lg font-bold">Skin Glow</h3>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm border border-white/40">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=300" 
              alt="Pure Mani" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-[#2B2B2B] text-lg font-bold">Pure Mani</h3>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/services">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 border-2 border-[#C9A24A] text-[#C9A24A] font-bold rounded-2xl flex items-center justify-center gap-2 group active:scale-95 transition-all"
            >
              View All Treatments
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Zen Tonez Spirit */}
      <section className="bg-background py-20 px-6 relative overflow-hidden">
        <div className="bg-[#F4F1EC]/60 backdrop-blur-md p-8 pt-20 rounded-[2.5rem] border border-white/60 shadow-lg relative z-10">
          <h2 className="italic font-serif text-3xl text-[#C9A24A] mb-4 leading-tight pr-24">
            The Zen Tonez Spirit
          </h2>
          <p className="text-[#2B2B2B]/70 leading-relaxed mb-10 text-lg font-medium pr-16">
            More than a salon, Zen Tonez is a sanctuary for those who appreciate 
            the finer details of self-care.
          </p>
          <Link to="/about">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="text-[#C9A24A] font-bold flex items-center gap-3 group text-lg active:scale-95 transition-all"
            >
              Learn Our Story 
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>

          {/* Floating Image - Positioned with clearance for text */}
          <div className="absolute -top-12 -right-2 w-36 h-36 rounded-full overflow-hidden border-[6px] border-white shadow-luxury-deep rotate-6 z-20">
            <img 
              alt="Artisanal Details" 
              src={beautyDetails} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-surface-dim/20 py-20 px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold block mb-2">Visual Narrative</span>
            <h2 className="text-3xl font-bold text-on-surface">Artistry in Move</h2>
          </div>
          <Link to="/gallery" className="text-[#C9A24A] font-bold text-sm border-b border-[#C9A24A]/30 pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400" alt="Work 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" alt="Work 2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" alt="Work 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Hub - High Contrast Transformation */}
      <section className="py-20 px-6">
        <div className="bg-surface-dim/40 rounded-[2.5rem] p-10 space-y-10 shadow-xl border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12" />
          
          <div className="relative space-y-4">
            <h2 className="text-3xl font-serif italic text-primary">Find Your Tranquility</h2>
            <p className="text-on-surface/70 text-sm leading-relaxed font-medium">Visit our sanctuary for a bespoke beauty experience tailored just for you.</p>
          </div>

          <div className="relative space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-medium text-on-surface">Thillai Nagar, Trichy, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                <Phone size={18} />
              </div>
              <span className="text-sm font-medium text-on-surface">+91 98765 43210</span>
            </div>
          </div>

          <Link to="/contact" className="relative block">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#C9A24A] text-[#2B2B2B] py-5 rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-lg shadow-[#C9A24A]/10 active:scale-95 transition-all border border-[#C9A24A]/20"
            >
              Book Your Session
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

