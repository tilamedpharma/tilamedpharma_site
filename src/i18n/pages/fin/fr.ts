// Rubriques Médias, Contact et pages légales · français (référence).
// Sources : pages actualites, mediatheque, presse, contact, bureaux, faq, mentions-legales, confidentialite, cookies de l'ancien site,
// données de l'accueil (actualités, agréments) et data/site.ts (coordonnées, RCCM, IFU).
const fin = {
  news: {
    meta: { title: 'Actualités · TILAMED Pharma', description: 'Les dernières nouvelles de TILAMED Pharma : site de Sèmè-Podji, agréments, autorisations de l\'usine.' },
    lead: 'Les dernières nouvelles de TILAMED Pharma.',
    // Corps des 3 actualités de l'accueil (même ordre que t.news.items), puis une 4e actualité.
    bodies: [
      [
        'L\'État béninois confie à TILAMED PHARMA SA, par bail emphytéotique, un site industriel de 2 hectares à Sèmè-Podji, juste après la frontière de Kraké avec le NIGÉRIA.',
        'Situé dans une zone économique spéciale, à proximité de Cotonou et de son port autonome, ce site accueillera l\'usine de solutions injectables de TILAMED Pharma.',
      ],
      [
        'Le 28 novembre 2024, l\'arrêté ministériel accordé par le Gouvernement de la RÉPUBLIQUE DU BÉNIN vient compléter les agréments obtenus au cours de l\'année.',
        'En 2024, TILAMED PHARMA SA a également obtenu l\'autorisation industrielle (9 septembre), le certificat de conformité environnementale et sociale (7 août) et le certificat d\'acceptabilité technique de l\'APIEX (28 octobre).',
      ],
      [
        'Le 30 juin 2023, l\'Agence béninoise de régulation pharmaceutique et le ministère de la Santé délivrent l\'autorisation d\'installation et d\'exploitation de l\'usine (n° 1138 ABRP/DHE/DAE/SA).',
        'Cette autorisation permet à TILAMED PHARMA SA de poursuivre la préparation de son unité de production à Sèmè-Podji.',
      ],
    ],
    extra: [
      {
        date: '2023-05-16', tag: 'Réglementation',
        title: 'Avis favorable de l\'ABRP pour l\'usine TILAMED Pharma',
        body: [
          'Réunie en commission le 16 mai 2023, l\'Agence béninoise de régulation pharmaceutique (ABRP) a rendu un avis favorable à l\'autorisation d\'ouverture et d\'exploitation d\'une usine pharmaceutique par TILAMED Pharma.',
          'Cette étape réglementaire importante permet à TILAMED Pharma de poursuivre la préparation de son unité de production de solutions injectables à Sèmè-Podji.',
        ],
      },
    ],
    pressCta: 'Journalistes : espace presse',
  },
  media: {
    meta: { title: 'Médiathèque · TILAMED Pharma', description: 'Photos de TILAMED Pharma : visites d\'usine, équipes, salons internationaux, et images d\'illustration du procédé.' },
    lead: 'Photos et vidéos de TILAMED Pharma.',
    photosTitle: 'Nos photos',
    photosIntro: 'Visites, équipes et salons internationaux. D\'autres photos et vidéos de notre site seront publiées ici.',
    captions: [
      'Poches de solutés de perfusion',
      'Pharmacien et poche de perfusion',
      'Équipe en salle propre',
      'Équipe au conditionnement',
      'Visite d\'une usine de solutés',
      'Échanges lors d\'une visite d\'usine',
      'Rencontre sur un salon de l\'emballage pharmaceutique',
      'Salons internationaux',
      'Arab Health, Dubaï',
      'Salon MEDICA 2021',
    ],
    videosTitle: 'Le procédé en vidéo',
    videosIntro: 'Images d\'illustration des sept étapes de fabrication.',
    close: 'Fermer',
    prev: 'Photo précédente',
    next: 'Photo suivante',
  },
  press: {
    meta: { title: 'Espace presse · TILAMED Pharma', description: 'Journalistes : informations clés sur TILAMED Pharma et contact presse.' },
    lead: 'Journalistes : informations clés et contact presse.',
    briefTitle: 'TILAMED Pharma en bref',
    brief: [
      'Société anonyme au capital de 1 000 000 000 FCFA, filiale Afrique de l\'Ouest basée à Cotonou (BÉNIN).',
      'Unité de production de solutions pharmaceutiques liquides aux normes de l\'OMS à Sèmè-Podji.',
      'Capacité prévue : 15 millions de solutés de grand volume et 35 millions d\'injectables de petit volume par an.',
      '150 emplois directs, dont 70 % de postes techniques.',
      'Certification green building EDGE en cours d\'obtention.',
      'Devise : « Plus près, plus sûr pour votre santé ».',
    ],
    contactTitle: 'Contact presse',
    contactText: 'Écrivez-nous en précisant votre média et l\'objet de votre demande.',
    note: 'Le logo officiel et les visuels haute définition sont disponibles sur demande.',
    newsCta: 'Toutes les actualités',
  },
  contact: {
    meta: { title: 'Nous contacter · TILAMED Pharma', description: 'Une question, un projet, un appel d\'offres ? Écrivez à l\'équipe TILAMED Pharma ou appelez nos bureaux au BÉNIN, au BURKINA FASO et en FRANCE.' },
    lead: 'Une question, un projet, un appel d\'offres ? Notre équipe vous répond.',
    formTitle: 'Écrivez-nous',
    intro: 'Choisissez l\'objet de votre message : nous le transmettons directement au bon interlocuteur.',
    fields: {
      subject: 'Objet', name: 'Nom et prénom', org: 'Organisation', email: 'Adresse e-mail', phone: 'Téléphone', country: 'Pays',
      message: 'Votre message', consent: 'J\'accepte que TILAMED Pharma utilise ces informations pour répondre à ma demande.',
      submit: 'Envoyer le message', required: 'Champ obligatoire', select: 'Choisir…',
    },
    subjects: ['Commande ou appel d\'offres', 'Devenir distributeur', 'Documentation produit', 'Presse', 'Candidature', 'Fournisseur', 'Autre'],
    directTitle: 'Nous joindre directement',
    whatsapp: 'Écrire sur WhatsApp',
    officesTitle: 'Nos bureaux',
  },
  offices: {
    meta: { title: 'Nos bureaux · TILAMED Pharma', description: 'Trois bureaux pour vous servir, au BÉNIN, au BURKINA FASO et en FRANCE, et l\'accès à l\'usine de Sèmè-Podji.' },
    lead: 'Trois bureaux pour vous servir, au BÉNIN, au BURKINA FASO et en FRANCE.',
    title: 'Trois bureaux, une usine',
    call: 'Appeler',
    plantTitle: 'L\'usine de Sèmè-Podji',
    plantText: 'Juste après la frontière de Kraké en venant du NIGÉRIA, à quelques kilomètres de Cotonou.',
  },
  faq: {
    meta: { title: 'Questions fréquentes · TILAMED Pharma', description: 'Disponibilité des produits, usine, normes, livraisons, distribution, recrutement, pharmacovigilance : les réponses à vos questions.' },
    lead: 'Les réponses aux questions que l\'on nous pose le plus souvent.',
    title: 'Vos questions, nos réponses',
    items: [
      { q: 'Vos produits sont-ils déjà disponibles ?', a: 'Pas encore. Notre gamme est en préparation. Vous pouvez demander à être informé dès sa disponibilité depuis la page Demande de documentation.', link: 'documentation' },
      { q: 'Où se trouve votre usine ?', a: 'À Sèmè-Podji, dans le sud du BÉNIN, juste après la frontière de Kraké en venant du NIGÉRIA, sur un site de 2 hectares.', link: 'site-seme-podji' },
      { q: 'Quels produits fabriquerez-vous ?', a: 'Des solutés de perfusion (chlorure de sodium, glucose, Ringer lactate…), des solutions médicamenteuses (paracétamol, métronidazole, lévofloxacine, ciprofloxacine) et des injectables en ampoules, puis d\'autres gammes au fil des autorisations.', link: 'produits' },
      { q: 'Vos produits respectent-ils les normes internationales ?', a: 'Nous visons les certifications ISO 9001 et ISO 14001, et la certification green building EDGE est en cours d\'obtention.', link: 'certifications' },
      { q: 'Livrez-vous hors du BÉNIN ?', a: 'Oui. Nous couvrons 15 pays d\'Afrique de l\'Ouest. Le marché béninois reste prioritaire.', link: 'presence' },
      { q: 'Comment devenir distributeur ?', a: 'Remplissez le formulaire de la page Devenir distributeur. Notre direction commerciale vous recontactera.', link: 'distributeurs' },
      { q: 'Recrutez-vous ?', a: 'Aucune offre n\'est publiée pour le moment, mais vous pouvez déposer une candidature spontanée.', link: 'candidature' },
      { q: 'Comment signaler un effet indésirable ?', a: 'Utilisez le formulaire de la page Pharmacovigilance. En cas d\'urgence, contactez immédiatement un médecin.', link: 'pharmacovigilance' },
    ],
    more: 'En savoir plus',
    still: 'Vous n\'avez pas trouvé votre réponse ?',
  },
  legal: {
    mentions: {
      meta: { title: 'Mentions légales · TILAMED Pharma', description: 'Éditeur, hébergement, propriété intellectuelle et information médicale du site TILAMED Pharma.' },
      lead: 'Informations sur l\'éditeur et l\'hébergement du site.',
      rows: {
        editor: 'Éditeur', capital: 'TILAMED PHARMA SA, société anonyme au capital de 1 000 000 000 FCFA',
        hq: 'Siège Afrique de l\'Ouest', rccm: 'RCCM', ifu: 'IFU', phone: 'Téléphone', email: 'E-mail',
        director: 'Directeur de la publication', directorValue: 'Le directeur général de TILAMED PHARMA SA',
        host: 'Hébergeur',
      },
      sections: [
        { title: 'Propriété intellectuelle', text: ['Le nom TILAMED Pharma, le logo et l\'ensemble des contenus de ce site sont la propriété de TILAMED PHARMA SA. Toute reproduction sans autorisation écrite est interdite.'] },
        { title: 'Information médicale', text: ['Les informations sur les produits sont destinées aux professionnels de santé. Elles ne remplacent pas l\'avis d\'un médecin ou d\'un pharmacien.'] },
        { title: 'Crédits photographiques', text: ['Les photographies d\'illustration proviennent de la banque d\'images Pexels et sont utilisées selon sa licence. Les vidéos du procédé sont des images d\'illustration. Les photos de la médiathèque appartiennent à TILAMED PHARMA SA.'] },
      ],
    },
    privacy: {
      meta: { title: 'Politique de confidentialité · TILAMED Pharma', description: 'Comment TILAMED Pharma traite les données que vous lui confiez via les formulaires du site.' },
      lead: 'Comment nous traitons les données que vous nous confiez.',
      sections: [
        { title: 'Données collectées', text: ['Nous collectons uniquement les données que vous saisissez dans nos formulaires : contact, demande de documentation, candidature de distributeur, candidature spontanée (y compris votre CV), signalement de pharmacovigilance et inscription aux actualités.', 'Il s\'agit de votre nom, de votre organisation, de vos coordonnées, de votre message et des informations propres à chaque demande.'] },
        { title: 'Utilisation', text: ['Ces données servent exclusivement à traiter votre demande. Elles ne sont ni vendues ni cédées à des tiers.', 'Les signalements de pharmacovigilance sont traités de façon confidentielle par notre pharmacien responsable et peuvent être transmis aux autorités de santé lorsque la réglementation l\'exige.'] },
        { title: 'Hébergement des formulaires', text: ['Les formulaires du site sont traités sur notre serveur, hébergé par Hostinger, puis transmis par e-mail à nos équipes via notre messagerie (OVH). Ils ne sont pas conservés sur le serveur.'] },
        { title: 'Durée de conservation', text: ['Les demandes commerciales sont conservées trois ans au plus après le dernier contact ; les candidatures, deux ans au plus. Les signalements de pharmacovigilance sont conservés pendant la durée imposée par la réglementation.'] },
        { title: 'Vos droits', text: ['Conformément au Code du numérique de la RÉPUBLIQUE DU BÉNIN, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données. Écrivez-nous à contact@tilamedpharma.com. Vous pouvez aussi saisir l\'Autorité de protection des données à caractère personnel (APDP).'] },
      ],
    },
    cookies: {
      meta: { title: 'Politique de cookies · TILAMED Pharma', description: 'Le site TILAMED Pharma n\'utilise ni cookies publicitaires ni outils de suivi.' },
      lead: 'Ce site n\'utilise pas de cookies publicitaires ni de suivi.',
      sections: [
        { title: 'Aucun traceur', text: ['Ce site ne dépose aucun cookie publicitaire et n\'utilise aucun outil de mesure d\'audience. La langue est choisie par l\'adresse de la page : aucune information n\'est enregistrée dans votre navigateur pour vous suivre.', 'Les polices de caractères et les images sont hébergées avec le site : aucune donnée n\'est transmise à des services tiers lors de votre visite.'] },
        { title: 'Liens externes', text: ['Les liens vers Google Maps ou les réseaux sociaux ouvrent les sites concernés, qui appliquent leur propre politique de cookies.'] },
        { title: 'Évolutions', text: ['Si une mesure d\'audience est ajoutée à l\'avenir, cette page sera mise à jour et votre consentement vous sera demandé.'] },
      ],
    },
    sitemap: {
      meta: { title: 'Plan du site · TILAMED Pharma', description: 'Toutes les pages du site TILAMED Pharma.' },
      lead: 'Toutes les pages du site TILAMED Pharma.',
      legalTitle: 'Informations légales',
    },
  },
};
export default fin;
export type FinDict = typeof fin;
