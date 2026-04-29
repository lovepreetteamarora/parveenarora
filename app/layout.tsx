import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from "@/lib/utils";

const gotham = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gotham',
});

const nyght = localFont({
  src: [
    {
      path: '../public/fonts/NyghtSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NyghtSerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nyght',
});

const aston = localFont({
  src: [
    {
      path: '../public/fonts/Aston-Script.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aston',
});

const monument = localFont({
  src: [
    {
      path: '../public/fonts/MonumentExtended-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonumentExtended-Ultrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-monument',
});

const appleGaramond = localFont({
  src: [
    {
      path: '../public/fonts/AppleGaramond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AppleGaramond-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AppleGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-luxury',
});

const rocGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/RocGrotesk-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-roc',
});

export const metadata: Metadata = {
  title: 'Parveen Arora | Top Ranked Broker of Record',
  description: 'Parveen Arora - #1 Ranked Realtor in Brampton and Mississauga. Expert in Resale, Pre-construction, and Commercial Real Estate.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(gotham.variable, nyght.variable, aston.variable, monument.variable, appleGaramond.variable, rocGrotesk.variable, "antialiased")}>
      <body suppressHydrationWarning className="font-sans text-slate-900 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
