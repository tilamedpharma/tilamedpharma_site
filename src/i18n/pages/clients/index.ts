import type { Locale } from '../../config';
import fr, { type ClientsDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, ClientsDict> = { fr, en, es, pt, it, zh, ar };

export function useClients(lang: Locale): ClientsDict {
  return dicts[lang] ?? fr;
}
