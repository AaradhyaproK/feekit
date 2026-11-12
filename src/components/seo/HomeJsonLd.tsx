import React from 'react';

/**
 * Homepage Structured Data (Schema.org)
 *
 * NOTE ON ENTITY IDS
 *
 * The `#website` and `#organization` nodes are defined ONCE, in
 * `src/components/seo/SiteSchema.tsx`, which is rendered in the root layout
 * on every page. They used to be duplicated here as well, with the SAME
 * `@id` but DIFFERENT properties (different description, a trailing slash on
 * the url, `/og-image.png` vs `/logo.png` for the image, and `logo.width` as
 * the number 256 in one place and the string "256" in the other).
 *
 * Google merges nodes that share an `@id`, so two conflicting definitions
 * produce one entity with contradictory properties. Only the
 * `SoftwareApplication` node belongs on the homepage, and it references the
 * site graph by `@id`.
 *
 * Test schema validity at: https://search.google.com/test/rich-results
 */
export function HomeJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.usefeekit.com/#app',
        name: 'FeeKit Financial Calculators',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        url: 'https://www.usefeekit.com',
        image: 'https://www.usefeekit.com/og-image.png',
        isPartOf: {
          '@id': 'https://www.usefeekit.com/#website',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default HomeJsonLd;
