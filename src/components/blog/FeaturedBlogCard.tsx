import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import type { BlogPost, BlogCategory } from '@/lib/blog-types';

interface FeaturedBlogCardProps {
  post: BlogPost;
}

const CATEGORY_COLORS: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  'Small Business': { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' },
  'Invoicing': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  'Freelancing': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'Business Finance': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Accounting Software': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  'Payment Fees': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'US Sales Tax': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'UK VAT': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  '1099 & Freelance': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Ecommerce': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  'Guides': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
};

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const badgeColors = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['Guides'];

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Side: Text Details */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-bold text-white shadow-2xs">
                <Sparkles className="h-3 w-3" />
                Featured Guide
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${badgeColors.bg} ${badgeColors.text} ${badgeColors.border}`}
              >
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-500 ml-auto sm:ml-0">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              <Link href={`/blog/${post.slug}`} className="focus:outline-hidden">
                <span className="absolute inset-0 z-10" aria-hidden="true" />
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </div>

          {/* Author & CTA */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                {post.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author}</div>
                <div className="text-xs text-slate-500">{post.authorTitle}</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
              <span>Read Full Analysis</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right Side: High Quality Featured WebP Image */}
        <div className="lg:col-span-5">
          <div className="relative aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm group-hover:shadow-md transition-all">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium drop-shadow-sm pointer-events-none">
              <span className="bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10 text-[11px]">
                2026 Fiscal Audit
              </span>
              <span className="bg-blue-600/90 backdrop-blur-xs px-2.5 py-1 rounded-lg font-bold text-[11px]">
                FeeKit Intel
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
