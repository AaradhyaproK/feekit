/**
 * FeeKit Blog Manifest Generator
 *
 * Regenerates `src/data/blog-manifest.json` from the MDX sources in
 * `content/blog/`. The manifest is a build artifact consumed by the
 * home page editorial section, so it must never drift from the source
 * posts: this script is the single source of truth for it.
 *
 * The parsing rules here intentionally mirror `src/lib/blog.ts`
 * (`getAllPosts`) so that every field the manifest exposes - including
 * the computed `readTime` - matches what the blog pages actually render.
 *
 * Run: node src/scripts/generate-blog-manifest.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const POSTS_DIRECTORY = path.join(ROOT_DIR, 'content', 'blog');
const MANIFEST_PATH = path.join(ROOT_DIR, 'src', 'data', 'blog-manifest.json');

const DEFAULT_AUTHOR = 'Aaradhya Pathak';
const DEFAULT_AUTHOR_TITLE = 'Founder & Lead Developer';
const DEFAULT_PUBLISHED_AT = '2026-09-07';
const DEFAULT_FEATURED_IMAGE = '/blog/images/stripe-vs-paypal.webp';
const WORDS_PER_MINUTE = 200;

/**
 * Mirrors the read-time computation in src/lib/blog.ts so the manifest
 * never disagrees with the rendered article card.
 */
function computeReadTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

function readPosts() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    console.error(`❌ Missing blog content directory: ${POSTS_DIRECTORY}`);
    process.exit(1);
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const posts = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fileContents = fs.readFileSync(path.join(POSTS_DIRECTORY, fileName), 'utf8');
      const { data, content } = matter(fileContents);

      const publishedAt =
        typeof data.datePublished === 'string'
          ? data.datePublished
          : typeof data.publishedAt === 'string'
            ? data.publishedAt
            : DEFAULT_PUBLISHED_AT;

      const updatedAt =
        typeof data.dateModified === 'string'
          ? data.dateModified
          : typeof data.updatedAt === 'string'
            ? data.updatedAt
            : publishedAt;

      return {
        slug,
        title: typeof data.title === 'string' ? data.title : 'Untitled Article',
        description: typeof data.description === 'string' ? data.description : '',
        publishedAt,
        updatedAt,
        author: typeof data.author === 'string' ? data.author : DEFAULT_AUTHOR,
        authorTitle:
          typeof data.authorTitle === 'string' ? data.authorTitle : DEFAULT_AUTHOR_TITLE,
        readTime: computeReadTime(content),
        category: typeof data.category === 'string' ? data.category : 'Guides',
        featured: Boolean(data.featured),
        featuredImage:
          typeof data.featuredImage === 'string'
            ? data.featuredImage
            : DEFAULT_FEATURED_IMAGE,
        tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
      };
    });

  // Sort by publication date, newest first (mirrors getAllPosts).
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
}

function main() {
  const posts = readPosts();
  const output = `${JSON.stringify(posts, null, 2)}\n`;

  const previous = fs.existsSync(MANIFEST_PATH)
    ? fs.readFileSync(MANIFEST_PATH, 'utf8')
    : null;

  if (previous === output) {
    console.log(`✅ Blog manifest already up to date (${posts.length} posts).`);
    return;
  }

  fs.writeFileSync(MANIFEST_PATH, output, 'utf8');
  console.log(`✅ Regenerated blog manifest with ${posts.length} posts -> ${path.relative(ROOT_DIR, MANIFEST_PATH)}`);
}

main();
