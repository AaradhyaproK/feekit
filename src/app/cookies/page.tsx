import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cookie,
  ShieldCheck,
  Eye,
  CheckCircle2,
  Settings,
  ExternalLink,
  Lock,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { CookieConsentManager } from '@/components/cookies/CookieConsentManager';

export const metadata: Metadata = {
  title: 'Cookie Policy — FeeKit',
  description:
    'FeeKit Cookie Policy: Understand how we utilize essential technical cookies and third-party advertising cookies (Google AdSense) with zero personal financial tracking.',
  alternates: {
    canonical: 'https://www.usefeekit.com/cookies',
  },
};

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Core Guarantee */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Zero Financial Tracking Guarantee</span>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            FeeKit never stores or transmits your numerical calculation data through cookies. When you compute sales tax, Stripe fees, or 1099 freelance rates, all mathematical operations execute locally inside your browser sandbox. Cookies on FeeKit are strictly limited to technical operational state, anonymous performance monitoring, and standard advertising delivery via Google AdSense.
          </p>
        </div>

        {/* 1. What Are Cookies */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device (computer, smartphone, or tablet) by websites you visit. They are widely used to make websites function efficiently, improve user experience, and provide reporting insights to site operators and authorized advertising partners.
          </p>
        </section>

        {/* 2. Google AdSense & Third-Party Advertising Cookies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">2. Google AdSense & Advertising Cookies</h2>
          <p>
            FeeKit is a 100% free financial precision suite funded through non-intrusive banner and native advertising. We utilize Google AdSense to serve advertisements:
          </p>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Third-Party Vendors & Google:</strong> Google and its advertising partners use cookies to serve ads based on your prior visits to FeeKit and other sites across the web.</span>
            </li>
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>DoubleClick DART Cookies:</strong> Google&apos;s use of advertising cookies enables it to serve relevant ads based on browsing history while preventing the same advertisement from repeatedly showing to the same visitor.</span>
            </li>
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Opt-Out of Personalized Ads:</strong> You can opt out of Google&apos;s personalized advertising by visiting the <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">Google Ads Settings</a> page.</span>
            </li>
          </ul>
        </section>

        {/* 3. Comprehensive Cookie Table */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Cookies Deployed on FeeKit</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-3">Cookie Name</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-3 font-mono text-slate-800">feekit_cookie_consent</td>
                  <td className="p-3">FeeKit (First-Party)</td>
                  <td className="p-3">Stores your cookie consent selection (essential vs accepted)</td>
                  <td className="p-3">1 Year</td>
                  <td className="p-3 font-semibold text-emerald-700">Strictly Necessary</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-slate-800">_gads, __gpi</td>
                  <td className="p-3">Google AdSense</td>
                  <td className="p-3">Enables ad serving, frequency capping, and prevents click fraud</td>
                  <td className="p-3">13 Months</td>
                  <td className="p-3 font-semibold text-blue-700">Advertising</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-slate-800">_gac_*</td>
                  <td className="p-3">Google AdSense</td>
                  <td className="p-3">Stores campaign and conversion measurement parameters</td>
                  <td className="p-3">90 Days</td>
                  <td className="p-3 font-semibold text-blue-700">Advertising</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-slate-800">IDE</td>
                  <td className="p-3">DoubleClick (Google)</td>
                  <td className="p-3">Used for measuring ad performance and targeting non-personalized/relevant ads</td>
                  <td className="p-3">1 Year</td>
                  <td className="p-3 font-semibold text-blue-700">Advertising</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Interactive Consent Management */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Manage Your Cookie Preferences</h2>
          <p className="text-xs text-slate-600">
            You can change your consent preferences for this device at any time below:
          </p>
          <CookieConsentManager />
        </section>

        {/* 5. Browser-Level Controls & Opt-Out Portals */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. How to Control Cookies in Your Browser</h2>
          <p className="text-xs text-slate-600">
            Most web browsers allow you to manage cookie preferences through their settings. You can block or delete cookies across all websites by adjusting browser configurations:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs font-semibold">
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 hover:bg-slate-100 hover:text-blue-600 text-center transition-colors"
            >
              Google Chrome ↗
            </a>
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 hover:bg-slate-100 hover:text-blue-600 text-center transition-colors"
            >
              Apple Safari ↗
            </a>
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 hover:bg-slate-100 hover:text-blue-600 text-center transition-colors"
            >
              Mozilla Firefox ↗
            </a>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 hover:bg-slate-100 hover:text-blue-600 text-center transition-colors"
            >
              Microsoft Edge ↗
            </a>
          </div>

          <div className="pt-2 text-xs space-y-1">
            <p className="font-semibold text-slate-800">Independent Advertising Industry Opt-Out Portals:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Digital Advertising Alliance (US): <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://optout.aboutads.info/</a></li>
              <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://optout.networkadvertising.org/</a></li>
              <li>European Interactive Digital Advertising Alliance (EU & UK): <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.youronlinechoices.eu/</a></li>
            </ul>
          </div>
        </section>

        {/* 6. Contact and Operating Entity */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">6. Questions & Data Protection Officer</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FeeKit is owned and operated by <strong>Snab Innovations</strong>. If you have questions regarding our Cookie Policy, contact us directly at{' '}
            <a href="mailto:hello@snab.co.in" className="text-blue-600 underline font-semibold">
              hello@snab.co.in
            </a>{' '}
            or review our full <Link href="/privacy" className="text-blue-600 underline font-semibold">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
