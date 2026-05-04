'use client';
import Script from 'next/script';
import { motion } from 'motion/react';

export default function GoogleReviewsLive() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
            <span className="text-[#E01A2C] font-bold tracking-wider uppercase text-sm">Verified Trust</span>
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Live <span className="font-bold text-[#000000]">Google Reviews.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our reputation is built on the success of our clients. Read our latest verified reviews directly from Google.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-50 p-4"
        >
          <div className="sk-ww-google-reviews" data-embed-id="25678734"></div>
          <Script 
            src="https://widgets.sociablekit.com/google-reviews/widget.js" 
            strategy="lazyOnload"
          />
        </motion.div>
      </div>
    </section>
  );
}
