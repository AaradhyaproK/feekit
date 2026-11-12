/**
 * ==============================================================================
 * Generate Open Graph images from the blog WebP artwork
 * ==============================================================================
 * Facebook, LinkedIn, Slack and X do not reliably render WebP in an
 * Open Graph preview. Every blog post was shipping a `.webp` OG image, so
 * those social surfaces fell back to a blank card or a low-resolution
 * thumbnail.
 *
 * This script converts each source image to JPEG (which every scraper
 * supports), resizes it to a 1200x630 OG-safe canvas, and writes the result
 * next to the original as `<slug>.jpg`. The JSON-LD and the Open Graph meta
 * tags then point at the JPEG with its REAL dimensions.
 *
 * The original `.webp` files are left untouched - Next.js still serves those
 * to the on-page `<Image>` component, which optimises them further.
 *
 * Run: node src/scripts/generate-og-images.mjs
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const SRC_DIR = path.join(ROOT, 'public/blog/images');

/** Target dimensions for an Open Graph card. */
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

if (!fs.existsSync(SRC_DIR)) {
  console.error('No blog image directory found at', SRC_DIR);
  process.exit(1);
}

const sources = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith('.webp'))
  .sort();

if (sources.length === 0) {
  console.log('No .webp sources to convert.');
  process.exit(0);
}

let written = 0;
let skipped = 0;

for (const file of sources) {
  const src = path.join(SRC_DIR, file);
  const out = path.join(SRC_DIR, file.replace(/\.webp$/, '.jpg'));

  if (fs.existsSync(out) && fs.statSync(out).mtimeMs > fs.statSync(src).mtimeMs) {
    skipped += 1;
    continue;
  }

  try {
    // sips is available on macOS and on Linux via the `sips` shim in CI.
    execFileSync(
      'sips',
      [
        '-s',
        'format',
        'jpeg',
        '-s',
        'formatOptions',
        '82',
        '-Z',
        String(OG_WIDTH),
        src,
        '--out',
        out,
      ],
      { stdio: 'pipe' }
    );

    // Pad to the exact OG canvas ratio so the card is never letterboxed.
    execFileSync(
      'sips',
      ['-p', String(OG_HEIGHT), String(OG_WIDTH), '--padColor', 'FFFFFF', out],
      { stdio: 'pipe' }
    );

    written += 1;
  } catch (err) {
    console.error(`  ! Could not convert ${file}: ${err.message}`);
  }
}

console.log(`OG images: ${written} written, ${skipped} already up to date, ${sources.length} total.`);
