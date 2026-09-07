import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type {
  BlogPost,
  BlogPostWithContent,
  BlogCategory,
  RelatedCalculator,
  BlogFaqItem,
  TocItem,
} from './blog-types';

export * from './blog-types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

function ensureDirectoryExists(): void {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
  }
}

/**
 * Normalizes a heading string into a URL-friendly anchor ID.
 * Matches rehype-slug standard behavior.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Extracts table of contents items (H2 and H3) from MDX string.
 */
export function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const rawTitle = match[2].trim();
    // Remove any trailing link anchors or formatting like [text](#anchor)
    const cleanTitle = rawTitle.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '');
    const id = slugifyHeading(cleanTitle);

    items.push({
      id,
      title: cleanTitle,
      level,
    });
  }

  return items;
}

/**
 * Reads all .mdx files from /content/blog/, parses frontmatter via gray-matter,
 * and sorts by publishedAt descending.
 */
export function getAllPosts(): BlogPost[] {
  ensureDirectoryExists();

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const posts: BlogPost[] = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const computedReadTime = readingTime(content).text;

      const post: BlogPost = {
        slug,
        title: typeof data.title === 'string' ? data.title : 'Untitled Article',
        description: typeof data.description === 'string' ? data.description : '',
        publishedAt: typeof data.publishedAt === 'string' ? data.publishedAt : '2026-09-07',
        updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : (data.publishedAt || '2026-09-07'),
        author: typeof data.author === 'string' ? data.author : 'FeeKit Research Team',
        authorTitle:
          typeof data.authorTitle === 'string'
            ? data.authorTitle
            : 'Financial Engineering & Tax Analysis',
        readTime: typeof data.readTime === 'string' ? data.readTime : computedReadTime,
        category: (data.category as BlogCategory) || 'Guides',
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        featuredImage:
          typeof data.featuredImage === 'string'
            ? data.featuredImage
            : '/blog/images/stripe-vs-paypal.png',
        featured: Boolean(data.featured),
        relatedCalculators: Array.isArray(data.relatedCalculators)
          ? (data.relatedCalculators as RelatedCalculator[])
          : [],
        faq: Array.isArray(data.faq) ? (data.faq as BlogFaqItem[]) : undefined,
      };

      return post;
    });

  // Sort by publishedAt descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
}

/**
 * Returns a specific post by its slug along with its raw MDX content.
 */
export function getPostBySlug(slug: string): BlogPostWithContent {
  ensureDirectoryExists();

  let filePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`Article not found for slug: "${slug}"`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const computedReadTime = readingTime(content).text;

  const post: BlogPostWithContent = {
    slug,
    title: typeof data.title === 'string' ? data.title : 'Untitled Article',
    description: typeof data.description === 'string' ? data.description : '',
    publishedAt: typeof data.publishedAt === 'string' ? data.publishedAt : '2026-09-07',
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : (data.publishedAt || '2026-09-07'),
    author: typeof data.author === 'string' ? data.author : 'FeeKit Research Team',
    authorTitle:
      typeof data.authorTitle === 'string'
        ? data.authorTitle
        : 'Financial Engineering & Tax Analysis',
    readTime: typeof data.readTime === 'string' ? data.readTime : computedReadTime,
    category: (data.category as BlogCategory) || 'Guides',
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    featuredImage:
      typeof data.featuredImage === 'string'
        ? data.featuredImage
        : '/blog/images/stripe-vs-paypal.png',
    featured: Boolean(data.featured),
    relatedCalculators: Array.isArray(data.relatedCalculators)
      ? (data.relatedCalculators as RelatedCalculator[])
      : [],
    faq: Array.isArray(data.faq) ? (data.faq as BlogFaqItem[]) : undefined,
    content,
  };

  return post;
}

/**
 * Returns posts filtered by category.
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const all = getAllPosts();
  if (category === 'All') return all;
  return all.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Returns all posts marked as featured: true.
 */
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}
