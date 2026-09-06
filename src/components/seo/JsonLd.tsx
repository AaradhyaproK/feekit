import React from 'react';

export interface GeoSchemaProps {
  title: string;
  description: string;
  url: string;
  region: 'US' | 'UK' | 'GLOBAL';
  stateName?: string;
  faqs?: Array<{ question: string; answer: string }>;
  sourceUrl?: string;
  sourceName?: string;
}

export function generateGeoSchema({
  title,
  description,
  url,
  region,
  stateName,
  faqs = [],
  sourceUrl,
  sourceName,
}: GeoSchemaProps) {
  const isUK = region === 'UK';
  const placeName = isUK ? 'United Kingdom' : `${stateName || 'United States'}`;
  const currency = isUK ? 'GBP' : 'USD';

  const defaultFaqQuestion = isUK
    ? `How is VAT calculated in the United Kingdom?`
    : `How is sales tax calculated in ${stateName || 'the United States'}?`;

  const defaultFaqAnswer = isUK
    ? `Standard UK VAT is 20% levied on taxable supplies. To calculate gross invoice price, multiply net by 1.20. To extract VAT from a gross total, divide by 1.20 and deduct net.`
    : `In ${stateName || 'the United States'}, sales tax comprises statutory state rates plus local municipality or county surtaxes. Economic nexus thresholds obligate remote sellers once gross receipts exceed state limits.`;

  const appSchema: Record<string, any> = {
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currency,
    },
    spatialCoverage: {
      '@type': 'Place',
      name: placeName,
    },
  };

  if (sourceUrl) {
    appSchema.isBasedOn = sourceUrl;
    appSchema.citation = sourceUrl;
  }

  const graph: any[] = [appSchema];

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function GeoJsonLd(props: GeoSchemaProps) {
  const schema = generateGeoSchema(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
