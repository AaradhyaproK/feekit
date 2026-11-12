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
import { resolveGeo } from '@/lib/seo/geo';
import { getPageContent } from '../../content/index.ts';

/**
 * ==============================================================================
 * FeeKit XML Sitemap Generator
 * ==============================================================================
 *
 * NO hreflang ANNOTATIONS ARE EMITTED.
 *
 * The site publishes 100% English content and ships zero translated
 * variants. hreflang exists to tell Google which URLs are alternate
 * language versions of the same content - it is NOT a regional targeting
 * tool. Emitting it here was actively harmful in three ways:
 *
 *   1. The sitemap declared `hreflang="en-US"` for the static and blog
 *      pages while those pages declared nothing, so the sitemap and the
 *      page head contradicted each other on 49 URLs.
 *   2. 38 EU VAT and Wise pages declared `hreflang="en"` while 159 others
 *      declared `en-US`, creating two competing generic-English clusters
 *      on a single-language site.
 *   3. `en-GB`, `en-CA` and `en-US` are the same language, so treating
 *      them as hreflang alternates is semantically wrong - Google expects
 *      genuine translations to reference each other.
 *
 * Regional targeting is handled correctly instead: every page declares a
 * per-jurisdiction `geo.region` and `content-language` meta tag resolved
 * from src/lib/seo/geo.ts, the pages are separate URLs, and the Google
 * Search Console geographic target covers the rest.
 *
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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = US_SITE_URL;
  // Use real verification baseline date instead of dynamic 'new Date()' on every hit
  const defaultVerifiedDate = new Date('2026-10-24T00:00:00Z');

  const entry = (
    url: string,
    priority: number,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    lastModified: Date = defaultVerifiedDate
  ): MetadataRoute.Sitemap[number] => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  });

  // 1. Root and Core Hub & Trust Pages
  const staticPages: MetadataRoute.Sitemap = [
    entry(baseUrl, 1.0, 'daily'),
    entry(`${baseUrl}/invoice-generator`, 0.95, 'daily'),
    entry(`${baseUrl}/blog`, 0.9, 'daily'),
    entry(`${baseUrl}/small-business`, 0.95, 'daily'),
    entry(`${baseUrl}/compare`, 0.85, 'weekly'),
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

  // 2. Programmatic Regional and Specialized Tools (all 197 tool pages)
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
        lastMod
      );
    });

  // 3. Statically Generated MDX Blog Posts
  const blogPosts = getAllPosts();
  const blogUrls: MetadataRoute.Sitemap = blogPosts
    .filter((post) => isIndexableArticle(post.slug))
    .map((post) =>
      entry(
        `${baseUrl}/blog/${post.slug}`,
        0.85,
        'monthly',
        new Date(post.updatedAt || post.publishedAt || defaultVerifiedDate)
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
