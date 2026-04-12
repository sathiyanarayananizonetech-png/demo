import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Clock,
} from "lucide-react";
import gsap from "gsap";

interface ContactInfoData {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoCard: React.FC<{ info: ContactInfoData; idx: number }> = ({
  info,
  idx,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: x * 12,
      rotateX: -y * 12,
      scale: 1.04,
      duration: 0.4,
      ease: "power2.out",
      force3D: true,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      force3D: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        borderColor: "rgba(115, 92, 0, 0.4)",
        boxShadow: "0 0 20px rgba(115, 92, 0, 0.1)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      style={{ perspective: "1000px" }}
      className="rounded-3xl tb:rounded-5xl border border-transparent transition-colors duration-500"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex items-start gap-3 tb:gap-4 p-5 tb:p-8 bg-primary/5 backdrop-blur-sm rounded-3xl tb:rounded-5xl border border-primary/10 shadow-sm cursor-pointer will-change-transform backface-hidden"
      >
        <div className="p-3 tb:p-4 bg-primary/10 rounded-xl tb:rounded-2xl shadow-sm text-primary shrink-0 border border-primary/20">
          {info.icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-slate-900/40 text-[9px] tb:text-[10px] uppercase tracking-[0.2em] mb-1 font-black leading-none">
            {info.title}
          </h4>
          <p className="text-[#302b27] font-bold text-base tb:text-lg italic tracking-tight leading-tight wrap-break-word">
            {info.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
        hour12: true,
        weekday: "short", // Added for status check
      });

      const parts = formatter.formatToParts(now);

      let weekdayStr = "";
      let hour12Str = "";
      let minStr = "";
      let secStr = "";
      let ampmStr = "";

      parts.forEach((p) => {
        if (p.type === "weekday") weekdayStr = p.value;
        if (p.type === "hour") hour12Str = p.value;
        if (p.type === "minute") minStr = p.value;
        if (p.type === "second") secStr = p.value;
        if (p.type === "dayPeriod") ampmStr = p.value;
      });

      // Set Clock String
      setCurrentTime(`${hour12Str}:${minStr}:${secStr} ${ampmStr}`);

      // Open/Closed Status Logic
      let currentHour24 = parseInt(hour12Str);
      if (ampmStr.toLowerCase() === "pm" && currentHour24 !== 12) {
        currentHour24 += 12;
      } else if (ampmStr.toLowerCase() === "am" && currentHour24 === 12) {
        currentHour24 = 0;
      }
      const timeNum = currentHour24 + parseInt(minStr) / 60;

      if (weekdayStr === "Sun") {
        setIsOpen(false);
      } else {
        setIsOpen(timeNum >= 10 && timeNum < 20.5); // 10:00 AM to 8:30 PM
      }
    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 1000); // Check every second for live clock
    return () => clearInterval(interval);
  }, []);

  const contactInfoData = [
    {
      icon: <MapPin size={20} />,
      title: "Our Address",
      content: "Thillai Nagar, Trichy, Tamil Nadu",
    },
    { icon: <Phone size={20} />, title: "Call Us", content: "+91 98765 43210" },
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      content: "hello@zentonezbeauty.com",
    },
  ];

  return (
    <div className="lg:col-span-1 space-y-6 sm:space-y-10">
      <div className="space-y-4 tb:space-y-6">
        {contactInfoData.map((info, i) => (
          <ContactInfoCard key={i} info={info} idx={i} />
        ))}
      </div>

      {/* Hours card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-7 tb:p-10 bg-on-surface text-background rounded-3xl tb:rounded-4xl relative overflow-hidden shadow-luxury-deep"
      >
        <div className="absolute top-6 right-5 tb:top-8 tb:right-8 flex flex-col items-end pointer-events-none">
          <div className="flex items-center gap-1.5 text-primary/40 mb-1">
            <Clock size={12} />
            <span className="text-[8px] tb:text-[9px] font-black uppercase tracking-[0.2em]">
              Live IST
            </span>
          </div>
          <div className="text-right flex items-baseline justify-end gap-1 whitespace-nowrap">
            <span className="text-xl tb:text-3xl font-black italic text-primary font-serif tracking-tight drop-shadow-lg tabular-nums">
              {currentTime.split(" ")[0]}
            </span>
            <span className="text-[9px] tb:text-xs font-bold uppercase tracking-widest text-primary/70">
              {currentTime.split(" ")[1]}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6 tb:mb-8 border-b border-white/10 pb-4">
          <h4 className="text-xl tb:text-2xl font-black italic uppercase font-serif m-0 shrink-0">
            Opening Hours
          </h4>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? "bg-green-500" : "bg-red-500"}`}
              ></span>
            </span>
            <span
              className={`text-[9px] tb:text-[10px] font-black tracking-widest uppercase whitespace-nowrap ${isOpen ? "text-green-500" : "text-red-500"}`}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
        <ul className="space-y-4 tb:space-y-6">
          <li className="flex justify-between items-center">
            <span className="text-primary font-medium tracking-widest uppercase text-[9px] tb:text-[10px]">
              Mon – Sat:
            </span>
            <span className="text-green-400 font-bold text-sm tb:text-base">
              10:00 AM – 08:30 PM
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-primary font-medium tracking-widest uppercase text-[9px] tb:text-[10px]">
              Sunday:
            </span>
            <span className="text-red-500 font-black italic text-sm tb:text-base">
              Closed
            </span>
          </li>
        </ul>
        <div className="mt-8 tb:mt-12 flex gap-4 tb:gap-6">
          {[Instagram, Facebook, Twitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="#"
              aria-label={["Instagram", "Facebook", "Twitter"][idx]}
              className="p-3 tb:p-4 bg-amber-50/10 rounded-xl tb:rounded-2xl hover:bg-primary transition-colors duration-300 tap-target"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
