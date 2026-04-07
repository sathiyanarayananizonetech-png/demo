import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "../assets/zentonsz.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-on-surface pt-6 sm:pt-14 pb-24 sm:pb-7 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Grid: 1-col → 2-col → 4-col ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-16">

          {/* Brand Info */}
          <div className="space-y-4 sm:space-y-5 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img
                src={logo}
                alt="Zen Tonez"
                className="h-10 sm:h-12 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-on-surface/60 leading-relaxed font-medium text-sm sm:text-base max-w-xs italic">
              Elevating your beauty experience with premium services and expert
              care. Your transformation is our passion.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={["Instagram", "Facebook", "Twitter"][i]}
                  className="p-3 bg-secondary/10 text-[#C9A24A] rounded-full hover:bg-[#C9A24A] hover:text-[#2B2B2B] transition-all duration-300 shadow-sm border border-[#C9A24A]/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Wrapper for Explore and Services to be side-by-side on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:contents">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6 border-b border-secondary/20 pb-3">
                Explore
              </h3>
            <ul className="space-y-3">
              {[
                { label: "Home",       path: "/" },
                { label: "Our Story",  path: "/about" },
                { label: "Our Work",   path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-on-surface/60 hover:text-[#C9A24A] transition-colors block text-sm sm:text-base py-0.5 font-bold uppercase tracking-widest text-[10px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* Services */}
            <div>
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6 border-b border-secondary/20 pb-3">
                Services
              </h3>
            <ul className="space-y-3">
              {["Bridal Makeup", "Hair Styling", "Skin Care", "Spa & Facial"].map((s) => (
                <li
                  key={s}
                  className="text-on-surface/60 text-sm sm:text-base cursor-default font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary mb-3 sm:mb-6 border-b border-secondary/20 pb-3">
            Visit Us
          </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                <span className="text-on-surface/60 leading-relaxed text-sm sm:text-base font-medium">
                  Thillai Nagar, Trichy
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0 w-5 h-5" />
                <a
                  href="tel:+919876543210"
                  className="text-on-surface/60 text-sm sm:text-base hover:text-[#C9A24A] transition-colors font-medium"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0 w-5 h-5" />
                <a
                  href="mailto:info@zentonez.com"
                  className="text-on-surface/60 text-sm sm:text-base hover:text-[#C9A24A] transition-colors break-all font-medium"
                >
                  info@zentonez.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-12 pt-4 sm:pt-6 border-t border-secondary/10 text-center text-on-surface/30 text-[10px] sm:text-xs font-black uppercase tracking-widest">
          <p>© {currentYear} Zen Tonez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
