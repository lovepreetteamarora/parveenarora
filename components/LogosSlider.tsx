'use client';
import Image from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const logos = [
  {
    id: "logo-1",
    description: "RE/MAX Global",
    image: "/thumbnails/remax-balloon.png",
    className: "h-12 w-auto grayscale invert brightness-200 opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-2",
    description: "Figma",
    image: "/thumbnails/figma.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "/thumbnails/nextjs.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "/thumbnails/supabase.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "/thumbnails/vercel.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
];

export function LogosSlider() {
  return (
    <div className='relative w-full py-20 bg-slate-950/50 backdrop-blur-sm overflow-hidden'>
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
         <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold">Trusted Ecosystem & Partners</p>
      </div>
      
      <div className='relative h-[100px] w-full'>
        <InfiniteSlider 
          className='flex h-full w-full items-center' 
          duration={40}
          gap={80}
        >
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className='flex w-48 items-center justify-center'
            >
              <Image
                src={logo.image}
                alt={logo.description}
                width={192}
                height={48}
                className={logo.className}
                unoptimized={logo.image.endsWith('.svg')}
              />
            </div>
          ))}
        </InfiniteSlider>
        
        {/* Cinematic Edge Blurs */}
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 left-0 h-full w-[150px] md:w-[300px] z-10'
          direction='left'
          blurIntensity={1.5}
        />
        <ProgressiveBlur
          className='pointer-events-none absolute top-0 right-0 h-full w-[150px] md:w-[300px] z-10'
          direction='right'
          blurIntensity={1.5}
        />
      </div>
    </div>
  );
}
