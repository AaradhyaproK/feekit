import React from 'react';
import { resolveGeo } from '@/lib/seo/geo';

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
  dateModified?: string;
  /** The matrix slug - used to derive the place name for GLOBAL pages. */
  slug?: string;
  /** The matrix currency symbol - used to derive the ISO currency code. */
  currencySymbol?: string;
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
  dateModified,
  slug,
  currencySymbol,
}: GeoSchemaProps) {
  const geo = resolveGeo({
    geoRegion: region,
    stateName,
    slug,
    currencySymbol,
  });

  const appSchema: Record<string, any> = {
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    image: 'https://www.usefeekit.com/og-image.png',
    screenshot: 'https://www.usefeekit.com/og-image.png',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: geo.currency,
    },
    dateModified: dateModified || '2026-10-24',
    datePublished: dateModified || '2026-10-24',
    author: {
      '@id': 'https://www.usefeekit.com/#person',
      '@type': 'Person',
      name: 'Aaradhya Pathak',
      jobTitle: 'Founder & Lead Developer',
      url: 'https://www.usefeekit.com/about',
    },
    publisher: {
      '@id': 'https://www.usefeekit.com/#organization',
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.usefeekit.com/logo-icon.png',
        width: 265,
        height: 265,
      },
    },
    inLanguage: geo.contentLanguage,
    spatialCoverage: {
      '@type': 'Place',
      name: geo.placeName,
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
      // The breadcrumb name must match the visible page title, not the SERP
      // title (which carries the "| FeeKit" brand suffix).
      name: title.replace(/\s*\|\s*FeeKit\s*$/i, ''),
      item: url,
    });
  } else {
    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: title.replace(/\s*\|\s*FeeKit\s*$/i, ''),
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
