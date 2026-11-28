// Interactions du site (vanilla, léger). Respecte prefers-reduced-motion.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s as any)) as T[];

/* ---------- En-tête : état au défilement ---------- */
const header = $('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Sections consécutives de même fond : pas de double marge (24/11) ----------
   Sinon la marge basse de l'une + la marge haute de l'autre forment un grand vide sans séparation visible. */
try {
  const bgOf = (el: Element | null): string => {
    for (let e = el; e; e = e.parentElement) {
      const c = getComputedStyle(e).backgroundColor;
      if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') return c;
    }
    return 'rgb(255, 255, 255)';
  };
  const blocks = $$('main > *').filter((el) => el.getBoundingClientRect().height > 30);
  for (let i = 1; i < blocks.length; i++) {
    const prev = blocks[i - 1], cur = blocks[i];
    if (parseFloat(getComputedStyle(prev).paddingBottom) > 0 && bgOf(prev) === bgOf(cur)) cur.classList.add('is-joined');
  }
} catch { /* purement visuel : ne doit jamais bloquer le reste du script */ }

/* ---------- Méga-menu ---------- */
const triggers = $$<HTMLButtonElement>('[data-mega-trigger]');
let openKey: string | null = null;
let closeTimer = 0;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function openMega(key: string) {
  window.clearTimeout(closeTimer);
  if (openKey === key) return;
  closeMega(true);
  const panel = $(`[data-mega="${key}"]`);
  const btn = $(`[data-mega-trigger="${key}"]`);
  if (!panel || !btn) return;
  panel.hidden = false;
  requestAnimationFrame(() => panel.classList.add('is-open'));
  btn.setAttribute('aria-expanded', 'true');
  $(`[data-mega-item="${key}"]`)?.classList.add('is-open');
  openKey = key;
}
function closeMega(now = false) {
  if (!openKey) return;
  const panel = $(`[data-mega="${openKey}"]`);
  const btn = $(`[data-mega-trigger="${openKey}"]`);
  panel?.classList.remove('is-open');
  if (panel) panel.hidden = true;
  btn?.setAttribute('aria-expanded', 'false');
  $(`[data-mega-item="${openKey}"]`)?.classList.remove('is-open');
  openKey = null;
  if (!now) btn?.blur();
}
// Le libellé de la rubrique est un lien (page principale) ; la flèche ouvre/ferme le méga-menu,
// et sur ordinateur le survol de la rubrique entière l'ouvre aussi.
triggers.forEach((btn) => {
  const key = btn.dataset.megaTrigger!;
  btn.addEventListener('click', () => (openKey === key ? closeMega() : openMega(key)));
  if (finePointer) {
    btn.closest('[data-mega-item]')?.addEventListener('mouseenter', () => openMega(key));
  }
});
header?.addEventListener('mouseleave', () => { if (finePointer) closeTimer = window.setTimeout(() => closeMega(), 200); });
header?.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
$$('.hdr__logo, .hdr__tools').forEach((el) => el.addEventListener('mouseenter', () => finePointer && closeMega(true)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const k = openKey;
    closeMega();
    if (k) $<HTMLButtonElement>(`[data-mega-trigger="${k}"]`)?.focus();
    closeLang();
    closeDrawer();
  }
});
document.addEventListener('click', (e) => {
  const target = e.target as Node;
  if (openKey && header && !header.contains(target)) closeMega();
  if (lang && !lang.contains(target)) closeLang();
});

/* ---------- Sélecteur de langue ---------- */
const lang = $('.lang[data-lang]'); // <html> porte aussi data-lang : cibler le composant
const langBtn = $<HTMLButtonElement>('[data-lang-btn]');
function closeLang() { lang?.classList.remove('is-open'); langBtn?.setAttribute('aria-expanded', 'false'); }
langBtn?.addEventListener('click', () => {
  const open = !lang?.classList.contains('is-open');
  lang?.classList.toggle('is-open', open);
  langBtn.setAttribute('aria-expanded', String(open));
  if (open) closeMega(true);
});

