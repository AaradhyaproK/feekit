import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

/**
 * Homepage metadata.
 *
 * The homepage is a client component (it powers the live comparison engine),
 * so the metadata lives here in this thin server wrapper.
 */
export const metadata: Metadata = {
  title: 'Payment Fee, Sales Tax & VAT Calculators | FeeKit',
  description:
    'Free Stripe, PayPal and Square fee calculators, 50-state US sales tax rates, UK and EU VAT, and 1099 freelance rate calculators. Instant and updated for 2026.',
  keywords: [
    'payment processing fee calculator',
    'stripe fee calculator',
    'paypal fee calculator',
    'square fee calculator',
    'sales tax calculator',
    'vat calculator',
    'freelance rate calculator',
    'ecommerce profit calculator',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com',
    languages: {
      'en-US': 'https://www.usefeekit.com',
      'x-default': 'https://www.usefeekit.com',
    },
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
  openGraph: {
    title: 'Payment Fee, Sales Tax & VAT Calculators | FeeKit',
    description:
      'Free Stripe, PayPal and Square fee calculators, 50-state US sales tax rates, UK and EU VAT, and 1099 freelance rate calculators. Instant and updated for 2026.',
    url: 'https://www.usefeekit.com',
    siteName: 'FeeKit',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.usefeekit.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FeeKit — Payment Fee, Sales Tax & VAT Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Fee, Sales Tax & VAT Calculators | FeeKit',
    description:
      'Free Stripe, PayPal and Square fee calculators, 50-state US sales tax rates, UK and EU VAT, and 1099 freelance rate calculators.',
    images: ['https://www.usefeekit.com/og-image.png'],
  },
};

export default function Page() {
  return <HomePage />;
}
