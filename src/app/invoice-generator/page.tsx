import React from 'react';
import type { Metadata } from 'next';
import { InvoiceGenerator } from '@/components/calculators/InvoiceGenerator';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { LeaderboardAd, RectangleAd } from '@/components/ads/AdSlots';
import {
  FileText,
  ShieldCheck,
  Download,
  Sparkles,
  Printer,
  CheckCircle2,
  Clock,
  DollarSign,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { FaqSchema } from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'Free Invoice Generator — Create & Download PDF Invoices Online | FeeKit',
  description:
    '100% free online invoice generator. Create, customize, and download professional PDF invoices in seconds. Zero watermarks, zero registration required, and 100% client-side private.',
  alternates: {
    canonical: 'https://www.usefeekit.com/invoice-generator',
  },
  openGraph: {
    title: 'Free Invoice Generator — Professional PDF Invoices Online',
    description:
      'Generate and download professional PDF invoices instantly. Free for freelancers, consultants, contractors, and agencies. 100% private.',
    url: 'https://www.usefeekit.com/invoice-generator',
    siteName: 'FeeKit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator — Download Clean PDF Invoices',
    description: 'Instant, free professional invoice creator with zero watermarks or signup.',
  },
};

export default function InvoiceGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FeeKit Free Invoice Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Free client-side invoice generator that formats, calculates, and exports professional PDF invoices with custom tax rates and payment terms.',
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/" label="Back to all tools" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Unified Master Container */}
      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 lg:p-12 shadow-xs space-y-8 sm:space-y-10">
        {/* Header with Title & Trust Badges */}
        <header className="space-y-5 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>100% Free & No Watermark</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Instant PDF Export</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200 font-mono">
              <span>Client-Side Private</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Free Invoice Generator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Create, customize, and print or download clean, professional PDF invoices for clients, contractors, and merchants. Zero account creation required, and zero financial data is ever sent to a server.
            </p>
          </div>
        </header>

        {/* AdSense Leaderboard Unit */}
        <div className="print:hidden">
          <LeaderboardAd />
        </div>

        {/* Live Interactive Invoice Generator */}
        <section aria-label="Interactive Free Invoice Generator">
          <InvoiceGenerator embedded={true} />
        </section>

        {/* AdSense Rectangle Unit */}
        <div className="flex justify-center my-6 print:hidden">
          <RectangleAd />
        </div>

        {/* High-Converting Editorial Guide & Best Practices */}
        <section className="pt-8 border-t border-slate-200 space-y-6 print:hidden">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-extrabold text-slate-900">
              Professional Invoicing Best Practices & Statutory Requirements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Everything you need to ensure fast client payment and accounting compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Essential Invoice Elements</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A legally compliant invoice must include a unique sequential invoice number, issue date, payment due date, seller legal business name and tax ID, client billing details, line item descriptions, and total amount due.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Payment Terms (Net 15 / Net 30)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Always specify exact payment terms on your invoice. Standard terms include Net 15 (payment due within 15 days) or Net 30. Mention accepted payment methods such as direct ACH, wire transfer, Stripe link, or PayPal.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <DollarSign className="h-4 w-4 text-purple-600" />
                <span>Sales Tax & VAT Itemization</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you are registered for sales tax in the US or VAT in the UK/EU, statutory regulations require you to display your tax registration number and state the exact tax percentage charged separately from the subtotal.
              </p>
            </div>
          </div>

          {/* High-Intent SEO FAQs with Structured Rich Snippet Data */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <FaqSchema
              items={[
                {
                  question: 'Is FeeKit Free Invoice Generator completely free without watermarks?',
                  answer:
                    'Yes, 100%. You can generate unlimited professional PDF invoices without paying any subscription fees, creating an account, or having any unwanted software watermarks added to your document.',
                },
                {
                  question: 'How do I download my invoice as a PDF?',
                  answer:
                    'Click the "Download PDF / Print Invoice" button at the top of the generator. Your browser will open the standard print preview dialog. Select "Save as PDF" as the destination printer and click Save to download your invoice instantly.',
                },
                {
                  question: 'Is my financial and client data stored on your servers?',
                  answer:
                    'No. FeeKit operates on a strict zero-knowledge, client-side model. All calculations, logo previews, and invoice text are processed exclusively in your browser memory and are never uploaded to or stored on any external database.',
                },
                {
                  question: 'Can I customize the currency, tax type, and company logo?',
                  answer:
                    'Yes. You can upload your own company logo (PNG, JPG, or SVG), select from multiple international currencies ($ USD, £ GBP, € EUR, CA$ CAD, A$ AUD, ₹ INR), and choose your statutory tax label (Sales Tax, VAT, GST, HST, or QST).',
                },
                {
                  question: 'What is the standard payment term for commercial invoices?',
                  answer:
                    'The most common commercial payment terms are Net 30 (payment expected within 30 calendar days from invoice issue date), Net 15 (common for freelance contractors), and Due Upon Receipt.',
                },
                {
                  question: 'What is the difference between an invoice and a receipt?',
                  answer:
                    'An invoice is a formal bill requesting payment for goods or services delivered, sent before money is received. A receipt is an official proof of payment issued after the client has paid the balance.',
                },
              ]}
            />
            <FaqAccordion
              title="Frequently Asked Questions About Free Invoicing"
              items={[
                {
                  question: 'Is FeeKit Free Invoice Generator completely free without watermarks?',
                  answer:
                    'Yes, 100%. You can generate unlimited professional PDF invoices without paying any subscription fees, creating an account, or having any unwanted software watermarks added to your document.',
                },
                {
                  question: 'How do I download my invoice as a PDF?',
                  answer:
                    'Click the "Download PDF / Print Invoice" button at the top of the generator. Your browser will open the standard print preview dialog. Select "Save as PDF" as the destination printer and click Save to download your invoice instantly.',
                },
                {
                  question: 'Is my financial and client data stored on your servers?',
                  answer:
                    'No. FeeKit operates on a strict zero-knowledge, client-side model. All calculations, logo previews, and invoice text are processed exclusively in your browser memory and are never uploaded to or stored on any external database.',
                },
                {
                  question: 'Can I customize the currency, tax type, and company logo?',
                  answer:
                    'Yes. You can upload your own company logo (PNG, JPG, or SVG), select from multiple international currencies ($ USD, £ GBP, € EUR, CA$ CAD, A$ AUD, ₹ INR), and choose your statutory tax label (Sales Tax, VAT, GST, HST, or QST).',
                },
                {
                  question: 'What is the standard payment term for commercial invoices?',
                  answer:
                    'The most common commercial payment terms are Net 30 (payment expected within 30 calendar days from invoice issue date), Net 15 (common for freelance contractors), and Due Upon Receipt.',
                },
                {
                  question: 'What is the difference between an invoice and a receipt?',
                  answer:
                    'An invoice is a formal bill requesting payment for goods or services delivered, sent before money is received. A receipt is an official proof of payment issued after the client has paid the balance.',
                },
              ]}
              embedded={true}
            />
          </div>
        </section>
      </article>
    </div>
  );
}
