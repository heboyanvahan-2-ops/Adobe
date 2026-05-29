import PageLayout from '../components/layouts/PageLayout';
import Container from '../components/common/Container';
import Hero from '../components/sections/Hero';
import { videoLessons } from '../data/videoLessons';
import styles from '../styles/VideoLessonsPage.module.css';

const T = {
  pageTitle: 'Տեսային դասեր',
  hero: {
    badge: 'Adobe Photoshop',
    title: 'Տեսային դասեր',
    subtitle:
      'Կարճ տեսագրեր Photoshop-ի գործիքներով աշխատելու համար։ ' +
      'Յուրաքանչյուր դասում՝ թեմա, վերնագիր, նկարագրություն և տեսանյութ։',
  },
  countLabel: (n) => `${n} տեսադաս`,
};

function VideoLessonCard({ lesson }) {
  return (
    <article className={styles.card} aria-labelledby={`video-lesson-${lesson.id}`}>
      <div className={styles.cardBody}>
        <p className={styles.theme}>{lesson.theme}</p>
        <h2 id={`video-lesson-${lesson.id}`} className={styles.cardTitle}>
          {lesson.title}
        </h2>
        <p className={styles.description}>{lesson.description}</p>
      </div>
      <figure className={styles.videoFigure}>
        <div className={styles.videoWrap}>
          <video
            className={styles.nativeVideo}
            src={lesson.video}
            controls
            preload="metadata"
            playsInline
          >
            <track kind="captions" />
          </video>
        </div>
        <figcaption className={styles.videoCaption}>{lesson.title}</figcaption>
      </figure>
    </article>
  );
}

function VideoLessonsPage() {
  return (
    <PageLayout title={T.pageTitle}>
      <div className={styles.page}>
        <Hero
          badge={T.hero.badge}
          title={T.hero.title}
          subtitle={T.hero.subtitle}
          height="compact"
          backgroundColor="linear-gradient(135deg, #0A0E27 0%, #1a3a5c 55%, #31A8FF 100%)"
        />

        <Container className={styles.wrap}>
          <p className={styles.count}>{T.countLabel(videoLessons.length)}</p>
          <div className={styles.grid}>
            {videoLessons.map((lesson) => (
              <VideoLessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

export default VideoLessonsPage;
