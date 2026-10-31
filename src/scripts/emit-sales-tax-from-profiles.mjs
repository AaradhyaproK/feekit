import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STATE_PROFILES_PART1 } from './state-profiles-part1.mjs';
import { STATE_PROFILES_PART2 } from './state-profiles-part2.mjs';
import { STATE_PROFILES_PART3 } from './state-profiles-part3.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'content/sales-tax');

const ALL_PROFILES = {
  ...STATE_PROFILES_PART1,
  ...STATE_PROFILES_PART2,
  ...STATE_PROFILES_PART3,
};

const AGENCY_NAMES = {
  'virginia': 'Virginia Department of Taxation',
  'arizona': 'Arizona Department of Revenue',
  'massachusetts': 'Massachusetts Department of Revenue',
  'tennessee': 'Tennessee Department of Revenue',
  'indiana': 'Indiana Department of Revenue',
  'missouri': 'Missouri Department of Revenue',
  'maryland': 'Comptroller of Maryland',
  'wisconsin': 'Wisconsin Department of Revenue',
  'colorado': 'Colorado Department of Revenue',
  'minnesota': 'Minnesota Department of Revenue',
  'south-carolina': 'South Carolina Department of Revenue',
  'alabama': 'Alabama Department of Revenue',
  'louisiana': 'Louisiana Department of Revenue',
  'kentucky': 'Kentucky Department of Revenue',
  'oregon': 'Oregon Department of Revenue',
  'oklahoma': 'Oklahoma Tax Commission',
  'connecticut': 'Connecticut Department of Revenue Services',
  'utah': 'Utah State Tax Commission',
  'iowa': 'Iowa Department of Revenue',
  'nevada': 'Nevada Department of Taxation',
  'arkansas': 'Arkansas Department of Finance and Administration',
  'mississippi': 'Mississippi Department of Revenue',
  'kansas': 'Kansas Department of Revenue',
  'new-mexico': 'New Mexico Taxation and Revenue Department',
  'nebraska': 'Nebraska Department of Revenue',
  'idaho': 'Idaho State Tax Commission',
  'west-virginia': 'West Virginia State Tax Department',
  'hawaii': 'Hawaii Department of Taxation (DOTAX)',
  'new-hampshire': 'New Hampshire Department of Revenue Administration',
  'maine': 'Maine Revenue Services',
  'rhode-island': 'Rhode Island Division of Taxation',
  'montana': 'Montana Department of Revenue',
  'delaware': 'Delaware Division of Revenue',
  'south-dakota': 'South Dakota Department of Revenue',
  'north-dakota': 'North Dakota Office of State Tax Commissioner',
  'alaska': 'Alaska Remote Sellers Sales Tax Commission (ARSSTC)',
  'vermont': 'Vermont Department of Taxes',
  'wyoming': 'Wyoming Department of Revenue',
  'district-of-columbia': 'District of Columbia Office of Tax and Revenue',
};

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

let emittedCount = 0;

for (const [slug, profile] of Object.entries(ALL_PROFILES)) {
  const camelName = toCamelCase(slug);
  const varName = `${camelName}Content`;
  const agencyName = AGENCY_NAMES[slug] || `${profile.name} Department of Revenue`;

  const pageContent = {
    slug: profile.slug,
    family: 'sales-tax',
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
  console.log(`[EMITTED] ${slug}.ts`);
}

console.log(`\nSuccessfully emitted ${emittedCount} bespoke US sales tax files.`);

