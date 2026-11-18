# Mise en ligne · Hostinger via GitHub

Le site est construit par GitHub puis envoyé par FTP sur Hostinger, automatiquement à chaque envoi sur la branche `main`
(fichier `.github/workflows/deploy.yml`). Les e-mails du domaine restent chez OVH.

## Une seule fois

1. **GitHub** : créer un dépôt **privé et vide** (sans README), puis y envoyer le projet.
2. **Hostinger (hPanel)** : ajouter le site `tilamedpharma.com` à l'offre (domaine existant, ne pas changer les DNS).
   Hostinger fournit une **adresse provisoire** pour tester.
3. **Hostinger → Fichiers → Comptes FTP** : créer un compte FTP dédié au déploiement. Noter le serveur, l'identifiant, le mot de passe
   et le dossier racine du compte.
4. **GitHub → Settings → Secrets and variables → Actions**
   - *Secrets* : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
   - *Variables* : `FTP_DIR` = chemin de `public_html/` vu par ce compte FTP (souvent `public_html/`, ou `/` si le compte s'ouvre déjà dedans) ;
     `FTP_PROTOCOL` = `ftp` seulement si l'envoi chiffré (`ftps`, par défaut) échoue.
5. **Formulaires** : dans le gestionnaire de fichiers Hostinger, dans le dossier qui **contient** `public_html`
   (ex. `domains/tilamedpharma.com/`), créer `tilamed-forms-config.php` à partir de `public/api/tilamed-forms-config.example.php`
   et y mettre le mot de passe de la boîte `contact@tilamedpharma.com`. Ce fichier ne va jamais dans GitHub.
6. **GitHub → Actions → « Mise en ligne Hostinger » → Run workflow**, puis tester l'adresse provisoire
   (pages, langues, les 5 formulaires : chaque envoi doit arriver dans contact@).

## Bascule du domaine (après validation)

7. **OVH → Domaines → tilamedpharma.com → Zone DNS** : remplacer la cible des enregistrements **A** de `tilamedpharma.com` et de
   `www` (aujourd'hui `75.2.60.5`, Netlify) par l'adresse IP indiquée par Hostinger. Supprimer un éventuel CNAME `www`.
   **Ne pas toucher** aux enregistrements MX, SPF (TXT) et aux serveurs DNS : les e-mails restent chez OVH.
8. **Hostinger → Sécurité → SSL** : activer le certificat gratuit dès que les DNS pointent sur Hostinger (quelques heures).
9. Vérifier `https://www.tilamedpharma.com`, puis arrêter l'ancien site sur Netlify.

## Au quotidien

Modifier le site → envoyer sur `main` → GitHub reconstruit et envoie seulement les fichiers modifiés (2 à 5 min).
