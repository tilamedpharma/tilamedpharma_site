// Contenu des pages de détail, toutes rubriques confondues.
import type { Locale } from '../config';
import type { Topic } from './usine-plus/fr';
import { useUsinePlus } from './usine-plus';
import { useEntreprise } from './entreprise';
import { useQualite } from './qualite';
import { useMarches } from './marches';
import { useAchatsCarrieres } from './achats-carrieres';

export function getTopic(lang: Locale, slug: string): Topic {
  return useUsinePlus(lang)[slug] ?? useEntreprise(lang)[slug] ?? useQualite(lang).pages[slug] ?? useMarches(lang).pages[slug] ?? useAchatsCarrieres(lang).pages[slug];
}
