import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { VAT_PROFILES_PART1 } from './vat-profiles-part1.mjs';
import { VAT_PROFILES_PART2 } from './vat-profiles-part2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'content/vat');

const ALL_VAT_PROFILES = {
  ...VAT_PROFILES_PART1,
  ...VAT_PROFILES_PART2,
};

const AUTHORITY_NAMES = {
  'poland': 'Krajowa Administracja Skarbowa (KAS)',
  'sweden': 'Skatteverket',
  'austria': 'Bundesministerium für Finanzen (BMF)',
  'denmark': 'Skattestyrelsen',
  'finland': 'Verohallinto',
  'portugal': 'Autoridade Tributária e Aduaneira (AT)',
  'greece': 'Independent Authority for Public Revenue (AADE)',
  'czech-republic': 'Finanční správa',
  'romania': 'Agenția Națională de Administrare Fiscală (ANAF)',
  'hungary': 'Nemzeti Adó- és Vámhivatal (NAV)',
  'slovakia': 'Finančná správa SR',
  'bulgaria': 'National Revenue Agency (NAP)',
  'croatia': 'Porezna uprava',
  'lithuania': 'Valstybinė mokesčių inspekcija (VMI)',
  'slovenia': 'Finančna uprava Republike Slovenije (FURS)',
  'latvia': 'Valsts ieņēmumu dienests (VID)',
  'estonia': 'Maksu- ja Tolliamet (MTA)',
  'cyprus': 'Cyprus Tax Department',
  'luxembourg': 'Administration de l\'enregistrement, des domaines et de la TVA (AED)',
  'malta': 'Commissioner for Revenue (CfR)',
};

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

let emittedCount = 0;

for (const [slug, profile] of Object.entries(ALL_VAT_PROFILES)) {
  const camelName = toCamelCase(slug);
  const varName = `${camelName}VatContent`;
  const authorityName = AUTHORITY_NAMES[slug] || `${profile.name} Tax Authority`;

  const pageContent = {
    slug: profile.slug,
    family: 'vat',
    title: profile.title,
    metaDescription: profile.metaDescription,
    h1: profile.h1,
    lastVerified: profile.lastVerified || '2026-10-24',
    primarySource: {
      name: authorityName,
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
  console.log(`[EMITTED VAT] ${slug}.ts`);
}

console.log(`\nSuccessfully emitted ${emittedCount} bespoke VAT country files.`);

