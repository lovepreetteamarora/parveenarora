'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Awards() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000000] uppercase tracking-wide mb-6">
            Recognized <span className="text-[#E01A2C]">&</span> Awarded
          </h2>
          <div className="w-24 h-1 bg-[#E01A2C] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col w-full items-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative w-full max-w-6xl bg-[#000000] rounded-2xl shadow-2xl flex items-center justify-center p-8 md:p-12 overflow-hidden"
           >
             {/* Subtle background pattern/gradient for the banner */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#000000] to-[#111111] opacity-80"></div>
             
             <div className="relative w-full max-w-5xl aspect-[5/1] md:aspect-[6/1] drop-shadow-lg">
               <Image 
                 src="/elements.png" 
                 alt="Team Arora Awards" 
                 fill 
                 className="object-contain" 
                 referrerPolicy="no-referrer" 
                 unoptimized
               />
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
