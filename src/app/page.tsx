import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import toolsIndex from '@/data/tools-index.json';
import { CANONICAL_REDIRECTS } from '@/lib/seo/canonical-redirects';
import type { ToolIndexEntry } from '@/lib/tools-index';

/**
 * Homepage metadata.
 *
 * The homepage is a client component (it powers the live comparison engine),
 * so the metadata lives here in this thin server wrapper.
 */
export const metadata: Metadata = {
  title: 'Payment Fee, Sales Tax & VAT Calculators | FeeKit',
  description:
    'Free credit card processing fee calculators for Stripe, PayPal and Square, plus 50-state US sales tax, UK and EU VAT, and 1099 freelance rate tools for 2026.',
  keywords: [
    'payment processing fee calculator',
    'credit card processing fees',
    'stripe fee calculator',
    'paypal fee calculator',
    'square fee calculator',
    'sales tax calculator',
    'vat calculator',
    'freelance rate calculator',
    'ecommerce profit calculator',
    'profit margin calculator',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com',
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
      'Free credit card processing fee calculators for Stripe, PayPal and Square, plus 50-state US sales tax, UK and EU VAT, and 1099 freelance rate tools for 2026.',
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
      'Free credit card processing fee calculators for Stripe, PayPal and Square, plus 50-state US sales tax, UK and EU VAT, and 1099 freelance rate tools.',
    images: ['https://www.usefeekit.com/og-image.png'],
  },
  other: {
    'geo.region': 'US',
    'content-language': 'en-US',
  },
};

export default function Page() {
  // The tool catalogue is read on the server and passed to the client
  // component as a prop. Importing the JSON inside the client component
  // put the whole payload into a chunk that every one of the 268 pages
  // loaded eagerly.
  const tools = (toolsIndex as unknown as ToolIndexEntry[]).filter(
    (t) => !CANONICAL_REDIRECTS[`/tools/${t.category}/${t.slug}`]
  );

  return <HomePage tools={tools} />;
}
