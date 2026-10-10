/**
 * ==============================================================================
 * FeeKit Root Layout & SEO Infrastructure
 *
 * GOOGLE SEARCH CONSOLE MANUAL POST-DEPLOYMENT CHECKLIST:
 * 1. Submit Sitemap: Go to Google Search Console -> Sitemaps -> submit:
 *    https://www.usefeekit.com/sitemap.xml
 * 2. Request Indexing: Use URL Inspection on https://www.usefeekit.com and
 *    high-traffic calculators (e.g., California Sales Tax, Stripe Fee Calculator),
 *    then click "Request Indexing".
 * 3. Geo-Targeting: Ensure the international targeting / geographic target is
 *    configured for United States (US).
 * 4. Verification Token: Replace 'google-site-verification-feekit-2026' below with
 *    your real token from Google Search Console (or set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION).
 * ==============================================================================
 */

import type { Metadata, Viewport } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { AppShell } from '@/components/layout/AppShell';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export const viewport: Viewport = {
  themeColor: '#0057FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usefeekit.com'),
  title: 'FeeKit — Free Payment Fee, US Sales Tax & UK VAT Calculators',
  description:
    'FeeKit: 199+ free financial calculators for US merchants, UK businesses & freelancers. Stripe, PayPal & Square fee calculators, all 50 US state sales tax, UK HMRC VAT, 1099 freelance rates & free invoice generator. 100% free, no signup.',
  applicationName: 'FeeKit',
  authors: [{ name: 'Aaradhya Pathak', url: 'https://www.usefeekit.com/about' }],
  creator: 'Aaradhya Pathak',
  publisher: 'FeeKit',
  generator: 'Next.js',
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
    'payment processing fee calculator',
  ],
  appleWebApp: {
    capable: true,
    title: 'FeeKit',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'FeeKit — Free Payment Fee, US Sales Tax & UK VAT Calculators',
    description:
      'FeeKit: 199+ free financial calculators for US merchants, UK businesses & freelancers. Stripe, PayPal & Square fee calculators, all 50 US state sales tax, UK HMRC VAT, 1099 freelance rates & free invoice generator. 100% free, no signup.',
    url: 'https://www.usefeekit.com',
    siteName: 'FeeKit',
    images: [
      {
        url: 'https://www.usefeekit.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FeeKit Financial & Tax Calculators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FeeKit — Free Payment Fee, US Sales Tax & UK VAT Calculators',
    description:
      'FeeKit: 199+ free financial calculators for US merchants, UK businesses & freelancers. Stripe, PayPal, Square, 50-state sales tax, UK VAT, and 1099 freelance rates. 100% free, no signup.',
    images: ['https://www.usefeekit.com/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo-icon.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/logo-icon.png',
    apple: [{ url: '/logo-icon.png', sizes: '256x256', type: 'image/png' }],
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
  verification: {
    // GOOGLE SEARCH CONSOLE MANUAL ACTION:
    // Replace 'google-site-verification-feekit-2026' with your real verification token from GSC
    // (GSC Property -> Settings -> Ownership verification -> HTML tag)
    // or configure NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in your production environment variables.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-feekit-2026',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: 'https://www.usefeekit.com',
  },
  other: {
    'impact-site-verification': 'c974a8df-bc8a-4870-912e-d90250862fd9',
    'google-adsense-account': 'ca-pub-1291898061670715',
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
        <link rel="icon" href="/logo-icon.png" type="image/png" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-icon.png" sizes="256x256" />
        <link rel="shortcut icon" href="/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Mobile Chrome & Safari Web App Chrome */}
        <meta name="theme-color" content="#0057FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FeeKit" />

        {/* Shopify / Impact.com Affiliate Site Verification */}
        <meta name="impact-site-verification" {...({ value: 'c974a8df-bc8a-4870-912e-d90250862fd9' } as any)} content="c974a8df-bc8a-4870-912e-d90250862fd9" />

        {/* Google AdSense Verification & Auto Ads Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1291898061670715"
          crossOrigin="anonymous"
        />
        {/* US and UK Regional indexing hints */}
        <meta name="geo.region" content="US" />
        <meta httpEquiv="content-language" content="en-US, en-GB" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-900">
        <GoogleAnalytics />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
