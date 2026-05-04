'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

export default function About() {
  const highlights = [
    'RE/MAX Luminary of Distinction (2024)',
    '#1 RE/MAX Team in Canada (2018)*',
    'Platinum VIP Access to Top Builders',
    'Licensed in Ontario & New Brunswick',
  ];

  return (
    <section id="about" className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-200/60">
      {/* Subtle Architectural Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      {/* Decorative Geometric Accents */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent opacity-60"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E01A2C]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#000000]/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#E01A2C]"></div>
              <span className="text-[#E01A2C] font-bold tracking-[0.3em] uppercase text-[10px]">Institutional Authority</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Brampton's <span className="text-[#E01A2C] italic">#1 Realtor.</span> <br />
              <span className="text-slate-500 font-medium text-3xl md:text-5xl leading-tight">Broker of Record & <br />Top Real Estate Expert.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light">
              As the <strong className="font-bold text-slate-900">Broker of Record for RE/MAX Optimum Realty</strong> and the recognized #1 Real Estate Agent in Brampton, Parveen Arora has architected a dominant institutional presence across the <span className="text-[#000000] font-medium">GTA and Atlantic Canada</span>. With a career spanning over two decades and 5,000+ successful transactions, Parveen delivers unmatched expertise in residential resale and high-yield <span className="text-[#E01A2C] font-semibold">Platinum VIP Pre-Construction</span> investments with industry leaders like <strong className="text-slate-900">Mattamy, Daniels, and Tridel</strong>.
            </p>
            <div className="mb-12">
               <p className="font-signature text-6xl text-[#000000] -rotate-2 origin-left opacity-80">Parveen Arora</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white p-1 rounded-full shadow-sm border border-slate-200 group-hover:border-[#E01A2C]/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#E01A2C] shrink-0" />
                  </div>
                  <span className="text-slate-600 font-medium text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The Cinematic Video Dialog */}
            <div className="relative w-full max-w-md mx-auto group">
              {/* Decorative Frame Glow */}
              <div className="absolute inset-0 bg-[#E01A2C]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <HeroVideoDialog
                videoSrc="/videos/podcast.mp4"
                thumbnailSrc="/podcast.png"
                thumbnailAlt="Among Great Company - Riverview South Oakville"
                isVertical={true}
                animationStyle="from-center"
                className="w-full relative z-10"
              />
              
              {/* Floating Badge on Video - repositioned for dialog */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white border border-slate-100 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 hidden md:block">
                 <p className="text-[#000000] font-sans font-bold text-2xl uppercase tracking-tighter leading-none mb-1">Among Great Company</p>
                 <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Residential & Pre-Con Expert</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
