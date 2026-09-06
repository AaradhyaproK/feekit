import React from 'react';

export interface GeoSchemaProps {
  title: string;
  description: string;
  url: string;
  region: 'US' | 'UK' | 'GLOBAL';
  stateName?: string;
  category?: string;
  categoryName?: string;
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
  category,
  categoryName,
  faqs = [],
  sourceUrl,
  sourceName,
}: GeoSchemaProps) {
  const isUK = region === 'UK';
  const placeName = isUK ? 'United Kingdom' : `${stateName || 'United States'}`;
  const currency = isUK ? 'GBP' : 'USD';

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

  const breadcrumbs: Record<string, any> = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'FeeKit',
        item: 'https://www.usefeekit.com',
      },
    ],
  };

  if (category) {
    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: categoryName || category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `https://www.usefeekit.com/tools/${category}`,
    });
    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: title,
      item: url,
    });
  } else {
    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: title,
      item: url,
    });
  }

  const graph: any[] = [appSchema, breadcrumbs];

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

export interface CategorySchemaProps {
  category: string;
  title: string;
  description: string;
  tools: Array<{ title: string; slug: string }>;
}

export function CategoryJsonLd({ category, title, description, tools }: CategorySchemaProps) {
  const url = `https://www.usefeekit.com/tools/${category}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: title,
        description,
        url,
        inLanguage: 'en-US',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: tools.length,
          itemListElement: tools.map((t, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: t.title,
            url: `${url}/${t.slug}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'FeeKit',
            item: 'https://www.usefeekit.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: url,
          },
        ],
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
