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

## Secours : envoi par FTP

Si le déploiement Git de Hostinger ne marche plus, le workflow `.github/workflows/deploy.yml` construit le site sur GitHub et l'envoie par FTP. Il se lance à la main : GitHub → Actions → « Mise en ligne Hostinger (FTP, secours) » → Run workflow.

Avant de le lancer, il faut configurer une fois dans GitHub → Settings → Secrets and variables → Actions :

- *Secrets* : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Le compte FTP se crée dans hPanel → Fichiers → Comptes FTP.
- *Variables* :
  - `FTP_DIR` : le dossier `public_html/` vu par ce compte FTP ;
  - `FTP_PROTOCOL` : `ftp`, seulement si `ftps` échoue.

## Reste à faire

- Arrêter l'ancien site sur Netlify. Il ne reçoit plus de trafic depuis la bascule DNS.
