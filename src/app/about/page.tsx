import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe2,
  FileCheck,
  Building2,
  MapPin,
  ExternalLink,
  Mail,
  Clock,
  Sparkles,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export const metadata: Metadata = {
  title: 'About FeeKit — Mission, Accuracy Standards & Founder Bio',
  description:
    'Learn about FeeKit: 199+ client-side financial calculators for US & UK merchants and freelancers. Meet founder Aaradhya Pathak and explore our statutory accuracy commitments.',
  alternates: {
    canonical: 'https://www.usefeekit.com/about',
  },
};

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aaradhya Pathak',
    jobTitle: 'Financial Systems Developer',
    email: 'mailto:aaradhya1774@gmail.com',
    worksFor: {
      '@type': 'Organization',
      name: 'Snab Innovations',
      url: 'https://snab.co.in',
    },
    url: 'https://www.usefeekit.com/about',
    sameAs: [
      'https://aaradhyadev.vercel.app/',
      'https://www.linkedin.com/in/aaradhyapathak17',
      'https://x.com/aaradhya1774',
      'https://github.com/AaradhyaproK',
    ],
    description:
      'Founder and lead developer of FeeKit. Expert in client-side financial computation engines, payment gateway fee models, and IRS/HMRC tax statutory algorithms.',
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About FeeKit',
    description:
      'FeeKit provides 199+ client-side financial calculators for US and UK merchants, contractors, and freelancers.',
    url: 'https://www.usefeekit.com/about',
    mainEntity: personSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
        {/* Navigation & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <BackButton fallbackHref="/" label="Back to previous page" />
          <div className="w-full sm:w-72 md:w-80">
            <FastSearchBar placeholder="Search tools..." />
          </div>
        </div>

        {/* 1. SITE DESCRIPTION SECTION */}
        <section aria-labelledby="about-feekit-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Est. September 2026 • 199+ Financial Tools
            </span>
          </div>
          <h1
            id="about-feekit-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            About FeeKit
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            High-precision, privacy-first financial calculation utilities engineered for US merchants, UK businesses, independent contractors, and digital sellers.
          </p>
        </section>

        {/* Main Content Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 space-y-10 sm:space-y-12 shadow-xs text-slate-700 text-sm leading-relaxed">
          {/* Detailed Overview Paragraphs */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Free, Private Financial Precision for the Modern Economy
            </h2>
            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Launched in September 2026, <strong>FeeKit</strong> is a specialized financial computation platform offering over <strong>199+ free calculators</strong>. We serve independent freelancers, e-commerce store operators, digital service agencies, and small business owners across the <strong>United States and the United Kingdom</strong> who need exact mathematical certainty without the bloat, cost, or complexity of traditional enterprise software.
              </p>
              <p>
                FeeKit was built to solve a simple but critical problem: standard business calculators are frequently cluttered with intrusive popups, gatekeep basic formulas behind monthly subscriptions, and upload proprietary sales figures to unknown third-party servers. In contrast, FeeKit operates on a strict <strong>100% client-side privacy model</strong>—every formula executes locally in your browser, your financial data never touches an external server, and all tools remain <strong>free forever</strong> with no account creation or credit card required.
              </p>
              <p>
                FeeKit is a product of <strong>Snab Innovations</strong>, an independent software studio based in India dedicated to engineering fast, robust, and accessible digital utilities for global creators and businesses.
              </p>
            </div>
          </section>

          {/* 2. AUTHOR/CREATOR SECTION */}
          <section
            aria-labelledby="meet-creator-heading"
            className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/70 via-slate-50/50 to-white p-6 sm:p-8 space-y-6 shadow-2xs"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
              <UserCheck className="h-4 w-4" />
              <span>Editorial Leadership &amp; Engineering</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Creator Initials Avatar */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-md border-2 border-white ring-4 ring-blue-100">
                  AP
                </div>
                <div
                  className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white shadow-xs"
                  title="Verified Author"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Creator Bio & Credentials */}
              <div className="space-y-2 flex-1">
                <div>
                  <h2
                    id="meet-creator-heading"
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Aaradhya Pathak
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700">
                    Independent Financial Analyst &amp; Full-Stack Developer
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Aaradhya Pathak is the founder and lead developer of FeeKit. With expertise in financial systems, Next.js development, and IRS/HMRC tax compliance, he built FeeKit to give freelancers and merchants the precise financial tools that expensive accounting software keeps behind paywalls. All calculators are manually verified against official IRS, HMRC, and payment gateway documentation.
                </p>

                {/* Creator Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href="https://aaradhyadev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-700 transition-colors shadow-2xs"
                  >
                    <Globe2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>aaradhyadev.vercel.app</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aaradhyapathak17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors shadow-2xs"
                  >
                    <svg className="h-3.5 w-3.5 fill-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                    </svg>
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href="https://x.com/aaradhya1774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors shadow-2xs"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X (@aaradhya1774)</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/AaradhyaproK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors shadow-2xs"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>

                  <a
                    href="mailto:aaradhya1774@gmail.com"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors shadow-2xs"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>aaradhya1774@gmail.com</span>
                  </a>

                  <Link
                    href="/editorial-policy"
                    className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors shadow-2xs"
                  >
                    <FileCheck className="h-3.5 w-3.5 text-slate-400" />
                    <span>Editorial Standards</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. MISSION SECTION */}
          <section aria-labelledby="our-mission-heading" className="space-y-4 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <h2
                id="our-mission-heading"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
              >
                Our Mission
              </h2>
            </div>
            <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/50 p-6 sm:p-7">
              <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed italic">
                &ldquo;FeeKit exists to give every freelancer, merchant, and small business owner the same financial precision tools that enterprise businesses take for granted — completely free, completely private, and always up to date.&rdquo;
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <Cpu className="h-4 w-4 shrink-0" />
                  <span>100% Client-Side Privacy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every calculation runs directly in the user browser via pure TypeScript. Zero databases, zero tracking cookies, zero risk of data exposure.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>100% Free Forever</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No subscriptions, no trials, no paywalls. We believe essential math for small business survival should be accessible to everyone.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                  <Globe2 className="h-4 w-4 shrink-0" />
                  <span>Bidirectional Calculation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Forward and reverse payout math gives operators total pricing confidence, protecting margins against hidden gateway cuts and district surtaxes.
                </p>
              </div>
            </div>
          </section>

          {/* 4. ACCURACY COMMITMENT SECTION */}
          <section aria-labelledby="accuracy-heading" className="space-y-4 border-t border-slate-200 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <h2
                  id="accuracy-heading"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                >
                  How We Keep Rates Accurate
                </h2>
              </div>
              <Link
                href="/methodology"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Full Methodology</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because FeeKit covers financial planning, sales tax compliance, and merchant economics (YMYL topics), we hold our math to rigorous verification protocols:
            </p>

            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Direct Official Source Calibration
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rates are verified against primary statutory documents: official IRS Form 1040 Schedule SE tax guidelines, UK HMRC Notice 700 VAT schedules, California CDTFA, Texas Comptroller, and published Stripe, PayPal, Square, and Wise merchant pricing schedules.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Immediate Revision on Gateway or Regulatory Changes
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When payment processors adjust cross-border surcharges or states amend municipal sales tax thresholds, our mathematical matrices are patched and deployed to production within 24 to 48 hours.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <FileCheck className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Transparent Methodology Documentation
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every formula, rounding rule, and deduction tier is openly documented on our{' '}
                    <Link href="/methodology" className="text-blue-600 font-semibold underline hover:text-blue-800">
                      Methodology &amp; Calculation Standards
                    </Link>{' '}
                    page so users can inspect the underlying arithmetic.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Peer-Reviewed Mathematical Testing
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All financial calculation engines undergo automated unit tests and peer review against real-world transaction statements prior to release.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Corporate Entity Details */}
          <section aria-labelledby="company-heading" className="space-y-4 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-sky-600 shrink-0" />
              <h2
                id="company-heading"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
              >
                Corporate Entity &amp; Governance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              FeeKit is designed, engineered, and maintained by <strong>Snab Innovations</strong>, an independent digital products studio based in Nashik, Maharashtra, India.
            </p>

            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-slate-500" />
                  <span>Operating Studio</span>
                </div>
                <p className="text-slate-600">
                  <a
                    href="https://snab.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    Snab Innovations
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
                <p className="text-slate-500">Digital utility software &amp; financial tooling.</p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                  <span>Registered Location</span>
                </div>
                <p className="text-slate-600">
                  Nashik, Maharashtra<br />
                  India 422005
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nashik%2C%20Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1 text-[11px]"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </section>

          {/* 5. CONTACT SECTION */}
          <section
            aria-labelledby="contact-heading"
            className="rounded-2xl border border-slate-200 bg-slate-50/90 p-6 sm:p-8 space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <h2 id="contact-heading" className="text-base sm:text-lg font-bold text-slate-900">
                    Editorial Questions or Rate Discrepancies?
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Direct email:{' '}
                  <a
                    href="mailto:hello@snab.co.in"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    hello@snab.co.in
                  </a>
                </p>
                <p className="text-xs text-slate-500">
                  ⚡ Response time: <strong>We respond within 48 hours</strong>
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Link
                  href="/contact"
                  className="tap-spring inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors shrink-0"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
