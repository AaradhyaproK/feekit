import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — FeeKit',
  description:
    'FeeKit Privacy Policy: We operate on 100% client-side computation with zero server tracking or retention of your business financial calculations.',
  alternates: {
    canonical: 'https://www.usefeekit.com/privacy',
  },
};

import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export default function PrivacyPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Core Guarantee */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Core Privacy Architecture: 100% Client-Side Pure Mathematics</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            FeeKit is engineered from the ground up to protect your financial confidentiality. When you type in invoice numbers, salary figures, gross profit amounts, or sales tax calculations, <strong>no financial data is ever transmitted to our servers or stored in any database</strong>. All computational logic executes locally inside your web browser via compiled TypeScript.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Do (and Do Not) Collect</h2>
          <p>
            Because our calculation utilities run entirely within your client session, we do not require account registration, passwords, or personal banking credentials to use FeeKit:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Financial Inputs Stored:</strong> We do not log, capture, or analyze the currency values, transaction volumes, contractor day rates, or tax figures you calculate.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Standard Server Logs:</strong> Like standard web hosts, our server infrastructure records basic technical HTTP request logs (IP address, user agent, requested URL, timestamp) for security and DDoS mitigation.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>URL Hash Sharing:</strong> Calculation snapshots generated through the Share button store parameters locally in the browser URL hash fragment or query string, allowing peer-to-peer sharing without server database persistence.</span>
            </li>
          </ul>
        </section>

        {/* 2. Advertising and Third-Party Cookies */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Advertising & Third-Party Cookies (Google AdSense)</h2>
          <p>
            FeeKit displays non-intrusive banner advertisements to fund free access to our financial tools. Third-party vendors, including Google, use cookies to serve ads based on prior visits to this website or other websites:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to FeeKit and/or other sites on the Internet.</span>
            </li>
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ads Settings</a> or through <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aboutads.info</a>.</span>
            </li>
          </ul>
        </section>

        {/* 3. GDPR & CCPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Rights Under GDPR (UK & EU) and CCPA (California)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you maintain explicit data privacy rights:
          </p>
          <p className="text-xs text-slate-600">
            Because we do not maintain personal profiles, sell personal data, or store user accounts, we hold no personal data linking your identity to your calculation history. For any privacy requests, questions regarding cookie consent, or data subject inquiries, you may contact our designated Data Protection officer at{' '}
            <a href="mailto:hello@snab.co.in" className="text-blue-600 underline font-medium">
              hello@snab.co.in
            </a>.
          </p>
        </section>

        {/* 4. Security */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. HTTPS Security & Transport Encryption</h2>
          <p>
            All connections to FeeKit are strictly enforced over modern TLS/HTTPS encryption with HSTS headers. Your web browser connection is encrypted from end to end.
          </p>
        </section>

        {/* 5. Data Controller & Corporate Information */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">5. Data Controller & Operator Identification</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FeeKit is owned, operated, and maintained by <strong>Snab Innovations</strong> as the designated Data Controller.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs space-y-1.5 text-slate-700">
            <div>
              <strong>Operating Entity:</strong>{' '}
              <a
                href="https://snab.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline font-semibold"
              >
                Snab Innovations
              </a>
            </div>
            <div>
              <strong>Registered Address:</strong> Nashik, Maharashtra, India 422005{' '}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nashik%2C%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline text-[11px] font-medium"
              >
                [Get directions ↗]
              </a>
            </div>
            <div>
              <strong>Official Privacy Contact:</strong>{' '}
              <a href="mailto:hello@snab.co.in" className="text-sky-600 underline font-semibold">
                hello@snab.co.in
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
