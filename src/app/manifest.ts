/**
 * ==============================================================================
 * FeeKit Web App Manifest (PWA Configuration)
 *
 * GOOGLE SEARCH CONSOLE MANUAL ACTION CHECKLIST AFTER DEPLOYMENT:
 * 1. Submit Sitemap: Go to Sitemaps in Google Search Console and submit
 *    https://www.usefeekit.com/sitemap.xml
 * 2. Request Indexing: Use URL Inspection for https://www.usefeekit.com and
 *    click "Request Indexing".
 * 3. Geo Targeting: Ensure primary geographic target is set to the United States (US).
 * ==============================================================================
 */

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FeeKit',
    short_name: 'FeeKit',
    description: 'Free fee and tax calculators for US & UK merchants',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0057FF',
    icons: [
      {
        src: '/logo-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/feekit-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
