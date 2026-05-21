Photoshop product page expects these URLs (CRA public folder):

  /videos/photoshop/color-balance.mp4    — տեսագր «Գունային բալանս»
  /videos/photoshop/skin-smoothing.mp4   — տեսագր «Մաշկի նրբացում»

Either copy/rename your files here manually, or from project root run:

  npm run videos:photoshop

That sync script matches Armenian filenames in the project root and copies them into this folder.

After replacing a video file, bump the query on that lesson URL in src/data/products.js
(e.g. color-balance.mp4?v=2 -> ?v=3) so the browser reloads instead of cached video.
