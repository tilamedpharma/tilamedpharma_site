# Carte des contenus — TILAMED Pharma (site FR, 57 pages)

Outil de travail pour éviter les redondances. **À relire avant de refaire une page.**
Mise à jour : 19/11/2026. Régénérer le relevé brut : `npm run build` puis
`node tools/content-map.mjs dist src/data/site.ts > content-map-raw.md`.

## Règle

Chaque information a **une page « maison »** qui la développe (chiffres, preuves, détails).
Ailleurs, on la cite **au plus en une phrase ou un chiffre**, avec un lien vers sa maison —
et seulement si elle sert le propos de la page. L'accueil résume (teasers), il ne détaille pas.
Pas de bloc « navigation de rubrique » ni de portail d'aide en bas de page (retirés, ne pas remettre).

**Images (règle du client, 19/11) : une photo ou une vidéo n'apparaît qu'à un seul endroit du site.** Les cartes-renvois ont leur propre visuel (jamais l'en-tête de la page cible) ; les vidéos du procédé ne sont qu'en en-tête de leur page d'étape (page Usine : panneaux numérotés, navigation précédente/suivante en texte). Contrôle : `npm run build` puis `node tools/image-usage.mjs` (doit afficher 0 image utilisée à plusieurs endroits). Nouvelles photos : `tools/stock-uniques.txt` + crédits dans `src/assets/images/stock/CREDITS.md`.

## 1. Faits clés → page maison

| Fait | Maison | Citations admises (bref + lien) | Aujourd'hui sur (pages) |
|---|---|---|---|
| Vision · mission · 4 valeurs · devise | vision-valeurs | accueil (teaser) | accueil, a-propos, vision-valeurs, presse |
| Histoire SEDIS 2013 → TILAMED 2023, capital 1 Md FCFA | a-propos (identité) ; parcours (chronologie) | presse | accueil, a-propos, direction, parcours, centrale-achat, presse |
| DG Casime LASSISSI, organigramme | direction | metiers (1 phrase) | direction, metiers (« L'équipe de direction ») |
| 6 agréments (n°, dates, autorités) | agrements | parcours (dates seules), accueil (teaser), actualites | accueil (liste complète), parcours (avec réf.), agrements, actualites, presse |
| Constat 100 % importé, produit lourd, bénéfices production locale | pourquoi-le-benin | accueil (teaser), centrales-achat (angle client) | accueil, pourquoi-le-benin, chaine-distribution (bloc doublon), centrales-achat |
| Position : frontière Nigeria, port de Cotonou, ZES | site-seme-podji (site) ; pourquoi-le-benin (stratégie) | usine (1 phrase) | usine, site-seme-podji, pourquoi-le-benin, presence, parcours |
| Carte Afrique de l'Ouest, 15 pays, 400 M hab. | presence | accueil : carte animée dans le slider du héros (slide 2) ; section « Où nous opérons » = usine + bureaux + liste des pays, sans carte | ✅ 19/11 presence (carte + liste + 400 M) ; « 15 pays » cité en chiffre sur clients, organisations-sante, distributeurs ; faq |
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
| Clients (SOBAPS, CAMEG, UBIPHARM…) | clients | accueil (teaser), organisations-sante (1 ligne d'exemples + lien) | ✅ 19/11 clients (maison, avec rôle par famille) ; accueil = 5 types sans exemples |
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

**Centrale d'achat** (achats) — notre activité de grossiste-répartiteur, distincte de l'usine. ✅ 19/11 : 3 pages refaites en mises en page dédiées (composants `src/components/achats/`, dictionnaires `src/i18n/pages/centrale|fournisseurs|distribution/`).
- centrale-achat : maison de « distributeur agréé de DM depuis 2013 (SEDIS) », des 5 gammes fournies, des 6 missions, du savoir-faire (équipement d'hôpitaux et labos, appels d'offres) et de la vision de la centrale ; photos réelles de salons (Arab Health, MEDICA) ; publics = 4 renvois vers Marchés. fournisseurs : maison des logos fournisseurs (aussi à l'accueil), 5 critères, parcours en 4 étapes, principes, achats responsables. chaine-distribution : maison du schéma « deux sources (usine + achats) → entrepôt → clients → patients », des étapes et des garanties ; « moins d'un mois » cité depuis l'accueil ; lot / rappel détaillés sur tracabilite (lien).
- ✅ 19/11 : la page Marchés › Centrales d'achat (marches/centrales-achat) est retirée à la demande de l'utilisateur, ce qui supprime la confusion de nom. Redirection 301 vers clients (public/.htaccess) ; la carte « Centrales d'achat » de centrale-achat mène à clients, celle du portail de l'accueil à contact.

**Usine** — usine = vue d'ensemble (procédé, capacité, chiffres) et **portail** vers les pages détaillées. *Gros doublons :* cycle BFS, salles propres, labo, utilités sont recopiés en entier → remplacer par des cartes-teasers vers chaque page. Pages détaillées : traitement-eau, preparation-solutions, soufflage-remplissage-scellage, sterilisation, inspection, laboratoire, conditionnement-logistique (étapes, nav « étape précédente/suivante » à garder), site-seme-podji, salles-propres, utilites, transfert-technologie.

**Produits** — produits (catalogue + recherche), 5 familles, documentation (formulaire). Pas de redondance notable. Depuis le 19/11/2026, les produits viennent de la base du back office (/admin/) : catalogue, familles et fiches produit /produits/{adresse}/ (+ PDF) sont remplis par PHP ; la fiche produit est la « maison » des données techniques d’un produit.

**Qualité** — qualite (système & référentiels, hub), bpf-oms (6 piliers), agrements (maison des autorisations), controle-qualite (du contrôle à la libération), tracabilite, pharmacovigilance (formulaire), certifications (statuts). *Pages très minces* (controle-qualite 94 mots, certifications 88, tracabilite 114) : à étoffer ou fusionner (ex. certifications → dans qualite). ✅ 19/11 : agrements refaite en page dédiée (`src/components/qualite/AgrementsPage.astro`, dict `src/i18n/pages/agrements/`) = maison des 6 agréments (frise chronologique avec n°, date, autorité) ; chapô, rôle de l'ABRP et « ce que nous transmettons » restent dans le dict Qualité. Référentiels (accueil + agrements) : OMS · ISO · EDGE avec logos officiels (`public/media/standards/`), BPF retiré le 19/11 à la demande de l'utilisateur. ✅ 19/11 : « BPF de l'OMS » retiré de tout le site (page bpf-oms supprimée, 301 → qualite ; menu, chiffres, cartes, tableau Certifications, Usine, FAQ, Vision, Distributeurs, Organisations de santé). Mentions génériques des bonnes pratiques de fabrication gardées (pharmacien, ABRP, fournisseurs, formation). « Normes de l'OMS » (accueil, Vision) non touchées.

**Marchés** — ✅ 19/11 : les 5 pages refaites en mises en page dédiées (composants `src/components/marches/`, dictionnaires `src/i18n/pages/clients|hopitaux|organisations|presence|distributeurs/` ; `useMarches` ne garde que le formulaire distributeur). Angle unique par page :
- clients : **maison de la liste des clients** (5 familles + exemples SOBAPS, UBIPHARM, OOAS, GIZ…, chacune renvoie à sa page) et **maison des canaux de vente** (ventes directes, appels d'offres, distributeurs + direction commerciale unique) ; ressources acheteurs (catalogue, documentation, agréments) ; appel à contact.
- hopitaux-cliniques : services de soins, 4 gammes de médecine humaine avec exemples du profil 2026 (→ pages familles, mention « gamme en préparation, sous réserve d'autorisation »), le flacon plastique (→ étapes BFS et inspection, 1 phrase chacune), sécurité des patients (→ pharmacovigilance, documentation, traçabilité), comment s'approvisionner.
- organisations-sante : procédures et références (1 ligne + lien clients), 4 apports (production régionale, dossiers qualité, appels d'offres, stockage-distribution → centrale-achat), dossier d'appel d'offres (5 pièces, lien agrements), objectifs partagés (→ transfert, egalite, environnement, 1 ligne chacun). Plus de mention « BPF de l'OMS ».
- presence : **maison de la carte, des 15 pays et du chiffre 400 M** ; implantations (usine + 3 bureaux avec rôles, adresses → bureaux) ; pourquoi toute la sous-région (3 défis communs) ; direct / distributeurs + appel distributeurs.
- distributeurs : 400 M remplacé par « 2 sources », liste des 15 pays retirée du bandeau (lien presence), chapô ajouté au formulaire.

**Carrières** — carrieres (pourquoi nous rejoindre, maison 150/70 %), metiers (6 familles ; *retirer* « L'équipe de direction » = direction), candidature (formulaire).

**Médias** — actualites (maison des annonces datées), mediatheque (photos), presse (kit : fiche « en bref » — seule page autorisée à résumer tous les chiffres clés).

**Contact** — contact (formulaire), bureaux (adresses), faq (réponses courtes + liens vers les maisons).

## 3. Chantiers de dé-duplication repérés (par priorité)

1. ~~**Usine**~~ ✅ 18/11 : blocs BFS, salles propres, labo, utilités, transfert, emplacement retirés → section « Autour de la production » (4 renvois : salles-propres, utilites, transfert-technologie, site-seme-podji ; texte = chapô de la page cible). Usine garde : chiffres (maison capacité), site intégré, 7 étapes, renvoi Environnement.
   Pied de page ✅ 18/11 : newsletter et bande « usine + 3 bureaux » retirées (adresses = page bureaux).
2. ~~**Accueil**~~ ✅ 18/11 (1667 → 1294 mots, 11 → 10 sections) : listes des 6 leviers verts et 4 engagements inclusion retirées (restent titre + texte + preuves + lien) ; agréments = intitulés seuls (n° et autorités → agrements) + liens Agréments / Qualité ; frise « parcours » retirée (doublon avec actualités, maison = parcours) ; présence sans adresses des bureaux (+ lien presence) ; clients = 5 types sans exemples (+ lien clients). Gardé : héros, impact en chiffres, qui sommes-nous (teaser vision/mission/valeurs), pourquoi le Bénin, procédé, produits, référentiels, fournisseurs + « ils nous font confiance », 3 actualités.
   Accueil, 2e passe ✅ 18/11 (demandes client) : bandeau « Notre impact » à 6 chiffres (capacité LVP + SVP en carte blanche, 150 emplois = 70 % techniques / 30 % administratifs) ; nouvelle section animée « Chaîne de distribution » (usine → centrales/distributeurs → patients, « moins d'un mois ») juste après « Pourquoi le Bénin » ; sections « Qui sommes-nous » et « Notre usine » (7 étapes vidéo) retirées → maisons : a-propos / vision-valeurs et usine. Ordre : héros, impact, pourquoi le Bénin, chaîne de distribution, référentiels, clients, partenaires (fournisseurs + logos « Ils nous font déjà confiance »). Retirées de l'accueil : actualités (maison = actualites), produits (maison = produits / catalogue), « Où nous opérons » (maison = presence, bureaux).
3. ~~**chaine-distribution**~~ ✅ 18/11 : bloc « Ce que change la production locale » retiré, intro réduite au circuit (le constat « tout est importé » reste sur pourquoi-le-benin). Page = séquence usine → entrepôt → centrales/distributeurs → établissements → patients.
4. ~~**a-propos**~~ ✅ 18/11 : bloc vision/mission/valeurs retiré (lien « Vision, mission et valeurs » à côté de « Notre parcours ») ; logos fournisseurs retirés (restent à l'accueil) ; chiffre « 150 emplois » → « 4 métiers ».
5. ~~**150 emplois / 70 % / 5 ans**~~ ✅ 18/11 (`tools/jobs-dedup.mjs`) : restent sur accueil (bloc impact, 1 fois), carrieres, rse (chiffres + bloc transfert), transfert-technologie, presse. Retirés de : menu « Carrières » (toutes les pages), accueil (pourquoi le Bénin, portail du pied de page), direction, vision-valeurs, pourquoi-le-benin, parcours (fait → « 2023 SEDIS devient TILAMED » ; étape « mise en service » sans chiffre), egalite, candidature, et doublons internes de rse. Texte gardé : « emplois qualifiés », « postes techniques et administratifs ».
6. ~~**Carte**~~ ✅ 18/11 : pourquoi-le-benin n'a plus la carte Afrique de l'Ouest → schéma du corridor côtier Abidjan – Lagos (Abidjan, Accra, Lomé, Cotonou · port, Sèmè-Podji · usine, frontière, Lagos ; bande « Océan Atlantique »), horizontal ou vertical selon la largeur (container query). Cartes restantes : presence (carte détaillée, maison), accueil (slider), mini-carte du site (accueil, site-seme-podji, bureaux).
7. **metiers** : retirer « L'équipe de direction ».
8. **Qualité** : statut des certifications uniquement sur certifications ; étoffer/fusionner les pages minces.

### Audit du 24/11/2026 (décisions QCM)
- Usine = **en travaux** : tout ce qui affirme une production actuelle passe au futur / « prévu » (accueil réseau, chaîne, capacité « prévue », 150 emplois « prévus » ; usine, salles propres, site, traitement de l'eau, contrôle à 100 % ; centrale d'achat ; présence ; vision ; presse ; carrières). Le texte « procédé » des étapes reste descriptif.
- Délais : « quelques heures » = au BÉNIN ; « moins d'un mois » = sous-région.
- Site de Sèmè-Podji = **zone industrielle** (plus « zone économique spéciale ») ; Cotonou = **siège social** (plus « filiale Afrique de l'Ouest »).
- Référentiels harmonisés partout : OMS · ISO · EDGE (page Qualité alignée ; ABRP et BPD dans la liste « système qualité »).
- Santé animale = produits **distribués** par la centrale d'achat (plus « gamme vétérinaire TILAMED »).
- Dispositifs médicaux : « fabricants internationaux reconnus » (AEONMED n'est pas européen).
- Pourquoi le BÉNIN : « 0 fabricant local de solutions **injectables** ».
- À propos : le bloc des 9 pays (BJ, BF, CI, ML, NE, NG, IN, FR, IT) est remplacé par « Les 15 pays de la CEDEAO » (liste `coverage` de src/data/site.ts, triée par nom) ; Ouagadougou = Dassasgho + BP.
- Laissés en l'état à la demande de l'utilisateur : logos « Ils nous font déjà confiance » et noms de clients (page Clients), mentions OMS, vaccins/sérums phase 3, formats 250/1000 ml, autorité du certificat environnemental, vidéo d'accueil (poches).
- 24/11 (suite) : rubrique « Qualité » renommée « Normes » (menu, pied de page, fil d'Ariane, titres des pages ; la page d'entrée garde « Qualité et conformité ») ; Usine : chiffre « C + A classes de propreté » retiré (4 chiffres) ; numéros et points des listes tous en bleu (plus de « dernier élément en vert » décoratif) ; Centrale d'achat : cartes des gammes entièrement cliquables.
- 24/11 : gamme « Santé animale » renommée « Produits vétérinaires » (7 langues, menu, catalogue, filtres, Centrale d'achat, À propos ; adresse /sante-animale/ conservée) ; produits fabriqués TILAMED = pastille « Non encore disponible ».
- 24/11 : page Usine étoffée (6 sections, 7 langues, dict `src/i18n/pages/usine/`). Ordre : chiffres, site intégré, **deux lignes LVP/SVP** (contenant, volumes, capacité, usages), 7 étapes, **schéma animé des flux** (matières, produits, personnel, déchets ; zones générale / classe C / classe A ; boutons pour isoler un flux), autour de la production, **ce qui sortira de nos lignes** (3 gammes fabriquées → pages gammes, mention « Non encore disponible »), **métiers** (150 emplois, 70/30, six familles = sommaire de la page metiers, qui reste la maison), usine verte, **FAQ de l'usine** (6 questions propres à l'usine, différentes de la page faq ; JSON-LD FAQPage), **bandeau « Visiter / s'associer »** → /contact/?objet=visite (nouvel objet « Visite du site ou partenariat », présélectionné). Textes rédigés par Claude, à valider : volumes SVP 1–20 mL et « ampoules unidoses » (tirés du catalogue), étapes des flux, visites sur rendez-vous.

### Audit du 25/11/2026 (corrections 1a, 1b, 1c)
- **CEDEAO = 12 pays depuis le 29/01/2025** (BURKINA FASO, MALI, NIGER sortis → AES). Ne plus écrire « 15 pays de la CEDEAO » ni « espace CEDEAO » : on écrit « 15 pays d'Afrique de l'Ouest » (À propos : « 15 pays d'Afrique de l'Ouest · CEDEAO et AES »). Le logo CEDEAO du bloc confiance reste (décision du 24/11).
- Fiches produits (PHP , ) et pages des gammes Dispositifs médicaux / Produits vétérinaires : la mention « Produits fabriqués par TILAMED : en préparation, pas encore en vente » ne s'affiche plus que pour les produits fabriqués (kind iv / liquids). Intro de la fiche technique : « Les principales caractéristiques de ce produit ».
- Usine décrite au futur partout où le site affirmait une activité réelle : accueil (titre « bientôt fabriquée », À propos activités), Hôpitaux, Distributeurs, Distribution (« < 1 mois » = visé), Vision, Traçabilité (rappel « prévue »), Contrôle qualité (échantillons « seront conservés »), Carrières (« Participez à la création de la première usine… »), Direction. Les descriptions du procédé (pages étapes, étapes de la page Usine) restent au présent : elles expliquent comment fonctionne le procédé.
