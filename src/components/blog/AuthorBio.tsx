import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, CheckCircle2, UserCheck } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-types';

interface AuthorBioProps {
  post: BlogPost;
}

export function AuthorBio({ post }: AuthorBioProps) {
  const publishedDate = post.datePublished || post.publishedAt;
  const modifiedDate = post.dateModified || post.updatedAt || post.publishedAt;

  const formattedPublished = new Date(publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedUpdated = new Date(modifiedDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col gap-3 pt-4 pb-6 border-b border-slate-100 text-xs text-slate-600">
      {/* 1. Author line with avatar, link to /about, and credential badge */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
          <Image
            src="/logo-icon.png"
            alt="FeeKit Verified"
            width={28}
            height={28}
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-500 font-medium">By</span>
          <Link
            href="/about"
            className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Aaradhya Pathak
          </Link>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200 shadow-2xs">
            <UserCheck className="h-3 w-3 text-blue-600" />
            Independent Financial Analyst
          </span>
        </div>
      </div>

      {/* 2. Metadata line: Published · Updated · Read Time · Fact-checked badge */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-slate-500 pl-0 sm:pl-14">
        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>Published: {formattedPublished}</span>
        </span>

        <span className="text-slate-300">·</span>

        <span className="inline-flex items-center gap-1 font-medium text-slate-600">
          <span>Updated: {formattedUpdated}</span>
        </span>

        <span className="text-slate-300">·</span>

        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
          <Clock className="h-3.5 w-3.5 text-blue-600" />
          <span>{post.readTime}</span>
        </span>

        <span className="text-slate-300">·</span>

        <Link
          href="/methodology"
          className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-2xs"
          title="Fact-checked for 2026 IRS & HMRC accuracy (FeeKit Methodology)"
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>Fact-checked for 2026 IRS &amp; HMRC accuracy</span>
        </Link>
      </div>
    </div>
  );
}
