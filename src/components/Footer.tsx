import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <footer className="bg-inverse-surface text-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Zentonsz Beauty"
                className="h-12 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-surface-dim leading-relaxed font-light">
              Elevating your beauty experience with premium services and expert
              care. Your transformation is our passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-surface-dim hover:text-primary transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-surface-dim hover:text-primary transition-colors block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-surface-dim hover:text-primary transition-colors block"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-surface-dim hover:text-primary transition-colors block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2">
              Services
            </h3>
            <ul className="space-y-4">
              <li className="text-surface-dim transition-colors cursor-default">
                Bridal Makeup
              </li>
              <li className="text-surface-dim transition-colors cursor-default">
                Hair Styling
              </li>
              <li className="text-surface-dim transition-colors cursor-default">
                Skin Care
              </li>
              <li className="text-surface-dim transition-colors cursor-default">
                Spa & Facial
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2">
              Visit Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 w-5 h-5" />
                <span className="text-surface-dim leading-relaxed">
                  Thillai Nagar, Trichy
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0 w-5 h-5" />
                <span className="text-surface-dim">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0 w-5 h-5" />
                <span className="text-surface-dim">info@zentonszbeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm italic">
          <p>© {currentYear} Zentonsz Beauty Parlour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
