import React from "react";
import { MapPin } from "lucide-react";

const ContactMap: React.FC = () => {
  return (
    <section className="h-[400px] sm:h-[500px] md:h-[600px] w-full relative overflow-hidden group">
      {/* Real Google Maps Integration */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.783112803814!2d78.6859556!3d10.8278274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf567b5e43c5b%3A0xc00958133ba5368a!2sThillai%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713790000000!5m2!1sen!2sin" 
        className="absolute inset-0 w-full h-full grayscale-[0.8] contrast-[1.2] invert-[0.05] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Premium Overlays */}
      <div className="absolute inset-0 bg-radial-to-c from-transparent via-white/10 to-white pointer-events-none" />
      
      {/* Floating Info Badge */}
      <div className="absolute top-10 left-10 z-10 hidden sm:block">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-luxury-deep border border-white/20 max-w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <MapPin className="text-primary w-5 h-5" />
            </div>
            <h4 className="font-serif font-black uppercase text-sm tracking-tight">Our Boutique</h4>
          </div>
          <p className="text-on-surface/70 text-xs leading-relaxed font-medium">
            No. 45, 10th Cross East, <br/>
            Thillai Nagar, Trichy - 620018
          </p>
          <div className="mt-4 pt-4 border-t border-on-surface/5 flex justify-between items-center">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Tamil Nadu</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-primary rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Trims */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactMap;
