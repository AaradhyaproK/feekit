import fs from 'fs';
import path from 'path';

const geoMatrix = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/geo-matrix.json'), 'utf-8'));
const states = geoMatrix.us_states || [];

console.log(`Auditing ${states.length} states in geo-matrix.json...`);

let errors = 0;
for (const s of states) {
  if (typeof s.rate !== 'number' || s.rate < 0 || s.rate > 12) {
    console.error(`❌ Error in ${s.name} (${s.slug}): rate ${s.rate} out of bounds!`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`Validation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log(`✅ Build-time check passed: All ${states.length} state rates are within 0% - 12% bounds.`);
}
