import React from 'react';
import type { BlogPost } from '@/lib/blog';

interface BlogJsonLdProps {
  post: BlogPost;
}

export function BlogJsonLd({ post }: BlogJsonLdProps) {
  const articleUrl = `https://www.usefeekit.com/blog/${post.slug}`;
  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `https://www.usefeekit.com${post.featuredImage}`;

  // 1. Exact Article Schema enhanced for Google Rich Results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    url: articleUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: 'Aaradhya Pathak',
      jobTitle: 'Independent Financial Analyst & Founder',
      url: 'https://www.usefeekit.com/about',
      sameAs: 'https://www.usefeekit.com/about',
    },
    reviewedBy: {
      '@type': 'Person',
      name: 'Aaradhya Pathak',
      jobTitle: 'Independent Financial Analyst',
      url: 'https://www.usefeekit.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.usefeekit.com/logo.png',
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: post.title,
    },
  };

  // 2. BreadcrumbList Schema: Home -> Blog -> [Article Title]
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.usefeekit.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.usefeekit.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  // 3. FAQPage Schema (if frontmatter includes faq array)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
