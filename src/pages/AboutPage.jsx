import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Timeline from '../components/sections/Timeline';
import Stats from '../components/sections/Stats';
import CTASection from '../components/sections/CTASection';
import styles from '../styles/AboutPage.module.css';

/**
 * AboutPage — страница «О Adobe Photoshop».
 *
 * Структура:
 *   1. Hero        — баннер с заголовком о Photoshop.
 *   2. History     — 4 параграфа истории Photoshop.
 *   3. Timeline    — вертикальная шкала с 5 событиями.
 *   4. Stats       — 4 числа о масштабе Photoshop.
 *   5. CTA         — призыв перейти на страницу Photoshop.
 *
 * Все армянские тексты собраны в объект T для удобства правки/перевода.
 */

const T = {
  hero: {
    badge: '1990 թվականից',
    title: 'Adobe Photoshop-ի Մասին',
    subtitle:
      'Ինչպես է Thomas և John Knoll-ի փորձը դարձել աշխարհի ամենահայտնի ' +
      'թվային նկարների խմբագրիչը։',
  },

  history: {
    title: 'Չորս դարաշրջան մեկ ծրագրի',
    subtitle:
      'Photoshop-ի պատմությունը ImagePro-ից մինչև generative AI-ի դարաշրջանը։',

    paragraphs: [
      {
        year: '1987',
        title: 'ImagePro-ից Photoshop',
        text:
          '1987 թվականին Thomas Knoll-ը ImagePro ծրագիրը ստեղծել է grayscale ' +
          'պատկերների համար։ John Knoll-ը ավելացնում է գործիքները, իսկ 1989-ին ' +
          'Adobe-ը ձեռք է բերում Photoshop-ը։',
      },
      {
        year: '1990',
        title: 'Առաջին տարբերակը',
        text:
          '1990 թվականի փետրվարին Mac-ի համար թողարկվում է Photoshop 1.0։ ' +
          '1993-ին հայտնվում է Windows տարբերակը։ Photoshop 3.0 (1994) ' +
          'ներմուծեց շերտերը (Layers), որը հեղափոխեց աշխատանքի մեթոդը։',
      },
      {
        year: '2003',
        title: 'Լուսանկարային դարաշրջանը',
        text:
          '2000-ականներին Photoshop-ը դարձավ լուսանկարիչների հիմնական գործիքը։ ' +
          'Camera Raw (2003), Smart Objects, Healing Brush և Content-Aware Fill-ը ' +
          'փոխեցին RAW ֆայլերը և retouching-ի աշխատանքը։',
      },
      {
        year: '2023',
        title: 'Generative Fill և Firefly',
        text:
          '2023 թվականին Photoshop-ում ավելացվեց Generative Fill Adobe Firefly ' +
          'ԱԲ-ի հիման վրա։ Օգտատերը կարող է լրացնել, հեռացնել կամ փոխել ' +
          'պատկերի մասերը բնական լեզվով — թվային խմբագրումի նոր դարաշրջան։',
      },
    ],
  },

  timeline: {
    title: 'Հիմնական իրադարձություններ',
    subtitle: 'Photoshop-ի պատմության կարևոր հանգրվանները։',
    items: [
      {
        year: '1987',
        title: 'ImagePro-ի սկիզբը',
        description:
          'Thomas Knoll-ը սկսում է ImagePro-ը grayscale պատկերների համար։',
        color: '#FF0000',
      },
      {
        year: '1990',
        title: 'Photoshop 1.0',
        description:
          'Թողարկվում է ռաստերային գրաֆիկայի առաջին պաշտոնական տարբերակը։',
        color: '#31A8FF',
      },
      {
        year: '1994',
        title: 'Շերտեր (Layers)',
        description:
          'Photoshop 3.0-ը ներմուծեց շերտերը — անխտալ աշխատանքի հիմնը։',
        color: '#FF3366',
      },
      {
        year: '2013',
        title: 'Photoshop CC',
        description:
          'Creative Cloud բաժանորդագրություն — մշտական թարմացումներ և ամպային sync։',
        color: '#00A0DE',
      },
      {
        year: '2023',
        title: 'Generative Fill',
        description:
          'Firefly ԱԲ-ի ինտեգրացիա Photoshop-ում — generative խմբագրում։',
        color: '#9D4EDD',
      },
    ],
  },

  stats: {
    title: 'Photoshop թվերով',
    subtitle: 'Ծրագրի մասշտաբը և ազդեցությունը մեկ հայացքով։',
    items: [
      { value: '1990', label: 'թողարկման տարի', color: '#31A8FF' },
      { value: '35+',  label: 'տարվա պատմություն', color: '#FF0000' },
      { value: '№1',   label: 'նկարների խմբագրիչ', color: '#00CC66' },
      { value: '26+',  label: 'հիմնական տարբերակ', color: '#9D4EDD' },
    ],
  },

  cta: {
    title: 'Բացահայտեք Photoshop-ը',
    subtitle:
      'Այժմ դուք ծանոթ եք պատմությանը։ ' +
      'Դիտեք գործիքները, վիդեո-դասերը և թեստը։',
    primary: { text: 'Photoshop-ի էջ', action: '/product/photoshop' },
    secondary: { text: 'Գլխավոր էջ', action: '/' },
  },
};

function AboutPage() {
  return (
    <PageLayout title="Adobe Photoshop-ի Մասին">
      {/* 1) Hero */}
      <Hero
        badge={T.hero.badge}
        title={T.hero.title}
        subtitle={T.hero.subtitle}
        height="medium"
        theme="dark"
      />

      {/* 2) История — 4 параграфа в 2-колоночной сетке */}
      <section className={styles.history}>
        <Container>
          <div className={styles.historyHeader}>
            <h2 className={`${styles.historyTitle} animate-fade-in-up`}>
              {T.history.title}
            </h2>
            <p className={`${styles.historySubtitle} animate-fade-in-up delay-100`}>
              {T.history.subtitle}
            </p>
          </div>

          <div className={styles.paragraphs}>
            {T.history.paragraphs.map((p, i) => (
              <article
                key={p.year}
                className={`${styles.paragraph} animate-fade-in-up delay-${Math.min((i + 1) * 100, 400)}`}
              >
                <div className={styles.paragraphYear}>
                  <span className={styles.paragraphMarker} aria-hidden="true" />
                  {p.year}
                </div>
                <h3 className={styles.paragraphHeading}>{p.title}</h3>
                <p className={styles.paragraphText}>{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3) Временная шкала */}
      <Timeline
        title={T.timeline.title}
        subtitle={T.timeline.subtitle}
        items={T.timeline.items}
      />

      {/* 4) Статистика */}
      <Stats
        title={T.stats.title}
        subtitle={T.stats.subtitle}
        items={T.stats.items}
        background="dark"
      />

      {/* 5) Финальный CTA */}
      <CTASection
        title={T.cta.title}
        subtitle={T.cta.subtitle}
        cta={T.cta.primary}
        secondaryCta={T.cta.secondary}
        background="gradient"
      />
    </PageLayout>
  );
}

export default AboutPage;
