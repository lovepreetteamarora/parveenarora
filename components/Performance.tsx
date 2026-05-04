'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { ShineBorder } from './ui/shine-border';
import { BorderBeam } from './ui/border-beam';

export default function Performance() {
  return (
    <section id="performance" className="pb-24 pt-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Background Elements - Subtle & Atmospheric */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <p className="text-[18vw] font-sans font-black text-slate-900 leading-none tracking-tighter text-center mt-20 opacity-[0.03] uppercase select-none">
          Results
        </p>
      </div>
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-[#000000]/10 rounded-full blur-[140px]"></div>
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-[#E01A2C]/5 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 mb-6 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#E01A2C] animate-pulse"></span>
             <span className="text-slate-500 font-bold tracking-[0.4em] uppercase text-[8px]">Benchmark Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight tracking-tight">
            A Mastery of the Closing. <br />
            <span className="text-[#E01A2C] italic">A Legacy of Results.</span>
          </h2>
        </div>

        {/* Achievement Bar - Executive Gold Bezel Display */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-around items-center gap-8 relative"
        >
          <BorderBeam duration={12} lightColor="#E01A2C" lightWidth={1200} borderWidth={1} />
          
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-sans font-bold text-slate-900 mb-1 tracking-tighter group-hover:scale-105 transition-transform duration-500">5000+</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Lifetime Transactions</p>
          </div>
          <div className="hidden md:block h-10 w-px bg-slate-200"></div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-sans font-bold text-slate-900 mb-1 tracking-tighter group-hover:scale-105 transition-transform duration-500">20+ Years</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Industry Experience</p>
          </div>
          <div className="hidden md:block h-10 w-px bg-slate-200"></div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-sans font-bold text-[#E01A2C] mb-1 tracking-tighter group-hover:scale-105 transition-transform duration-500">$3.5B+</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Lifetime Sales Volume</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Google Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-[#000000]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-full aspect-[3/4]">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 relative">
                <BorderBeam duration={5} lightColor="#000000" lightWidth={600} borderWidth={4} />
                
                <div className="relative w-full h-16 mb-4">
                    <Image 
                      src="/thumbnails/google-review.png" 
                      alt="Parveen Arora - Google Reviews #1 Realtor Brampton" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                </div>
                <div className="text-center w-full">
                  <p className="text-3xl font-sans font-black text-slate-900 mb-1 leading-none tracking-tighter">418+</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">Verified Reviews</p>
                  <div className="flex justify-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-[#E01A2C] text-[#E01A2C]" />
                    ))}
                  </div>
                  <a 
                    href="https://www.google.com/search?q=Team+Arora+Realty+-+No+%231+Real+estate+agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-[0.2em] py-4 rounded-full border border-slate-100 hover:bg-[#000000] hover:text-white hover:shadow-xl shadow-sm transition-all duration-300 text-center"
                  >
                    Read Reviews
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rate My Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-[#000000]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-full aspect-[3/4]">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 relative">
                <BorderBeam duration={7} lightColor="#000000" lightWidth={600} borderWidth={4} />
                
                <div className="relative w-full h-20 mb-6">
                  <Image 
                    src="/thumbnails/rank-my-agent.png" 
                    alt="Rank My Agent - Top Rated Real Estate Agent Brampton" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center w-full">
                  <p className="text-3xl font-sans font-black text-slate-900 mb-1 leading-none tracking-tighter">Top Rated</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-8">Agent of the Year</p>
                  <button className="w-full bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-[0.2em] py-4 rounded-full border border-slate-100 hover:bg-[#000000] hover:text-white hover:shadow-xl shadow-sm transition-all duration-300">
                    Read Reviews
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Verified Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-[#E01A2C]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-full aspect-[3/4]">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 relative">
                <BorderBeam duration={6} lightColor="#E01A2C" lightWidth={600} borderWidth={4} />
                
                <div className="relative w-full h-20 mb-6">
                  <Image 
                    src="/rate-agent-badhe.svg" 
                    alt="Parveen Arora - Verified Achievement Award" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <div className="text-center w-full">
                  <p className="text-3xl font-sans font-black text-slate-900 mb-1 leading-none tracking-tighter">Best of 2024</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-8">Verified Achievement</p>
                  <button className="w-full bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-[0.2em] py-4 rounded-full border border-slate-100 hover:bg-[#E01A2C] hover:text-white hover:shadow-xl shadow-sm transition-all duration-300">
                    Read Reviews
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Facebook Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-[#000000]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-full aspect-[3/4]">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 relative">
                <BorderBeam duration={8} lightColor="#000000" lightWidth={600} borderWidth={4} />
                
                <div className="relative w-full h-16 mb-4">
                  <Image 
                    src="/thumbnails/facebook-rating.png" 
                    alt="Parveen Arora - 5 Star Facebook Rating" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                </div>
                <div className="text-center w-full">
                  <p className="text-3xl font-sans font-black text-slate-900 mb-1 leading-none tracking-tighter">5 Stars</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">Community Trust</p>
                  <div className="flex justify-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-[#E01A2C] text-[#E01A2C]" />
                    ))}
                  </div>
                  <button className="w-full bg-slate-50 text-slate-800 text-[11px] font-bold uppercase tracking-[0.2em] py-4 rounded-full border border-slate-100 hover:bg-[#000000] hover:text-white hover:shadow-xl shadow-sm transition-all duration-300">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
