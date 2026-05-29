import fs from 'node:fs';

const path = 'src/pages/AboutPage.jsx';
const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);
let t = fs.readFileSync(path, 'utf8');

function rep(oldStr, newStr) {
  if (!t.includes(oldStr)) throw new Error(`Missing: ${JSON.stringify(oldStr.slice(0, 120))}`);
  t = t.replace(oldStr, newStr);
}

rep("    badge: '1982 թվականից',", "    badge: '1990 թվականից',");
rep("    title: 'Adobe ընկերության մասին',", "    title: 'Adobe Photoshop-ի պատմությունը',");
rep(`${lines[26]}\n${lines[27]}`, "      '\u053b\u0576\u0579\u057a\u0565\u057d \u0567 Thomas \u0587 John Knoll-\u056b \u0583\u0578\u0582\u056f\u0580\u056b\u056f \u0576\u0561\u056d\u0561\u0563\u056b\u0565\u0568 \u0564\u0561\u0580\u056b \u0567' +\n      ' \u0561\u0577\u056d\u0561\u0580\u0570\u056b \u0561\u0574\u0565\u0576\u0561\u0570\u0561\u0575\u057f\u0576\u056b \u0569\u057e\u0561\u0575\u056b\u0576 \u0576\u056f\u0561\u0580\u0576\u0565\u0580\u056b \u056d\u0574\u0561\u0563\u0580\u056b\u0579\u0568\u0584',");

rep(lines[31], "    title: '\u0549\u0578\u0580\u057d \u0564\u0561\u0580\u0561\u0577\u0580\u057b\u0561\u0576 \u0574\u0565\u056f \u056e\u0580\u0561\u0563\u0580\u056b',");
rep(`${lines[33]}\n${lines[34]}\n${lines[35]}`, "    subtitle:\n      'Photoshop-\u056b \u057a\u0561\u057f\u0574\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 ImagePro-\u056b\u0581 \u0574\u056b\u0576\u0579\u0565\u057e generative AI-\u056b \u0564\u0561\u0580\u0561\u0577\u0580\u057b\u0561\u0576\u0568\u0584',");

const paragraphsNew = `    paragraphs: [
      {
        year: '1987',
        title: 'ImagePro-\u056b\u0581 Photoshop',
        text:
          '1987 \u057f\u0561\u0580\u056b\u0576\u0561\u0581\u056b\u0576 Thomas Knoll-\u0568 ImagePro \u056e\u0580\u0561\u0563\u056b\u0580\u0568 \u0567 \u057d\u057f\u0565\u0572\u0565\u056c grayscale \u057a\u0561\u057f\u056f\u0565\u0580\u0576\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580\u0568\u0584' +
          ' John Knoll-\u0568 \u0561\u057e\u0565\u056c\u0561\u0581\u0576\u0578\u0582\u0574 \u0567 \u0563\u0578\u0580\u0581\u056b\u056f\u0576\u0565\u0580\u0568, \u056b\u057d\u056b 1989-\u056b\u0576 Adobe-\u0568 Photoshop \u0561\u0576\u0578\u0582\u0576\u0568 \u056c\u056b\u0586\u0565\u0576\u0566\u056b\u0561\u0575\u056b\u0576 \u057a\u0561\u0575\u0574\u0561\u0576\u0561\u0563\u0580\u056b \u0567 \u056f\u0576\u0578\u0582\u0574\u0568\u0584',
      },
      {
        year: '1990',
        title: '\u0531\u0576\u0571\u056b\u0576 \u057f\u0561\u0580\u0562\u0565\u0580\u0561\u056f\u0568',
        text:
          '1990 \u057f\u0561\u0580\u056b\u0576 \u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b 19-\u056b\u0576 Mac-\u056b \u0570\u0561\u0574\u0561\u0580 \u0569\u0578\u0572\u0561\u0580\u056f\u0578\u0582\u0574 \u0567 Photoshop 1.0\u0568\u0584' +
          ' 1993-\u056b\u0576 \u0570\u0575\u057f\u0576\u057e\u0565\u056c \u0567 Windows \u057f\u0561\u0580\u0562\u0565\u0580\u0561\u056f\u0568\u0584 Photoshop 3.0 (1994) \u0576\u0565\u0580\u0574\u0578\u0582\u056b\u0581\u0565\u056c \u0567 \u0577\u0565\u0580\u0569\u0565\u0580\u0568 (Layers), \u0578\u0580\u0578\u0576\u0584 \u0561\u0575\u057d\u0578\u0580\u0565\u056c \u0574\u0576\u0578\u0582\u0574 \u0567 \u0561\u0577\u056d\u0561\u057f\u0561\u0576\u0584\u056b \u0570\u056b\u0574\u0568\u0584',
      },
      {
        year: '2003',
        title: '\u053c\u0578\u0582\u057d\u0561\u0576\u056f\u0561\u0580\u0578\u0582\u0569\u0575\u0561\u0576 \u0564\u0561\u0580\u0561\u0577\u0580\u057b\u0561\u0576\u0568',
        text:
          '2000-\u0561\u056f\u0561\u0576\u0576\u0565\u0580\u056b\u0576 Photoshop-\u0568 \u0564\u0561\u0580\u0561\u056c \u056c\u0578\u0582\u057d\u0561\u0576\u056f\u056b\u0579\u0576\u0565\u0580\u056b \u0570\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u0563\u0578\u0580\u0581\u056b\u056f\u0568\u0584' +
          ' Camera Raw (2003), Smart Objects, Healing Brush \u0587 Content-Aware Fill-\u0568 \u0577\u0578\u0582\u0580\u0565\u056c\u056b\u0576 RAW \u0586\u0561\u0575\u056c\u0565\u0580\u0568 \u0587 retouching-\u056b \u0561\u0577\u056d\u0561\u057f\u0561\u0576\u0584\u0568\u0584',
      },
      {
        year: '2023',
        title: 'Generative Fill \u0587 Firefly',
        text:
          '2023 \u057f\u0561\u0580\u056b\u0576\u0561\u0581\u056b\u0576 Photoshop-\u0578\u0582\u0574 \u0561\u057e\u0565\u056c\u0561\u0581\u057e\u0565\u056c \u0567 Generative Fill Adobe Firefly \u0531\u0532-\u056b \u0570\u056b\u0574\u0561\u0576 \u057e\u0580\u0561\u0584' +
          ' \u0555\u0563\u057f\u0561\u057f\u0565\u0580\u0568 \u056f\u0561\u0580\u0578\u0562 \u0567 \u056c\u0580\u0561\u0581\u0576\u0565\u056c, \u0570\u0565\u0580\u0561\u0581\u0576\u0565\u056c \u056f\u0561\u0574 \u0577\u0578\u0582\u0580\u0565\u056c \u057a\u0561\u057f\u056f\u0565\u0580\u056b \u0574\u0561\u057d\u0565\u0580\u0568 \u0562\u0576\u0561\u056f\u0561\u0576 \u056c\u0565\u0566\u057e\u056b \u0570\u0580\u0561\u0574\u0561\u0576\u0578\u057e \u2014 \u0569\u057e\u0561\u0575\u056b\u0576 \u056d\u0574\u0561\u0563\u0580\u0574\u0561\u0576 \u0576\u0578\u0580 \u0564\u0561\u0580\u0561\u0577\u0580\u057b\u0561\u0576\u0568\u0584',
      },
    ],`;

