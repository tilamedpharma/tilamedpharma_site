// Données initiales de la base produits (back office) : les 120 références de l'ancien site (src/data/catalog.ts)
// et leurs traductions, plus les catégories. Utilisées UNE SEULE FOIS, à la création de la base sur le serveur ;
// ensuite, les produits se gèrent uniquement dans le back office (/admin/). → dist/api/data/seed.json
import type { APIRoute } from 'astro';
import { locales } from '../../../i18n/config';
import { useCatalog } from '../../../i18n/catalog';
import { catalog } from '../../../data/catalog';

export const GET: APIRoute = () => {
  const fr = useCatalog('fr');
  const categories = Object.keys(fr.cats).map((id, position) => ({
    id,
    group: catalog.find((i) => i.cat === id)?.group ?? 'devices',
    position,
    labels: Object.fromEntries(locales.map((l) => [l, useCatalog(l).cats[id] ?? ''])),
  }));
  const products = catalog.map((i, position) => {
    const texts: Record<string, { name: string; use: string }> = { fr: { name: i.name.fr, use: i.use.fr }, en: { name: i.name.en, use: i.use.en } };
    for (const l of locales) {
      const tr = useCatalog(l).items[i.id];
      if (tr && l !== 'fr' && l !== 'en') texts[l] = { name: tr[0], use: tr[1] };
    }
    return {
      code: i.id, group: i.group, kind: i.family, cat: i.cat, position,
      formats: i.formats ?? [], route: i.route ?? '', line: i.line ?? '', phase: i.phase ?? null, pack: i.pack ?? '',
      species: i.species ?? '', keywords: i.keywords, texts,
    };
  });
  return new Response(JSON.stringify({ categories, products }), { headers: { 'Content-Type': 'application/json' } });
};
