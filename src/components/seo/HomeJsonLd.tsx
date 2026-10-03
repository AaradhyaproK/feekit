import React from 'react';

/**
 * Homepage Structured Data (Schema.org)
 * Includes WebSite with Sitelinks SearchAction, Organization, and SoftwareApplication.
 *
 * Test schema validity at: https://search.google.com/test/rich-results
 */
export function HomeJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.usefeekit.com/#website',
        url: 'https://www.usefeekit.com',
        name: 'FeeKit',
        description:
          'FeeKit: 199+ free financial calculators for US merchants, UK businesses & freelancers. Stripe, PayPal & Square fee calculators, all 50 US state sales tax, UK HMRC VAT, 1099 freelance rates & free invoice generator. 100% free, no signup.',
        publisher: {
          '@id': 'https://www.usefeekit.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.usefeekit.com/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.usefeekit.com/#organization',
        name: 'FeeKit',
        url: 'https://www.usefeekit.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.usefeekit.com/logo-icon.png',
          width: '256',
          height: '256',
          caption: 'FeeKit Logo',
        },
        image: 'https://www.usefeekit.com/logo.png',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.usefeekit.com/#app',
        name: 'FeeKit Financial Calculators',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
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
