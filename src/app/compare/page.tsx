import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Scale, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPARISONS_DATA } from '@/data/comparisons';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { brandTitle, buildDescription } from '@/lib/seo/meta-builder';

export const dynamicParams = false;

const TITLE = 'Free Accounting Software Comparisons for Small Business (2026)';

const DESCRIPTION =
  'Independent, side-by-side accounting software comparisons for US and UK small businesses. See feature matrices, pricing structures and which platform fits which workflow.';

const FAQS = [
  {
    question: 'How does FeeKit compare accounting software platforms?',
    answer:
      'Every FeeKit comparison is built from published vendor documentation and a fixed feature matrix. Each platform is evaluated on the same criteria - workflow orientation, time tracking, inventory, accountant collaboration, and reporting - so the comparison is symmetrical rather than promotional. FeeKit does not accept paid placements and earns an affiliate commission when you sign up through our links, which never changes the ranking.',
  },
  {
    question: 'Which accounting software is best for freelancers and consultants?',
    answer:
      'For freelancers and service professionals who bill by time, FreshBooks leads on native time tracking and milestone project billing, while QuickBooks Online leads for inventory-heavy and multi-entity businesses. If you invoice a mix of retainers and project milestones, read our FreshBooks for Freelancers guide before deciding.',
  },
  {
    question: 'Are these comparisons still accurate for 2026?',
    answer:
      'Yes. Each comparison page carries a date-modified value in its structured data and is reviewed whenever a vendor publishes a pricing or feature change. If you spot an outdated detail, report it through our contact page and we will correct it and log the change in the public changelog.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const title = brandTitle(TITLE);
  const description = buildDescription(DESCRIPTION);
  const url = 'https://www.usefeekit.com/compare';

  return {
    title,
    description,
    keywords: [
      'accounting software comparison',
      'freshbooks vs quickbooks',
      'small business accounting software',
      'freelance accounting software',
      'bookkeeping software comparison',
      'best accounting software 2026',
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'FeeKit',
      type: 'website',
      images: [
        {
          url: 'https://www.usefeekit.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'FeeKit accounting software comparisons',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.usefeekit.com/og-image.png'],
    },
  };
}

export default function CompareIndexPage() {
  const comparisons = Object.values(COMPARISONS_DATA);

  const breadcrumbJsonLd = {
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
        name: 'Software Comparisons',
        item: 'https://www.usefeekit.com/compare',
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Accounting Software Comparisons',
    description: DESCRIPTION,
    url: 'https://www.usefeekit.com/compare',
    inLanguage: 'en-US',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: comparisons.length,
      itemListElement: comparisons.map((c, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `${c.toolAName} vs ${c.toolBName}`,
        url: `https://www.usefeekit.com/compare/${c.slug}`,
      })),
    },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <FaqSchema items={FAQS} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <Link
          href="/small-business"
          prefetch={false}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180" />
          <span>Small Business Hub</span>
        </Link>
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search business tools..." />
        </div>
      </div>

      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-4 py-8 sm:p-10 lg:p-12 shadow-xs space-y-8">
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" prefetch={false} className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium">Software Comparisons</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
            <Scale className="h-3.5 w-3.5 text-blue-600" />
            <span>Independent Software Comparison</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Free Accounting Software Comparisons for Small Business
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
            Side-by-side, feature-by-feature evaluations of the accounting platforms small
            businesses actually choose between. Every page uses the same evaluation matrix
            so the comparison is symmetrical, sourced from published vendor documentation,
            and free of paid placement.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium border-t border-slate-100">
            <span>
              <strong className="text-slate-900">{comparisons.length}</strong> head-to-head
              reviews
            </span>
            <span>•</span>
            <span>Neutral Evaluation (No Sponsored Ranking)</span>
            <span>•</span>
            <span>Reviewed for 2026</span>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            All Software Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                prefetch={false}
                className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-5 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {c.toolAName} vs {c.toolBName}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Read Full Comparison</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4 border-t border-slate-200 pt-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>How We Evaluate</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            A Symmetrical Methodology, Not a Sales Pitch
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              'Every platform is scored against an identical feature matrix, so neither side of a comparison is structurally favoured.',
              'Pricing and feature claims are sourced from published vendor documentation and re-checked whenever a vendor publishes a change.',
              'FeeKit does not accept paid placement or featured rankings. Affiliate revenue never influences the ordering of a verdict.',
              'Each comparison carries a date-modified value in its structured data, and every correction is logged publicly in the changelog.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-t border-slate-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2"
              >
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Related FeeKit Resources
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { href: '/guides/freshbooks-for-freelancers', label: 'FreshBooks for Freelancers Guide' },
              { href: '/small-business', label: 'Small Business Hub' },
              { href: '/tools/freelance-rate-calculator', label: 'Freelance Rate Calculator' },
              { href: '/invoice-generator', label: 'Invoice Generator' },
              { href: '/blog/accounting-software-vs-spreadsheet', label: 'Accounting Software vs Spreadsheet' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
