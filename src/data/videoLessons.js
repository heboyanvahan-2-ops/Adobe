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
      'Դեմքի մաշկի տեքստուրայի մշակում՝ Spot Healing Brush գործիքի օգնությամբ, ' +
      'լուսանկարների թերությունները արագ և հեշտությամբ հեռացնելու համար։',
    video: '/videos/photoshop/skin-smoothing.mp4?v=4',
  },
  {
    id: 'color-balance',
    theme: 'Adobe Photoshop',
    title: 'Գունային բալանս',
    description:
      'Պատկերի գունային ջերմաստիճանը և երանգը ճշտելու համար՝ Color Balance, Curves և ' +
      'ընտրովի շերտերի օգտագործումով։',
    video: '/videos/photoshop/color-balance.mp4?v=4',
  },
  {
    id: 'dodge-tool',
    theme: 'Adobe Photoshop',
    title: 'Dodge Tool',
    description:
      'Տեսանյութում ներկայացվում է Photoshop-ի Dodge Tool գործիքի կիրառումը՝ ' +
      'նկարի առանձին հատվածները լուսավորելու և կարևոր դետալներն ընդգծելու համար։',
    video: '/videos/photoshop/dodge-tool.mp4?v=1',
  },
];

export function getVideoLessonById(id) {
  return videoLessons.find((lesson) => lesson.id === id);
}
