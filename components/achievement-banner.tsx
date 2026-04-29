'use client';
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";
import { motion } from "framer-motion";
import { Mail, Phone } from 'lucide-react';

export function AchievementBanner() {
  return (
    <div className="w-full bg-white relative flex flex-col justify-center min-h-[500px] md:min-h-[650px] overflow-hidden">
      {/* Dynamic White Spotlight */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 0%, .03) 0, hsla(0, 0%, 0%, .01) 50%, hsla(0, 0%, 0%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 0%, .02) 0, hsla(0, 0%, 0%, .01) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 0%, .01) 0, hsla(0, 0%, 0%, .01) 80%, transparent 100%)"
      />
      
      {/* Subtle Background Texture - Clean Slate */}
      <div 
        className="absolute inset-0 opacity-[0.02] bg-slate-900 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)", backgroundSize: '40px 40px' }}
      ></div>

      {/* Main content container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-20 flex items-center h-full">
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-24 pt-36 pb-20">
          
          {/* Left: The Performance Metric */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-col gap-6 mb-16">
                <div className="flex items-center gap-3 bg-slate-900/[0.03] border border-slate-900/5 px-4 py-2 rounded-full w-fit">
                  <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#E01A2C] uppercase">Career Achievement</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-slate-600 uppercase">4,500+ Transactions</span>
                </div>
                
                <h2 className="text-6xl md:text-[80px] font-sans font-black text-slate-900 leading-[0.95] tracking-tighter">
                  #1 Realtor <br />
                  <span className="text-[#E01A2C] italic font-medium text-4xl md:text-6xl">in Brampton.*</span>
                </h2>
                
                <p className="text-xs md:text-sm font-sans font-medium text-slate-400 tracking-[0.2em] uppercase mt-4">Ranked for Results. Driven by Excellence.</p>
              </div>
            </motion.div>

            {/* Combined Pillars Bar */}
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#E01A2C] rounded-full"></div>
                <p className="text-lg md:text-xl font-sans font-normal text-slate-900 uppercase tracking-tight">
                  Over <span className="font-bold text-[#E01A2C]">$3.5B</span> in Career Sales Volume
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#E01A2C] rounded-full"></div>
                <p className="text-lg md:text-xl font-sans font-normal text-slate-900 uppercase tracking-tight">
                  Over <span className="font-bold text-[#E01A2C]">20 Years</span> of Trusted Industry Experience
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-20 w-full lg:w-auto"
            >
              <a href="#evaluation" className="bg-[#E01A2C] text-white rounded-full px-10 py-5 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#BE1625] transition shadow-xl order-1">
                 <Mail className="w-4 h-4" />
                 <span>Message Parveen Now</span>
              </a>
              <a href="tel:4169108923" className="bg-white text-slate-900 border border-slate-200 rounded-full px-10 py-5 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-50 transition shadow-sm order-2">
                 <Phone className="w-4 h-4 opacity-70" />
                 <span>Call 416-910-8923</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait & Personal Brand */}
          <div className="relative flex flex-col items-center">
            
            {/* Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-[300px] md:w-[450px] lg:w-[480px] aspect-[4/5] z-40"
            >
              <div className="absolute inset-0 bg-[#E01A2C]/5 blur-[120px] rounded-full"></div>
              
              <Image 
                src="/parveen.png" 
                alt="Parveen Arora" 
                fill 
                className="object-contain object-bottom"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
            </motion.div>

            {/* The Name & Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center text-center relative z-50 mt-[-30px] md:mt-[-50px]"
            >
              <span className="text-xs font-sans font-bold tracking-[0.5em] text-[#E01A2C] uppercase mb-4">Broker of Record</span>
              <h1 className="text-6xl md:text-[56px] font-sans font-black text-slate-900 leading-none tracking-tighter drop-shadow-sm whitespace-nowrap">
                Parveen Arora
              </h1>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating RE/MAX Tag */}
      <div className="absolute top-1/2 right-10 -rotate-90 hidden xl:block">
        <span className="text-[10px] font-sans font-bold tracking-[1em] text-slate-200 uppercase">
          Optimum Realty Brokerage
        </span>
      </div>

      {/* Footer Info & Disclaimer */}
      <div className="absolute bottom-8 left-8 md:left-20 right-8 md:right-20 z-30 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex items-center gap-4 opacity-70">
          <span className="w-8 h-px bg-[#E01A2C]"></span>
          <p className="text-[9px] text-slate-500 font-sans font-medium tracking-widest uppercase">
            *2005 - 2026 Total Sale of Residential, Commercial Listings Sold, Buyers & Leases
          </p>
        </div>
        
        <p className="text-[9px] text-slate-500 font-sans font-medium tracking-widest uppercase opacity-70">
          **Top 100 Canada Teams Residential Commissions in Brampton Jan 2018 - Apr 2018
        </p>
      </div>
    </div>
  );
}
