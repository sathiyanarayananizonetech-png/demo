import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GalleryMobileView() {
  const chapters = [
    {
      id: "01",
      title: "The Luminous Gaze",
      description: "Precision lash artistry and orbital contouring that redefines the window to your soul.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Sculpted Radiance",
      description: "Professional aesthetician applying gold-infused serums in a serene luxury spa setting.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Architectural Flow",
      description: "Precision cuts and dimensional coloring that move with the rhythm of your lifestyle.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar lg:hidden">
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          className="relative h-screen w-full snap-start flex flex-col justify-end overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt={chapter.title}
              src={chapter.image}
              className="w-full h-full object-cover grayscale-[20%] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-on-surface/80 shadow-[inset_0_-120px_100px_-50px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Chapter Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 p-8 pb-32 space-y-6"
          >
            <div className="flex items-center space-x-4">
              <span className="h-[2px] w-12 bg-primary" />
              <span className="uppercase tracking-[0.3em] font-bold text-xs text-primary">Chapter {chapter.id}</span>
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight drop-shadow-xl">
              {chapter.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl max-w-[90%]">
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                {chapter.description}
              </p>
              <button className="mt-6 flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest bg-white py-3 px-6 rounded-xl shadow-lg">
                View Gallery
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </section>
      ))}

      {/* Vertical Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <div className="w-1 h-12 bg-primary/20 rounded-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            style={{ height: '33%' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </div>
    </div>
  );
}
