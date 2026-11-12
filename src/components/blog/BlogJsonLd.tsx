import React from 'react';
import type { BlogPost } from '@/lib/blog';

interface BlogJsonLdProps {
  post: BlogPost;
}

export function BlogJsonLd({ post }: BlogJsonLdProps) {
  const articleUrl = `https://www.usefeekit.com/blog/${post.slug}`;
  // The OG/JSON-LD image is the generated 1200x630 JPEG. Social scrapers do
  // not reliably render WebP, and the declared dimensions must match the
  // real file or the rich result is rejected.
  const ogImagePath = post.featuredImage.replace(/\.webp$/i, '.jpg');
  const imageUrl = ogImagePath.startsWith('http')
    ? ogImagePath
    : `https://www.usefeekit.com${ogImagePath}`;

  // 1. Exact Article Schema enhanced for Google Rich Results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: articleUrl,
    datePublished: post.datePublished || post.publishedAt,
    dateModified: post.dateModified || post.updatedAt || post.publishedAt,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      '@id': 'https://www.usefeekit.com/#person',
      name: post.author || 'Aaradhya Pathak',
      jobTitle: post.authorTitle || 'Founder & Lead Developer',
      email: 'mailto:aaradhya@usefeekit.com',
      url: 'https://www.usefeekit.com/about',
      sameAs: [
        'https://www.usefeekit.com/about',
        'https://aaradhyadev.vercel.app/',
        'https://www.linkedin.com/in/aaradhyapathak17',
        'https://x.com/aaradhya1774',
        'https://github.com/AaradhyaproK',
      ],
    },
    reviewedBy: {
      '@type': 'Person',
      '@id': 'https://www.usefeekit.com/#person',
      name: 'Aaradhya Pathak',
      jobTitle: 'Founder & Lead Developer',
      url: 'https://www.usefeekit.com/about',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.usefeekit.com/#organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.usefeekit.com/logo-icon.png',
        width: 265,
        height: 265,
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
