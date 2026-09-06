import React from 'react';

/**
 * FaqSchema Component
 * Generates valid Schema.org FAQPage JSON-LD structured data for Google Search rich results.
 * 
 * Test schema validity at:
 * https://search.google.com/test/rich-results
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSchemaProps {
  items?: FaqItem[];
  faqs?: FaqItem[];
}

export function FaqSchema({ items, faqs }: FaqSchemaProps) {
  const rawList = items || faqs || [];

  // Validate: questions and answers must be non-empty strings
  const validItems = rawList.filter(
    (item): item is FaqItem =>
      Boolean(item) &&
      typeof item.question === 'string' &&
      item.question.trim().length > 0 &&
      typeof item.answer === 'string' &&
      item.answer.trim().length > 0
  );

  if (validItems.length === 0) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validItems.map((item) => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default FaqSchema;
