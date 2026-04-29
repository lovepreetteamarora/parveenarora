'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

const youtubeTestimonials = [
  { 
    id: 1,
    client: "Maninder's Success Story",
    location: "From Listed to Sold in Just 5 Days",
    quote: "We had prepared for a long period on the market... at no time did we imagine 5 days. I had a very positive experience from start to finish.",
    videoSrc: "https://www.youtube.com/embed/5bfzL88diV8",
    thumbnail: "/maninder-success.jpg",
  }, 
  {
    id: 2,
    client: "Luxury Waterfront Acquisition",
    location: "Oakville Market Excellence",
    quote: "Negotiating a multi-million dollar waterfront property requires a level of expertise few possess. Parveen's team was exceptional throughout the process.",
    videoSrc: "https://www.youtube.com/embed/5bfzL88diV8", // Using same for demo
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  }, 
  {
    id: 3,
    client: "Portfolio Growth Strategy",
    location: "Investment Results",
    quote: "I've worked with many realtors, but Parveen's insight into market trends and ROI is unmatched. He doesn't just sell houses; he builds wealth.",
    videoSrc: "https://www.youtube.com/embed/5bfzL88diV8", // Using same for demo
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  } 
];

export default function YouTubeTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E01A2C]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#000000]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#E01A2C]"></div>
              <span className="text-[#E01A2C] font-bold tracking-[0.3em] uppercase text-[10px]">Client Chronicles</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Success <span className="text-[#E01A2C] italic">Stories.</span>
            </h2>
            <p className="text-slate-500 font-light text-lg mt-4">
              Experience the journey of our clients as they achieve their real estate dreams with Parveen Arora.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#E01A2C] hover:text-white hover:border-[#E01A2C] transition-all shadow-sm group"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#E01A2C] hover:text-white hover:border-[#E01A2C] transition-all shadow-sm group"
              aria-label="Next story"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {youtubeTestimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="snap-start shrink-0 w-[85vw] md:w-[600px] flex flex-col group"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#E01A2C]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <HeroVideoDialog
                  videoSrc={item.videoSrc}
                  thumbnailSrc={item.thumbnail}
                  thumbnailAlt={item.client}
                  isVertical={false}
                  animationStyle="from-center"
                  className="w-full relative z-10"
                />
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
                <Quote className="w-10 h-10 text-[#000000] opacity-10 mb-4" />
                <p className="text-slate-600 text-lg italic mb-8 leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-px bg-[#E01A2C]"></div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.15em] mb-1">
                      {item.client}
                    </p>
                    <p className="text-[9px] font-semibold text-[#E01A2C] uppercase tracking-widest">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
