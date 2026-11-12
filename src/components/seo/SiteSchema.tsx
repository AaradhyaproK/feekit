import React from 'react';

const SITE_URL = 'https://www.usefeekit.com';

/**
 * Site-wide Organization + Person (author) structured data.
 *
 * This is the entity layer for Google's E-E-A-T evaluation: it tells search
 * engines who publishes the calculators, who the author is, what the site
 * covers and how to verify the publisher. It also powers the "About this
 * site" / site name panel in search results.
 */
export function SiteSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'FeeKit',
        alternateName: 'FeeKit Calculators',
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo-icon.png`,
          width: 265,
          height: 265,
        },
        image: `${SITE_URL}/og-image.png`,
        description:
          'Free financial calculators for US and UK merchants, ecommerce sellers and freelancers: payment processing fees, 50-state sales tax, HMRC VAT and 1099 self-employment tax.',
        foundingDate: '2026',
        founder: {
          '@id': `${SITE_URL}/#person`,
        },
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Place', name: 'European Union' },
        ],
        knowsAbout: [
          'Stripe fees',
          'PayPal fees',
          'Square fees',
          'Authorize.Net fees',
          'Sales tax rates',
          'Economic nexus',
          'VAT rates',
          'HMRC quarterly returns',
          '1099 self-employment tax',
          'Freelance hourly rates',
          'Ecommerce profit margin',
          'Break-even ROAS',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@usefeekit.com',
            availableLanguage: ['English'],
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Aaradhya Pathak',
        jobTitle: 'Founder & Lead Developer',
        email: 'mailto:aaradhya@usefeekit.com',
        description:
          'Software developer and founder of FeeKit. Builds and maintains the fee, tax and rate calculators, and authors the FeeKit methodology and editorial standards.',
        url: `${SITE_URL}/about`,
        sameAs: [
          'https://aaradhyadev.vercel.app/',
          'https://www.linkedin.com/in/aaradhyapathak17',
          'https://x.com/aaradhya1774',
          'https://github.com/AaradhyaproK',
        ],
        worksFor: {
          '@id': `${SITE_URL}/#organization`,
        },
        knowsAbout: [
          'Payment processing fees',
          'Sales tax compliance',
          'VAT and GST',
          'Self-employment tax',
          'Freelance rate benchmarking',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'FeeKit',
        description:
          'Free financial calculators for payment fees, sales tax, VAT and freelance rates.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default SiteSchema;
