/* Back office TILAMED Pharma · comportements de l'interface (sans dépendance). */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* Menu latéral sur mobile */
  const aside = $('#aside');
  const shade = $('[data-aside-close]');
  const toggle = $('[data-aside-toggle]');
  const setAside = (open) => {
    if (!aside) return;
    aside.classList.toggle('is-open', open);
    if (shade) shade.hidden = !open;
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
  };
  toggle?.addEventListener('click', () => setAside(!aside.classList.contains('is-open')));
  shade?.addEventListener('click', () => setAside(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setAside(false); });

  /* Fermer les menus déroulants (<details>) en cliquant ailleurs */
  document.addEventListener('click', (e) => {
    $$('details.amenu[open], details.aumenu[open]').forEach((d) => { if (!d.contains(e.target)) d.open = false; });
  });

  /* Messages : bouton fermer */
  $$('[data-dismiss]').forEach((b) => b.addEventListener('click', () => b.closest('.aflash')?.remove()));

  /* Confirmation des actions sensibles */
  $$('form[data-confirm]').forEach((f) => f.addEventListener('submit', (e) => {
    if (!window.confirm(f.dataset.confirm)) e.preventDefault();
  }));

  /* Afficher / masquer le mot de passe */
  $$('[data-pw-toggle]').forEach((b) => b.addEventListener('click', () => {
    const i = b.parentElement.querySelector('input');
    const show = i.type === 'password';
    i.type = show ? 'text' : 'password';
    b.setAttribute('aria-label', show ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
  }));

  /* Filtres de la liste : envoi automatique au changement de liste déroulante */
  $$('form[data-autosubmit] select').forEach((s) => s.addEventListener('change', () => s.form.submit()));

  /* Sélection groupée */
  const bulk = $('[data-bulk]');
  if (bulk) {
    const all = $('[data-check-all]', bulk);
    const boxes = $$('[data-check]');
    const n = $('[data-bulk-n]', bulk);
    const go = $('[data-bulk-go]', bulk);
    const action = $('[data-bulk-action]', bulk);
    const idle = n.textContent;
    const refresh = () => {
      const k = boxes.filter((b) => b.checked).length;
      boxes.forEach((b) => b.closest('tr')?.classList.toggle('is-checked', b.checked));
      bulk.classList.toggle('is-active', k > 0);
      n.textContent = k ? `${k} produit${k > 1 ? 's' : ''} sélectionné${k > 1 ? 's' : ''}` : idle;
      all.checked = k > 0 && k === boxes.length;
      all.indeterminate = k > 0 && k < boxes.length;
      go.disabled = !k || !action.value;
    };
    all.addEventListener('change', () => { boxes.forEach((b) => { b.checked = all.checked; }); refresh(); });
    boxes.forEach((b) => b.addEventListener('change', refresh));
    action.addEventListener('change', refresh);
    $('#bulk')?.addEventListener('submit', (e) => {
      const k = boxes.filter((b) => b.checked).length;
      const label = action.options[action.selectedIndex].text;
      const warn = action.value === 'delete' ? '\n\nAttention : la suppression est définitive (photos et documents compris).' : '';
      if (!window.confirm(`${label} : ${k} produit${k > 1 ? 's' : ''} ?${warn}`)) e.preventDefault();
    });
    refresh();
  }

  /* Formulaire produit */
  const pf = $('#pf');
  if (pf) {
    // Onglets de langue (clavier : flèches gauche/droite)
    const tabs = $$('[role="tab"]', pf);
    const show = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        $('#' + t.getAttribute('aria-controls')).hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => show(t));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        show(next);
        next.focus();
      });
    });
    // Point de complétude de chaque langue
    const dot = (panel) => {
      const fields = $$('input, textarea', panel);
      const filled = fields.filter((f) => f.value.trim() !== '').length;
      const name = $('[data-name]', panel)?.value.trim();
      const tab = $(`[aria-controls="${panel.id}"] [data-tab-dot]`, pf);
      if (tab) tab.className = 'atabs__dot atabs__dot--' + (!name ? 'empty' : filled >= 2 ? 'full' : 'part');
    };
    $$('[data-panel]', pf).forEach((p) => p.addEventListener('input', () => dot(p)));
    // Ouvrir l'onglet français si le nom manque
    const err = $('.afield--err', pf);
    if (err) { const panel = err.closest('[data-panel]'); if (panel) show($(`[aria-controls="${panel.id}"]`, pf)); err.querySelector('input, textarea, select')?.focus(); }

    // Catégories proposées selon la gamme
    const grp = $('[data-grp]', pf);
    const cat = $('[data-cat]', pf);
    const vet = $('.afield--vet', pf);
    const groupLabel = () => grp.options[grp.selectedIndex].text;
    const syncCats = () => {
      $$('optgroup', cat).forEach((og) => {
        const ok = og.label === groupLabel();
        og.hidden = !ok;
        $$('option', og).forEach((o) => { o.disabled = !ok; });
      });
      const sel = cat.options[cat.selectedIndex];
      if (sel && sel.disabled) cat.value = '';
      if (vet) vet.hidden = grp.value !== 'vet';
    };
    grp?.addEventListener('change', syncCats);
    if (grp && cat) syncCats();

    // Aperçu de la photo choisie
    $$('[data-preview]', pf).forEach((input) => input.addEventListener('change', () => {
      const file = input.files?.[0];
      const label = input.closest('.afile');
      if (!file) return;
      label?.classList.add('has-file');
      label.querySelector('span').textContent = file.name;
      const img = $('.aphoto__img', pf);
      if (img && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        if (img.tagName === 'IMG') img.src = url;
        else { const n = document.createElement('img'); n.className = 'aphoto__img'; n.alt = 'Nouvelle photo'; n.src = url; img.replaceWith(n); }
      }
    }));

    // Alerte en quittant la page avec des modifications non enregistrées
    let dirty = false;
    const mark = () => { dirty = true; };
    pf.addEventListener('input', mark);
    pf.addEventListener('change', mark);
    $$('[form="pf"]').forEach((el) => { el.addEventListener('input', mark); el.addEventListener('change', mark); });
    pf.addEventListener('submit', () => { dirty = false; });
    window.addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });
  }

  /* Nom de fichier choisi (documents) */
  $$('.adocform input[type="file"]').forEach((input) => input.addEventListener('change', () => {
    const title = input.form.querySelector('[name="title"]');
    const f = input.files?.[0];
    if (f && title && !title.value) title.placeholder = f.name.replace(/\.pdf$/i, '').replace(/[_-]+/g, ' ');
  }));
})();
