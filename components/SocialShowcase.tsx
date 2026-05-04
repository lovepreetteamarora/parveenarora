'use client';
import { motion } from 'motion/react';
import { Instagram, Users, Eye, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

const socialPosts = [
  {
    id: 1,
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@teamarorarealty/video/7531379367402949893',
    embedUrl: 'https://www.tiktok.com/embed/v2/7531379367402949893',
    title: '7 AM TO 7 PM Schedule',
    views: '329K',
    thumbnail: '/thumbnails/social-1.png'
  },
  {
    id: 2,
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C8CwwryuIIc/',
    embedUrl: 'https://www.instagram.com/reel/C8CwwryuIIc/embed',
    title: 'Buy Property Today',
    views: '2.6M',
    thumbnail: '/thumbnails/social-2.png'
  },
  {
    id: 3,
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@parveenarorarealestate/video/7519539915160292614',
    embedUrl: 'https://www.tiktok.com/embed/v2/7519539915160292614',
    title: 'Real Estate Developer Insights',
    views: '112K',
    thumbnail: '/thumbnails/social-3.png'
  },
  {
    id: 4,
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DXFlmpiTQDz/',
    embedUrl: 'https://www.instagram.com/reel/DXFlmpiTQDz/embed',
    title: 'Luxury Property Excellence',
    views: '8.2K',
    thumbnail: '/thumbnails/social-4.png'
  }
];

export default function SocialShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="media" className="py-24 bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E01A2C]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <div className="w-2 h-2 bg-[#E01A2C] rounded-full animate-pulse shadow-[0_0_10px_rgba(224,26,44,0.5)]"></div>
            <span className="text-[#E01A2C] font-bold tracking-[0.2em] uppercase text-[10px]">Live Digital Impact</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Unmatched <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#E01A2C] to-[#BE1625]">Digital Dominance.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto font-medium"
          >
            Harnessing viral content to create maximum exposure for every listing.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Eye, label: 'Total Content Views', value: '50M+' },
            { icon: Users, label: 'Digital Community', value: '30K+' },
            { icon: TrendingUp, label: 'Monthly Growth', value: '15%' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white backdrop-blur-md border border-slate-200 p-8 rounded-2xl flex items-center gap-6 group hover:bg-slate-50 transition-colors shadow-sm"
            >
              <div className="p-4 bg-[#E01A2C]/10 rounded-xl group-hover:bg-[#E01A2C]/20 transition-colors">
                <stat.icon className="w-8 h-8 text-[#E01A2C]" />
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Embed Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
          {mounted ? (
            socialPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group flex flex-col items-center"
              >
                <HeroVideoDialog
                  videoSrc={post.embedUrl}
                  thumbnailSrc={post.thumbnail}
                  thumbnailAlt={post.title}
                  isVertical={true}
                  animationStyle="from-center"
                  className="w-full"
                />
                
                {/* View Count Overlay (Floating) */}
                <div className="mt-8 bg-white text-slate-950 px-8 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl transition-transform group-hover:scale-105 border border-slate-100">
                  <div className="w-2 h-2 bg-[#E01A2C] rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{post.views} VIEWS</span>
                </div>
                <h4 className="mt-6 text-slate-400 font-bold uppercase text-[9px] tracking-[0.2em]">{post.title}</h4>
              </motion.div>
            ))
          ) : (
            <div className="col-span-4 h-[400px] flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-[#E01A2C]/20 border-t-red-600 rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://www.instagram.com/parveenarorarealestate/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#E01A2C] hover:text-white transition-all shadow-xl"
          >
            <Instagram className="w-4 h-4" /> Follow Instagram
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@teamarorarealty"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 border border-slate-200 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all shadow-xl"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 5.35-.14 10.71-.13 16.06-1.15.28-2.33.56-3.52.56-1.53.01-3.13-.23-4.51-.95-2.28-1.11-3.72-3.39-3.76-5.96-.06-2.37 1.09-4.71 3-5.91 1.48-.96 3.32-1.33 5.05-1.04.01-1.39.01-2.78.01-4.17-1.36-.26-2.72-.25-4.08-.03-.01-2.34-.02-4.68-.02-7.02z" />
            </svg>
            Follow TikTok
          </motion.a>
        </div>
      </div>
    </section>
  );
}
