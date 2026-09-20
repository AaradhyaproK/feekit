import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost, BlogCategory } from '@/lib/blog-types';

interface BlogCardProps {
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

export function BlogCard({ post }: BlogCardProps) {
  const badgeColors = CATEGORY_COLORS[post.category] || CATEGORY_COLORS['Guides'];

  // Format ISO date (e.g. 2026-09-07 -> Sep 7, 2026)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200">
      <div>
        {/* Thumbnail Image */}
        {post.featuredImage && (
          <div className="relative aspect-16/9 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-950">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={600}
              height={338}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Top Meta: Category & Read Time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${badgeColors.bg} ${badgeColors.text} ${badgeColors.border}`}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-500">
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
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="focus:outline-hidden">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Footer Meta & CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="text-slate-500 font-medium truncate max-w-[60%]">
          By <span className="text-slate-700 font-semibold">{post.author}</span>
        </div>
        <div className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
          <span>Read article</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  );
}
