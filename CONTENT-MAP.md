# Carte des contenus — TILAMED Pharma (site FR, 57 pages)

Outil de travail pour éviter les redondances. **À relire avant de refaire une page.**
Mise à jour : 18/11/2026. Régénérer le relevé brut : `npm run build` puis
`node tools/content-map.mjs dist src/data/site.ts > content-map-raw.md`.

## Règle

Chaque information a **une page « maison »** qui la développe (chiffres, preuves, détails).
Ailleurs, on la cite **au plus en une phrase ou un chiffre**, avec un lien vers sa maison —
et seulement si elle sert le propos de la page. L'accueil résume (teasers), il ne détaille pas.
Pas de bloc « navigation de rubrique » ni de portail d'aide en bas de page (retirés, ne pas remettre).

## 1. Faits clés → page maison

| Fait | Maison | Citations admises (bref + lien) | Aujourd'hui sur (pages) |
|---|---|---|---|
| Vision · mission · 4 valeurs · devise | vision-valeurs | accueil (teaser) | accueil, a-propos, vision-valeurs, presse |
| Histoire SEDIS 2013 → TILAMED 2023, capital 1 Md FCFA | a-propos (identité) ; parcours (chronologie) | presse | accueil, a-propos, direction, parcours, centrale-achat, presse |
| DG Casime LASSISSI, organigramme | direction | metiers (1 phrase) | direction, metiers (« L'équipe de direction ») |
| 6 agréments (n°, dates, autorités) | agrements | parcours (dates seules), accueil (teaser), actualites | accueil (liste complète), parcours (avec réf.), agrements, actualites, presse |
| Constat 100 % importé, produit lourd, bénéfices production locale | pourquoi-le-benin | accueil (teaser), centrales-achat (angle client) | accueil, pourquoi-le-benin, chaine-distribution (bloc doublon), centrales-achat |
| Position : frontière Nigeria, port de Cotonou, ZES | site-seme-podji (site) ; pourquoi-le-benin (stratégie) | usine (1 phrase) | usine, site-seme-podji, pourquoi-le-benin, presence, parcours |
| Carte Afrique de l'Ouest, 15 pays, 400 M hab. | presence | accueil : carte animée dans le slider du héros (slide 2) ; section « Où nous opérons » = usine + bureaux + liste des pays, sans carte | accueil (carte), pourquoi-le-benin (carte), presence (carte), clients, orgs, faq |
| 150 emplois, 70 % techniques | carrieres | accueil, rse, presse | ✅ accueil, carrieres, rse, transfert-technologie, presse |
| Transfert de compétences 5 ans | transfert-technologie | rse, carrieres | accueil, vision, rse, usine, transfert, carrieres, candidature |
| Égalité / handicap, « 1re usine » | egalite | accueil, rse, carrieres (1 phrase) | accueil, a-propos, vision, rse, egalite, carrieres |
| EDGE, ISO 14001, leviers verts, solaire | environnement | certifications (statut), accueil (teaser) | accueil, vision, rse, environnement, usine, certifications, presse, faq |
| Statut des certifications (OMS/BPF/ISO/EDGE) | certifications | qualite, environnement (lien) | qualite, certifications, environnement (« Où en sommes-nous ? » doublon) |
| Procédé en 7 étapes | usine (vue d'ensemble) + 7 pages d'étapes | accueil (teaser) | accueil, usine, étapes |
| Soufflage-remplissage-scellage (cycle en 5 temps) | soufflage-remplissage-scellage | usine (1 phrase), serums, environnement | usine (cycle complet = doublon), page étape |
| Salles propres (HEPA, cascade…) | salles-propres | usine (1 phrase) | usine (bloc complet = doublon), salles-propres |
| Laboratoire (HPLC, spectro, stabilité, micro) | laboratoire | usine, controle-qualite | usine (bloc complet = doublon), laboratoire |
| Utilités (air, vapeur, eau glacée…) | utilites | usine (1 phrase) | usine (bloc complet = doublon), utilites |
| Capacité 15 M LVP + 35 M SVP | usine | accueil, presse | accueil, usine, presse |
| Pharmacien responsable, libération des lots | controle-qualite | direction, laboratoire | 9 pages |
| Clients (SOBAPS, CAMEG, UBIPHARM…) | clients | accueil (teaser) | accueil (liste complète), clients (même liste) |
| Fournisseurs / équipementiers (logos, marquage CE) | fournisseurs | a-propos (logos) ou accueil — pas les deux | accueil, a-propos, fournisseurs, usine |
| Catalogue produits | produits + 5 familles | accueil (5 gammes) | ok |

## 2. Rôle unique de chaque page

**Accueil** — vitrine : 1 teaser par rubrique, chacun renvoie à sa maison. À alléger : liste complète des 6 agréments → 3 repères + lien ; liste clients complète → logos/types + lien.

**À propos**
- a-propos : carte d'identité (qui, depuis quand, 4 métiers, objectifs, partenaires). *Doublon :* bloc vision/mission/valeurs complet → remplacer par un renvoi court.
- vision-valeurs : vision, mission, valeurs, devise. *À alléger :* bloc « engagements » (égalité/local/vert) répète rse.
- direction : DG + organigramme. *À retirer :* CTA carrières avec 150/70 % (déjà sur carrieres).
- parcours : chronologie. *À alléger :* références complètes des agréments (laisser date + titre, lien vers agrements) ; facts 150 emplois.
- pourquoi-le-benin : constat + bénéfices + stratégie (schéma du corridor Abidjan – Lagos, pas de carte ; lien vers presence).
- rse : hub d'impact (renvoie vers egalite / environnement / transfert). Reste synthétique.
- egalite : égalité & handicap (maison).
- environnement : EDGE, leviers, ISO 14001 (maison). *Doublon :* statut certifications → garder bref, lien certifications.

**Centrale d'achat** (achats) — notre activité de grossiste-répartiteur, distincte de l'usine.
- centrale-achat : présentation, missions. fournisseurs : critères & principes d'achat. chaine-distribution : flux usine → patient. *Doublon :* « Ce que change la production locale » (= pourquoi-le-benin) → retirer.
- ⚠ Confusion de nom avec marches/centrales-achat (clients). Garder des titres explicites : « Notre centrale d'achat » vs « Pour les centrales d'achat ».

**Usine** — usine = vue d'ensemble (procédé, capacité, chiffres) et **portail** vers les pages détaillées. *Gros doublons :* cycle BFS, salles propres, labo, utilités sont recopiés en entier → remplacer par des cartes-teasers vers chaque page. Pages détaillées : traitement-eau, preparation-solutions, soufflage-remplissage-scellage, sterilisation, inspection, laboratoire, conditionnement-logistique (étapes, nav « étape précédente/suivante » à garder), site-seme-podji, salles-propres, utilites, transfert-technologie.

**Produits** — produits (catalogue + recherche), 5 familles, documentation (formulaire). Pas de redondance notable.

**Qualité** — qualite (système & référentiels, hub), bpf-oms (6 piliers), agrements (maison des autorisations), controle-qualite (du contrôle à la libération), tracabilite, pharmacovigilance (formulaire), certifications (statuts). *Pages très minces* (controle-qualite 94 mots, certifications 88, tracabilite 114) : à étoffer ou fusionner (ex. certifications → dans qualite).

**Marchés** — clients (qui : 5 types de clients), centrales-achat / hopitaux-cliniques / organisations-sante (proposition de valeur par public, ~90 mots chacune, à étoffer chacune avec un angle propre), distributeurs (formulaire), presence (carte, maison des 15 pays).

**Carrières** — carrieres (pourquoi nous rejoindre, maison 150/70 %), metiers (6 familles ; *retirer* « L'équipe de direction » = direction), candidature (formulaire).

**Médias** — actualites (maison des annonces datées), mediatheque (photos), presse (kit : fiche « en bref » — seule page autorisée à résumer tous les chiffres clés).

**Contact** — contact (formulaire), bureaux (adresses), faq (réponses courtes + liens vers les maisons).

## 3. Chantiers de dé-duplication repérés (par priorité)

1. ~~**Usine**~~ ✅ 18/11 : blocs BFS, salles propres, labo, utilités, transfert, emplacement retirés → section « Autour de la production » (4 renvois : salles-propres, utilites, transfert-technologie, site-seme-podji ; texte = chapô de la page cible). Usine garde : chiffres (maison capacité), site intégré, 7 étapes, renvoi Environnement.
   Pied de page ✅ 18/11 : newsletter et bande « usine + 3 bureaux » retirées (adresses = page bureaux).
2. ~~**Accueil**~~ ✅ 18/11 (1667 → 1294 mots, 11 → 10 sections) : listes des 6 leviers verts et 4 engagements inclusion retirées (restent titre + texte + preuves + lien) ; agréments = intitulés seuls (n° et autorités → agrements) + liens Agréments / Qualité ; frise « parcours » retirée (doublon avec actualités, maison = parcours) ; présence sans adresses des bureaux (+ lien presence) ; clients = 5 types sans exemples (+ lien clients). Gardé : héros, impact en chiffres, qui sommes-nous (teaser vision/mission/valeurs), pourquoi le Bénin, procédé, produits, référentiels, fournisseurs + « ils nous font confiance », 3 actualités.
3. ~~**chaine-distribution**~~ ✅ 18/11 : bloc « Ce que change la production locale » retiré, intro réduite au circuit (le constat « tout est importé » reste sur pourquoi-le-benin). Page = séquence usine → entrepôt → centrales/distributeurs → établissements → patients.
4. ~~**a-propos**~~ ✅ 18/11 : bloc vision/mission/valeurs retiré (lien « Vision, mission et valeurs » à côté de « Notre parcours ») ; logos fournisseurs retirés (restent à l'accueil) ; chiffre « 150 emplois » → « 4 métiers ».
5. ~~**150 emplois / 70 % / 5 ans**~~ ✅ 18/11 (`tools/jobs-dedup.mjs`) : restent sur accueil (bloc impact, 1 fois), carrieres, rse (chiffres + bloc transfert), transfert-technologie, presse. Retirés de : menu « Carrières » (toutes les pages), accueil (pourquoi le Bénin, portail du pied de page), direction, vision-valeurs, pourquoi-le-benin, parcours (fait → « 2023 SEDIS devient TILAMED » ; étape « mise en service » sans chiffre), egalite, candidature, et doublons internes de rse. Texte gardé : « emplois qualifiés », « postes techniques et administratifs ».
6. ~~**Carte**~~ ✅ 18/11 : pourquoi-le-benin n'a plus la carte Afrique de l'Ouest → schéma du corridor côtier Abidjan – Lagos (Abidjan, Accra, Lomé, Cotonou · port, Sèmè-Podji · usine, frontière, Lagos ; bande « Océan Atlantique »), horizontal ou vertical selon la largeur (container query). Cartes restantes : presence (carte détaillée, maison), accueil (slider), mini-carte du site (accueil, site-seme-podji, bureaux).
7. **metiers** : retirer « L'équipe de direction ».
8. **Qualité** : statut des certifications uniquement sur certifications ; étoffer/fusionner les pages minces.
