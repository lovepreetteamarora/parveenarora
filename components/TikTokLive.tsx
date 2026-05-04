'use client';
import Script from 'next/script';
import { motion } from 'motion/react';

export default function TikTokLive() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
            <span className="text-[#E01A2C] font-bold tracking-wider uppercase text-sm">Real-Time Impact</span>
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
            Live <span className="font-bold text-[#000000]">TikTok Feed.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Stay updated with our latest property tours, market advice, and behind-the-scenes content directly from TikTok.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-50"
        >
          <div className="sk-tiktok-feed" data-embed-id="25678007"></div>
          <Script 
            src="https://widgets.sociablekit.com/tiktok-feed/widget.js" 
            strategy="lazyOnload"
          />
        </motion.div>
      </div>
    </section>
  );
}
