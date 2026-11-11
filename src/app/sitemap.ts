/**
 * ==============================================================================
 * FeeKit XML Sitemap Generator
 * ==============================================================================
 * GOOGLE SEARCH CONSOLE MANUAL POST-DEPLOYMENT STEPS:
 * 1. Submit Sitemap:
 *    - In Google Search Console, navigate to Indexing -> Sitemaps.
 *    - Submit: https://www.usefeekit.com/sitemap.xml
 * 2. Request Indexing:
 *    - Use the URL Inspection tool for https://www.usefeekit.com and
 *      key tool pages.
 *    - Click "Request Indexing" to accelerate crawler discovery.
 * 3. Set Geographic Target:
 *    - Confirm international targeting / geographic target is
 *      configured for the United States (US).
 * ==============================================================================
 */

import { MetadataRoute } from 'next';
import geoMatrix from '@/data/geo-matrix.json';
import { US_SITE_URL } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import { COMPARISONS_DATA } from '@/data/comparisons';
import { isIndexableTool, isIndexableArticle } from '@/lib/seo/indexing-policy';
import { CANONICAL_REDIRECTS } from '@/lib/seo/canonical-redirects';
import { localeForRegion } from '@/lib/seo/meta-builder';
import { getPageContent } from '../../content/index.ts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = US_SITE_URL;
  // Use real verification baseline date instead of dynamic 'new Date()' on every hit
  const defaultVerifiedDate = new Date('2026-10-24T00:00:00Z');

  const entry = (
    url: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    lastModified: Date = defaultVerifiedDate,
    locale?: string
  ): MetadataRoute.Sitemap[number] => ({
    url,
    lastModified,
    changeFrequency,
    priority,
    alternates: locale
      ? { languages: { [locale]: url, 'x-default': url } }
      : undefined,
  });

  // 1. Root and Core Hub & Trust Pages
  const staticPages: MetadataRoute.Sitemap = [
    entry(baseUrl, 1.0, 'daily'),
    entry(`${baseUrl}/invoice-generator`, 0.95, 'daily'),
    entry(`${baseUrl}/blog`, 0.9, 'daily'),
    entry(`${baseUrl}/small-business`, 0.95, 'daily'),
    entry(`${baseUrl}/guides/freshbooks-for-freelancers`, 0.85, 'weekly'),
    entry(`${baseUrl}/editorial-policy`, 0.6, 'monthly'),
    entry(`${baseUrl}/methodology`, 0.7, 'monthly'),
    entry(`${baseUrl}/affiliate-disclosure`, 0.6, 'monthly'),
    entry(`${baseUrl}/about`, 0.6, 'monthly'),
    entry(`${baseUrl}/privacy`, 0.5, 'monthly'),
    entry(`${baseUrl}/cookies`, 0.5, 'monthly'),
    entry(`${baseUrl}/terms`, 0.5, 'monthly'),
    entry(`${baseUrl}/contact`, 0.5, 'monthly'),
    entry(`${baseUrl}/changelog`, 0.7, 'weekly'),
  ];

  // 2. Programmatic Regional and Specialized Tools (all 197+ tool pages)
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);

  // Dynamically extract every category suite hub from the tool matrix
  const categories = Array.from(new Set(matrixList.map((x) => x.category)));
  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) =>
    entry(`${baseUrl}/tools/${cat}`, 0.95, 'daily')
  );

  const toolUrls: MetadataRoute.Sitemap = matrixList
    .filter((item) => isIndexableTool(item.category, item.slug))
    // Drop URLs that are permanently redirected to a canonical page. Listing a
    // redirect source in the sitemap wastes crawl budget.
    .filter(
      (item) =>
        !CANONICAL_REDIRECTS[`/tools/${item.category}/${item.slug}`]
    )
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

      return entry(
        `${baseUrl}/tools/${item.category}/${item.slug}`,
        priority,
        'weekly',
        lastMod,
        localeForRegion(item.geoRegion)
      );
    });

  // 3. Statically Generated MDX Blog Posts (Top 20 quality guides)
  const blogPosts = getAllPosts();
  const blogUrls: MetadataRoute.Sitemap = blogPosts
    .filter((post) => isIndexableArticle(post.slug))
    .map((post) =>
      entry(
        `${baseUrl}/blog/${post.slug}`,
        0.85,
        'monthly',
        new Date(post.updatedAt || post.publishedAt || defaultVerifiedDate),
        'en-US'
      )
    );

  // 4. Statically Generated Software Comparison Pages
  const comparisonUrls: MetadataRoute.Sitemap = Object.keys(COMPARISONS_DATA).map((slug) =>
    entry(`${baseUrl}/compare/${slug}`, 0.8, 'weekly')
  );

  // Combine and deduplicate by URL to guarantee 100% unique, complete index
  const allEntries = [...staticPages, ...categoryUrls, ...toolUrls, ...blogUrls, ...comparisonUrls];
  const seenUrls = new Set<string>();
  const deduplicatedEntries: MetadataRoute.Sitemap = [];

  for (const entryItem of allEntries) {
    if (!seenUrls.has(entryItem.url)) {
      seenUrls.add(entryItem.url);
      deduplicatedEntries.push(entryItem);
    }
  }

  return deduplicatedEntries;
}