const paraStart = t.indexOf('    paragraphs: [');
const paraEnd = t.indexOf('    ],\n  },\n\n  timeline:');
t = t.slice(0, paraStart) + paragraphsNew + t.slice(paraEnd);

rep(lines[79], "    title: '\u0540\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u056b\u0580\u0561\u0564\u0561\u0580\u0561\u0564\u0561\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0565\u0580',");
rep(lines[80], "    subtitle: 'Photoshop-\u056b \u057a\u0561\u057f\u0574\u0578\u0582\u0569\u0575\u0561\u0576 \u056f\u0561\u0580\u0565\u057e\u0578\u0580 \u0570\u0561\u0576\u0563\u0580\u057e\u0561\u0576\u0576\u0565\u0580\u0568\u0584',");

rep(`${lines[82]}\n${lines[83]}\n${lines[84]}\n${lines[85]}\n${lines[86]}\n${lines[87]}`, `      {
        year: '1987',
        title: 'ImagePro-\u056b \u057d\u056f\u056b\u0566\u0562\u0568',
        description:
          'Thomas Knoll-\u0568 \u057d\u056f\u057d\u0578\u0582\u0574 \u0567 ImagePro-\u0568 grayscale \u057a\u0561\u057f\u056f\u0565\u0580\u0576\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580\u0568\u0584',
        color: '#FF0000',
      },`);

rep(`${lines[96]}\n${lines[97]}\n${lines[98]}\n${lines[99]}\n${lines[100]}\n${lines[101]}`, `      {
        year: '1994',
        title: '\u0547\u0565\u0580\u0569\u0565\u0580 (Layers)',
        description:
          'Photoshop 3.0-\u0568 \u0576\u0565\u0580\u0574\u0578\u0582\u056b\u0581\u0565\u056c \u0567 \u0577\u0565\u0580\u0569\u0565\u0580\u0568 \u2014 \u0561\u0576\u0577\u057f\u0561\u0573\u056b\u0563 \u0561\u0577\u056d\u0561\u057f\u0561\u0576\u0584\u056b \u0570\u056b\u0574\u0568\u0584',
        color: '#00A0DE',
      },`);

