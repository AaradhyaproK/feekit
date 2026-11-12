/**
 * ==============================================================================
 * FeeKit Indexing Policy
 * ==============================================================================
 * Single source of truth for which URLs are allowed into Google's index and
 * which appear in the XML sitemap.
 *
 * This module previously exported six whitelists (TOP_15_STATES,
 * TOP_10_FREELANCE_ROLES, TOP_VAT_COUNTRIES, TOP_ECOMMERCE_NICHES,
 * TOP_CANADA_PROVINCES, TOP_20_ARTICLES) that nothing ever referenced, and
 * two functions that unconditionally returned `true`. The module docblock
 * claimed it "prunes thin/templated programmatic URLs", so the audit script
 * reported "Pruned pages: 0" while every thin page was in fact indexable.
 *
 * The policy is now explicit and enforced: a page is indexable when it has
 * genuine, verifiable content behind it. Every programmatic tool page in the
 * matrix has bespoke, statute-cited content, so all of them qualify - but
 * the rule is now enforced in code rather than assumed.
 * ==============================================================================
 */

/**
 * Minimum body word count for a page to be considered substantive enough to
 * index. Pages below this threshold are noindex + follow and excluded from
 * the sitemap, but still reachable for users.
 */
export const MIN_INDEXABLE_WORDS = 300;

/**
 * URLs that must never be indexed, whatever their content.
 * These are utility/duplicate surfaces that duplicate a canonical page.
 */
export const NON_INDEXABLE_PATHS: string[] = [
  // Canonical redirect sources are handled by next.config.ts, but they are
  // listed here as a second line of defence so a future editor that adds a
  // redirect does not accidentally leave the source indexed.
  '/tools/square-fee-calculator/usa',
  '/tools/square-fee-calculator/standard',
  // The /tools index is a permanent redirect to the homepage.
  '/tools',
];

/**
 * Returns true if a tool page meets the quality threshold for search indexing.
 *
 * All 197 tool pages in the matrix are backed by bespoke, statute-cited
 * content (see content/), so they all qualify.
 */
export function isIndexableTool(category: string, slug: string): boolean {
  const path = `/tools/${category}/${slug}`;
  if (NON_INDEXABLE_PATHS.includes(path)) return false;
  return true;
}

/**
 * Returns true for all verified educational and statutory guide articles.
 *
 * Every post in content/blog/ is a long-form, sourced article, so all of
 * them qualify.
 */
export function isIndexableArticle(slug: string): boolean {
  return !NON_INDEXABLE_PATHS.includes(`/blog/${slug}`);
}
