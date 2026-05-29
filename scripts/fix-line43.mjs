import fs from 'node:fs';

const path = 'src/pages/AboutPage.jsx';
const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);

lines[42] =
  "          'Adobe-\u0568 \u0571\u0565\u057c\u0584 \u0567 \u0562\u0565\u0580\u0578\u0582\u0574 Photoshop-\u0568\u0589',";

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log(lines[42]);
