import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import { FeaturedBlogCard } from '@/components/blog/FeaturedBlogCard';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';
import { BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export const metadata: Metadata = {
  title: 'FeeKit Blog — Payment Fee & Tax Guides for US & UK Merchants',
  description:
    'In-depth merchant fee breakdowns, 50-state US sales tax nexus rules, UK HMRC VAT compliance guides, and 1099 freelance tax strategies. Updated for 2026 fiscal regulations.',
  keywords: [
    'Stripe vs PayPal fees',
    'Square vs Stripe fees 2026',
    'Shopify vs Amazon FBA fees',
    '1099 self-employment tax rate',
    'US sales tax economic nexus',
    'UK VAT registration threshold',
    'merchant processing fee calculator',
    'freelance tax calculator',
    'ecommerce profit margins',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'FeeKit Blog — Payment Fee & Tax Guides for US & UK Merchants',
    description:
      'In-depth merchant fee breakdowns, 50-state US sales tax nexus rules, UK HMRC VAT compliance guides, and 1099 freelance tax strategies. Updated for 2026.',
    url: 'https://www.usefeekit.com/blog',
    siteName: 'FeeKit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FeeKit Blog — Payment Fee & Tax Guides for US & UK Merchants',
    description:
      'In-depth merchant fee breakdowns, 50-state US sales tax nexus rules, UK HMRC VAT compliance guides, and 1099 freelance tax strategies. Updated for 2026.',
    creator: '@usefeekit',
    site: '@usefeekit',
  },
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts[0] || allPosts[0];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'FeeKit Merchant & Tax Intelligence Guides',
    description:
      'Audited guides on payment gateway fees, sales tax nexus, UK VAT, and freelance taxes.',
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.title,
      url: `https://www.usefeekit.com/blog/${post.slug}`,
    })),
  };

  return (
    <div className="space-y-8 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
            <span>Merchant Intelligence & Fiscal Audits</span>
            <span className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="font-mono">{allPosts.length} articles updated for 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fintech & Tax Guides for Merchants
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Practical, zero-fluff analysis on payment processing fees, 50-state sales tax nexus,
            UK HMRC VAT regulations, and 1099 self-employment tax. Written and audited for US & UK
            operators.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Verified with 2026 IRS & HMRC Schedules
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              100% Free & Statically Pre-rendered
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article Hero Card */}
      {featuredPost && (
        <section className="space-y-3 px-3.5 sm:px-0">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 px-1">
            Spotlight Analysis
          </div>
          <FeaturedBlogCard post={featuredPost} />
        </section>
      )}

      {/* Category Tabs & Interactive Post Grid */}
      <section className="space-y-6 px-3.5 sm:px-0">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            All Articles & Guides
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Showing {allPosts.length} total publications
          </span>
        </div>

        <BlogIndexClient posts={allPosts} />
      </section>

      {/* Footer Banner: Interactive Calculators */}
      <section className="mx-3.5 sm:mx-0 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50/50 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Need real-time calculation on your numbers?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Use our 160+ interactive calculators for Stripe, PayPal, US sales tax by state, and UK VAT.
          </p>
        </div>
        <Link
          href="/"
          className="tap-spring shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors shadow-xs"
        >
          <span>Explore All Tools</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
