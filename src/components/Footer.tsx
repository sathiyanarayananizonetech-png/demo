import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import logo from "../assets/zentonsz.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <footer className="bg-background relative overflow-hidden pt-12 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Navigation Tier ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4 lg:col-span-4 lg:pr-12">
            <Link
              to="/"
              className="flex items-center gap-2 group w-fit mx-auto sm:mx-0"
            >
              <img
                src={logo}
                alt="Zen Tonez"
                className="h-9 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-on-surface/70 leading-relaxed font-medium text-[13px] text-center sm:text-left italic lg:max-w-xs">
              Elevating beauty with premium services and expert care. Your transformation is our passion.
            </p>
            <div className="flex space-x-3 pt-1 justify-center sm:justify-start">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  whileHover={{ y: -3, scale: 1.1 }}
                  key={i}
                  href="#"
                  className="p-2.5 bg-secondary/10 text-[#C9A24A] rounded-full hover:bg-[#C9A24A] hover:text-[#2B2B2B] transition-all duration-300 border border-[#C9A24A]/20"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-2 mb-4 w-full text-center sm:text-left">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Story", path: "/about" },
                { label: "Our Work", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-on-surface/80 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest text-center sm:text-left"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-2 mb-4 w-full text-center sm:text-left">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "Hair Styling",
                "Skin Therapy",
                "Nail Art",
              ].map((s) => (
                <li
                  key={s}
                  className="text-on-surface/80 text-[9px] font-black uppercase tracking-widest cursor-default text-center sm:text-left"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col items-center sm:items-start"
          >
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A24A] border-b border-[#C9A24A]/20 pb-2 mb-4 w-full text-center sm:text-left">
              Visit Us
            </h3>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                <MapPin className="text-[#C9A24A] shrink-0 w-3 h-3 sm:mt-0.5" />
                <span className="text-on-surface/80 text-[10px] font-black uppercase tracking-widest">
                  Thillai Nagar, Trichy
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 group cursor-pointer text-center sm:text-left">
                <Phone className="text-[#C9A24A] w-3 h-3" />
                <a
                  href="tel:+919876543210"
                  className="text-on-surface/80 text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 group cursor-pointer text-center sm:text-left">
                <Mail className="text-[#C9A24A] w-3 h-3" />
                <a
                  href="mailto:info@zentonez.com"
                  className="text-on-surface/80 text-[10px] group-hover:text-white transition-colors font-black uppercase tracking-widest"
                >
                  info@zentonez.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Tier ── */}
      <div className="relative border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-5 gap-4 relative z-20">
          <p className="text-on-surface/40 text-[9px] font-black uppercase tracking-[0.2em]">
            © {currentYear} Zen Tonez.
          </p>
          <div className="flex items-center gap-4 text-[9px] uppercase font-black tracking-[0.2em] text-on-surface/40">
            <span className="hover:text-[#C9A24A] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="opacity-30">|</span>
            <span className="hover:text-[#C9A24A] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>

        {/* Oversized Background Text */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden opacity-10 translate-y-1/2">
          <h1 className="text-[15vw] font-black font-serif italic text-white/5 leading-none tracking-tighter">
            ZENTONEZ
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
