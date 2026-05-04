'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  {
    id: 1,
    src: "/thumbnails/banner-1.png",
    alt: "Parveen Arora - 20 Years in the Business"
  },
  {
    id: 2,
    src: "/thumbnails/banner-2.jpg",
    alt: "Parveen Arora - 4500+ Transactions"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // Auto-play the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-50 mt-0 group">
      
      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={bannerImages[currentIndex].src}
              alt={bannerImages[currentIndex].alt}
              fill
              className="object-cover md:object-contain object-center bg-slate-50"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle gradient at the bottom for text readability and blending */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Slider Controls (shows on hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-white text-slate-900 border border-slate-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm hidden md:flex"
        aria-label="Previous banner"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 hover:bg-white text-slate-900 border border-slate-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm hidden md:flex"
        aria-label="Next banner"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative z-30 w-full h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">

        {/* Floating Actions Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-4 right-4 sm:left-auto sm:right-6 lg:right-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-center sm:justify-end pointer-events-auto"
        >
          <a href="#evaluation" className="bg-white/80 text-slate-900 border border-slate-200 backdrop-blur-md rounded-full px-5 py-3 md:px-6 md:py-4 font-semibold shadow-lg flex items-center justify-center gap-3 hover:bg-white transition whitespace-nowrap">
             <Mail className="w-5 h-5 opacity-70" />
             <span className="text-sm md:text-base tracking-wide">Message Parveen Now</span>
          </a>
          <a href="tel:4165550198" className="bg-[#000000] text-white font-bold text-sm md:text-lg flex items-center justify-center gap-2 rounded-full px-5 py-3 w-full sm:w-auto hover:bg-[#111111] transition whitespace-nowrap shadow-xl">
             <span className="hidden sm:inline opacity-90 font-medium">Call Parveen Now:</span>
             <Phone className="w-5 h-5" /> 416-910-8923
          </a>
        </motion.div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-[#E01A2C] w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Digital Impact Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-24 left-10 lg:left-16 z-[100] hidden md:flex items-center gap-5 bg-white rounded-3xl p-5 pointer-events-auto shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100"
      >
        <div className="flex -space-x-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100 relative shadow-sm">
              <Image 
                src={`https://picsum.photos/seed/face${i}/100/100`} 
                alt="Digital Community Member" 
                fill
                className="object-cover"
              />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-white bg-[#000000] flex items-center justify-center text-[10px] font-bold text-white z-10 shadow-sm">
            +30K
          </div>
        </div>
        <div className="pr-2">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-2.5 h-2.5 bg-[#E01A2C] rounded-full animate-ping"></div>
            <p className="text-slate-900 font-bold text-xl leading-none tracking-tight">50M+ Views</p>
          </div>
          <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold leading-none">Global Digital Community</p>
        </div>
      </motion.div>
    </section>
  );
}
