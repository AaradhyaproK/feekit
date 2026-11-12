/**
 * ==============================================================================
 * FeeKit Sitemap - Static Page Registry
 * ==============================================================================
 * The root, hub and trust pages that appear in `sitemap.xml`.
 *
 * This list lives in its own module (rather than inline in `src/app/sitemap.ts`)
 * so the sitemap generator and the build-time statistics script can BOTH read
 * it. The "sitemap contains N pages" claim that appears in the footer and in
 * `public/robots.txt` is then derived from the same source of truth as the
 * sitemap itself and cannot drift away from it.
 *
 * `path` is relative to the site root. The empty string is the homepage.
 * ==============================================================================
 */

export type SitemapChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface SitemapStaticPage {
  /** Site-root-relative path. `''` is the homepage. */
  path: string;
  /** Normalised sitemap priority, 0.0 - 1.0. */
  priority: number;
  /** How often the page is expected to change. */
  changeFrequency: SitemapChangeFrequency;
}

export const SITEMAP_STATIC_PAGES: SitemapStaticPage[] = [
  { path: '', priority: 1.0, changeFrequency: 'daily' },
  { path: '/invoice-generator', priority: 0.95, changeFrequency: 'daily' },
  { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
  { path: '/small-business', priority: 0.95, changeFrequency: 'daily' },
  { path: '/compare', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/guides/freshbooks-for-freelancers', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/editorial-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/methodology', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/affiliate-disclosure', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/cookies', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/terms', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/changelog', priority: 0.7, changeFrequency: 'weekly' },
];
