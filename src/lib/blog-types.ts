export type BlogCategory =
  | 'Small Business'
  | 'Invoicing'
  | 'Freelancing'
  | 'Business Finance'
  | 'Accounting Software'
  | 'Payment Fees'
  | 'US Sales Tax'
  | 'UK VAT'
  | '1099 & Freelance'
  | 'Ecommerce'
  | 'Guides';

export const BLOG_CATEGORIES: Array<'All' | BlogCategory> = [
  'All',
  'Small Business',
  'Invoicing',
  'Freelancing',
  'Business Finance',
  'Accounting Software',
  'Payment Fees',
  'US Sales Tax',
  'UK VAT',
  '1099 & Freelance',
  'Ecommerce',
  'Guides',
];

export interface RelatedCalculator {
  label: string;
  href: string;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string "2026-09-07"
  updatedAt: string;
  author: string;
  authorTitle: string;
  readTime: string; // "8 min read"
  category: BlogCategory;
  tags: string[];
  featuredImage: string; // "/blog/images/stripe-vs-paypal.png"
  featured: boolean; // shows at top of blog index
  relatedCalculators: Array<{
    label: string;
    href: string;
  }>;
  faq?: BlogFaqItem[];
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}
