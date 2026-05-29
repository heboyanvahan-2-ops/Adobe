/**
 * Տեսադասեր — մեկ աղբյուր (theme, title, description, video).
 * Նոր դաս ավելացնելու համար լրացրեք զանգվածը ներքև։
 */
export const videoLessons = [
  {
    id: 'skin-smoothing',
    theme: 'Adobe Photoshop',
    title: 'Մաշկի նրբացում',
    description:
      'Դեմքի մաշկի տեքստուրայի մշակում՝ High Pass, Gaussian Blur և շերտերի խառնման միջոցով ' +
      'բնական, նրբացված արդյունք ստանալու համար։',
    video: '/videos/photoshop/skin-smoothing.mp4?v=3',
  },
  {
    id: 'color-balance',
    theme: 'Adobe Photoshop',
    title: 'Գունային բալանս',
    description:
      'Պատկերի գունային ջերմաստիճանը և երանգը ճշտելու համար՝ Color Balance, Curves և ' +
      'ընտրովի շերտերի օգտագործումով։',
    video: '/videos/photoshop/color-balance.mp4?v=3',
  },
];

export function getVideoLessonById(id) {
  return videoLessons.find((lesson) => lesson.id === id);
}
