import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'FeeKit — The Definitive B2B Fintech Utility & Growth Engine',
  description:
    'Free client-side financial precision calculators for US Sales Tax, UK VAT compliance, Stripe & PayPal merchant fees, and freelance 1099 hourly rates.',
  metadataBase: new URL('https://usefeekit.com'),
  keywords: [
    'fee calculator',
    'us sales tax calculator',
    'uk vat calculator',
    'stripe fee calculator',
    'paypal fee calculator',
    'freelance 1099 rate calculator',
    'hmrc vat return calculator',
    'reverse fee calculator',
    'ecommerce profit calculator',
  ],
  authors: [{ name: 'FeeKit Engineering' }],
  openGraph: {
    title: 'FeeKit — Instant B2B Financial Precision Utilities (US & UK)',
    description:
      'High-converting, zero-latency payment processing, US sales tax, UK VAT, and e-commerce margin calculators.',
    url: 'https://usefeekit.com',
    siteName: 'FeeKit',
    locale: 'en_US',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'FeeKit B2B Fintech Utilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FeeKit — The Definitive B2B Fintech Utility (US & UK)',
    description: 'Instant client-side calculation suites for US and UK businesses, merchants, and freelancers.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-icon.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: '/logo-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-feekit-2026',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: 'https://usefeekit.com',
  },
  other: {
    'geo.region': 'US',
    'content-language': 'en-US, en-GB',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="h-full antialiased light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-icon.png" type="image/png" sizes="256x256" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* US and UK Regional indexing hints */}
        <meta name="geo.region" content="US" />
        <meta httpEquiv="content-language" content="en-US, en-GB" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-900">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
