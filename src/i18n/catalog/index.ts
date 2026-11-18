import type { Locale } from '../config';
import fr, { type CatalogDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';
import type { CatalogItem } from '../../data/catalog';

const dicts: Record<Locale, CatalogDict> = { fr, en, es, pt, it, zh, ar };

export function useCatalog(lang: Locale): CatalogDict {
  return dicts[lang] ?? fr;
}

/** Nom et usage d'un produit dans la langue demandée (repli : anglais, puis français). */
export function itemText(lang: Locale, item: CatalogItem): { name: string; use: string } {
  if (lang === 'fr') return { name: item.name.fr, use: item.use.fr };
  if (lang === 'en') return { name: item.name.en, use: item.use.en };
  const t = dicts[lang]?.items[item.id];
  return t ? { name: t[0], use: t[1] } : { name: item.name.en, use: item.use.en };
}

const solvent: Record<Locale, string> = { fr: 'Solvant', en: 'Solvent', es: 'Disolvente', pt: 'Solvente', it: 'Solvente', zh: '溶剂', ar: 'مذيب' };
/** Voie d'administration (sigles internationaux, sauf « Solvant »). */
export function routeLabel(lang: Locale, r: string): string {
  return r === 'Solvant' ? solvent[lang] : r;
}

/** Présentations : décimales et unités adaptées à la langue (données sources en français). */
export function formatLabel(lang: Locale, s: string): string {
  if (lang === 'fr' || lang === 'es' || lang === 'pt' || lang === 'it') return s;
  let out = s.replace(/(\d),(\d)/g, '$1.$2').replace(/\bMUI\b/g, 'MIU').replace(/\bUI\b/g, 'IU').replace(/\bcp\b/g, 'tab.').replace(/\bpcs\b/g, 'pcs');
  return out;
}
