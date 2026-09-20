import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { COMPARISONS_DATA, type SoftwareComparison } from '@/data/comparisons';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(COMPARISONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = COMPARISONS_DATA[slug];

  if (!comparison) {
    return { title: 'Comparison Not Found — FeeKit' };
  }

  const url = `https://www.usefeekit.com/compare/${slug}`;

  return {
    title: `${comparison.title} | FeeKit`,
    description: comparison.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${comparison.title} | FeeKit`,
      description: comparison.description,
      url,
      siteName: 'FeeKit',
      type: 'article',
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = COMPARISONS_DATA[slug];

  if (!comparison) {
    notFound();
  }

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
        name: 'Small Business Hub',
        item: 'https://www.usefeekit.com/small-business',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: comparison.title,
        item: `https://www.usefeekit.com/compare/${slug}`,
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.description,
    author: {
      '@type': 'Organization',
      name: 'FeeKit Editorial Desk',
      url: 'https://www.usefeekit.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
    },
    datePublished: '2026-01-15',
    dateModified: '2026-01-20',
  };

  return (
    <div className="space-y-8 pb-14 animate-in fade-in duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/small-business" label="Back to Small Business Hub" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search business tools..." />
        </div>
      </div>

      {/* Main Container */}
      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-4 py-8 sm:p-10 lg:p-12 shadow-xs space-y-8 text-slate-700 text-sm leading-relaxed">
        {/* Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto pb-1">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/small-business" className="hover:text-blue-600 transition-colors">Small Business</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium">Software Comparison</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
            <Scale className="h-3.5 w-3.5 text-blue-600" />
            <span>Independent Software Comparison</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {comparison.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
            {comparison.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium border-t border-slate-100">
            <span>Published by <strong>FeeKit Editorial Desk</strong></span>
            <span>•</span>
            <span>Neutral Evaluation (No Sponsored Ranking)</span>
            <span>•</span>
            <span>Updated for 2026</span>
          </div>
        </header>

        {/* Transparent Commercial Disclosure Callout */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <ShieldAlert className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Affiliate & Editorial Disclosure</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            FeeKit is an independent resource. We evaluate software platforms based on published documentation and functional utility. Some outbound links may be affiliate links through which FeeKit could earn a commission if you register for a service, at no additional cost to you. Commercial relationships do not influence our factual comparisons. Please verify current pricing directly with providers. For details, read our{' '}
            <Link href="/affiliate-disclosure" className="text-sky-600 underline font-semibold">
              Affiliate Disclosure
            </Link>.
          </p>
        </div>

        {/* Overview Cards: Tool A vs Tool B */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Platform Overviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900">{comparison.toolAName}</h3>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                  Profile
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {comparison.overviewToolA}
              </p>
              <div className="pt-2 border-t border-slate-200/80 text-xs">
                <span className="font-bold text-slate-900 block mb-1">Typically Best For:</span>
                <p className="text-slate-600">{comparison.bestForToolA}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900">{comparison.toolBName}</h3>
                <span className="text-[11px] font-bold text-slate-700 bg-slate-200 border border-slate-300 px-2.5 py-0.5 rounded-full">
                  Profile
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {comparison.overviewToolB}
              </p>
              <div className="pt-2 border-t border-slate-200/80 text-xs">
                <span className="font-bold text-slate-900 block mb-1">Typically Best For:</span>
                <p className="text-slate-600">{comparison.bestForToolB}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Key Architectural Differences
          </h2>
          <ul className="space-y-2 text-xs">
            {comparison.keyDifferences.map((diff, idx) => (
              <li key={idx} className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-800 leading-relaxed">{diff}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Side-by-Side Feature Matrix */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Side-by-Side Feature Matrix
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-3.5 w-1/4">Evaluation Criteria</th>
                  <th className="p-3.5 w-1/3">{comparison.toolAName}</th>
                  <th className="p-3.5 w-1/3">{comparison.toolBName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.features.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900 align-top">
                      {row.feature}
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">{row.notes}</div>
                    </td>
                    <td className="p-3.5 text-slate-700 align-top leading-relaxed">{row.toolA}</td>
                    <td className="p-3.5 text-slate-700 align-top leading-relaxed">{row.toolB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Questions for Decision Makers */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Questions to Ask When Deciding
          </h2>
          <div className="space-y-2 text-xs">
            {comparison.evaluationQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5">
                <HelpCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-800 font-medium">{q}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related FeeKit Tools */}
        <div className="border-t border-slate-200 pt-6 space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Related Calculations & Resources on FeeKit:</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {comparison.relatedCalculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span>{c.label}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
