import React, { useEffect } from "react";
import {
  Users,
  Wallet,
  GraduationCap,
  Package,
  ShieldCheck,
  BookOpen,
  CalendarDays,
  Handshake,
} from "lucide-react";
import "./AboutTimeline.css";

const TIMELINE_DATA = [
  {
    year: "01",
    title: "Largest Community",
    desc: "The largest B2C beauty community, directly connecting you with professionals.",
    icon: <Users size={22} />,
  },
  {
    year: "02",
    title: "Pocket Friendly",
    desc: "Explore various salons and filter prices to find the perfect fit for your budget.",
    icon: <Wallet size={22} />,
  },
  {
    year: "03",
    title: "Trained Professionals",
    desc: "Entrust your needs to our team of skilled and certified beauty professionals.",
    icon: <GraduationCap size={22} />,
  },
  {
    year: "04",
    title: "Branded Products",
    desc: "Premium products from trusted brands, selected to enhance your experience.",
    icon: <Package size={22} />,
  },
  {
    year: "05",
    title: "100% Hygienic",
    desc: "Stringent cleanliness standards for a worry-free, healthy experience.",
    icon: <ShieldCheck size={22} />,
  },
  {
    year: "06",
    title: "Exclusive Directory",
    desc: "Comprehensive directory of all beauticians, giving you wide access.",
    icon: <BookOpen size={22} />,
  },
  {
    year: "07",
    title: "Convenient Booking",
    desc: "Hassle-free booking with our user-friendly platform from your home.",
    icon: <CalendarDays size={22} />,
  },
  {
    year: "08",
    title: "Community Engagement",
    desc: "Join a vibrant community of beauty enthusiasts, sharing tips and experiences.",
    icon: <Handshake size={22} />,
  },
];

const AboutTimeline: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".about-timeline li");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.isIntersecting
            ? e.target.classList.add("in-view")
            : e.target.classList.remove("in-view"),
        ),
      { threshold: 0.4 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section py-16 sm:py-24 about-timeline">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-32">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 sm:mb-6 block">
            Experience the difference today
          </span>
          <h2 className="text-hero italic text-on-surface">
            Why We <br className="md:hidden" />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary underline decoration-primary-container underline-offset-12 block md:inline-block md:mt-4">
              Stand Out
            </span>
          </h2>
        </div>
        <ul className="relative">
          {TIMELINE_DATA.map((item, index) => (
            <li key={index}>
              <div className="item-card">
                <time>{item.year}</time>
                <div className="discovery item-content">
                  <h1>{item.title}</h1>
                  <div className="text-primary mb-2">{item.icon}</div>
                </div>
                <div className="scientist item-content">
                  <h1>Benefit</h1>
                  <span>{item.desc}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutTimeline;
