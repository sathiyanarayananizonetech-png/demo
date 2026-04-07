import { 
  Sparkles, 
  Scissors, 
  BookOpen, 
  Calendar,
  Info
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileBottomNav() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: "Home", path: "/", icon: Sparkles },
    { name: "About", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Scissors },
    { name: "Gallery", path: "/gallery", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white/95 backdrop-blur-xl border-t border-primary/5 pb-safe lg:hidden">
      <div className="flex justify-around items-center py-4 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-primary" : "text-on-surface/40"
              }`}
            >
              <Icon 
                size={24} 
                fill={isActive ? "currentColor" : "none"} 
                className={isActive ? "opacity-90" : ""}
              />
              <span className={`text-[10px] uppercase tracking-widest ${
                isActive ? "font-bold" : "font-medium"
              }`}>
                {item.name}
              </span>
              {isActive && (
                <div className="absolute top-0 w-8 h-0.5 bg-primary rounded-full transition-all" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
