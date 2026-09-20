import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  FileCheck,
  Scale,
  Sparkles,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure & Commercial Transparency — FeeKit',
  description:
    'Read FeeKit’s affiliate disclosure. Learn how we maintain editorial independence, evaluate business software, and disclose commercial compensation.',
  alternates: {
    canonical: 'https://www.usefeekit.com/affiliate-disclosure',
  },
  openGraph: {
    title: 'Affiliate Disclosure & Commercial Transparency — FeeKit',
    description:
      'Transparent disclosure of affiliate relationships, evaluation standards, and editorial independence on FeeKit.',
    url: 'https://www.usefeekit.com/affiliate-disclosure',
    siteName: 'FeeKit',
    type: 'website',
  },
};

export default function AffiliateDisclosurePage() {
  const lastUpdated = 'January 2026';

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
        name: 'Affiliate Disclosure',
        item: 'https://www.usefeekit.com/affiliate-disclosure',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Affiliate Disclosure & Commercial Transparency',
    url: 'https://www.usefeekit.com/affiliate-disclosure',
    description:
      'FeeKit affiliate disclosure statement, commercial guidelines, and editorial independence standards.',
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
    },
  };

  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
          <Scale className="h-3.5 w-3.5 text-blue-600" />
          <span>Trust & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Affiliate Disclosure
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Core Primary Disclosure Callout */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 space-y-2.5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldAlert className="h-5 w-5 text-blue-600 shrink-0" />
            <span>Clear & Conspicuous Statement</span>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            Some links on FeeKit may be affiliate links. If you click an affiliate link and subsequently purchase or sign up for a qualifying product or service, FeeKit may receive a commission at no additional cost to you.
          </p>
        </div>

        {/* 1. Purpose of This Disclosure */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Purpose of Commercial Disclosures</h2>
          <p>
            FeeKit (usefeekit.com) is committed to complete operational transparency in accordance with the United States Federal Trade Commission (FTC) Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255), the UK Competition and Markets Authority (CMA) guidance on digital disclosures, and global consumer protection standards.
          </p>
          <p>
            Our core mission is providing free, high-precision financial calculators, tax tools, and educational guides for freelancers, consultants, service businesses, and online merchants. To keep our calculation utilities 100% free, client-side, and accessible without mandatory paywalls or subscriptions, we may earn revenue through contextual affiliate partnerships and advertising.
          </p>
        </section>

        {/* 2. How Affiliate Links Function */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. How Affiliate Links Work</h2>
          <p>
            When you click an outbound link identified as an affiliate or partner referral link, a tracking cookie or referral tag may be placed by the respective merchant platform or affiliate network (e.g., PartnerStack, Impact, or first-party partner portals). If you subsequently open an account or purchase a subscription, the provider pays FeeKit a referral commission.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Cost Surcharge</span>
              </div>
              <p className="text-slate-600">
                You never pay more by clicking a link on FeeKit. Pricing, terms, and discounts remain identical to or better than standard direct provider channels.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Transparent Context</span>
              </div>
              <p className="text-slate-600">
                Affiliate relationships are clearly disclosed on pages where commercial links or recommendations are present.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Editorial Independence */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Editorial Independence & Integrity</h2>
          <p>
            Our editorial content is created to be useful, factual, and mathematically accurate. Affiliate relationships do not automatically determine product inclusion, ratings, or analytical comparisons:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Objective Evaluation:</strong> We evaluate tools based on utility, fee transparency, feature sets, and relevance to freelancers and small businesses.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Pay-for-Rank:</strong> Software providers cannot purchase higher rankings, favorable test outcomes, or biased editorial coverage.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Inclusion of Non-Affiliates:</strong> We regularly analyze, benchmark, and calculate fees for platforms with which we have no commercial relationship whatsoever (such as state tax agencies and payment processors).</span>
            </li>
          </ul>
        </section>

        {/* 4. Verification with Providers */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Product Information & Independent Verification</h2>
          <p>
            Pricing tiers, software features, terms of service, and regulatory requirements can change rapidly. While our editorial desk regularly reviews and updates published guides, we strongly urge all readers to independently verify current pricing, promotional terms, contract commitments, and feature availability directly on the provider&apos;s official website prior to making any financial or contractual commitment.
          </p>
        </section>

        {/* 5. Questions & Feedback */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">5. Questions & Corporate Contact</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FeeKit is operated by <strong>Snab Innovations</strong>. If you have questions about our commercial relationships, wish to report an inaccurate rate, or require additional disclosure details, please contact our team:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs space-y-1 text-slate-700">
            <div><strong>Entity:</strong> Snab Innovations (Nashik, Maharashtra, India 422005)</div>
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@snab.co.in" className="text-sky-600 underline font-semibold">
                hello@snab.co.in
              </a>
            </div>
            <div>
              <strong>Editorial Policy:</strong>{' '}
              <Link href="/editorial-policy" className="text-sky-600 underline font-semibold">
                Read our Editorial Policy →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
