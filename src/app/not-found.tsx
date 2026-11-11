import type { Metadata } from 'next';
import NotFoundContent from '@/components/shared/NotFoundContent';

/**
 * The 404 page must never be indexed, and it must never inherit the site-wide
 * canonical that points at the homepage (that would tell Google the 404 is a
 * duplicate of the home page). It is a server component so it can export its
 * own metadata.
 */
export const metadata: Metadata = {
  title: 'Page Not Found (404) — FeeKit',
  description:
    'That FeeKit page could not be found. Search 199+ free payment fee, sales tax, VAT and freelance rate calculators instead.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
