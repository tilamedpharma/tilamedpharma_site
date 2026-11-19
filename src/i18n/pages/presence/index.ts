import type { Locale } from '../../config';
import fr, { type PresenceDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, PresenceDict> = { fr, en, es, pt, it, zh, ar };

export function usePresence(lang: Locale): PresenceDict {
  return dicts[lang] ?? fr;
}
