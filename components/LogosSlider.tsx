'use client';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const logos = [
  {
    id: "logo-1",
    description: "RE/MAX Global",
    image: "https://www.remax.ca/assets/images/remax-logo.svg",
    className: "h-8 w-auto grayscale invert brightness-200 opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-4",
    description: "Toronto Real Estate Board",
    image: "https://www.trreb.ca/index.php/images/logo.png",
    className: "h-10 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto grayscale invert opacity-60 hover:opacity-100 transition-all",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
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
              <img
                src={logo.image}
                alt={logo.description}
                className={logo.className}
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
