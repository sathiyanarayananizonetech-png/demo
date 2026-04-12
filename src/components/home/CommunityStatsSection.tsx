import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { label: "Happy Clients", value: "3,000+" },
  { label: "Expert Stylists", value: "3+" },
  { label: "Years of Legacy", value: "5+" },
  { label: "Planned Expansion", value: "05" },
];

export function CommunityStatsSection() {
  return (
    <section className="py-10 tb:py-20 dt:py-32 relative bg-background overflow-hidden border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 tb:px-6 dt:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 tb:mb-16 dt:mb-20 px-4 mb:px-0">
            <h2 className="text-section-title font-black text-on-surface mb-4 tb:mb-6 uppercase tracking-tighter italic font-serif">
              Join India&apos;s{" "}
              <span className="text-primary underline decoration-secondary/30 underline-offset-8">
                Largest Community
              </span>
            </h2>
            <p className="text-base tb:text-lg dt:text-xl text-on-surface/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Our legacy is built on the trust of thousands who have experienced
              the Zentonez touch of excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 dt:grid-cols-4 gap-4 tb:gap-8 dt:gap-12 px-4 mb:px-0">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center p-4 tb:p-6 dt:p-8 rounded-2xl tb:rounded-3xl bg-secondary/5 border border-secondary/10 shadow-luxury-soft transform-gpu transition-all duration-500 hover:shadow-luxury-deep hover:-translate-y-2">
                <div className="text-2xl tb:text-3xl dt:text-5xl font-black text-primary mb-2 tb:mb-4 font-serif italic">
                  {stat.value}
                </div>
                <div className="text-[9px] tb:text-xs font-bold text-on-surface uppercase tracking-widest opacity-80">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
