import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, CheckCircle2, UserCheck } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-types';

interface AuthorBioProps {
  post: BlogPost;
}

export function AuthorBio({ post }: AuthorBioProps) {
  const formattedPublished = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedUpdated = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : formattedPublished;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-6 border-b border-slate-100 text-xs text-slate-500">
      {/* Left: Named Author with Credentials & Reviewer Verification */}
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
          <Image
            src="/logo-icon.png"
            alt="FeeKit Verified"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </div>
        <div className="space-y-0.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500">Written &amp; Researched by</span>
            <Link
              href="/about"
              className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              Aaradhya Pathak
            </Link>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200 shadow-2xs">
              <UserCheck className="h-3 w-3 text-blue-600" />
              Independent Financial Analyst
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
              Reviewed &amp; Fact-Checked for 2026 Fiscal Accuracy
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link href="/methodology" className="hover:text-blue-600 hover:underline">
              Editorial Policy &amp; Standards
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Date, Last Updated & Reading Time */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:self-center">
        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <span>Updated: {formattedUpdated}</span>
        </span>
        <span>•</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
          <Clock className="h-3.5 w-3.5 text-blue-600" />
          <span>{post.readTime}</span>
        </span>
      </div>
    </div>
  );
}
