# Mise en ligne · GitHub → Hostinger

**En service depuis le 18/11/2026** : https://www.tilamedpharma.com

## Comment ça marche

1. On modifie le site en local, puis on vérifie avec `npm run build` et `npm run preview`.
2. On enregistre la modification dans Git et on l'envoie sur GitHub, branche `main` :
   `git add -A && git commit -m "…" && git push`.
3. Hostinger voit l'envoi et reconstruit le site tout seul.
   - Réglages : hPanel → déploiement Git, préréglage Astro, branche `main`, Node 22.
   - Le site à jour est en ligne 2 à 5 minutes plus tard.

> Tout envoi sur `main` part en ligne. Une modification non terminée reste en local, ou sur une autre branche.

## Configuration en place

- **Dépôt** : https://github.com/drickodev/tilamed_website (branche `main`).
- **Serveur** : Hostinger « Unlimited », IP 147.93.54.232, LiteSpeed. Les `.htaccess` du site sont actifs.
- **Domaine et DNS** : chez OVH, dans la **Zone DNS**.
  - Seuls les enregistrements **A** de `tilamedpharma.com` et de `www` pointent vers 147.93.54.232.
  - **Ne jamais toucher** aux serveurs DNS, ni aux enregistrements MX, SPF (TXT) et DKIM (`ovhmo-selector-1/2`) : les e-mails restent chez OVH.
- **SSL** : Let's Encrypt, géré par Hostinger, renouvellement automatique.
- **Formulaires** : `public/api/form.php` envoie les messages par SMTP OVH (`ssl0.ovh.net:465`) avec la boîte `contact@tilamedpharma.com`.
  - Le mot de passe est dans `tilamed-forms-config.php`, à la racine du compte Hostinger, **à côté** de `public_html`.
  - Ce fichier ne va jamais dans GitHub. Pour le recréer, partir du modèle `public/api/tilamed-forms-config.example.php`.
  - Si le mot de passe de la boîte change chez OVH, il faut aussi le changer dans ce fichier.
  - En cas d'échec d'envoi, le journal d'erreurs PHP de Hostinger contient des lignes `[tilamed-forms] …`.
- **Polices arabe et chinoise** : générées à chaque construction par `tools/fonts-copy.mjs` (étape `prebuild`).

## Back office et pages produits (depuis le 19/11/2026)

Les produits ne sont plus écrits dans le code : ils vivent dans une base de données sur le serveur et se gèrent sur **https://www.tilamedpharma.com/admin/** (guide : `GUIDE-BACK-OFFICE.md`).

- **Pages servies par PHP** : `/produits/`, les 5 pages de gamme, `/produits/{adresse}/` (fiche d'un produit) et `/produits/{adresse}/fiche-technique.pdf`, dans les 7 langues. Les règles sont dans `public/.htaccess` (bloc 2c). Astro génère le gabarit de chaque page ; `public/api/catalogue.php` y insère les produits à chaque visite. Une modification faite dans le back office est donc **en ligne immédiatement**, sans envoi sur GitHub.
- **Données** : dossier `tilamed-data`, à la racine du compte Hostinger, **à côté** de `public_html`. Il est créé tout seul à la première visite et n'est jamais touché par les déploiements.
  - `tilamed.sqlite` : la base (produits, traductions, catégories, comptes, journal).
  - `uploads/` : photos et documents PDF déposés. `cache/pdf/` : fiches PDF générées (se recrée tout seul).
  - Au tout premier démarrage, la base est remplie avec les 120 références de l'ancien catalogue (`dist/api/data/seed.json`). Ensuite, `src/data/catalog.ts` ne sert plus.
  - **Sauvegarde** : ce dossier est compris dans les sauvegardes Hostinger du compte. Pour une copie à la main : gestionnaire de fichiers → `tilamed-data` → compresser → télécharger.
- **Premier compte administrateur** : ajouter dans `tilamed-forms-config.php` la ligne `'admin_setup_key' => '…',` (au moins 16 caractères ; l'écran `/admin/` en propose une), puis ouvrir `/admin/` et remplir le formulaire d'installation. Il n'est proposé que tant qu'aucun compte n'existe.
- **E-mails du back office** (mot de passe oublié, invitations) : même SMTP que les formulaires. S'il échoue, l'écran affiche le lien à transmettre à la main.
- **Fiches PDF** : bibliothèque mPDF 8.2.5 copiée dans `public/api/lib/mpdf/` (sans Composer), polices de la charte dans `public/api/lib/fonts/` (Montserrat, Carlito, IBM Plex Sans Arabic, Noto Sans SC). Après un changement de polices, augmenter `VERSION` dans `public/api/lib/tilamed/bootstrap.php`.
- **Erreurs** : lignes `[tilamed-admin]`, `[tilamed-catalogue]` ou `[tilamed-fiche]` dans le journal d'erreurs PHP de Hostinger.
- **Tester en local** (PHP 8.1 ou plus, avec SQLite) :
  `npm run build`, puis dans PowerShell `$env:TLM_DATA_DIR = "C:\chemin\tilamed-data-local"` et `php -S 127.0.0.1:8080 -t dist tools/php-router.php`.
  Le routeur `tools/php-router.php` imite les `.htaccess`. Pour la clé d'installation locale, créer `dist/api/config.php` contenant `<?php return ['admin_setup_key' => '…'];`.

## Secours : envoi par FTP

Si le déploiement Git de Hostinger ne marche plus, le workflow `.github/workflows/deploy.yml` construit le site sur GitHub et l'envoie par FTP. Il se lance à la main : GitHub → Actions → « Mise en ligne Hostinger (FTP, secours) » → Run workflow.

Avant de le lancer, il faut configurer une fois dans GitHub → Settings → Secrets and variables → Actions :

- *Secrets* : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Le compte FTP se crée dans hPanel → Fichiers → Comptes FTP.
- *Variables* :
  - `FTP_DIR` : le dossier `public_html/` vu par ce compte FTP ;
  - `FTP_PROTOCOL` : `ftp`, seulement si `ftps` échoue.

## Reste à faire

- Arrêter l'ancien site sur Netlify. Il ne reçoit plus de trafic depuis la bascule DNS.
