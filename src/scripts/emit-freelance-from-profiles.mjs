import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FREELANCE_PROFILES_GROUP1 } from './freelance-profiles-group1.mjs';
import { FREELANCE_PROFILES_GROUP2 } from './freelance-profiles-group2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'content/freelance');

const ALL_FREELANCE_PROFILES = {
  ...FREELANCE_PROFILES_GROUP1,
  ...FREELANCE_PROFILES_GROUP2,
};

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

let emittedCount = 0;

for (const [slug, profile] of Object.entries(ALL_FREELANCE_PROFILES)) {
  const camelName = toCamelCase(slug);
  const varName = `${camelName}Content`;
  const agencyName = slug === 'uk-contractor' 
    ? 'HM Revenue & Customs (HMRC)' 
    : 'U.S. Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (OEWS)';

  const pageContent = {
    slug: profile.slug,
    family: 'freelance',
    title: profile.title,
    metaDescription: profile.metaDescription,
    h1: profile.h1,
    lastVerified: profile.lastVerified || '2026-10-24',
    primarySource: {
      name: agencyName,
      url: profile.sourceUrl,
      citation: profile.citation,
    },
    overview: profile.overview,
    sections: profile.sections,
    workedExample: profile.workedExample,
    workedExampleReverse: profile.workedExampleReverse,
    faqs: profile.faqs,
  };

  const fileContent = `import type { PageContent } from '../types.ts';

export const ${varName}: PageContent = ${JSON.stringify(pageContent, null, 2)};

export default ${varName};
`;

  const destPath = path.join(OUTPUT_DIR, `${slug}.ts`);
  fs.writeFileSync(destPath, fileContent, 'utf-8');
  emittedCount++;
  console.log(`[EMITTED FREELANCE] ${slug}.ts`);
}

console.log(`\nSuccessfully emitted ${emittedCount} bespoke freelance role files.`);

