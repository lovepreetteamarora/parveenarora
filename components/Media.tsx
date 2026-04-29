'use client';
import { motion } from 'motion/react';
import { PlayCircle, Instagram, Youtube, Video, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@parveenarorarealestate",
  instagram: "https://www.instagram.com/parveenarorarealestate/",
  youtube: "https://www.youtube.com/@teamarora5730"
};

const SOCIAL_VIDEOS = [
  {
    title: "Don't just look THE $1,30,000 REBATE",
    views: "681K",
    platform: "tiktok"
  },
  {
    title: "If you want to BUY PROPERTY TODAY",
    views: "2.6M",
    platform: "instagram"
  },
  {
    title: "WHEN WE BORROW too much to invest",
    views: "3.2M",
    platform: "tiktok"
  },
  {
    title: "You don't have to SPEND YOUR OWN MONEY",
    views: "5M",
    platform: "instagram"
  },
  {
    title: "Dubai WILL HAVE The Same Time",
    views: "68K",
    platform: "tiktok"
  },
  {
    title: "We are blaming REALTORS",
    views: "1.8M",
    platform: "instagram"
  },
  {
    title: "In Canada CREDIT CARDS Are Promoted",
    views: "5.7M",
    platform: "tiktok"
  },
  {
    title: "Wealth Is CREATED By Behavior",
    views: "500K",
    platform: "instagram"
  }
];

// Custom TikTok icon since Lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 448 512"
  >
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
  </svg>
);

export default function Media() {
  return (
    <section id="media" className="py-24 bg-slate-50 border-t border-gray-200 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
            <span className="text-[#E01A2C] font-bold tracking-wider uppercase text-sm">Market Insights & Advice</span>
            <div className="w-10 h-[2px] bg-[#E01A2C]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
            Connect With <span className="font-bold text-[#000000]">Parveen Arora</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={SOCIAL_LINKS.tiktok} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-white bg-black hover:bg-gray-800 px-6 py-4 transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <TikTokIcon className="w-4 h-4" /> @parveenarorarealestate
            </a>
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 px-6 py-4 transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Instagram className="w-4 h-4" /> @parveenarorarealestate
            </a>
            <a 
              href={SOCIAL_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-white bg-[#E01A2C] hover:bg-[#BE1625] px-6 py-4 transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Youtube className="w-5 h-5" /> @teamarora5730
            </a>
          </div>
        </div>

        {/* Highlight YouTube Video */}
        <motion.a 
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative block w-full max-w-4xl mx-auto rounded-2xl overflow-hidden aspect-[21/9] mb-16 shadow-2xl border-4 border-white"
        >
          <Image 
            src="https://picsum.photos/seed/remax-studio/1600/900"
            alt="Team Arora YouTube Banner"
            fill
            referrerPolicy="no-referrer"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-center justify-center">
            <div className="bg-[#E01A2C] p-4 rounded-full shadow-[0_0_30px_rgba(220,28,46,0.5)] group-hover:scale-110 transition-transform duration-300">
               <PlayCircle className="w-12 h-12 text-white fill-current" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
             <span className="bg-[#E01A2C] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-3 inline-block rounded-sm">Featured On YouTube</span>
             <h3 className="text-white text-2xl md:text-3xl font-serif font-bold tracking-tight">Ready to Conquer the Shifting Real Estate Market? Join Us Today.</h3>
          </div>
        </motion.a>

        {/* Viral Shorts/Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SOCIAL_VIDEOS.map((video, idx) => (
            <motion.a 
              key={idx}
              href={video.platform === 'tiktok' ? SOCIAL_LINKS.tiktok : SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-900 rounded-lg overflow-hidden aspect-[9/16] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image 
                src={`https://picsum.photos/seed/parveen${idx}/400/700`}
                alt={video.title}
                fill
                referrerPolicy="no-referrer"
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/90"></div>
              
              <div className="absolute top-3 right-3 opacity-90 drop-shadow-md">
                {video.platform === 'tiktok' ? (
                  <TikTokIcon className="w-5 h-5 text-white" />
                ) : (
                  <Instagram className="w-5 h-5 text-white" />
                )}
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                 {/* Highlighting specific keywords yellow/white like his actual videos */}
                 <h4 className="text-white font-bold leading-tight text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase">
                   <span className="text-[#E01A2C]">{video.title.split(' ').slice(0, 2).join(' ')} </span>
                   {video.title.split(' ').slice(2).join(' ')}
                 </h4>
                 <div className="flex items-center gap-1 mt-2 text-gray-300 text-xs font-bold">
                    <PlayCircle className="w-3 h-3" /> {video.views}
                 </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center pt-16">
           <a href={SOCIAL_LINKS.instagram} className="inline-flex items-center gap-2 text-[#000000] hover:text-[#E01A2C] uppercase text-xs font-bold tracking-widest transition-colors">
              View All Content <ExternalLink className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
}
