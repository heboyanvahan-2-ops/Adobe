import AdmZip from 'adm-zip';
import fs from 'node:fs';

const z = new AdmZip('scripts/2-copy.docx');
const x = z.readAsText('word/document.xml');
const rels = z.readAsText('word/_rels/document.xml.rels');

const embeds = [...x.matchAll(/r:embed="(rId\d+)"/g)].map((m) => m[1]);
console.log('embeds', embeds);

for (const rid of embeds) {
  const m = rels.match(new RegExp(`Id="${rid}"[^>]*Target="([^"]+)"`));
  console.log(rid, m?.[1]);
}

console.log('inline', (x.match(/wp:inline/g) || []).length);
console.log('anchor', (x.match(/wp:anchor/g) || []).length);

// Find paragraph indices with drawings
const paras = x.match(/<w:p[\s>][\s\S]*?<\/w:p>/g) ?? [];
paras.forEach((p, i) => {
  if (/r:embed|wp:inline|wp:anchor|pic:pic/.test(p)) {
    const t = [...p.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]).join('');
    const rid = p.match(/r:embed="(rId\d+)"/)?.[1];
    console.log('para', i, 'rid', rid, 'text', t.slice(0, 60));
  }
});
