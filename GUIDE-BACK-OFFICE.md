# Back office TILAMED Pharma · guide d'utilisation

Adresse : **https://www.tilamedpharma.com/admin/**

Le back office sert à gérer le catalogue du site : produits, fiches techniques, photos, documents PDF et traductions. Tout ce qui est enregistré apparaît **immédiatement** sur le site, dans les 7 langues.

## Se connecter

- Saisissez votre adresse e-mail et votre mot de passe.
- Après 5 essais erronés, la connexion est bloquée 15 minutes.
- Sans activité pendant 2 heures, vous êtes déconnecté.
- Mot de passe oublié : cliquez sur le lien de l'écran de connexion. Un e-mail vous propose d'en choisir un nouveau (lien valable 1 heure).

## Les comptes et les rôles

| Rôle | Ce qu'il peut faire |
|---|---|
| **Administrateur** | Tout : produits, catégories, comptes, suppression définitive |
| **Éditeur** | Produits : ajouter, modifier, mettre en ligne, masquer, archiver, dupliquer, joindre des documents |

Pour ajouter une personne : menu **Utilisateurs** → **Ajouter un compte**. Si vous ne saisissez pas de mot de passe, elle reçoit un e-mail pour choisir le sien (lien valable 3 jours).

## L'état d'un produit

| État | Sur le site | Dans le back office |
|---|---|---|
| **En ligne** | Visible : catalogue, page de gamme, fiche, PDF | Liste « Actifs » |
| **Masqué** | Invisible (on peut le prévisualiser une fois connecté) | Liste « Actifs » |
| **Archivé** | Invisible | Liste « Archives », restaurable à tout moment |

La **suppression définitive** efface le produit, sa photo et ses documents. Elle est réservée aux administrateurs. Pour retirer un produit sans le perdre, préférez **Archiver**.

## Ajouter ou modifier un produit

Menu **Produits** → **Ajouter un produit**, ou cliquez sur le nom d'un produit.

1. **Textes et fiche technique** : un onglet par langue.
   - Le nom en français est obligatoire.
   - Une langue laissée vide s'affiche en anglais, sinon en français.
   - La pastille de l'onglet indique l'état de la langue : grise = vide, orange = commencée, verte = remplie.
   - Rubriques de la fiche : composition, forme et présentation, indications, posologie, contre-indications, mises en garde, conservation, durée de conservation, caractéristiques techniques, statut réglementaire. Une rubrique vide n'apparaît nulle part.
   - Pour une liste, commencez chaque ligne par « - ».
2. **Classement et caractéristiques** : gamme, catégorie, statut commercial (la pastille de la carte), présentations (une par ligne), voie, ligne de production, conditionnement, phase, mots-clés de recherche.
3. **Photo** (facultative) : JPEG, PNG ou WebP, 8 Mo au maximum. Elle est réduite automatiquement et remplace l'illustration provisoire de la catégorie (cartes du catalogue, page du produit, fiche PDF). Rappel : une photo n'est utilisée qu'à un seul endroit du site.
4. **Publication** (colonne de droite) : choisissez l'état, puis cliquez sur **Enregistrer**.
   - L'adresse de la page se crée à partir du nom. La changer pour un produit déjà en ligne rend l'ancienne adresse introuvable.
5. **Documents à télécharger** (après le premier enregistrement) : ajoutez des PDF officiels (notice, RCP, certificat…), 15 Mo au maximum chacun. Ils sont proposés sur la fiche du produit.

## La fiche technique PDF

Elle est **générée automatiquement** à partir des rubriques saisies, aux couleurs de TILAMED, dans la langue du visiteur. Elle est mise à jour dès que le produit est modifié. Le bouton **Fiche PDF** de l'écran d'un produit permet de la vérifier.

## Agir sur plusieurs produits

Dans la liste, cochez des produits, choisissez une **action groupée** (mettre en ligne, masquer, archiver), puis cliquez sur **Appliquer**.

## Catégories (administrateurs)

Menu **Catégories** : créer une catégorie, traduire son nom dans les 7 langues, changer son ordre ou sa gamme. Une catégorie ne peut être supprimée que si elle ne contient aucun produit.

## Journal

Le menu **Journal** liste toutes les actions (création, modification, mise en ligne, suppression, connexion…), avec leur auteur et leur heure (heure du Bénin).
