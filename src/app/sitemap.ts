/**
 * ==============================================================================
 * FeeKit XML Sitemap Generator
 *
 * GOOGLE SEARCH CONSOLE MANUAL POST-DEPLOYMENT STEPS:
 * 1. Submit Sitemap:
 *    - In Google Search Console, navigate to Indexing -> Sitemaps.
 *    - Submit: https://www.usefeekit.com/sitemap.xml
 * 2. Request Indexing:
 *    - Use the URL Inspection tool for https://www.usefeekit.com and key tool pages.
 *    - Click "Request Indexing" to accelerate crawler discovery.
 * 3. Set Geographic Target:
 *    - Confirm international targeting / geographic target is set to the United States (US).
 * ==============================================================================
 */

import { MetadataRoute } from 'next';
import geoMatrix from '@/data/geo-matrix.json';
import { US_SITE_URL } from '@/lib/seo';

const CATEGORIES = [
  'sales-tax-calculator',
  'vat-calculator',
  'stripe-fee-calculator',
  'paypal-fee-calculator',
  'freelance-rate-calculator',
  'ecommerce-profit-calculator',
  'square-fee-calculator',
  'wise-vs-stripe',
  'authorize-net-calculator',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = US_SITE_URL;
  const now = new Date();

  // 1. Root and Core Trust Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 2. High-Intent Category Suite Hubs
  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/tools/${cat}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.95,
  }));

  // 3. Programmatic Regional and Specialized Tools (all 162+ tool pages)
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);

  const toolUrls: MetadataRoute.Sitemap = matrixList.map((item) => {
    let priority = 0.8;
    if (item.geoRegion === 'US' || item.category === 'sales-tax-calculator') {
      priority = 0.9;
    } else if (item.geoRegion === 'UK' || item.slug === 'united-kingdom' || item.slug === 'uk') {
      priority = 0.9;
    }

    return {
      url: `${baseUrl}/tools/${item.category}/${item.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority,
    };
  });

  return [...staticPages, ...categoryUrls, ...toolUrls];
}
