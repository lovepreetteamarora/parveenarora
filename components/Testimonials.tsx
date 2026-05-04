'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    platform: 'Google Reviews',
    rating: 5.0,
    text: "We had an outstanding experience working with Parveen Arora, who is truly one of the top real estate agents in Mississauga. He expertly guided us through the successful sale of our home, making the entire process seamless, efficient, and stress-free.",
    author: "Aisha Khan",
    location: "Mississauga",
    image: "/thumbnails/client-1.jpg"
  },
  {
    platform: 'Google Reviews',
    rating: 5.0,
    text: "Excellent experience working with Naval Arora and Parveen Arora. From the very beginning, they were incredibly patient and dedicated, truly understanding our needs. Their expertise and advice were invaluable.",
    author: "Pradeep Vijay",
    location: "Brampton",
    image: "/thumbnails/client-2.jpg"
  },
  {
    platform: 'RankMyAgent',
    rating: 4.98,
    text: "Parveen provided immense support that went far beyond just closing the sale. His deep market insight in Credit Valley gave us complete confidence.",
    author: "Amrit S.",
    location: "Credit Valley",
    image: "/thumbnails/client-3.jpg"
  },
  {
    platform: 'Google Reviews',
    rating: 5.0,
    text: "We recently sold our home in Cambridge and had an excellent experience. Parveen Arora and his team are dedicated, results-driven professionals who truly understand the local market.",
    author: "Charan Kaur",
    location: "Cambridge",
    image: "/thumbnails/client-4.jpg"
  },
  {
    platform: 'Rate-My-Agent',
    rating: 4.93,
    text: "100% recommend! His aggressive and proactive strategies got our house sold above asking, and his home staging advice was absolutely spot on.",
    author: "Jessica M.",
    location: "East Credit",
    image: "/thumbnails/client-5.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 leading-tight">
              A Reputation <br />Built on <span className="font-bold text-[#E01A2C]">Results.</span>
            </h2>
            <div className="border-l-4 border-[#E01A2C] pl-6 mb-8">
              <p className="text-slate-600 text-lg leading-relaxed">
                Consistently rated as a top-performing realtor across Google and independent review platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-gray-100 group hover:border-[#E01A2C]/30 transition-colors">
                <div className="flex items-center gap-1 text-[#E01A2C] mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <p className="text-2xl font-bold text-slate-800">4.8</p>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">418+ Google Reviews</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-gray-100 group hover:border-[#E01A2C]/30 transition-colors">
                <p className="text-2xl font-bold text-slate-800 mb-1">4.98</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">RankMyAgent Rating</p>
              </div>
            </div>

            <a 
              href="https://www.google.com/search?q=Team+Arora+Realty+-+No+%231+Real+estate+agents" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E01A2C] font-bold uppercase tracking-widest text-[11px] hover:gap-3 transition-all group"
            >
              View All Google Reviews <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative min-h-[420px] md:min-h-[400px] overflow-hidden bg-white text-slate-900 border border-gray-100 shadow-[0_10px_40px_rgb(0,0,0,0.04)] rounded-[2.5rem] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-10 md:p-14 flex flex-col justify-center grow w-full"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex gap-1 text-[#E01A2C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                      <span className="text-[10px] font-bold text-[#000000] uppercase tracking-[0.2em]">{reviews[currentIndex].platform}</span>
                    </div>
                  </div>

                  <Quote className="w-12 h-12 text-[#E01A2C] opacity-10 mb-6" />
                  
                  <p className="text-xl md:text-3xl text-slate-700 italic mb-10 leading-relaxed font-serif">
                    &quot;{reviews[currentIndex].text}&quot;
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E01A2C]/10 shadow-sm">
                      <Image 
                        src={reviews[currentIndex].image} 
                        alt={reviews[currentIndex].author}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900 tracking-tight">
                        {reviews[currentIndex].author}
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1.5">
                        {reviews[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slider Controls */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white p-2 rounded-full shadow-xl border border-slate-50 z-20">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E01A2C] hover:text-white transition-all rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E01A2C] hover:text-white transition-all rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
