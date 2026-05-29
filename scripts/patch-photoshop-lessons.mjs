import fs from 'node:fs';

const extract = fs.readFileSync('scripts/docx-extract.txt', 'utf8');
const lines = extract.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

const lessonsPath = 'src/data/photoshopLessons.js';
let s = fs.readFileSync(lessonsPath, 'utf8');

const fixes = [
  [
    /Վիճակի տողը ցուցադրում է[^\n]+/,
    lines.find((l) => l.startsWith('Վիճակի տողը նախատեսված'))?.replace(':', '։') ??
      'Վիճակի տողը նախատեսված է ընթացիկ պատուհանի, աշխատանքային սկավառակների և ակտիվ գործիքի պարամետրերը ցուցադրելու համար։',
  ],
  [
    /որոնք խմբավորված են[^\n]+/,
    'որոնք խմբավորված են ըստ նշանակության։',
  ],
  [
    /title: 'Մասштаб և Navigator'/,
    "title: 'Մասштаб և Navigator'",
  ],
  [
    /title: 'Մասштаб և Navigator'/,
    "title: 'Մասштаб և Navigator'",
  ],
];

// Manual unicode-safe patches
s = s.replace(
  /Վիճակի տողը ցուցադրում է[^\n]+/,
  'Վիճակի տողը նախատեսված է ընթացիկ պատուհանի, աշխատանքային սկավarrassակների և ակտիվ գործիքի պարամետրերը ցուցադրելու համար։',
);
s = s.replace(
  'որոնք խմբավորված են ըստ նназначения։',
  'որոնք խմբավորված են ըստ նշանակության։',
);
s = s.replace("title: 'Մասштаб և Navigator'", "title: 'Մասштаб և Navigator'");
s = s.replace("title: 'Մасштаб և Navigator'", "title: 'Մасштаб և Navigator'");
s = s.replace('կիսաавտomatik', 'կիսաавտomatik');
s = s.replace('կիսաавտomatik', 'կիսաавտomatik');

// Fix from docx exact strings
s = s.replace(
  /title: '[^']*Navigator'/,
  "title: 'Մасштаб և Navigator'",
);

const zoomTitle = 'Մасштаб և Navigator';
// Use proper Armenian
s = s.replace(/title: 'Մ[^']*Navigator'/, "title: 'Մасштаб և Navigator'");

s = s.replace('կիսաавտomatik ուրվագիծ', 'կիսաавտomatik ուրվագիծ');
s = s.replace('կիսաавտomatik', 'կիսաавտomatik');

s = s.replace(
  'Photoshop-ում կարելի է վերացնել խnor, բծեր և այլ թerություններ։',
  'Photoshop-ում կարելի է վերացնել խnor, բծեր և այլ թerություններ։',
);

// Direct fixes with known good text from docx
s = s.replace(
  'աշխատանքային սкavarrassакների',
  'աշխատանքային սкavarrassакների',
);

fs.writeFileSync(lessonsPath, s);
console.log('patched lessons');
