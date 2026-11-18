// Extrait, pour chaque page FR du site construit, les titres de sections et la présence des faits clés.
// Usage : node contentmap.mjs <dossier dist> <fichier site.ts>
import fs from 'node:fs';
import path from 'node:path';

const dist = process.argv[2];
const siteTs = fs.readFileSync(process.argv[3], 'utf8');
const tree = siteTs.match(/export const navTree = \{([\s\S]*?)\} as const;/)[1];
const sections = [...tree.matchAll(/(\w+): \[([^\]]*)\]/g)].map((m) => ({ key: m[1], pages: [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]) }));

const facts = {
  '150 emplois': /\b150\b/,
  '70 % techniques': /70\s*%/,
  '5 ans transfert': /\b(cinq|5)\s*ans\b/i,
  '15 pays': /\b15\s*pays|quinze pays/i,
  '400 M hab.': /\b400\s*(M|millions)/,
  '2 ha / 20 000 m²': /\b2\s*(ha|hectares)\b|20\s?000\s*m/,
  'Capacité 15M/35M': /15 millions|35 millions|\bLVP\b|\bSVP\b/,
  'EDGE': /\bEDGE\b/,
  'ISO 14001': /ISO 14001/,
  'ISO 9001': /ISO 9001/,
  '1re usine égalité': /\b1re\b|première (usine|industrie)/i,
  'Égalité/handicap': /handicap/i,
  'Devise': /Plus près,\s*plus sûr/i,
  'ABRP 16/05/2023': /16 mai 2023/,
  'Autor. 30/06/2023': /30 juin 2023/,
  'CCES 07/08/2024': /7 août 2024/,
  'Autor. ind. 09/09/2024': /9 septembre 2024/,
  'CAT 28/10/2024': /28 octobre 2024/,
  'Arrêté 28/11/2024': /28 novembre 2024/,
  'Bail 09/09/2025': /9 septembre 2025/,
  'Capital 1 Md FCFA': /1 000 000 000|milliard|1\s*Md/,
  'SEDIS 2013': /SEDIS/,
  '100 % importé': /100\s*%/,
  'Normes OMS': /\bOMS\b/,
  'BPF': /\bBPF\b|bonnes pratiques de fabrication/i,
  'Soufflage-rempl.-scellage': /soufflage/i,
  'Pharmacien resp.': /pharmacien responsable/i,
  'LASSISSI': /LASSISSI/,
  'Frontière Nigeria': /frontière (du|avec le) Nigeria/i,
  'Port de Cotonou': /port (autonome )?de Cotonou/i,
  'Falsifiés': /falsifi/i,
  'COVID': /COVID/i,
  'Marquage CE': /marquage CE/i,
  'Clients (SOBAPS…)': /SOBAPS|CAMEG|UBIPHARM/,
  'Solaire': /solaire/i,
  'Zone éco. spéciale': /zone économique spéciale/i,
  'Contrôle lot par lot': /chaque lot|lot par lot/i,
};

const clean = (h) => h
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/g, ' ');
const text = (h) => clean(h).replace(/<[^>]+>/g, ' ').replace(/&#39;/g, "'").replace(/&nbsp;|&#8239;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

const rows = [];
const all = [{ section: 'accueil', slug: '' }, ...sections.flatMap((s) => s.pages.map((p) => ({ section: s.key, slug: p })))];
for (const { section, slug } of all) {
  const file = path.join(dist, slug, 'index.html');
  if (!fs.existsSync(file)) { rows.push({ section, slug, missing: true }); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, html])[1];
  const heads = [...clean(main).matchAll(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => `h${m[1]} ${text(m[2])}`);
  const body = text(main);
  const hits = Object.entries(facts).filter(([, re]) => re.test(body)).map(([k]) => k);
  rows.push({ section, slug: slug || '(accueil)', words: body.split(' ').length, heads, hits });
}

// Sortie 1 : par page
let out = '# Pages (FR) : titres et faits\n\n';
for (const r of rows) {
  if (r.missing) { out += `## ${r.slug} — MANQUANTE\n\n`; continue; }
  out += `## [${r.section}] ${r.slug} — ${r.words} mots\n`;
  out += `Faits : ${r.hits.join(' · ') || '—'}\n`;
  out += r.heads.map((h) => `- ${h}`).join('\n') + '\n\n';
}
// Sortie 2 : par fait
out += '# Faits : nombre de pages et liste\n\n';
for (const k of Object.keys(facts)) {
  const where = rows.filter((r) => r.hits?.includes(k)).map((r) => r.slug);
  out += `- **${k}** (${where.length}) : ${where.join(', ')}\n`;
}
process.stdout.write(out);
