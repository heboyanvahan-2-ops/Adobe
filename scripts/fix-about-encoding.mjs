import fs from 'node:fs';

const path = 'src/pages/AboutPage.jsx';
let s = fs.readFileSync(path, 'utf8');

s = s.replace(
  "title: 'Անցնում տարբերակը',",
  "title: '\u0531\u057c\u0561\u057b\u056b\u0576 \u057f\u0561\u0580\u0562\u0565\u0580\u0561\u056f\u0568',"
);

// Fix mixed-script "license" word on line 43
s = s.replace(
  /Adobe-\u0568 Photoshop \u0561\u0576\u0578\u0576\u0578\u057e .+ \u057a\u0561\u0575\u0574\u0561\u0576\u0561\u0563\u0580\u056b\u0580 \u0567 \u056f\u0576\u0584\u0578\u0582\u0574\u0584/,
  "Adobe-\u0568 Photoshop \u0561\u0576\u0578\u0576\u0578\u057e \u056c\u056b\u0581\u0565\u0576\u0566\u056b\u0578\u0576 \u057a\u0561\u0575\u0574\u0561\u0576\u0561\u0563\u0580\u056b\u0580 \u0567 \u056f\u0576\u0584\u0578\u0582\u0574\u0584"
);

fs.writeFileSync(path, s, 'utf8');
console.log('encoding fixed');
