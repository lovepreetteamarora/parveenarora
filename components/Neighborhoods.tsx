'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const regions = [
  {
    name: 'Brampton',
    specialty: 'Castlemore & Credit Valley',
    description: 'Specializing in luxury estates and high-demand residential areas like Springdale with top-tier schooling and rapid development.',
    image: '/thumbnails/brampton.jpg',
    stats: 'Highest Sales Volume',
    link: 'https://www.teamarora.com/house-for-sale-in-brampton/',
  },
  {
    name: 'Mississauga',
    specialty: 'East Credit & Lorne Park',
    description: 'Expertise in high-value luxury homes and prime accessible locations. Recognized as a Best Real Estate Agent in Mississauga.',
    image: '/thumbnails/mississauga.jpg',
    stats: 'Top Rated Agent 2024',
    link: 'https://www.teamarora.com/homes-for-sale-mississauga/',
  },
  {
    name: 'Cambridge',
    specialty: 'West Galt',
    description: 'Strategic market positioning in Cambridge, securing premium value for detached homes and investment properties.',
    image: '/thumbnails/toronto.jpg', // Temporarily using toronto image or I can use a placeholder
    stats: 'Expanding Market Leader',
    link: 'https://www.teamarora.com/house-for-sale-in-cambridge/',
  },
  {
    name: 'Halton Hills',
    specialty: 'Georgetown',
    description: 'Deep local knowledge in Halton Hills and surrounding areas, focusing on community-driven growth and value.',
    image: '/thumbnails/halton-hills.jpg',
    stats: 'High Demand Growth',
    link: 'https://www.teamarora.com/house-for-sale-halton-hills/',
  },
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-[#E01A2C] w-5 h-5" />
            <span className="text-[#E01A2C] font-bold tracking-wider uppercase text-sm">Target Communities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Prime Brampton Real Estate</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            As the #1 Realtor in Brampton, Parveen Arora leverages deep market insights to secure the best opportunities across the Peel Region and the GTA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, idx) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-1">{region.name}</h3>
                    <p className="text-[#E01A2C] font-bold uppercase tracking-widest text-[10px]">Focus: {region.specialty}</p>
                  </div>
                  <Link 
                    href={region.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#000000] p-3 rounded-full text-white hover:bg-[#E01A2C] transition-colors shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {region.description}
                </p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{region.stats}</span>
                  <Link 
                    href={region.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#E01A2C] uppercase text-xs font-bold tracking-widest hover:text-[#000000] transition-colors flex items-center gap-1"
                  >
                    Explore Listings
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
