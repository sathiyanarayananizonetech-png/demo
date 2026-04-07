import { Link } from "react-router-dom";
import logo from "../../assets/zentonsz.png";

export function MobileTopBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm flex justify-between items-center px-6 py-4 lg:hidden">
      <div className="w-8" /> {/* Spacer to keep logo centered */}
      <Link to="/" className="text-2xl font-serif italic text-primary">
        Zen Tonez
      </Link>
      <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/20">
        <img 
          alt="Zen Tonez Logo" 
          src={logo} 
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
}
