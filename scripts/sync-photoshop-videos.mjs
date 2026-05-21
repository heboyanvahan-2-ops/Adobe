/**
 * Copy root-level .mp4 files into `public/videos/photoshop/` using names
 * referenced from `products.js` (Adobe Photoshop lesson paths).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const destDir = path.join(root, 'public', 'videos', 'photoshop');

const targetsByMatch = [
  { re: /գունային|balans|balance/i, out: 'color-balance.mp4' },
  { re: /մաշկ|skin|smoothing/i, out: 'skin-smoothing.mp4' },
];

let mp4Files = [];

try {
  mp4Files = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => /\.mp4$/i.test(n));
} catch {
  console.error('Could not read project root');
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

if (mp4Files.length === 0) {
  console.log(
    'No .mp4 files in project root. Either copy Armenian-named videos there and re-run,\n' +
      'or place files manually as:\n' +
      `  ${path.relative(root, destDir)}\\color-balance.mp4\n` +
      `  ${path.relative(root, destDir)}\\skin-smoothing.mp4`,
  );
  process.exit(0);
}

const used = new Set();
/** @type {Record<string,string>} */
const assignments = {};

for (const { re, out } of targetsByMatch) {
  const hit = mp4Files.find((f) => re.test(f) && !used.has(f));
  if (!hit) continue;
  const src = path.join(root, hit);
  const dst = path.join(destDir, out);
  fs.copyFileSync(src, dst);
  used.add(hit);
  assignments[out] = hit;
  console.log('Copied:', hit, '->', path.join('public/videos/photoshop', out));
}

const leftovers = mp4Files.filter((f) => !used.has(f));
const remainingTargets = targetsByMatch
  .map((t) => t.out)
  .filter((out) => !assignments[out]);
let i = 0;
while (i < leftovers.length && i < remainingTargets.length) {
  const hit = leftovers[i];
  const out = remainingTargets[i];
  fs.copyFileSync(path.join(root, hit), path.join(destDir, out));
  console.log('Copied:', hit, '->', path.join('public/videos/photoshop', out), '(fallback order)');
  i += 1;
}
