import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { label: "Happy Clients", value: "50,000+" },
  { label: "Expert Stylists", value: "15+" },
  { label: "Years of Legacy", value: "12+" },
  { label: "Store Locations", value: "05+" },
];

export function CommunityStatsSection() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 relative bg-background overflow-hidden border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-section-title font-black text-on-surface mb-6 uppercase tracking-tighter italic font-serif">
              Join India&apos;s{" "}
              <span className="text-primary underline decoration-secondary/30 underline-offset-8">
                Largest Community
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-on-surface/80 max-w-2xl mx-auto font-medium">
              Our legacy is built on the trust of thousands who have experienced
              the Zen Tonez touch of excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-secondary/5 border border-secondary/10 shadow-luxury-soft transform-gpu transition-all duration-500 hover:shadow-luxury-deep hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-primary mb-2 sm:mb-4 font-serif italic">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-on-surface uppercase tracking-widest opacity-80">
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
