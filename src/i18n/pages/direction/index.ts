import type { Locale } from '../../config';
import fr, { type DirectionDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, DirectionDict> = { fr, en, es, pt, it, zh, ar };

export function useDirection(lang: Locale): DirectionDict {
  return dicts[lang] ?? fr;
}
