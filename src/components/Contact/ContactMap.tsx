import React from "react";
import { MapPin } from "lucide-react";

const ContactMap: React.FC = () => {
  return (
    <section className="h-[300px] sm:h-[400px] lg:h-[500px] mt-12 sm:mt-24 bg-white relative flex items-center justify-center overflow-hidden border-t border-[#302b27]/5">
      <div className="relative z-10 text-center px-4">
        <MapPin className="text-primary w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
        <h3 className="text-2xl sm:text-3xl font-black italic uppercase font-serif tracking-tight">
          Thillai Nagar, Trichy
        </h3>
        <p className="text-slate-900/30 uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mt-3 sm:mt-4 font-black italic">
          The Heart of Luxury
        </p>
      </div>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #302b27 1px, transparent 1px), linear-gradient(to bottom, #302b27 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-radial-to-c from-transparent to-white" />
    </section>
  );
};

export default ContactMap;
