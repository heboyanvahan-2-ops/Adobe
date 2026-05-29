import fs from 'node:fs';
import path from 'node:path';
import AdmZip from 'adm-zip';

const root = process.cwd();
const docxPath = fs.existsSync(path.join(root, 'scripts/2-copy.docx'))
  ? path.join(root, 'scripts/2-copy.docx')
  : path.join(root, '2.docx');

const outDir = path.join(root, 'public/images/photoshop-lessons');
const dataOut = path.join(root, 'src/data/photoshopLessons.js');

fs.mkdirSync(outDir, { recursive: true });

const zip = new AdmZip(docxPath);
const entries = zip.getEntries();

const mediaEntries = entries
  .filter((e) => e.entryName.startsWith('word/media/') && !e.isDirectory)
  .sort((a, b) => a.entryName.localeCompare(b.entryName, undefined, { numeric: true }));

console.log('Media files:', mediaEntries.map((e) => e.entryName));

const imageMap = {};
mediaEntries.forEach((entry, idx) => {
  const ext = path.extname(entry.entryName).toLowerCase() || '.png';
  const name = `lesson-${String(idx + 1).padStart(2, '0')}${ext}`;
  const outPath = path.join(outDir, name);
  fs.writeFileSync(outPath, entry.getData());
  imageMap[entry.entryName] = `/images/photoshop-lessons/${name}`;
  console.log('Extracted', name, entry.header.size, 'bytes');
});

const docXml = zip.readAsText('word/document.xml');

function decodeXml(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

/** @type {{ type: 'text' | 'image', value: string, caption?: string }[]} */
const blocks = [];

const paraRegex = /<w:p[\s>][\s\S]*?<\/w:p>/g;
const paras = docXml.match(paraRegex) ?? [];

for (const para of paras) {
  const text = decodeXml(
    [...para.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]).join(''),
  ).trim();

  const drawing = para.match(/r:embed="(rId\d+)"/);
  const captionMatch = text.match(/նկ\.\s*([\d.]+)/i);

  if (drawing) {
    const relsXml = zip.readAsText('word/_rels/document.xml.rels');
    const rid = drawing[1];
    const relMatch = relsXml.match(
      new RegExp(`Id="${rid}"[^>]*Target="([^"]+)"`),
    );
    if (relMatch) {
      const target = relMatch[1].replace(/^\.\.\//, 'word/');
      const src = imageMap[target];
      if (src) {
        blocks.push({ type: 'image', value: src, caption: text || undefined });
        continue;
      }
    }
  }

  if (text) blocks.push({ type: 'text', value: text });
}

fs.writeFileSync(
  path.join(root, 'scripts/docx-blocks.json'),
  JSON.stringify(blocks, null, 2),
  'utf8',
);

console.log('Blocks:', blocks.length);
console.log('Text blocks:', blocks.filter((b) => b.type === 'text').length);
console.log('Images:', blocks.filter((b) => b.type === 'image').length);

// Print first 30 text blocks for mapping
blocks.slice(0, 40).forEach((b, i) => {
  if (b.type === 'text') console.log(i, b.value.slice(0, 100));
  else console.log(i, '[IMG]', b.value, b.caption ?? '');
});
