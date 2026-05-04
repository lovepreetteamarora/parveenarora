'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayCircle, ChevronLeft, ChevronRight, X, Quote, Instagram } from 'lucide-react';
import Image from 'next/image';
import { TikTokEmbed, InstagramEmbed } from 'react-social-media-embed';

const videoTestimonials = [
  {
    id: 1,
    client: "Team Arora Success Story",
    location: "GTA Market Dominance",
    quote: "Building a brand is about trust and results. Our success story is a reflection of the hard work we put in for every single client.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    videoSrc: "https://www.tiktok.com/@teamarorarealty/video/7420510786243644678",
    type: 'tiktok'
  },
  {
    id: 2,
    client: "Luxury Deal Achievement",
    location: "Commercial & Residential Deals",
    quote: "Closing a $10M deal requires precision, strategy, and an unmatched understanding of the market. This is how we deliver for our clients.",
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    videoSrc: "https://www.tiktok.com/@teamarorarealty/video/7415311230438624517",
    type: 'tiktok'
  },
  {
    id: 3,
    client: "Market Risk Strategy",
    location: "Visionary Real Estate",
    quote: "Real estate is about taking calculated risks. Our vision helps clients navigate the biggest decisions of their lives with confidence.",
    thumbnail: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
    videoSrc: "https://www.tiktok.com/@teamarorarealty/video/7429780199987825926",
    type: 'tiktok'
  },
  {
    id: 4,
    client: "Global Reach Achievement",
    location: "GTA Digital Influence",
    quote: "Parveen's digital presence is mind-blowing. He doesn't just list homes; he makes them go viral. The results speak for themselves.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    videoSrc: "https://www.tiktok.com/@teamarorarealty/video/7531379367402949893",
    type: 'tiktok'
  }
];

export default function VideoTestimonials() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<typeof videoTestimonials[0] | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.clientWidth + 50 : carouselRef.current.clientWidth - 50;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
              <span className="text-[#E01A2C] font-bold tracking-wider uppercase text-sm">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Real Clients. <br />
              <span className="font-bold text-[#000000]">Real Results.</span>
            </h2>
          </div>
          
          {/* Carousel Nav Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#000000] hover:text-white hover:border-[#000000] transition-all shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#000000] hover:text-white hover:border-[#000000] transition-all shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videoTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-start shrink-0 w-[80vw] md:w-[380px] flex flex-col group relative"
            >
              <div 
                className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-100 bg-slate-100"
                onClick={() => setActiveVideo(testimonial)}
              >
                <Image 
                  src={testimonial.thumbnail}
                  alt={`Video from ${testimonial.client}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                
                {/* Platform Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 flex items-center gap-2 border border-white">
                  {testimonial.type === 'instagram' ? (
                    <Instagram className="w-4 h-4 text-slate-900" />
                  ) : testimonial.type === 'tiktok' ? (
                    <svg className="w-4 h-4 text-slate-900 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 5.35-.14 10.71-.13 16.06-1.15.28-2.33.56-3.52.56-1.53.01-3.13-.23-4.51-.95-2.28-1.11-3.72-3.39-3.76-5.96-.06-2.37 1.09-4.71 3-5.91 1.48-.96 3.32-1.33 5.05-1.04.01-1.39.01-2.78.01-4.17-1.36-.26-2.72-.25-4.08-.03-.01-2.34-.02-4.68-.02-7.02z" />
                    </svg>
                  ) : null}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900">{testimonial.type}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#E01A2C] rounded-full p-5 transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(220,28,46,0.6)] flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white fill-current" />
                  </div>
                </div>
              </div>

              {/* Text Content below Video Thumbnail */}
              <div className="pt-8 px-4">
                <Quote className="w-10 h-10 text-[#000000] opacity-10 mb-2" />
                <p className="text-xl font-serif text-slate-800 leading-snug mb-6 line-clamp-3 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#E01A2C]"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-tighter text-base">{testimonial.client}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#000000] font-bold mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Playback Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-[#E01A2C] transition-colors p-2 z-20"
              aria-label="Close video"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-black flex flex-col items-center border border-white/10"
            >
              {mounted && activeVideo.type === 'instagram' ? (
                <div className="w-full h-full bg-black">
                   <InstagramEmbed url={activeVideo.videoSrc} width="100%" height="100%" />
                </div>
              ) : mounted && activeVideo.type === 'tiktok' ? (
                <div className="w-full h-full bg-black">
                   <TikTokEmbed url={activeVideo.videoSrc} width="100%" height="100%" />
                </div>
              ) : (
                <video 
                  className="w-full h-full object-cover bg-black"
                  src={activeVideo.videoSrc} 
                  controls 
                  autoPlay 
                  playsInline
                />
              )}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pointer-events-none">
                <h3 className="text-white font-bold text-lg md:text-2xl">{activeVideo.client}</h3>
                <p className="text-gray-300 text-sm md:text-base">{activeVideo.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
