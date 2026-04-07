import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";
import salonInterior from "../../assets/salon_interior_luxury.png";

export function ContactMobileView() {
  return (
    <div className="bg-background text-on-surface antialiased pt-24 pb-32">
      {/* Hero Section (Boutique Style) */}
      <section className="flex flex-col pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-luxury-deep border-4 border-white bg-surface aspect-[4/5]">
            <img 
              src={salonInterior} 
              alt="Luxury Salon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-8 pt-8 pb-4 space-y-4"
        >
          <span className="uppercase tracking-[0.2em] text-[10px] text-[#C9A24A] font-bold block ml-1">
            Bespoke Beauty Experiences
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#2B2B2B] leading-tight">
            Reserve Your <span className="italic font-serif text-[#C9A24A]">Session</span>
          </h1>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="px-6 mb-16 relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full opacity-30 blur-3xl" />
        
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl space-y-8 border border-white/40 shadow-xl relative z-10"
        >
          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Giselle Bennett"
              className="w-full bg-surface-dim/20 border-b-2 border-primary/40 focus:border-primary px-4 py-3 outline-none text-on-surface font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">Selected Service</label>
            <select className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B] font-medium appearance-none">
              <option>Signature Silk Blowout</option>
              <option>Botanical Scalp Therapy</option>
              <option>Precision Couture Cut</option>
              <option>Artisanal Balayage</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">Date</label>
              <input type="date" className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B]" />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 px-1">Time</label>
              <input type="time" className="w-full bg-surface-dim/20 border-b-2 border-[#C9A24A]/40 focus:border-[#C9A24A] px-4 py-3 outline-none text-[#2B2B2B]" />
            </div>
          </div>

          <button className="w-full bg-[#C9A24A] text-[#2B2B2B] font-bold uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl active:scale-95 transition-all border border-[#C9A24A]/20">
            Confirm Appointment
          </button>
        </motion.form>
      </section>

      {/* Connect & Map Section (Light Theme Sync) */}
      <section className="bg-[#F4F1EC] pt-16 pb-24 rounded-t-[3rem] -mt-8 relative z-20 shadow-luxury-soft border-t border-[#C9A24A]/10">
        <div className="px-8 space-y-12">
          <div className="space-y-4">
            <h2 className="italic font-serif text-3xl text-[#2B2B2B] leading-tight">Connect <br/> With <span className="text-[#C9A24A]">Us</span></h2>
            <p className="text-[#2B2B2B]/60 text-sm max-w-xs font-medium">Visit our sanctuary in the heart of the city for a transformative beauty experience.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A] bg-[#C9A24A]/5">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#2B2B2B]/40 font-bold">Call Us</p>
                <p className="text-lg font-bold text-[#C9A24A] tracking-wider">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A] bg-[#C9A24A]/5">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#2B2B2B]/40 font-bold">Email Us</p>
                <p className="text-lg font-bold text-[#C9A24A] tracking-tight">concierge@zentonz.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A] bg-[#C9A24A]/5">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#2B2B2B]/40 font-bold">Find Us</p>
                <p className="text-lg font-bold text-[#C9A24A]">Thillai Nagar, Trichy</p>
              </div>
            </div>
          </div>

          {/* Minimalist Map Visualization */}
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group grayscale brightness-90 contrast-125">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
              alt="Map"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#C9A24A]" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-10 pt-8 border-t border-[#2B2B2B]/10">
            <Instagram size={24} className="text-[#C9A24A] hover:scale-110 transition-all cursor-pointer" />
            <Facebook size={24} className="text-[#C9A24A] hover:scale-110 transition-all cursor-pointer" />
            <Twitter size={24} className="text-[#C9A24A] hover:scale-110 transition-all cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
}