/* ---------- Tiroir mobile ---------- */
const drawer = $('[data-drawer]');
const drawerBtn = $<HTMLButtonElement>('[data-drawer-btn]');
function closeDrawer() {
  if (!drawer || drawer.hidden) return;
  drawer.hidden = true;
  drawerBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
drawerBtn?.addEventListener('click', () => {
  if (!drawer) return;
  const open = drawer.hidden;
  drawer.hidden = !open;
  drawerBtn.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
drawer?.addEventListener('click', (e) => { if (e.target === drawer) closeDrawer(); });
window.matchMedia('(min-width: 1240px)').addEventListener('change', (m) => m.matches && closeDrawer());

/* ---------- Carte animée du réseau (NetworkMap, variante A) ---------- */
// État par défaut = état final ; .is-play relance les animations CSS, les points lumineux suivent les routes (SMIL).
function playNetwork(nm: HTMLElement) {
  if (reduced) return;
  const timers = ((nm as any)._timers ?? []) as number[];
  timers.forEach((id) => window.clearTimeout(id));
  const next: number[] = [];
  (nm as any)._timers = next;
  const cs = getComputedStyle(nm);
  const t0 = parseFloat(cs.getPropertyValue('--t0')) || 0;
  const st = parseFloat(cs.getPropertyValue('--st')) || 0;
  const d = parseFloat(cs.getPropertyValue('--d')) || 0;
  nm.querySelectorAll<SVGAnimationElement>('animateMotion, animate').forEach((a) => { try { a.endElement(); } catch { /* pas encore démarrée */ } });
  nm.classList.remove('is-play'); void nm.offsetWidth; nm.classList.add('is-play');
  const n = nm.querySelectorAll('.route').length;
  nm.querySelectorAll<SVGElement>('.dot:not(.dot--loop)').forEach((c) => {
    const i = Number(c.dataset.i);
    c.querySelectorAll<SVGAnimationElement>('animateMotion, animate').forEach((a) => a.beginElementAt(t0 + i * st));
  });
  nm.querySelectorAll<SVGElement>('.dot--loop').forEach((c) => {
    const i = Number(c.dataset.i);
    c.querySelectorAll<SVGAnimationElement>('animateMotion, animate').forEach((a) => a.beginElementAt(t0 + (n - 1) * st + d + .6 + i * .37));
  });
  const count = nm.closest('[data-slide]')?.querySelector('[data-nm-count]');
  if (count) {
    count.textContent = '0';
    next.push(window.setTimeout(() => { count.textContent = '1'; }, 500));
    for (let i = 0; i < n; i++) next.push(window.setTimeout(() => { count.textContent = String(i + 2); }, (t0 + i * st + d * .85) * 1000));
  }
}

// Carte en mode cadre (page Présence) : l'animation se lance quand la carte apparaît à l'écran.
const nmAutoIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    playNetwork(e.target as HTMLElement);
    nmAutoIO.unobserve(e.target);
  });
}, { threshold: 0.35 });
$$<HTMLElement>('[data-nm-auto]').forEach((nm) => nmAutoIO.observe(nm));

