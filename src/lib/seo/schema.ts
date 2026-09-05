export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateSoftwareAppSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `FeeKit - ${name}`,
    operatingSystem: 'Any (Web Browser)',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'FinanceApplication',
    image: 'https://usefeekit.com/logo.png',
    screenshot: 'https://usefeekit.com/logo.png',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://usefeekit.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://usefeekit.com/logo.png',
      },
    },
    description,
    url,
  };
}
