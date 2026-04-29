import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from "@/lib/utils";

const gotham = localFont({
  src: [
    {
      path: './fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gotham',
});

const nyght = localFont({
  src: [
    {
      path: './fonts/NyghtSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NyghtSerif-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nyght',
});

const aston = localFont({
  src: [
    {
      path: './fonts/Aston-Script.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aston',
});

const monument = localFont({
  src: [
    {
      path: './fonts/MonumentExtended-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MonumentExtended-Ultrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-monument',
});

const appleGaramond = localFont({
  src: [
    {
      path: './fonts/AppleGaramond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AppleGaramond-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AppleGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-luxury',
});

const rocGrotesk = localFont({
  src: [
    {
      path: './fonts/RocGrotesk-Black.otf',
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
