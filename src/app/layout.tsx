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
import Script from 'next/script';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { SiteSchema } from '@/components/seo/SiteSchema';

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-1291898061670715';

// EEA member states + UK + Switzerland for Google Consent Mode v2 regional default.
const CONSENT_RESTRICTED_REGIONS =
  "['AT','BE','BG','CH','CY','CZ','DE','DK','EE','ES','FI','FR','GB','GR','HR','HU','IE','IS','IT','LI','LT','LU','LV','MT','NL','NO','PL','PT','RO','SE','SI','SK']";

const CONSENT_INIT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
try {
  var saved = window.localStorage.getItem('feekit_cookie_consent');
  if (saved === 'essential') {
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    });
  } else if (saved === 'accepted') {
    gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  } else {
    gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      region: ${CONSENT_RESTRICTED_REGIONS},
      wait_for_update: 500
    });
  }
} catch (e) {
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    region: ${CONSENT_RESTRICTED_REGIONS},
    wait_for_update: 500
  });
}
`.trim();

export const viewport: Viewport = {
  themeColor: '#0057FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usefeekit.com'),
  title: 'FeeKit — Free Payment Fee, Sales Tax & VAT Calculators',
  description:
    'Free financial calculators for US & UK merchants and freelancers. Calculate Stripe, PayPal and Square fees, sales tax, VAT and 1099 taxes.',
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
    title: 'FeeKit — Free Payment Fee, Sales Tax & VAT Calculators',
    description:
      'Free financial calculators for US & UK merchants and freelancers. Calculate Stripe, PayPal and Square fees, sales tax, VAT and 1099 taxes.',
    url: 'https://www.usefeekit.com',
    siteName: 'FeeKit',
    images: [
      {
        url: 'https://www.usefeekit.com/og-image.png',
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
    title: 'FeeKit — Free Payment Fee, Sales Tax & VAT Calculators',
    description:
      'Free financial calculators for US & UK merchants and freelancers. Calculate Stripe, PayPal and Square fees, sales tax, VAT and 1099 taxes.',
    images: ['https://www.usefeekit.com/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logo-icon.png', sizes: '265x265', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/logo-icon.png',
    apple: [{ url: '/logo-icon.png', sizes: '265x265', type: 'image/png' }],
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
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
      ? { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }
      : {}),
  },
  alternates: {
    canonical: 'https://www.usefeekit.com',
  },
  other: {
    'impact-site-verification': 'c974a8df-bc8a-4870-912e-d90250862fd9',
    'google-adsense-account': 'ca-pub-1291898061670715',
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
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Mobile Chrome & Safari Web App Chrome */}
        <meta name="theme-color" content="#0057FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FeeKit" />

        {/* Shopify / Impact.com Affiliate Site Verification */}
        <meta name="impact-site-verification" {...({ value: 'c974a8df-bc8a-4870-912e-d90250862fd9' } as any)} content="c974a8df-bc8a-4870-912e-d90250862fd9" />

        {/* Google Consent Mode v2 regional default (executes synchronously in head) */}
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{ __html: CONSENT_INIT_SCRIPT }}
        />

        {/* NOTE: the geo.region / content-language meta tags are set per page
            from src/lib/seo/geo.ts so a Germany VAT calculator declares DE
            rather than inheriting a hardcoded US value. Declaring them here
            as well produced two conflicting geo.region tags on every page. */}
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/20 selection:text-blue-900">
        <GoogleAnalytics />
        <Script
          id="adsense-loader"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        <SiteSchema />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