rep(`${lines[103]}\n${lines[104]}\n${lines[105]}\n${lines[106]}\n${lines[107]}\n${lines[108]}`, `      {
        year: '2013',
        title: 'Photoshop CC',
        description:
          'Creative Cloud \u0562\u0561\u0566\u0570\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u2014 \u0574\u0577\u0561\u056f\u056b\u0576 \u0569\u0561\u0580\u0574\u0561\u0581\u0578\u0582\u0574\u0576\u0565\u0580 \u0587 \u0561\u0574\u057a\u0561\u0575\u056b\u0576 sync\u0568\u0584',
        color: '#00CC66',
      },`);

rep(`${lines[110]}\n${lines[111]}\n${lines[112]}\n${lines[113]}\n${lines[114]}\n${lines[115]}`, `      {
        year: '2023',
        title: 'Generative Fill',
        description:
          'Firefly \u0531\u0532-\u056b \u056b\u0576\u057f\u0565\u0563\u0580\u0561\u0581\u056b\u0561 Photoshop-\u0578\u0582\u0574 \u2014 generative \u056d\u0574\u0561\u0563\u0580\u0574\u0561\u0576 \u0564\u0561\u0580\u0561\u0577\u0580\u057b\u0561\u0576\u0568\u0584',
        color: '#9D4EDD',
      },`);

rep(`${lines[120]}\n${lines[121]}\n${lines[122]}\n${lines[123]}\n${lines[124]}\n${lines[125]}\n${lines[126]}\n${lines[127]}`, `    title: 'Photoshop \u0569\u057e\u0565\u0580\u0578\u057e',
    subtitle: '\u053e\u0580\u0561\u0563\u056b \u0574\u0561\u057d\u0577\u057f\u0561\u0562\u0568 \u0587 \u0561\u0566\u0564\u0565\u0589\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0574\u0565\u056f \u0570\u0561\u0575\u0561\u0581\u056f\u0578\u057e\u0584',
    items: [
      { value: '1990', label: '\u0569\u0578\u0572\u0561\u0580\u056f\u0574\u0561\u0576 \u057f\u0561\u0580\u056b', color: '#31A8FF' },
      { value: '35+',  label: '\u057f\u0561\u0580\u057e\u0561 \u057a\u0561\u057f\u0574\u0578\u0582\u0569\u0575\u0578\u0582\u0576', color: '#FF0000' },
      { value: '\u2116\u0031',   label: '\u0576\u056f\u0561\u0580\u0576\u0565\u0580\u056b \u056d\u0574\u0561\u0563\u0580\u0574\u0561\u0576', color: '#00CC66' },
      { value: '26+',  label: '\u0570\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u057f\u0561\u0580\u0562\u0565\u0580\u0561\u056f', color: '#9D4EDD' },`);

rep(`${lines[131]}\n${lines[132]}\n${lines[133]}\n${lines[134]}\n${lines[135]}\n${lines[136]}\n${lines[137]}`, `    title: '\u0548\u0578\u0582\u057d\u0578\u0582\u0574\u0576\u0561\u057d\u056b\u0580\u0565\u0584 Photoshop-\u0568',
    subtitle:
      '\u0531\u0575\u0566\u0574 \u0564\u0578\u0582\u0584 \u0566\u0561\u0576\u0578\u057f \u0565\u0584 \u057a\u0561\u057f\u0574\u0578\u0582\u0569\u0575\u0561\u0576\u0568\u0584' +
      ' \u0534\u056b\u057f\u0565\u056c \u0563\u0578\u0580\u0581\u056b\u056f\u0576\u0565\u0580\u0568, \u057e\u056b\u0564\u0565\u0578-\u0564\u0561\u057d\u0565\u0580\u0568 \u0587 \u0569\u0565\u057d\u057f\u0568\u0584',
    primary: { text: 'Photoshop-\u056b \u0565\u057b', action: '/product/photoshop' },
    secondary: { text: '\u0533\u056c\u056d\u0561\u057e\u0578\u0580 \u0565\u057b', action: '/' },`);

rep('<PageLayout title="Adobe-ի մասին">', '<PageLayout title="Photoshop-ի մասին">');
rep('* AboutPage — страница «О компании Adobe».', '* AboutPage — страница «О Adobe Photoshop».');
rep('*   1. Hero        — большой баннер с заголовком «Adobe ընկերության մասին».', '*   1. Hero        — баннер с заголовком о Photoshop.');
rep('*   2. History     — 4 параграфа с ключевыми этапами развития.', '*   2. History     — 4 параграфа истории Photoshop.');
rep('*   4. Stats       — 4 числа: сотрудники, пользователи, продукты, страны.', '*   4. Stats       — 4 числа о масштабе Photoshop.');
rep('*   5. CTA         — финальный призыв перейти к продуктам.', '*   5. CTA         — призыв перейти на страницу Photoshop.');

fs.writeFileSync(path, t, 'utf8');
console.log('AboutPage updated');
