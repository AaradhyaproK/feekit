/**
 * ==============================================================================
 * FeeKit Geo / Locale / Currency Resolver
 * ==============================================================================
 * Single source of truth for the regional metadata attached to every page.
 *
 * Previously each page worked out its own geography, which produced three
 * separate defects:
 *
 *   1. A Germany VAT calculator declared `geo.region=US` and
 *      `content-language=en-US` because the `GLOBAL` region fell through to
 *      the US branch.
 *   2. The JSON-LD emitted `"priceCurrency": "USD"` and
 *      `"spatialCoverage": "United States"` for every EU VAT page.
 *   3. The sitemap declared `hreflang="en"` for 38 pages while the pages
 *      themselves declared a different locale, so the sitemap and the page
 *      head disagreed.
 *
 * Everything now resolves through `resolveGeo()` so the `<head>` tags, the
 * JSON-LD and the sitemap always agree.
 * ==============================================================================
 */

export type GeoRegion = 'US' | 'UK' | 'CA' | 'GLOBAL';

export interface GeoProfile {
  /** hreflang language tag for this page. */
  locale: string;
  /** ISO-3166 alpha-2 country code used for `geo.region`. */
  geoRegion: string;
  /** BCP-47 language tag used for `content-language`. */
  contentLanguage: string;
  /** Human-readable place name used for `spatialCoverage`. */
  placeName: string;
  /** ISO-4217 currency code used for `priceCurrency`. */
  currency: string;
  /** Open Graph locale string. */
  openGraphLocale: string;
}

/**
 * Currency symbols used across the matrix mapped to ISO-4217 codes.
 */
const CURRENCY_BY_SYMBOL: Record<string, string> = {
  $: 'USD',
  'US$': 'USD',
  'CA$': 'CAD',
  'C$': 'CAD',
  'A$': 'AUD',
  'AU$': 'AUD',
  'S$': 'SGD',
  'NZ$': 'NZD',
  '£': 'GBP',
  '€': 'EUR',
  '₹': 'INR',
  'R$': 'BRL',
  '¥': 'JPY',
  C: 'CAD',
};

/**
 * Slugs whose display name cannot be derived by capitalising the slug.
 */
const PLACE_NAME_OVERRIDES: Record<string, string> = {
  uk: 'United Kingdom',
  'united-kingdom': 'United Kingdom',
  gb: 'United Kingdom',
  us: 'United States',
  usa: 'United States',
  'us-sales-tax': 'United States',
  'usd-to-eur': 'United States to European Union',
  'usd-to-gbp': 'United States to United Kingdom',
  'gbp-to-eur': 'United Kingdom to European Union',
  'eur-to-usd': 'European Union to United States',
  'usd-to-inr': 'United States to India',
  'cad-to-usd': 'Canada to United States',
  'aud-to-usd': 'Australia to United States',
  'usd-to-brl': 'United States to Brazil',
  'united-arab-emirates': 'United Arab Emirates',
  'czech-republic': 'Czech Republic',
  'south-korea': 'South Korea',
  'new-zealand': 'New Zealand',
};

/**
 * Turn a slug into a readable place name.
 */
export function placeNameFromSlug(slug: string): string {
  if (!slug) return 'United States';
  const key = slug.toLowerCase();
  if (PLACE_NAME_OVERRIDES[key]) return PLACE_NAME_OVERRIDES[key];
  return key
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Map a currency symbol to an ISO-4217 code.
 */
export function currencyCode(symbol?: string): string {
  if (!symbol) return 'USD';
  return CURRENCY_BY_SYMBOL[symbol.trim()] || 'USD';
}

export interface GeoInput {
  /** The `geoRegion` value stored on the matrix item. */
  geoRegion?: string;
  /** The matrix `stateName` (US states, Canadian provinces). */
  stateName?: string;
  /** The matrix slug, used to derive a country name for GLOBAL pages. */
  slug?: string;
  /** The matrix `jurisdictionCode` (ISO-3166 alpha-2 for tax jurisdictions). */
  jurisdictionCode?: string;
  /** The matrix `currencySymbol`. */
  currencySymbol?: string;
}

/**
 * Resolve the complete regional profile for a page.
 */
export function resolveGeo(input: GeoInput): GeoProfile {
  const region = (input.geoRegion || 'US').toUpperCase() as GeoRegion;

  let locale = 'en-US';
  let geoRegion = 'US';
  let contentLanguage = 'en-US';
  let openGraphLocale = 'en_US';

  if (region === 'UK') {
    locale = 'en-GB';
    geoRegion = 'GB';
    contentLanguage = 'en-GB';
    openGraphLocale = 'en_GB';
  } else if (region === 'CA') {
    locale = 'en-CA';
    geoRegion = 'CA';
    contentLanguage = 'en-CA';
    openGraphLocale = 'en_CA';
  } else if (region === 'GLOBAL') {
    // Generic English content served for non-US, non-UK, non-CA audiences.
    // The site ships no translated variants, so "en" is the correct tag -
    // "en-US" would wrongly claim a US-only audience.
    locale = 'en';
    // The jurisdiction code is the real ISO country for this page (DE for
    // Germany, FR for France, AU for Australia). Falling back to "GLOBAL"
    // would be a meaningless value for a geo targeting tag.
    geoRegion = (input.jurisdictionCode || 'GLOBAL').toUpperCase();
    contentLanguage = 'en';
    openGraphLocale = 'en_US';
  }

  const placeName =
    input.stateName ||
    (region === 'GLOBAL'
      ? placeNameFromSlug(input.slug || '')
      : region === 'UK'
        ? 'United Kingdom'
        : region === 'CA'
          ? 'Canada'
          : 'United States');

  return {
    locale,
    geoRegion,
    contentLanguage,
    placeName,
    currency: currencyCode(input.currencySymbol),
    openGraphLocale,
  };
}

/**
 * The locale used for a category hub. A hub aggregates tools from several
 * regions, so it always resolves to the generic `en-US` entry point.
 */
export function hubLocale(): string {
  return 'en-US';
}

/**
 * NOTE ON HREFLANG
 *
 * The site publishes 100% English content and ships zero translated
 * variants, so no hreflang annotations are emitted anywhere. hreflang is a
 * language-variant signal, not a regional targeting tool - regional
 * targeting is handled by the per-page `geo.region` / `content-language`
 * meta tags, by the separate per-region URLs, and by the geographic target
 * configured in Google Search Console.
 */
