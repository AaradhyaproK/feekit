import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Building2,
  MapPin,
  ExternalLink,
  HelpCircle,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact FeeKit — Technical Support & Custom Software Inquiries',
  description:
    'Contact FeeKit and Snab Innovations for technical inquiries, tax rate updates, or to hire our engineering team to build personalized software and custom calculation engines.',
  alternates: {
    canonical: 'https://www.usefeekit.com/contact',
  },
};

import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export default function ContactPage() {
  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Top Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Contact FeeKit & Snab Innovations
        </h1>
        <p className="text-sm text-slate-600">
          Have feedback, need a tax rate update, or want to build a personalized software project? We would love to connect.
        </p>
      </div>

      {/* Snab Innovations Custom Software Marketing Feature Banner */}
      <div className="rounded-2xl border-2 border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-3 py-1 text-xs font-bold text-sky-800 border border-sky-200">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              <span>Snab Innovations • Custom Software Engineering</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Need Personalized Software, Bespoke Calculators, or B2B SaaS?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              FeeKit is designed, architected, and maintained by <strong>Snab Innovations</strong>. If your company requires custom financial calculation engines, high-converting interactive tools, programmatic SEO platforms, or modern full-stack web applications, our engineering team can build it for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="https://snab.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>Visit snab.co.in</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:hello@snab.co.in?subject=Custom%20Software%20Project%20Inquiry%20-%20Snab%20Innovations"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-sky-700 transition-colors shadow-xs"
            >
              <span>Email Software Team</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-sky-100/80 text-xs">
          <div className="flex items-start gap-2.5 text-slate-700">
            <div className="rounded-lg bg-sky-100/70 p-1.5 text-sky-700 shrink-0 mt-0.5">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Zero-Latency Engines</span>
              <span className="text-[11px] text-slate-500">Pure client-side logic & millisecond performance</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-700">
            <div className="rounded-lg bg-indigo-100/70 p-1.5 text-indigo-700 shrink-0 mt-0.5">
              <Code2 className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Bespoke SaaS & Web Apps</span>
              <span className="text-[11px] text-slate-500">Next.js, TypeScript, Cloud Native systems</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-700">
            <div className="rounded-lg bg-emerald-100/70 p-1.5 text-emerald-700 shrink-0 mt-0.5">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Lead-Magnet Calculators</span>
              <span className="text-[11px] text-slate-500">Programmatic SEO tools that drive conversion</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-700">
            <div className="rounded-lg bg-purple-100/70 p-1.5 text-purple-700 shrink-0 mt-0.5">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block">Privacy-First Design</span>
              <span className="text-[11px] text-slate-500">Zero database leakages & rigorous GDPR ethics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid: Contact Information & Formspree Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 border border-blue-200/80">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Direct Inquiries Email</div>
                <a
                  href="mailto:hello@snab.co.in"
                  className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  hello@snab.co.in
                </a>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600 border border-indigo-200/80">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Operating Entity</div>
                <a
                  href="https://snab.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-900 hover:text-sky-600 inline-flex items-center gap-1 transition-colors"
                >
                  Snab Innovations
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600 border border-emerald-200/80 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-500 font-medium">Registered Office</div>
                <div className="text-xs font-semibold text-slate-800 leading-snug">
                  Nashik, Maharashtra<br />
                  India 422005
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nashik%2C%20Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  Get directions ↗
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2 text-xs text-slate-600">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-sky-600" />
              <span>Response SLA</span>
            </div>
            <p>
              We typically review and respond to incoming software project inquiries, rate adjustments, and technical questions within 24 business hours.
            </p>
          </div>
        </div>

        {/* Formspree Interactive Direct Form */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
