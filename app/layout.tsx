import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elektro-schiel.de'),
  title: {
    default: 'Elektro Schiel - Elektroinstallationen & Sicherheitstechnik Mülheim',
    template: '%s | Elektro Schiel - Ihr Elektrofachbetrieb in Mülheim'
  },
  description: 'Elektro Schiel - Ihr zertifizierter Meisterbetrieb für Elektroinstallationen, Sicherheitstechnik und Smart Home in Mülheim an der Ruhr. ✓ 24/7 Notdienst ✓ Über 75 Jahre Erfahrung',
  keywords: [
    'Elektroinstallation',
    'Sicherheitstechnik',
    'Smart Home',
    'Mülheim an der Ruhr',
    'Elektrofachbetrieb',
    'Elektro Schiel',
    'Elektroinstallateur',
    'Elektriker',
    'Notdienst',
    'Elektrotechnik',
    'Alarmanlagen',
    'Videoüberwachung',
    'KNX',
    'Brandschutz',
    'E-Mobilität'
  ],
  authors: [{ name: 'Elektro Schiel' }],
  creator: 'Elektro Schiel',
  publisher: 'Elektro Schiel',
  alternates: {
    canonical: 'https://elektro-schiel.de',
    languages: {
      'de': 'https://elektro-schiel.de',
      'en': 'https://elektro-schiel.de/en',
      'tr': 'https://elektro-schiel.de/tr'
    }
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'tr_TR'],
    url: 'https://elektro-schiel.de',
    siteName: 'Elektro Schiel',
    title: 'Elektro Schiel - Ihr Elektrofachbetrieb in Mülheim an der Ruhr',
    description: 'Elektro Schiel - Ihr zertifizierter Meisterbetrieb für Elektroinstallationen, Sicherheitstechnik und Smart Home in Mülheim an der Ruhr. ✓ 24/7 Notdienst ✓ Über 75 Jahre Erfahrung',
    images: [
      {
        url: 'https://elektro-schiel.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elektro Schiel - Ihr Elektrofachbetrieb in Mülheim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektro Schiel - Elektroinstallationen & Sicherheitstechnik',
    description: 'Ihr zertifizierter Meisterbetrieb in Mülheim an der Ruhr',
    images: ['https://elektro-schiel.de/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    bing: 'your-bing-verification',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Mülheim an der Ruhr" />
        <meta name="geo.position" content="51.4272;6.8826" />
        <meta name="ICBM" content="51.4272, 6.8826" />
        <link rel="canonical" href="https://elektro-schiel.de" />
        <link rel="alternate" hrefLang="de" href="https://elektro-schiel.de" />
        <link rel="alternate" hrefLang="en" href="https://elektro-schiel.de/en" />
        <link rel="alternate" hrefLang="tr" href="https://elektro-schiel.de/tr" />
        <link rel="alternate" hrefLang="x-default" href="https://elektro-schiel.de" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
        
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "name": "Elektro Schiel",
              "image": "https://elektro-schiel.de/logo.png",
              "description": "Ihr zertifizierter Meisterbetrieb für Elektroinstallationen, Sicherheitstechnik und Smart Home in Mülheim an der Ruhr.",
              "@id": "https://elektro-schiel.de",
              "url": "https://elektro-schiel.de",
              "telephone": "+49-208-410619",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Friedhofstr. 12",
                "addressLocality": "Mülheim an der Ruhr",
                "postalCode": "45478",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.4272,
                "longitude": 6.8826
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/elektroschiel",
                "https://www.instagram.com/elektroschiel"
              ],
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Cash, Credit Card",
              "areaServed": {
                "@type": "City",
                "name": "Mülheim an der Ruhr"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electrical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elektroinstallationen",
                      "description": "Professionelle Elektroinstallationen für Privat- und Geschäftskunden"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sicherheitstechnik",
                      "description": "Installation und Wartung von Sicherheitssystemen"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Home",
                      "description": "Intelligente Haussteuerung und Automation"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}