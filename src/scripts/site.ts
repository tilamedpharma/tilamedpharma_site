// Interactions du site (vanilla, léger). Respecte prefers-reduced-motion.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s as any)) as T[];

/* ---------- En-tête : état au défilement ---------- */
const header = $('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

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
window.matchMedia('(min-width: 1101px)').addEventListener('change', (m) => m.matches && closeDrawer());

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

/* ---------- Slider du hero (vidéo de l'usine · carte du réseau) ---------- */
// Carte : entière (meet) sur grand écran, recadrée sur la région (slice) sur mobile.
const nmFit = window.matchMedia('(max-width: 900px)');
const fitMaps = () => $$<SVGSVGElement>('[data-nm-fit]').forEach((s) => s.setAttribute('preserveAspectRatio', `${s.dataset.nmFit} ${nmFit.matches ? 'slice' : 'meet'}`));
fitMaps();
nmFit.addEventListener('change', fitMaps);
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
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = String(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach((el) => countIO.observe(el));

/* ---------- Procédé : étape active synchronisée avec la vidéo ---------- */
const proc = $('[data-proc]');
if (proc) {
  const steps = $$('[data-proc-step]', proc);
  const vids = $$<HTMLVideoElement>('[data-proc-video]', proc);
  const num = $('[data-proc-n]', proc);
  const media = $('.proc__media', proc);
  const desktop = window.matchMedia('(min-width: 901px)');
  let active = -1;
  const setActive = (i: number) => {
    if (i === active) return;
    active = i;
    steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
    vids.forEach((v, k) => {
      const on = k === i;
      v.classList.toggle('is-active', on);
      if (on && desktop.matches && !reduced) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    });
    if (num) num.textContent = String(i + 1).padStart(2, '0');
    media?.style.setProperty('--p', String(i + 1));
  };
  const stepIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.procStep)); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach((s) => stepIO.observe(s));
  setActive(0);
  // Mobile : chaque vidéo d'étape se lance quand elle est visible
  const mobIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target as HTMLVideoElement;
      if (desktop.matches || reduced) return;
      if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    });
  }, { threshold: 0.4 });
  $$<HTMLVideoElement>('.proc__step video', proc).forEach((v) => mobIO.observe(v));
}

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

/* ---------- Catalogue produits : recherche + filtre par gamme ---------- */
$$('[data-catalog]').forEach((root) => {
  const q = $<HTMLInputElement>('[data-cat-q]', root);
  const chips = $$<HTMLButtonElement>('[data-cat-g]', root);
  const cards = $$('.pcard', root);
  const groups = $$('[data-cat-group]', root);
  const none = $('[data-cat-none]', root);
  const count = $('[data-cat-count]', root);
  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  let group = '';
  const apply = () => {
    const words = norm(q?.value ?? '').split(/\s+/).filter(Boolean);
    let n = 0;
    cards.forEach((c) => {
      const ok = (!group || c.dataset.g === group) && words.every((w) => (c.dataset.s ?? '').includes(w));
      c.hidden = !ok;
      if (ok) n++;
    });
    groups.forEach((g) => { g.hidden = !$$('.pcard', g).some((c) => !c.hidden); });
    if (none) none.hidden = n > 0;
    if (count) count.textContent = (n === 1 ? count.dataset.one : count.dataset.many?.replace('999', String(n))) ?? String(n);
  };
  q?.addEventListener('input', apply);
  chips.forEach((b) => b.addEventListener('click', () => {
    group = b.dataset.catG ?? '';
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    apply();
  }));
  $('[data-cat-reset]', root)?.addEventListener('click', () => {
    if (q) q.value = '';
    group = '';
    chips.forEach((x, i) => x.setAttribute('aria-pressed', String(i === 0)));
    apply();
    q?.focus();
  });
  // Recherche partageable : ?q=…&g=…
  const params = new URLSearchParams(location.search);
  if (params.get('q') && q) q.value = params.get('q')!;
  const g0 = params.get('g');
  if (g0 && chips.some((x) => x.dataset.catG === g0)) {
    group = g0;
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.catG === group)));
  }
  if (params.get('q') || g0) apply();
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
