import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./DesktopNav.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Book Appointment", path: "/book" },
];

export function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="desktop-nav-wrapper hidden lg:block">
      <div className="desktop-nav-content glass-effect">
        <ul className="nav-list">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-label">{link.name}</span>
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="active-slider shadow-luxury-soft"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
