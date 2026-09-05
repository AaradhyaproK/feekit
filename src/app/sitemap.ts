import { MetadataRoute } from 'next';
import geoMatrix from '@/data/geo-matrix.json';

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
  const baseUrl = 'https://usefeekit.com';
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
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 2. High-Intent Category Suite Hubs
  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/tools/${cat}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.95,
  }));

  // 3. Programmatic Regional and Specialized Tools
  const toolUrls: MetadataRoute.Sitemap = (geoMatrix as Array<any>).map((item) => {
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
