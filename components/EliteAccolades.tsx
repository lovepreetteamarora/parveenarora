'use client';
import { motion } from 'motion/react';
import { BorderBeam } from './ui/border-beam';
import { ParamountAward } from './ui/ParamountAward';
import { LuminaryAward } from './ui/LuminaryAward';
import { LifetimeAward } from './ui/LifetimeAward';
import { HallOfFameAward } from './ui/HallOfFameAward';
import { CircleOfLegendsAward } from './ui/CircleOfLegendsAward';

export default function EliteAccolades() {
  return (
    <section id="accolades" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#E01A2C]/30"></div>
            <p className="text-[10px] font-bold text-[#E01A2C] uppercase tracking-[0.5em]">Global Recognition</p>
            <div className="h-px w-8 bg-[#E01A2C]/30"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight mb-4">
            Elite Global <span className="text-[#E01A2C] italic">Accolades.</span>
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* The Trophy Case Container */}
          <div className="relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 md:p-16 overflow-hidden shadow-sm">
            <BorderBeam duration={15} lightColor="#E01A2C" lightWidth={800} borderWidth={1} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 items-center justify-items-center">
              {/* Paramount */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <ParamountAward className="w-full h-full text-slate-800 transition-colors duration-700 group-hover/award:text-[#E01A2C]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Paramount</p>
              </div>

              {/* Luminary */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <LuminaryAward className="w-full h-full text-slate-800 transition-colors duration-700 group-hover/award:text-[#E01A2C]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Luminary</p>
              </div>

              {/* Lifetime Achievement */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <LifetimeAward className="w-full h-full text-slate-800 transition-colors duration-700 group-hover/award:text-[#E01A2C]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Lifetime</p>
              </div>

              {/* Hall of Fame */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <HallOfFameAward className="w-full h-full text-slate-800 transition-colors duration-700 group-hover/award:text-[#E01A2C]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Hall of Fame</p>
              </div>

              {/* Circle of Legends */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <CircleOfLegendsAward className="w-full h-full text-slate-800 transition-colors duration-700 group-hover/award:text-[#E01A2C]" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Circle of Legends</p>
              </div>

              {/* Chairman's */}
              <div className="relative group/award cursor-help text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 relative mb-4 transition-all duration-700 group-hover/award:scale-110 group-hover/award:drop-shadow-[0_0_30px_rgba(224,26,44,0.15)]">
                  <img 
                    src="/Awards_Club_logos_navy_Chairmans_Club_Team.png" 
                    alt="RE/MAX Chairman's Club" 
                    className="w-full h-full object-contain opacity-80 group-hover/award:opacity-100 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] opacity-0 group-hover/award:opacity-100 transition-all duration-500 translate-y-2 group-hover/award:translate-y-0">Chairman's Club</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
