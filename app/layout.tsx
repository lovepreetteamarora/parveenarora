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
  title: 'Parveen Arora | #1 Realtor in Brampton | Top Ranked Broker of Record',
  description: 'Parveen Arora is the #1 Ranked Realtor in Brampton and Mississauga, Broker of Record for RE/MAX Optimum Realty. With 20+ years of experience and 5,000+ transactions, Parveen is the top choice for Resale, Platinum Pre-construction access, and Commercial Real Estate in the GTA and New Brunswick.',
  keywords: ['#1 Realtor Brampton', 'Top Real Estate Agent Brampton', 'Parveen Arora Realtor', 'Brampton Homes for Sale', 'Mississauga Real Estate Agent', 'Broker of Record Brampton', 'Best Realtor in Brampton', 'Castlemore Luxury Homes', 'Credit Valley Real Estate', 'Springdale Brampton Homes', 'RE/MAX Optimum Realty', 'Platinum Pre-construction Access Brampton'],
  openGraph: {
    title: 'Parveen Arora | #1 Realtor in Brampton',
    description: 'Expert Real Estate services in Brampton and Mississauga by Parveen Arora, Top Ranked Broker of Record.',
    url: 'https://parveenarora.com',
    siteName: 'Parveen Arora Real Estate',
    images: [
      {
        url: '/podcast.png',
        width: 1200,
        height: 630,
        alt: 'Parveen Arora - #1 Realtor in Brampton',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parveen Arora | #1 Realtor in Brampton',
    description: 'Top Ranked Broker of Record with 5000+ successful transactions in Brampton & Mississauga.',
    images: ['/podcast.png'],
  },
  alternates: {
    canonical: 'https://parveenarora.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Parveen Arora",
    "image": "https://parveenarora.com/podcast.png",
    "@id": "https://parveenarora.com",
    "url": "https://parveenarora.com",
    "logo": "https://parveenarora.com/blacklogo.png",
    "telephone": "416-910-8923",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "418"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "268 Derry Rd W Unit 101",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5W 0H6",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6288,
      "longitude": -79.6917
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/teamarora",
      "https://www.instagram.com/teamarora",
      "https://www.youtube.com/@teamarora",
      "https://www.tiktok.com/@parveenarorarealestate"
    ],
    "knowsLanguage": ["English", "Hindi", "Punjabi", "Gujarati", "Urdu", "Italian"],
    "award": [
      "Luminary of Distinction (2024)",
      "Circle of Legends",
      "Hall of Fame",
      "Lifetime Achievement Award",
      "#1 RE/MAX Team in Canada (2018)"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "RE/MAX Optimum Realty"
    },
    "areaServed": [
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Oakville" },
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Fredericton" },
      { "@type": "City", "name": "Oromocto" },
      { "@type": "Neighborhood", "name": "Castlemore" },
      { "@type": "Neighborhood", "name": "Credit Valley" },
      { "@type": "Neighborhood", "name": "Springdale" }
    ]
  };

  return (
    <html lang="en" className={cn(gotham.variable, nyght.variable, aston.variable, monument.variable, appleGaramond.variable, rocGrotesk.variable, "antialiased")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans text-slate-900 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
