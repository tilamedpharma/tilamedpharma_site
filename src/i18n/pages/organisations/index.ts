import type { Locale } from '../../config';
import fr, { type OrganisationsDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, OrganisationsDict> = { fr, en, es, pt, it, zh, ar };

export function useOrganisations(lang: Locale): OrganisationsDict {
  return dicts[lang] ?? fr;
}
