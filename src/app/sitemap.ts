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
import { getAllPosts } from '@/lib/blog';
import { COMPARISONS_DATA } from '@/data/comparisons';
import { isIndexableTool, isIndexableArticle } from '@/lib/seo/indexing-policy';
import { getPageContent } from '../../content/index.ts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = US_SITE_URL;
  // Use real verification baseline date instead of dynamic 'new Date()' on every hit
  const defaultVerifiedDate = new Date('2026-10-24T00:00:00Z');

  // 1. Root and Core Hub & Trust Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/invoice-generator`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/small-business`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides/freshbooks-for-freelancers`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: defaultVerifiedDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // 2. Programmatic Regional and Specialized Tools (all 199+ tool pages)
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);

  // Dynamically extract every category suite hub from the tool matrix
  const categories = Array.from(new Set(matrixList.map((x) => x.category)));
  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/tools/${cat}`,
    lastModified: defaultVerifiedDate,
    changeFrequency: 'daily',
    priority: 0.95,
  }));

  const toolUrls: MetadataRoute.Sitemap = matrixList
    .filter((item) => isIndexableTool(item.category, item.slug))
    .map((item) => {
      let priority = 0.8;
      if (item.geoRegion === 'US' || item.category === 'sales-tax-calculator') {
        priority = 0.9;
      } else if (item.geoRegion === 'UK' || item.slug === 'united-kingdom' || item.slug === 'uk') {
        priority = 0.9;
      }

      const bespoke = getPageContent(item.category, item.slug);
      const lastMod = bespoke?.lastVerified
        ? new Date(`${bespoke.lastVerified}T00:00:00Z`)
        : defaultVerifiedDate;

      return {
        url: `${baseUrl}/tools/${item.category}/${item.slug}`,
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority,
      };
    });

  // 3. Statically Generated MDX Blog Posts (Top 20 quality guides)
  const blogPosts = getAllPosts();
  const blogUrls: MetadataRoute.Sitemap = blogPosts
    .filter((post) => isIndexableArticle(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || defaultVerifiedDate),
      changeFrequency: 'monthly',
      priority: 0.85,
    }));

  // 4. Statically Generated Software Comparison Pages
  const comparisonUrls: MetadataRoute.Sitemap = Object.keys(COMPARISONS_DATA).map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: defaultVerifiedDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Combine and deduplicate by URL to guarantee 100% unique, complete index
  const allEntries = [...staticPages, ...categoryUrls, ...toolUrls, ...blogUrls, ...comparisonUrls];
  const seenUrls = new Set<string>();
  const deduplicatedEntries: MetadataRoute.Sitemap = [];

  for (const entry of allEntries) {
    if (!seenUrls.has(entry.url)) {
      seenUrls.add(entry.url);
      deduplicatedEntries.push(entry);
    }
  }

  return deduplicatedEntries;
}
