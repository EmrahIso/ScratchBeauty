import { Metadata } from 'next';
import './globals.css';

import { Playfair_Display } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { Ubuntu } from 'next/font/google';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});

const slabFont = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lab',
});

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scratchbeauty.vercel.app'),
  title: {
    default: 'Scratch Beauty | Školski Projekat',
    template: '%s | Scratch Beauty',
  },
  alternates: {
    canonical: 'https://scratchbeauty.vercel.app',
  },
  description:
    'Scratch Beauty je školski projekat koji prikazuje proces stvaranja kozmetičkih proizvoda i ideju doniranja nusproizvoda industrije ljepote. Otkrij kako se proizvodi kreiraju, istraži našu ponudu i saznaj više o održivoj ljepoti — sve u edukativne svrhe.',
  keywords: [
    'scratch beauty',
    'Scratch Beauty',
    'scratchbeauty',
    'ScratchBeauty',
    'SB',
    'beauty scratch',
    'Sbeauty',
    'kozmetika',
    'cosmetics',
    'nusproizvodi',
    'by-products',
    'edukativni projekat',
    'školski projekat',
    'Srednja mašinska tehnička škola',
    'smtš',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Emrah Isović', url: 'https://emrahisovic.vercel.app' }],
  openGraph: {
    title: 'Scratch Beauty | Školski Projekat',
    description:
      'Scratch Beauty je školski projekat koji prikazuje proces stvaranja kozmetičkih proizvoda i ideju doniranja nusproizvoda industrije ljepote. Svi proizvodi i sistemi su fiktivni i služe edukativnim svrhama.',
    url: 'https://scratchbeauty.vercel.app',
    siteName: 'Scratch Beauty',
    locale: 'bs_BA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scratch Beauty | Školski Projekat',
    description:
      'Scratch Beauty je školski projekat koji prikazuje proces stvaranja kozmetičkih proizvoda i ideju doniranja nusproizvoda industrije ljepote. Svi proizvodi i sistemi su fiktivni i služe edukativnim svrhama.',
    creator: '',
  },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'apple-mobile-web-app-title': 'Scratch Beauty',
    'google-site-verification':
      'google-site-verification=NBzQlBpsVGyjA2qko5QcZLraJCDch1w7QfwDkO60tjU',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning data-scroll-behavior='smooth' lang='bs-BA'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='color-scheme' content='light' />
        <meta
          name='google-site-verification'
          content='NBzQlBpsVGyjA2qko5QcZLraJCDch1w7QfwDkO60tjU'
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${slabFont.variable} ${ubuntuFont.variable}`}
      >
        <PreHeader />
        <Header />
        <Analytics />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
