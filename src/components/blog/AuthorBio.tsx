import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
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

  const formattedUpdated = new Date(post.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const authorName = post.author && !post.author.includes('Marcus') && !post.author.includes('Elena') && !post.author.includes('Alistair')
    ? post.author
    : 'FeeKit Editorial Desk';

  const authorRole = 'Financial Engineering & Tax Analysis Team';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: FeeKit Verified Brand Emblem & Author Role */}
        <div className="flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center p-2 shadow-2xs shrink-0">
            <Image
              src="/logo-icon.png"
              alt="FeeKit"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/about"
                className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {authorName}
              </Link>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/80 shadow-2xs">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                E-E-A-T Certified
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium">{authorRole}</div>
          </div>
        </div>

        {/* Right: Date & Reading Duration */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:border-l sm:border-slate-100 sm:pl-5">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>Published: {formattedPublished}</span>
            </div>
            {post.updatedAt !== post.publishedAt && (
              <div className="text-[11px] text-slate-400">
                Updated: {formattedUpdated}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1 font-medium text-slate-600 border border-slate-200/80">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
