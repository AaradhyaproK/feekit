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

        {/* 2. Advertising and Third-Party Cookies (Google AdSense Compliant) */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">2. Advertising, Cookies & Third-Party Vendors (Google AdSense)</h2>
          <p>
            FeeKit displays non-intrusive banner and native advertisements to fund free access to our financial calculators. We partner with third-party advertising networks, including Google AdSense, to serve relevant advertisements when you visit our website.
          </p>

          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-900">Mandatory Google AdSense Disclosures:</div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Third-Party Vendors:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to FeeKit or other websites across the Internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>DoubleClick / Advertising Cookies:</strong> Google&apos;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve personalized and non-personalized ads to your browser based on visits to FeeKit and/or other sites on the Internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Opting Out of Personalized Advertising:</strong> You may opt out of personalized Google advertising at any time by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">Google Ads Settings</a>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Industry-Wide Opt-Out Tools:</strong> You can opt out of a third-party vendor&apos;s use of cookies for personalized advertising across participating ad networks by visiting:</span>
              </li>
            </ul>

            <div className="pl-6 pt-1 space-y-1 text-xs">
              <div>• Digital Advertising Alliance (DAA): <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://optout.aboutads.info/</a></div>
              <div>• Network Advertising Initiative (NAI): <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://optout.networkadvertising.org/</a></div>
              <div>• European Interactive Digital Advertising Alliance (EDAA - EU/UK): <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.youronlinechoices.eu/</a></div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs">
            <div className="font-bold text-slate-900">Cookies Used on FeeKit:</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <span className="font-semibold text-slate-800 block">Strictly Necessary</span>
                <span className="text-slate-500 text-[11px]">Browser state, local UI theme, and cookie consent preferences. No personal tracking.</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">Analytics & Performance</span>
                <span className="text-slate-500 text-[11px]">Anonymous aggregated metrics to monitor page load speeds and prevent technical errors.</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">Advertising (Google AdSense)</span>
                <span className="text-slate-500 text-[11px]">Ad serving, fraud detection, frequency capping, and ad effectiveness measurement.</span>
              </div>
            </div>
            <div className="pt-2">
              For complete technical specifications, see our dedicated <Link href="/cookies" className="text-blue-600 underline font-semibold">Cookie Policy</Link>.
            </div>
          </div>
        </section>

        {/* 3. GDPR & CCPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Rights Under GDPR (UK & EU) and CCPA/CPRA (California)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR), UK Data Protection Act 2018, and California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA), visitors possess explicit rights concerning their digital privacy:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Do Not Sell or Share My Personal Information:</strong> FeeKit does not sell, rent, or trade your personal data or calculation numbers to any third party.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Right to Access & Deletion:</strong> Because our calculation engines operate 100% client-side with zero server databases or user accounts, we maintain no identifiable records of your calculations to inspect or delete.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Consent Revocation:</strong> You can manage or reset your cookie preferences at any time using our cookie settings banner or through your browser settings.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-600 pt-1">
            For any formal data subject access requests or privacy inquiries, contact our Data Protection Officer at{' '}
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
