import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  SkinCare3D,
  Facial3D,
  HairSpa3D,
  Bridal3D,
  Nails3D,
} from "../ui/ThreeDIcons";

const SERVICES_DATA = [
  {
    id: 1,
    title: "SKIN CARE",
    price: "₹600",
    description: "Personalized skincare for radiant, healthy skin.",
    icon: <SkinCare3D />,
    category: "MINIMAL",
  },
  {
    id: 2,
    title: "FACIAL TREATMENT",
    price: "₹800",
    description: "Advanced therapies to refresh and rejuvenate.",
    icon: <Facial3D />,
    category: "GLASS",
  },
  {
    id: 3,
    title: "BRIDAL MAKEUP",
    price: "₹3500",
    description: "Look stunning on your most special day.",
    icon: <Bridal3D />,
    category: "GLOW",
  },
  {
    id: 4,
    title: "NAIL ART",
    price: "₹400",
    description: "Exquisite nail art to express your unique style.",
    icon: <Nails3D />,
    category: "SPLIT",
  },
  {
    id: 5,
    title: "HAIR SPA",
    price: "₹700",
    description: "Nourishing spa treatments to repair and revitalize.",
    icon: <HairSpa3D />,
    category: "MINIMAL",
  },
];

const CATEGORIES = ["GLASS", "SPLIT", "MINIMAL", "GLOW"];

const AboutServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("MINIMAL");

  const filteredServices = SERVICES_DATA; // Showing all for now, or we can filter if user wants

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-xl text-xs font-black tracking-[0.2em] transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                  : "bg-white/5 border-white/10 text-white/40 hover:text-white/60 hover:border-white/20"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Services Cards Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                <div className="relative bg-white/3 backdrop-blur-sm border border-white/10 rounded-4xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 group-hover:border-primary/30 transition-all duration-500">
                  
                  {/* Icon Container */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-500 shadow-luxury">
                    <div className="w-full h-full text-primary drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-black italic uppercase font-serif text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-primary/80 font-bold tracking-widest text-xs">
                        From {service.price}
                      </p>
                    </div>
                    <p className="text-white/50 text-sm font-medium leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-4">
                      <span className="px-4 py-1.5 rounded-full border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:bg-primary/10 transition-all">
                        PREMIUM
                      </span>
                      <span className="px-4 py-1.5 rounded-full border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:bg-primary/10 transition-all">
                        ARTISANAL
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div 
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300"
                  >
                    <ArrowRight className="text-white/40 group-hover:text-white" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesGrid;
