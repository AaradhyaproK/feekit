import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe2,
  TrendingUp,
  FileCheck,
  Building2,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About FeeKit — B2B Financial Precision & Engineering Standards',
  description:
    'Learn about FeeKit: The definitive client-side financial precision utility for US & UK merchants, contractors, and digital sellers.',
  alternates: {
    canonical: 'https://www.usefeekit.com/about',
  },
};

import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export default function AboutPage() {
  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          About FeeKit
        </h1>
        <p className="text-sm text-slate-600">
          The definitive, zero-latency financial computation engine built for commercial operators in the US and UK.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Mission Statement */}
        <div className="space-y-3">
          <h2 className="text-xl font-black text-slate-900">Our Mission: Eliminate Financial Guesswork</h2>
          <p>
            FeeKit was founded to solve a pervasive frustration faced by modern business operators: bloated, slow, ad-choked calculators that send sensitive business data across unknown servers and return inaccurate, outdated mathematical approximations.
          </p>
          <p>
            Whether you are an e-commerce brand calculating unit economics on Amazon FBA, a software agency structuring 1099 contractor proposals, or an online merchant reconciling Stripe and PayPal gateway cuts, you deserve instantaneous, pure TypeScript calculations that respect your privacy and reflect exact 2026 fiscal statutes.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <Cpu className="h-4 w-4 shrink-0" />
              <span>1. Pure Client-Side Math</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every single formula executes locally inside your web browser. Zero server round-trips, zero database storage, and instant zero-millisecond responsiveness.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <FileCheck className="h-4 w-4 shrink-0" />
              <span>2. 2026 Fiscal Accuracy</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our tax databases are calibrated directly against official revenue guidelines: IRS Form 1040 Schedule C, California CDTFA, Texas Comptroller, and UK HMRC Making Tax Digital schedules.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
              <Globe2 className="h-4 w-4 shrink-0" />
              <span>3. Two-Way Payout Logic</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every engine supports forward calculations (Charge $X → Net Received) and reverse math (Need $X Net → Gross to Invoice), preventing margin erosion.
            </p>
          </div>
        </div>

        {/* Editorial Standards & Source Verification */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">Editorial Standards & Official Data Sources</h2>
          <p>
            All benchmarks and formulas across our 160+ dedicated tools are verified against primary financial and governmental records:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>US State Sales Tax:</strong> Sourced from individual Department of Revenue releases, including California CDTFA Publication 71, New York State Publication 718, and Florida DR-15.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>UK VAT & HMRC:</strong> Sourced from HMRC Notice 700 (The VAT Guide) and standard/reduced rate schedules under Making Tax Digital (MTD).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Payment Processors:</strong> Published developer documentation and merchant service agreements from Stripe, PayPal Commerce, Square, Wise Business, and Authorize.Net.</span>
            </li>
          </ul>
        </div>

        {/* Parent Company & Corporate Governance */}
        <div className="space-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Building2 className="h-5 w-5 text-sky-600 shrink-0" />
            <h2>Parent Company & Corporate Governance</h2>
          </div>
          <p>
            FeeKit is designed, engineered, and maintained as a specialized fintech utility by <strong>Snab Innovations</strong>, an independent digital products and software engineering company committed to building fast, high-utility, privacy-first software.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-slate-500" />
                <span>Operating Entity</span>
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
              <p className="text-slate-500">Global B2B software engineering & digital utility operations.</p>
            </div>

            <div className="space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span>Registered Address</span>
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
                Get directions ↗
              </a>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Have a Question or Rate Update?</h3>
            <p className="text-xs text-slate-600">
              Reach our engineering and editorial team directly at{' '}
              <a href="mailto:hello@snab.co.in" className="font-semibold text-sky-600 hover:underline">
                hello@snab.co.in
              </a>.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors shrink-0"
          >
            <span>Contact Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
