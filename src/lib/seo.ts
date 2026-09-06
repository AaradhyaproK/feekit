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
 */
export function buildCanonical(path: string = ''): string {
  if (!path || path === '/') {
    return US_SITE_URL;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash except for root
  return `${US_SITE_URL}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Formats page title in "Page | FeeKit" format.
 */
export function buildTitle(page: string): string {
  if (!page || page.trim() === '' || page.trim() === 'FeeKit') {
    return 'FeeKit — Financial Precision Calculators for US & UK Merchants';
  }
  const trimmed = page.trim();
  if (trimmed.endsWith('| FeeKit')) {
    return trimmed;
  }
  // If it ends with "— FeeKit", replace it for consistency or maintain format
  const base = trimmed.replace(/\s*[-—|]\s*FeeKit$/i, '');
  return `${base} | FeeKit`;
}

/**
 * Returns a high-converting, accurate meta description for a tool and region.
 */
export function buildDescription(tool: string, region: string = 'US'): string {
  const isUK = region.toUpperCase() === 'UK' || region.toLowerCase().includes('united kingdom');
  if (isUK) {
    return `Free ${tool} for UK businesses, merchants, and freelancers. Calculate accurate HMRC rates, VAT compliance, and payment fees with zero latency.`;
  }
  return `Free ${tool} for US merchants, businesses, and contractors. Calculate accurate ${region} rates, transaction fees, and net payouts instantly.`;
}
