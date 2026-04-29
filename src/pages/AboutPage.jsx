import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import Timeline from '../components/sections/Timeline';
import Stats from '../components/sections/Stats';
import CTASection from '../components/sections/CTASection';
import styles from '../styles/AboutPage.module.css';

/**
 * AboutPage — страница «О компании Adobe».
 *
 * Структура:
 *   1. Hero        — большой баннер с заголовком «Adobe ընկերության մասին».
 *   2. History     — 4 параграфа с ключевыми этапами развития.
 *   3. Timeline    — вертикальная шкала с 5 событиями.
 *   4. Stats       — 4 числа: сотрудники, пользователи, продукты, страны.
 *   5. CTA         — финальный призыв перейти к продуктам.
 *
 * Все армянские тексты собраны в объект T для удобства правки/перевода.
 */

const T = {
  hero: {
    badge: '1982 թվականից',
    title: 'Adobe ընկերության մասին',
    subtitle:
      'Հատուկ պատմություն տեխնոլոգիական ընկերության մասին, որը ' +
      'ձևավորել է թվային ստեղծագործության ողջ ոլորտը։',
  },

  history: {
    title: 'Չորս դարաշրջան մեկ ընկերության',
    subtitle:
      'Adobe-ի պատմությունը կարելի է բաժանել չորս հիմնական փուլերի՝ ' +
      'հիմնադրումից մինչև արհեստական բանականության դարաշրջան։',

    paragraphs: [
      {
        year: '1982',
        title: 'Հիմնադրումը',
        text:
          'Adobe Systems-ը հիմնադրվել է 1982 թվականի դեկտեմբերին՝ ' +
          'Չարլզ Գեշկեի և Ջոն Ուորնոքի կողմից, որոնք լքեցին Xerox PARC ' +
          'հետազոտական կենտրոնը։ Ընկերության անվանումը գալիս է ' +
          'Adobe Creek առվակի անունից, որը հոսում էր Ուորնոքի տան մոտով։ ' +
          'Առաջին հաջող արտադրանքը PostScript լեզուն էր՝ տպագրության հեղափոխիչ։',
      },
      {
        year: '1990',
        title: 'Գրաֆիկական հեղափոխությունը',
        text:
          '1990 թվականին լույս տեսավ Photoshop-ը, որը ընդմիշտ փոխեց ' +
          'թվային գրաֆիկայի աշխարհը։ Հաջորդեցին Illustrator-ը, InDesign-ը ' +
          'և Acrobat-ը։ 2000-ականների սկզբին Adobe-ի արտադրանքները ' +
          'դարձան արդյունաբերական ստանդարտ դիզայնի և տպագրության ոլորտում։',
      },
      {
        year: '2013',
        title: 'Ամպային դարաշրջանը',
        text:
          '2013 թվականին Adobe-ն գործարկեց Creative Cloud-ը՝ ' +
          'փոխանցելով իր ողջ արտադրանքը բաժանորդագրային մոդելի։ ' +
          'Մշտական թարմացումներ, ամպային սինխրոնիզացիա, ' +
          'թիմերի համատեղ աշխատանք — ընկերության նոր հեղափոխությունը։',
      },
      {
        year: '2023',
        title: 'Արհեստական բանականության դարաշրջանը',
        text:
          '2023 թվականին Adobe-ն ներկայացրեց Firefly-ն — գեներատիվ ԱԲ ' +
          'ստեղծագործողների համար, որը ուսուցանվել է լիցենզիոն տվյալների ' +
          'վրա և անվտանգ է առևտրային օգտագործման համար։ Generative Fill, ' +
          'Vector Recolor և տասնյակ այլ նորամուծություններ։',
      },
    ],
  },

  timeline: {
    title: 'Հիմնական իրադարձություններ',
    subtitle: 'Adobe-ի պատմության կարևոր հանգրվանները։',
    items: [
      {
        year: '1982',
        title: 'Ընկերության հիմնադրումը',
        description:
          'Չարլզ Գեշկեն և Ջոն Ուորնոքը հիմնում են Adobe Systems-ը։',
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
        year: '1999',
        title: 'InDesign',
        description:
          'Հայտնվում է գիրք- և ամսագրի-դասավորության նոր ստանդարտը։',
        color: '#FF3366',
      },
      {
        year: '2013',
        title: 'Creative Cloud',
        description:
          'Անցում բաժանորդագրային մոդելի — բոլոր արտադրանքները ամպում։',
        color: '#00A0DE',
      },
      {
        year: '2023',
        title: 'Firefly AI',
        description:
          'Գեներատիվ արհեստական բանականության թողարկում։',
        color: '#9D4EDD',
      },
    ],
  },

  stats: {
    title: 'Adobe թվերով',
    subtitle: 'Համաշխարհային մասշտաբը մեկ հայացքով։',
    items: [
      { value: '25 000+', label: 'աշխատակից', color: '#FF0000' },
      { value: '5մլն+',   label: 'օգտատեր',    color: '#00CC66' },
      { value: '60+',     label: 'արտադրանք',  color: '#00A0DE' },
      { value: '180+',    label: 'երկիր',      color: '#9D4EDD' },
    ],
  },

  cta: {
    title: 'Բացահայտեք Adobe-ի աշխարհը',
    subtitle:
      'Այժմ դուք ծանոթ եք պատմությանը։ ' +
      'Ժամանակն է բացահայտել արտադրանքները։',
    primary: { text: 'Դիտել կատեգորիաները', action: '/' },
    secondary: { text: 'Creative Cloud', action: '/creative-cloud' },
  },
};

function AboutPage() {
  return (
    <PageLayout title="Adobe-ի մասին">
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
