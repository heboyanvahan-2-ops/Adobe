import AdmZip from 'adm-zip';
import fs from 'node:fs';
import path from 'node:path';

const z = new AdmZip('scripts/2-copy.docx');
const docXml = z.readAsText('word/document.xml');
const relsXml = z.readAsText('word/_rels/document.xml.rels');

function ridToMedia(rid) {
  const m = relsXml.match(new RegExp(`Id="${rid}"[^>]*Target="([^"]+)"`));
  if (!m) return null;
  const file = path.basename(m[1]);
  const idx = file.replace(/\D/g, '');
  return `/images/photoshop-lessons/lesson-${String(idx).padStart(2, '0')}.png`;
}

function decodeXml(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

const paras = docXml.match(/<w:p[\s>][\s\S]*?<\/w:p>/g) ?? [];

const items = paras.map((para, i) => {
  const text = decodeXml(
    [...para.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]).join(''),
  ).trim();
  const rid = para.match(/r:embed="(rId\d+)"/)?.[1];
  const image = rid ? ridToMedia(rid) : null;
  return { i, text, image };
});

fs.writeFileSync('scripts/docx-paragraphs.json', JSON.stringify(items, null, 2), 'utf8');

items.forEach(({ i, text, image }) => {
  const prefix = image ? `[IMG ${image}] ` : '';
  if (text || image) console.log(`${String(i).padStart(3)} ${prefix}${text.slice(0, 90)}`);
});
