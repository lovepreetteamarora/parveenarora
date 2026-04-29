'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const regions = [
  {
    name: 'Brampton',
    specialty: 'Credit Valley',
    description: 'Specializing in high-demand residential areas with top-tier schooling and rapid community development.',
    image: 'https://www.teamarora.com/wp-content/themes/team-arora/images/brampton-scaled.jpg',
    stats: 'Highest Sales Volume',
  },
  {
    name: 'Mississauga',
    specialty: 'East Credit',
    description: 'Expertise in luxury homes and prime accessible locations. Recognized as a Best Real Estate Agent in Mississauga.',
    image: 'https://www.teamarora.com/wp-content/themes/team-arora/images/mississauga.jpg',
    stats: 'Top Rated Agent 2023',
  },
  {
    name: 'Cambridge',
    specialty: 'Halton Hills',
    description: 'Deep local knowledge in Cambridge and surrounding Halton Hills, securing premium value for detached homes.',
    image: 'https://www.teamarora.com/wp-content/themes/team-arora/images/halton-hills.jpg',
    stats: 'Expanding Market Leader',
  },
  {
    name: 'Toronto',
    specialty: 'Downtown Core',
    description: 'Specialized strategies for the high-velocity Toronto market, from luxury condos to historic freehold properties.',
    image: 'https://www.teamarora.com/wp-content/themes/team-arora/images/toronto.jpg',
    stats: 'Global Investment Hub',
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
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Featured Neighborhoods</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Leveraging deep market insights to secure the best opportunities in the most sought-after Peel Region communities.
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
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-1">{region.name}</h3>
                    <p className="text-[#E01A2C] font-bold uppercase tracking-widest text-[10px]">Focus: {region.specialty}</p>
                  </div>
                  <div className="bg-[#000000] p-3 rounded-full text-white">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {region.description}
                </p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{region.stats}</span>
                  <Link href={`#${region.name.toLowerCase()}`} className="text-[#E01A2C] uppercase text-xs font-bold tracking-widest hover:text-[#000000] transition-colors flex items-center gap-1">
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
