# TILAMED Pharma — nouveau site (Astro)

Site statique multi-pages et multilingue (fr, en, es, pt, it, zh, ar-RTL).

## Commandes
- `npm install` puis `npm run dev` → http://localhost:4321
- `npm run build` → site statique dans `dist/` (déployable sur Netlify, voir `netlify.toml`)

## Organisation
- `src/i18n/` : dictionnaires (fr = référence, les autres langues suivent le même type `Dict`)
- `src/data/site.ts` : coordonnées, bureaux, réseaux, pays couverts, arborescence du menu
- `src/components/layout/` : en-tête (méga-menu, langues, tiroir mobile) et pied de page
- `src/components/home/` : page d'accueil + carte d'Afrique de l'Ouest générée au build
- `src/styles/global.css` : design system (charte graphique 2026)
- `src/assets/images/stock/` : photos Pexels (voir CREDITS.md), optimisées en AVIF/WebP au build
- `public/brand/` : logos officiels (Livrable client) ; `public/media/` : vidéos d'illustration

## Charte (rappel)
Bleu #1C64BA · Vert #39A845 · Marine #12305A · Vert profond #1E7A2E · Bleu ciel #4F9BE0 ·
Montserrat (titres) + Calibri/Carlito (texte). Duo bleu/vert en aplats ~70/30, jamais de dégradé entre eux.
Logo toujours en aplat, sur fond uni, jamais déformé.

## URL
Français à la racine (`/`, `/a-propos/`…), autres langues préfixées (`/en/`, `/ar/`…). Slugs identiques pour toutes les langues.
