// Données du site exportées pour le PHP (pages produits, fiches PDF, back office) :
// libellés du catalogue dans les 7 langues, icônes, coordonnées, gammes. Généré à chaque build → dist/api/data/site.json
// (non servi au public : voir public/api/.htaccess).
import type { APIRoute } from 'astro';
import { locales, localeMeta, defaultLocale } from '../../../i18n/config';
import { useDict } from '../../../i18n';
import { useCatalog } from '../../../i18n/catalog';
import { useProduits } from '../../../i18n/pages/produits';
import { productFamilies } from '../../../data/products';
import { company, offices } from '../../../data/site';
import { iconStroke, iconFill } from '../../../data/icons';

export const GET: APIRoute = () => {
  const t: Record<string, unknown> = {};
  for (const lang of locales) {
    const d = useDict(lang);
    const c = useCatalog(lang);
    const p = useProduits(lang);
    const pages = d.nav.pages as Record<string, string>;
    const { results, ...ui } = c.ui;
    t[lang] = {
      home: d.page.home,
      breadcrumb: d.page.breadcrumb,
      section: d.nav.sections.produits.label,
      headerCta: d.header.cta,
      pages: Object.fromEntries(['produits', 'documentation', 'contact', ...productFamilies.map((f) => f.slug)].map((s) => [s, pages[s]])),
      ui: { ...ui, results1: results(1), resultsMany: results(999) },
      groups: c.groups,
      status: c.status,
      lines: c.lines,
      packs: c.packs,
      phases: c.phases,
      fiche: c.fiche,
      produits: { ...p.ui, docLead: p.doc.lead, devicesCta: p.devices.cta },
      meta: p.catalogue.meta,
    };
  }
  const data = {
    built: new Date().toISOString(),
    defaultLocale,
    locales: Object.fromEntries(locales.map((l) => [l, localeMeta[l]])),
    families: productFamilies.map(({ slug, group, icon }) => ({ slug, group, icon })),
    kinds: ['iv', 'liquids', 'devices', 'vet'],
    company,
    offices,
    icons: { stroke: iconStroke, fill: iconFill },
    t,
  };
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};