/* ---------- Slider du hero (vidéo de l'usine · carte du réseau) ---------- */
// Carte : entière (meet) sur grand écran, recadrée sur la région (slice) sur mobile.
// Écran vertical : la carte passe au-dessus du texte (voir global.css), cadrée sur la seule région desservie,
// élargie au format de son cadre pour le remplir sans bandes.
const nmFit = window.matchMedia('(max-width: 900px)');
const nmPortrait = window.matchMedia('(max-width: 1024px) and (orientation: portrait)');
const fitMaps = () => $$<SVGSVGElement>('[data-nm-fit]').forEach((s) => {
  const region = s.dataset.region?.split(' ').map(Number);
  if (nmPortrait.matches && region) {
    const [x, y, w, h] = region;
    const ratio = s.clientWidth && s.clientHeight ? s.clientWidth / s.clientHeight : 1.25;
    const W = Number(s.dataset.full?.split(' ')[2]) || x + w;
    const w2 = Math.max(w, h * ratio), h2 = w2 / ratio;
    const x2 = Math.min(Math.max(0, x + (w - w2) / 2), Math.max(0, W - w2)); // élargi sans sortir de la carte
    s.setAttribute('viewBox', [x2, y + (h - h2) / 2, w2, h2].map((v) => v.toFixed(1)).join(' '));
    s.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    return;
  }
  if (s.dataset.full) s.setAttribute('viewBox', s.dataset.full);
  s.setAttribute('preserveAspectRatio', `${s.dataset.nmFit} ${nmFit.matches ? 'slice' : 'meet'}`);
});
fitMaps();
nmFit.addEventListener('change', fitMaps);
nmPortrait.addEventListener('change', fitMaps);
window.addEventListener('resize', () => nmPortrait.matches && fitMaps());
const hslider = $('[data-hslider]');
if (hslider) {
  const slides = $$('[data-slide]', hslider);
  const tabs = $$<HTMLButtonElement>('[data-tab]', hslider);
  const video = $<HTMLVideoElement>('[data-hero-video]', hslider);
  const toggle = $<HTMLButtonElement>('[data-hero-toggle]', hslider);
  const DUR = 9000;
  let cur = 0, elapsed = 0, last = performance.now(), hover = false, stopped = reduced;
  const setToggle = () => {
    toggle?.classList.toggle('is-paused', stopped);
    toggle?.setAttribute('aria-label', (stopped ? toggle.dataset.labelPlay : toggle.dataset.labelPause) || '');
  };
  const show = (k: number) => {
    cur = k; elapsed = 0;
    hslider.dataset.cur = String(k);
    slides.forEach((s, j) => {
      const on = j === k;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
      s.querySelectorAll<HTMLElement>('a').forEach((a) => (on ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
    });
    tabs.forEach((b, j) => {
      b.classList.toggle('is-active', j === k);
      b.setAttribute('aria-selected', String(j === k));
      const bar = b.querySelector<HTMLElement>('.hero__prog i');
      if (bar) bar.style.width = '0';
    });
    if (video) { if (k === 0 && !stopped) video.play().catch(() => {}); else video.pause(); }
    const nm = slides[k]?.querySelector<HTMLElement>('.nm');
    if (nm) playNetwork(nm);
  };
  tabs.forEach((b, j) => {
    b.addEventListener('click', () => show(j));
    b.addEventListener('keydown', (e) => {
      const rtl = document.documentElement.dir === 'rtl';
      const fwd = e.key === (rtl ? 'ArrowLeft' : 'ArrowRight'), back = e.key === (rtl ? 'ArrowRight' : 'ArrowLeft');
      if (fwd || back) { e.preventDefault(); const k = (j + (fwd ? 1 : -1) + tabs.length) % tabs.length; show(k); tabs[k].focus(); }
    });
  });
  hslider.addEventListener('mouseenter', () => { hover = true; });
  hslider.addEventListener('mouseleave', () => { hover = false; });
  hslider.addEventListener('focusin', () => { hover = true; });
  hslider.addEventListener('focusout', () => { hover = false; });
  $('[data-hero-prev]', hslider)?.addEventListener('click', () => show((cur - 1 + slides.length) % slides.length));
  $('[data-hero-next]', hslider)?.addEventListener('click', () => show((cur + 1) % slides.length));
  toggle?.addEventListener('click', () => {
    stopped = !stopped; setToggle();
    if (video) { if (!stopped && cur === 0) video.play().catch(() => {}); else video.pause(); }
  });
  if (video && reduced) { video.pause(); video.removeAttribute('autoplay'); }
  setToggle();
  // Lien direct vers un slide : /#hslide-1 ouvre la carte du réseau.
  const hashSlide = slides.findIndex((s) => `#${s.id}` === location.hash);
  if (hashSlide > 0) show(hashSlide);
  const tick = (now: number) => {
    const dt = now - last; last = now;
    if (!stopped && !hover && !document.hidden) {
      elapsed += dt;
      const bar = tabs[cur]?.querySelector<HTMLElement>('.hero__prog i');
      if (bar) bar.style.width = `${Math.min(100, (elapsed / DUR) * 100)}%`;
      if (elapsed >= DUR) show((cur + 1) % slides.length);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Apparitions au défilement ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
$$('[data-reveal], [data-tl], [data-map]').forEach((el) => io.observe(el));

/* ---------- Compteurs ---------- */
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement;
    countIO.unobserve(el);
    const end = parseFloat(el.dataset.count || '0');
    if (reduced || !Number.isFinite(end) || end < 3) return;
    const start = performance.now();
    const dur = 1600;
    const step = (now: number) => {
      // L'horodatage d'une image peut précéder `start` : sans le plancher à 0, le compteur affichait des nombres négatifs.
      const p = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = String(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach((el) => countIO.observe(el));

/* ---------- Onglets produits ---------- */
$$('[data-tabs]').forEach((root) => {
  const tabs = $$<HTMLButtonElement>('[data-tab]', root);
  const panels = $$('[data-panel]', root);
  const select = (i: number, focus = false) => {
    tabs.forEach((t, k) => { t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
    panels.forEach((p, k) => {
      p.hidden = k !== i;
      if (k === i) { p.classList.remove('is-in'); void p.offsetWidth; p.classList.add('is-in'); }
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const rtl = document.documentElement.dir === 'rtl';
      const next = (e.key === 'ArrowDown' || e.key === (rtl ? 'ArrowLeft' : 'ArrowRight'));
      const prev = (e.key === 'ArrowUp' || e.key === (rtl ? 'ArrowRight' : 'ArrowLeft'));
      if (next || prev) { e.preventDefault(); select((i + (next ? 1 : -1) + tabs.length) % tabs.length, true); }
    });
  });
});

/* ---------- Vidéos lues au survol (cartes d'étapes) ---------- */
if (finePointer && !reduced) {
  $$('[data-hover-play]').forEach((m) => {
    const v = m.querySelector('video');
    const card = m.closest('a') ?? m;
    if (!v) return;
    card.addEventListener('mouseenter', () => { v.preload = 'auto'; v.play().catch(() => {}); });
    card.addEventListener('mouseleave', () => v.pause());
  });
}

/* ---------- Barre des étapes : montrer l'étape en cours (mobile, défilement horizontal) ---------- */
const railCur = $('.srail .is-current');
const railList = $('.srail__list');
if (railCur && railList && railList.scrollWidth > railList.clientWidth) {
  const r = railList.getBoundingClientRect();
  if (r.top >= 0 && r.bottom <= window.innerHeight) railCur.scrollIntoView({ block: 'nearest', inline: 'center' });
}

/* ---------- Page d'une gamme : toute la gamme visible, filtre facultatif par catégorie ---------- */
$$('[data-fam-filter]').forEach((root) => {
  const chips = $$<HTMLButtonElement>('[data-fam-c]', root);
  const cats = $$<HTMLElement>('.prange__cat', root);
  chips.forEach((b) => b.addEventListener('click', () => {
    const c = b.dataset.famC ?? '';
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    cats.forEach((d) => { d.hidden = c !== '' && d.dataset.cat !== c; });
  }));
});

/* ---------- Rails horizontaux (gammes du catalogue) : flèches seulement quand le contenu déborde ---------- */
$$('[data-rail]').forEach((rail) => {
  const track = $('[data-rail-track]', rail);
  const prev = $<HTMLButtonElement>('[data-rail-prev]', rail);
  const next = $<HTMLButtonElement>('[data-rail-next]', rail);
  if (!track || !prev || !next) return;
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const pos = Math.abs(track.scrollLeft); // négatif en arabe (rtl)
    const over = max > 4;
    prev.hidden = !over || pos <= 4;
    next.hidden = !over || pos >= max - 4;
    rail.classList.toggle('has-prev', !prev.hidden);
    rail.classList.toggle('has-next', !next.hidden);
  };
  const go = (dir: number) => {
    const rtl = getComputedStyle(track).direction === 'rtl';
    track.scrollBy({ left: dir * track.clientWidth * 0.8 * (rtl ? -1 : 1), behavior: reduced ? 'auto' : 'smooth' });
  };
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('scrollend', update);
  prev.addEventListener('click', () => window.setTimeout(update, 500));
  next.addEventListener('click', () => window.setTimeout(update, 500));
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
  window.addEventListener('load', update);
  update();
});

/* ---------- Catalogue produits : gammes (vignettes), catégories, recherche, tri, pagination ---------- */
// Tous les produits sont dans la page ; on n'en montre qu'une page à la fois. Adresse partageable : ?g=&c=&q=&tri=&n=&page=
$$('[data-catalog]').forEach((root) => {
  const list = $('[data-cat-list]', root);
  if (!list) return;
  const cards = $$<HTMLElement>('.pcard', list);
  cards.forEach((c, i) => (c.dataset.i = String(i)));
  const q = $<HTMLInputElement>('[data-cat-q]', root);
  const sortSel = $<HTMLSelectElement>('[data-cat-sort]', root);
  const perSel = $<HTMLSelectElement>('[data-cat-per]', root);
  const none = $('[data-cat-none]', root);
  const pag = $('[data-cat-pag]', root);
  const top = $('[data-cat-top]', root);
  const panel = $('[data-cat-panel]', root);
  const toggle = $<HTMLButtonElement>('[data-cat-toggle]', root);
  const d = root.dataset;
  const lang = document.documentElement.lang || 'fr';
  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const fmt = (s: string, o: Record<string, number>) => s.replace(/\{(\w)\}/g, (_, k) => String(o[k] ?? ''));
  const perDefault = Number(d.per) || 12;
  const st = { g: '', c: '', q: '', sort: '', per: perDefault, page: 1 };
  const arrowL = '<svg class="icon flip-rtl" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
  const arrowR = '<svg class="icon flip-rtl" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // Numéros affichés : 1 … 4 5 6 … 10
  const seq = (cur: number, n: number): (number | 0)[] => {
    if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
    const s = new Set([1, n, cur - 1, cur, cur + 1]);
    if (cur <= 3) [2, 3, 4].forEach((x) => s.add(x));
    if (cur >= n - 2) [n - 1, n - 2, n - 3].forEach((x) => s.add(x));
    const a = [...s].filter((x) => x >= 1 && x <= n).sort((x, y) => x - y);
    const out: (number | 0)[] = [];
    a.forEach((x, i) => { if (i && x - a[i - 1] > 1) out.push(0); out.push(x); });
    return out;
  };

  const filtered = () => {
    const words = norm(st.q).split(/\s+/).filter(Boolean);
    const r = cards.filter((c) => (!st.g || c.dataset.g === st.g) && (!st.c || c.dataset.c === st.c) && words.every((w) => (c.dataset.s ?? '').includes(w)));
    const coll = new Intl.Collator(lang, { sensitivity: 'base', numeric: true });
    if (st.sort === 'az') r.sort((a, b) => coll.compare(a.dataset.n ?? '', b.dataset.n ?? ''));
    else if (st.sort === 'za') r.sort((a, b) => coll.compare(b.dataset.n ?? '', a.dataset.n ?? ''));
    else r.sort((a, b) => Number(a.dataset.i) - Number(b.dataset.i));
    return r;
  };

  const pageBtn = (label: string, page: number, cls: string, opts: { cur?: boolean; dis?: boolean; aria?: string } = {}) =>
    `<button type="button" class="${cls}" data-cat-go="${page}"${opts.cur ? ' aria-current="page"' : ''}${opts.dis ? ' disabled' : ''} aria-label="${opts.aria ?? fmt(d.tPage ?? 'Page {n}', { n: page })}">${label}</button>`;

  const writeUrl = () => {
    const u = new URL(location.href);
    const set = (k: string, v: string | number, def: string | number) => (v !== def && v !== '' ? u.searchParams.set(k, String(v)) : u.searchParams.delete(k));
    set('g', st.g, ''); set('c', st.c, ''); set('q', st.q, ''); set('tri', st.sort, ''); set('n', st.per, perDefault); set('page', st.page, 1);
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
  };

  const render = (scroll = false) => {
    const r = filtered();
    const pages = Math.max(1, Math.ceil(r.length / st.per));
    st.page = Math.min(Math.max(1, st.page), pages);
    const from = (st.page - 1) * st.per;
    const shown = r.slice(from, from + st.per);
    cards.forEach((c) => { c.hidden = true; c.classList.remove('is-enter'); });
    r.forEach((c) => list.appendChild(c));
    shown.forEach((c, i) => {
      c.hidden = false;
      if (!reduced && root.classList.contains('is-ready')) { c.style.setProperty('--i', String(i)); void c.offsetWidth; c.classList.add('is-enter'); }
    });
    const range = r.length === 0 ? (d.tNone ?? '0') : r.length === 1 ? (d.tOne ?? '1') : fmt(d.tRange ?? '{a}–{b} / {n}', { a: from + 1, b: from + shown.length, n: r.length });
    $$('[data-cat-range]', root).forEach((n) => (n.textContent = range));
    if (none) none.hidden = r.length > 0;
    if (pag) {
      pag.hidden = pages < 2;
      const btns = $('[data-cat-pages]', pag);
      if (btns) {
        const p = st.page;
        btns.innerHTML = pageBtn(arrowL + `<span>${d.tPrev}</span>`, p - 1, 'pcx-pag__nav', { dis: p === 1, aria: d.tPrev })
          + seq(p, pages).map((x) => (x === 0 ? '<span class="pcx-pag__gap" aria-hidden="true">…</span>' : pageBtn(String(x), x, 'pcx-pag__n', { cur: x === p }))).join('')
          + pageBtn(`<span>${d.tNext}</span>` + arrowR, p + 1, 'pcx-pag__nav', { dis: p === pages, aria: d.tNext });
      }
    }
    // États des filtres
    $$<HTMLButtonElement>('[data-cat-g]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.catG === st.g)));
    $$<HTMLButtonElement>('[data-cat-c]', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.catC === st.c && (!st.c || b.dataset.catCg === st.g))));
    $$('[data-cats-of]', root).forEach((u) => { u.hidden = !!st.g && u.dataset.catsOf !== st.g; });
    root.classList.toggle('is-group', !!st.g);
    writeUrl();
    if (scroll && top) {
      const y = top.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hdr')) || 84) - 16;
      if (window.scrollY > y) window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    }
  };

  root.addEventListener('click', (e) => {
    const b = (e.target as Element).closest('button');
    if (!b || !root.contains(b)) return;
    if (b.dataset.catGo) { st.page = Number(b.dataset.catGo); render(true); return; }
    if (b.hasAttribute('data-cat-g')) { st.g = b.dataset.catG ?? ''; st.c = ''; st.page = 1; render(); return; }
    if (b.hasAttribute('data-cat-c')) {
      const c = b.dataset.catC ?? '';
      if (c) { st.g = b.dataset.catCg ?? st.g; st.c = st.c === c ? '' : c; } else { st.c = ''; }
      st.page = 1; render(); return;
    }
    if (b.hasAttribute('data-cat-reset')) {
      st.g = st.c = st.q = ''; st.page = 1;
      if (q) q.value = '';
      render(); q?.focus(); return;
    }
    if (b === toggle && panel) {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
    }
  });
  let qTimer = 0;
  q?.addEventListener('input', () => {
    window.clearTimeout(qTimer);
    qTimer = window.setTimeout(() => { st.q = q.value.trim(); st.page = 1; render(); }, 120);
  });
  sortSel?.addEventListener('change', () => { st.sort = sortSel.value; st.page = 1; render(); });
  perSel?.addEventListener('change', () => { st.per = Number(perSel.value) || perDefault; st.page = 1; render(); });

  // État initial depuis l'adresse (recherche partageable ; l'ancien format ?q=&g= reste valable)
  const params = new URLSearchParams(location.search);
  const groups = $$<HTMLButtonElement>('[data-cat-g]', root).map((b) => b.dataset.catG ?? '');
  const g0 = params.get('g') ?? '';
  if (groups.includes(g0)) st.g = g0;
  const c0 = params.get('c') ?? '';
  const cBtn = $$<HTMLButtonElement>('[data-cat-c]', root).find((b) => b.dataset.catC === c0 && c0 !== '');
  if (cBtn) { st.c = c0; st.g = cBtn.dataset.catCg ?? st.g; }
  st.q = params.get('q') ?? '';
  if (q) q.value = st.q;
  if (params.get('tri') === 'az' || params.get('tri') === 'za') st.sort = params.get('tri')!;
  if (sortSel) sortSel.value = st.sort;
  const n0 = Number(params.get('n'));
  if (perSel && [...perSel.options].some((o) => Number(o.value) === n0)) st.per = n0;
  if (perSel) perSel.value = String(st.per);
  st.page = Number(params.get('page')) || 1;
  render();
  root.classList.add('is-ready');
  // Mobile : les vignettes défilent ; montrer celle de la gamme choisie (adresse partagée)
  const tilesRow = $('.pcx-tiles', root);
  const activeTile = $('[data-cat-g][aria-pressed="true"]', root);
  if (tilesRow && activeTile && st.g && tilesRow.scrollWidth > tilesRow.clientWidth) {
    const r = tilesRow.getBoundingClientRect();
    if (r.top >= 0 && r.bottom <= window.innerHeight) activeTile.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') { e.preventDefault(); q?.focus(); }
  });
});

/* ---------- Formulaires : taille maximale des fichiers joints ---------- */
$$<HTMLInputElement>('input[type="file"][data-max-mb]').forEach((inp) => {
  inp.addEventListener('change', () => {
    const max = Number(inp.dataset.maxMb) * 1024 * 1024;
    const tooBig = Array.from(inp.files ?? []).some((f) => f.size > max);
    inp.setCustomValidity(tooBig ? (inp.form?.dataset.msgBig ?? `Max ${inp.dataset.maxMb} MB`) : '');
    if (tooBig) inp.reportValidity();
  });
});

/* ---------- Formulaires : envoi vers /api/form.php (PHP sur Hostinger), sans rechargement ---------- */
$$<HTMLFormElement>('form[data-form]').forEach((form) => {
  const status = $('.form__status', form);
  const btn = $<HTMLButtonElement>('button[type="submit"]', form);
  const say = (kind: 'sending' | 'ok' | 'error') => {
    if (!status) return;
    status.hidden = false;
    status.className = `form__status is-${kind}`;
    status.textContent = form.dataset[`msg${kind[0].toUpperCase()}${kind.slice(1)}`] ?? '';
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (btn?.disabled) return;
    if (btn) btn.disabled = true;
    say('sending');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) throw new Error(data.error ?? String(res.status));
      form.reset();
      say('ok');
    } catch {
      say('error');
    } finally {
      if (btn) btn.disabled = false;
      status?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
});
// Sans JavaScript, le PHP renvoie vers la page avec ?envoi=ok|erreur : on affiche le message correspondant.
{
  const sent = new URLSearchParams(location.search).get('envoi');
  const form = $<HTMLFormElement>('form[data-form]');
  const status = form && $('.form__status', form);
  if (sent && form && status) {
    const kind = sent === 'ok' ? 'ok' : 'error';
    status.hidden = false;
    status.className = `form__status is-${kind}`;
    status.textContent = (kind === 'ok' ? form.dataset.msgOk : form.dataset.msgError) ?? '';
  }
}

/* ---------- Médiathèque : visionneuse plein écran ---------- */
$$('[data-gallery]').forEach((root) => {
  const dlg = $<HTMLDialogElement>('[data-gal-dialog]', root);
  const img = $<HTMLImageElement>('[data-gal-img]', root);
  const cap = $('[data-gal-cap]', root);
  const items = $$<HTMLAnchorElement>('[data-gal-item]', root);
  if (!dlg || !img || typeof dlg.showModal !== 'function') return;
  let cur = 0;
  const show = (i: number) => {
    cur = (i + items.length) % items.length;
    img.src = items[cur].href;
    img.alt = items[cur].dataset.caption ?? '';
    if (cap) cap.textContent = items[cur].dataset.caption ?? '';
  };
  items.forEach((a, i) => a.addEventListener('click', (e) => { e.preventDefault(); show(i); dlg.showModal(); }));
  $('[data-gal-close]', root)?.addEventListener('click', () => dlg.close());
  $('[data-gal-prev]', root)?.addEventListener('click', () => show(cur - 1));
  $('[data-gal-next]', root)?.addEventListener('click', () => show(cur + 1));
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', (e) => {
    const rtl = document.documentElement.dir === 'rtl';
    if (e.key === 'ArrowRight') show(cur + (rtl ? -1 : 1));
    if (e.key === 'ArrowLeft') show(cur + (rtl ? 1 : -1));
  });
});

/* ---------- Retour en haut ---------- */
document.querySelectorAll<HTMLAnchorElement>('[data-totop]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    (document.querySelector('.hdr__logo') as HTMLElement | null)?.focus({ preventScroll: true });
  });
});
