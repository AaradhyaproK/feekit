/**
 * ==============================================================================
 * FeeKit Canonical URL Map
 * ==============================================================================
 * Some programmatic pages were generated from the same source content under
 * two different slugs (for example `/tools/square-fee-calculator/usa` and
 * `/tools/square-fee-calculator/online-store` render the exact same
 * calculator). Duplicate URLs split link equity and make Google pick one at
 * random, so the non-canonical variants are 301 redirected to the primary.
 *
 * This map is the single source of truth and is consumed by:
 *   - `next.config.ts`      -> 301 redirects
 *   - `src/app/sitemap.ts`  -> duplicate URLs are excluded from the sitemap
 *   - the SEO auditor       -> duplicate detection
 * ==============================================================================
 */

/**
 * Maps a non-canonical path to its canonical replacement.
 * Keys and values are absolute site paths.
 */
export const CANONICAL_REDIRECTS: Record<string, string> = {
  // Square: "usa" renders the online-store calculator, "standard" renders the
  // in-person POS calculator.
  '/tools/square-fee-calculator/usa': '/tools/square-fee-calculator/online-store',
  '/tools/square-fee-calculator/standard': '/tools/square-fee-calculator/in-person',
};

/**
 * Returns the canonical path for a tool path, or null when the path is already
 * canonical.
 */
export function canonicalToolPath(path: string): string | null {
  return CANONICAL_REDIRECTS[path] || null;
}
