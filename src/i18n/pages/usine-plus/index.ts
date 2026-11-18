import type { Locale } from '../../config';
import fr, { type Topic } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, Record<string, Topic>> = { fr, en, es, pt, it, zh, ar };

export function useUsinePlus(lang: Locale): Record<string, Topic> {
  return dicts[lang] ?? fr;
}
