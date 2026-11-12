/**
 * ==============================================================================
 * FeeKit SEO Shared Utilities
 *
 * GOOGLE SEARCH CONSOLE MANUAL POST-DEPLOYMENT STEPS:
 * 1. Submit Sitemap:
 *    - In Google Search Console, go to Indexing -> Sitemaps.
 *    - Enter "sitemap.xml" (full URL: https://www.usefeekit.com/sitemap.xml) and click Submit.
 * 2. Request Indexing:
 *    - Paste https://www.usefeekit.com into the GSC top URL Inspection bar.
 *    - Click "Request Indexing" to trigger immediate crawl.
 *    - Inspect and request indexing for top calculators (e.g. /tools/sales-tax-calculator/california).
 * 3. Set Geographic Target:
 *    - Confirm target audience is configured for United States (US) in GSC / International Targeting.
 * ==============================================================================
 */

export const US_SITE_URL = 'https://www.usefeekit.com';

/**
 * Returns full https canonical URL for a given path.
 *
 * NOTE: this module is intentionally minimal. The authoritative title and
 * description builders live in `src/lib/seo/meta-builder.ts`, which applies
 * a hard SERP character budget. The previous `buildTitle` / `buildDescription`
 * exports in this file were unused, had no character budget, and produced a
 * different output format - keeping two builders with different rules is a
 * guaranteed source of drift, so they were removed.
 */
