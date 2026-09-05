'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  CreditCard,
  Receipt,
  Briefcase,
  ShoppingBag,
  Globe2,
  Search,
  LayoutGrid,
} from 'lucide-react';
import { cn } from '@/lib/utils/formatters';

interface CommandRailProps {
  onOpenCommandPalette: () => void;
}

export function CommandRail({ onOpenCommandPalette }: CommandRailProps) {
  const pathname = usePathname();

  const suites = [
    {
      name: 'All Utilities',
      href: '/',
      icon: LayoutGrid,
    },
    {
      name: 'US Sales Tax',
      href: '/tools/sales-tax-calculator/california',
      icon: Receipt,
    },
    {
      name: 'UK VAT & HMRC',
      href: '/tools/vat-calculator/united-kingdom',
      icon: Globe2,
    },
    {
      name: 'Merchant Fees',
      href: '/tools/stripe-fee-calculator/usa',
      icon: CreditCard,
    },
    {
      name: 'Freelance Rates',
      href: '/tools/freelance-rate-calculator/software-engineer',
      icon: Briefcase,
    },
    {
      name: 'E-Commerce Profit',
      href: '/tools/ecommerce-profit-calculator/shopify-dropshipping',
      icon: ShoppingBag,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden lg:flex w-56 flex-col border-r border-slate-200 bg-white p-3.5 text-slate-700 select-none shadow-[1px_0_4px_rgba(0,0,0,0.02)]">
      {/* Brand Header with Official FeeKit Logo (No Badges) */}
      <Link href="/" className="flex items-center px-1.5 py-2 group rounded-xl hover:bg-slate-50 transition-all">
        <Image
          src="/feekit-logo.png"
          alt="FeeKit"
          width={130}
          height={48}
          className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          priority
          unoptimized
        />
      </Link>

      {/* Global Command Palette Trigger Button */}
      <div className="mt-2 px-0.5">
        <button
          id="command-palette-trigger"
          type="button"
          onClick={onOpenCommandPalette}
          className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs text-slate-500 hover:border-blue-400 hover:bg-white hover:text-slate-900 transition-all shadow-2xs"
        >
          <Search className="h-3.5 w-3.5 text-blue-600 shrink-0" />
          <span className="font-medium truncate">Search tools...</span>
        </button>
      </div>

      {/* Primary Calculation Suites (Clean Single-Line, Zero Badges) */}
      <div className="mt-5 flex-1 space-y-1 overflow-y-auto pr-0.5">
        <div className="px-2 pb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
          Core Engines
        </div>
        {suites.map((suite) => {
          const Icon = suite.icon;
          const isActive = pathname === suite.href || (suite.href !== '/' && pathname.startsWith(suite.href.split('/').slice(0, 3).join('/')));
          return (
            <Link
              key={suite.name}
              href={suite.href}
              className={cn(
                'group flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-semibold transition-all truncate',
                isActive
                  ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
              )}
            >
              <Icon className={cn('h-4 w-4 shrink-0 transition-colors', isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600')} />
              <span className="truncate">{suite.name}</span>
            </Link>
          );
        })}

        {/* Quick Regional Benchmarks (Clean Simple Links, Zero Badges) */}
        <div className="mt-5 px-2 pb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
          Top Benchmarks
        </div>
        <div className="space-y-0.5">
          {[
            { title: 'California Sales Tax', href: '/tools/sales-tax-calculator/california' },
            { title: 'Texas Sales Tax', href: '/tools/sales-tax-calculator/texas' },
            { title: 'New York Sales Tax', href: '/tools/sales-tax-calculator/new-york' },
            { title: 'UK HMRC VAT (20%)', href: '/tools/vat-calculator/united-kingdom' },
            { title: 'Stripe USA (2.9%)', href: '/tools/stripe-fee-calculator/usa' },
            { title: 'Stripe UK (1.5%)', href: '/tools/stripe-fee-calculator/uk' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block truncate rounded-lg px-2.5 py-1.5 text-xs text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Status Callout (Clean Minimal, Zero Badges) */}
      <div className="mt-auto border-t border-slate-100 pt-3 pb-1 px-1">
        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="truncate">US & UK Engine Live</span>
        </div>
      </div>
    </aside>
  );
}
