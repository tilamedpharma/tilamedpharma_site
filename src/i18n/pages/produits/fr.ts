// Rubrique Produits · français (référence). Sources : pages produits, formats, dispositifs et documentation de l'ancien site.
const produits = {
  ui: {
    seeRange: 'Voir la gamme',
    docCta: 'Demander la documentation',
    contactCta: 'Contacter notre direction commerciale',
    inThisRange: 'Dans cette gamme',
    categories: 'catégories',
  },
  catalogue: {
    meta: { title: 'Catalogue des produits · TILAMED Pharma', description: 'Sérums, médicaments injectables et buvables, solutions nutritionnelles, dispositifs médicaux et produits vétérinaires : le catalogue TILAMED Pharma.' },
    lead: 'Recherchez parmi nos solutions injectables, nos futurs produits liquides et les dispositifs médicaux que nous distribuons.',
    familiesTitle: 'Cinq gammes',
    searchTitle: 'Tout le catalogue',
    searchIntro: 'Filtrez par gamme ou recherchez par nom, usage ou catégorie.',
  },
  families: {
    serums: {
      meta: { title: 'Sérums · Produits · TILAMED Pharma', description: 'Chlorure de sodium, glucose, Ringer lactate, bicarbonate, mannitol : les solutés de perfusion fabriqués à Sèmè-Podji.' },
      lead: 'Notre première gamme, fabriquée à Sèmè-Podji : des solutés de perfusion en flacons plastiques formés, remplis et scellés sur place.',
    },
    medicaments: {
      meta: { title: 'Médicaments · Produits · TILAMED Pharma', description: 'Injectables en ampoules, solutions médicamenteuses, antibiotiques injectables, vaccins et sérums, solutions buvables.' },
      lead: 'Injectables en ampoules, antibiotiques, vaccins et sérums, solutions buvables : une gamme déployée en trois phases de production.',
    },
    'solutions-nutritionnelles': {
      meta: { title: 'Solutions nutritionnelles · Produits · TILAMED Pharma', description: 'Glucose concentré, vitamines injectables et buvables pour l\'apport calorique et la correction des carences.' },
      lead: 'Glucose concentré et vitamines, injectables ou buvables, pour l\'apport calorique et la correction des carences.',
    },
    'dispositifs-medicaux': {
      meta: { title: 'Dispositifs médicaux · Produits · TILAMED Pharma', description: 'Diagnostic, instruments de chirurgie, stérilisation et équipement : les dispositifs médicaux distribués par TILAMED Pharma.' },
      lead: 'Diagnostic, instruments de chirurgie, stérilisation et équipement : les dispositifs médicaux que nous distribuons.',
    },
    'sante-animale': {
      meta: { title: 'Produits vétérinaires · Produits · TILAMED Pharma', description: 'Alimentation, antiparasitaires, soins et médicaments pour chiens et chats, distribués par notre centrale d\'achat.' },
      lead: 'Alimentation, antiparasitaires, soins et médicaments pour chiens et chats.',
    },
  },
  formats: {
    title: 'Des flacons adaptés à chaque usage',
    intro: 'Des flacons plastiques légers et incassables, fabriqués par soufflage-remplissage-scellage.',
    items: [
      { value: '100', label: 'Antibiotiques, antalgiques, dilutions' },
      { value: '250', label: 'Solutés de base, pédiatrie' },
      { value: '500', label: 'Format le plus utilisé à l\'hôpital' },
      { value: '1000', label: 'Réhydratation, remplissage' },
    ],
    cards: [
      { title: 'Incassable', text: 'Le flacon plastique résiste aux chocs du transport et du stockage.' },
      { title: 'Léger', text: 'Moins lourd que le verre : transport et manipulation facilités.' },
      { title: 'Système clos', text: 'Le flacon se vide sans prise d\'air, ce qui limite les risques de contamination.' },
    ],
    note: 'Chaque carton contient la notice et est étiqueté pour assurer la traçabilité du lot.',
  },
  phases: {
    title: 'Une gamme déployée en trois phases',
    intro: 'Les médicaments entrent en production au fur et à mesure de l\'ouverture des lignes et des autorisations réglementaires.',
  },
  devices: {
    text: 'Fort d\'une longue expérience dans la fourniture, l\'installation et la maintenance d\'équipements médicaux en Afrique de l\'Ouest, TILAMED Pharma distribue une gamme de dispositifs médicaux de fabricants internationaux reconnus, disposant du marquage CE.',
    cta: 'Pour un devis, une liste de références ou une demande d\'appel d\'offres, contactez notre direction commerciale.',
  },
  vet: {
    text: 'Des produits vétérinaires sélectionnés et distribués par notre centrale d\'achat. Ils seront disponibles prochainement.',
    cta: 'Être informé du lancement',
  },
  doc: {
    meta: { title: 'Demande de documentation · TILAMED Pharma', description: 'Professionnels de santé et acheteurs : demandez les informations techniques des produits TILAMED Pharma.' },
    lead: 'Professionnels de santé et acheteurs : demandez les informations techniques de nos produits.',
    intro: 'Indiquez les produits qui vous intéressent. Notre équipe vous enverra les informations disponibles dès qu\'elles seront publiées.',
    formTitle: 'Votre demande',
    fields: {
      name: 'Nom et prénom', org: 'Organisation', profile: 'Vous êtes', country: 'Pays', email: 'Adresse e-mail', phone: 'Téléphone',
      ranges: 'Gammes qui vous intéressent', products: 'Produits précis (facultatif)', productsHint: 'Ex. : chlorure de sodium 0,9 % 500 ml, ceftriaxone 1 g…',
      message: 'Votre message', consent: 'J\'accepte que TILAMED Pharma utilise ces informations pour répondre à ma demande.', submit: 'Envoyer la demande',
      required: 'Champ obligatoire', select: 'Choisir…',
    },
    profiles: ['Centrale d\'achat', 'Hôpital ou clinique', 'Pharmacie', 'Grossiste ou distributeur', 'Organisation de santé', 'Autre'],
    asideTitle: 'Ce que vous recevrez',
    asideItems: ['Fiches techniques et compositions dès leur publication', 'Formats et conditionnements prévus', 'Calendrier de mise à disposition', 'Contact de notre direction commerciale'],
    direct: 'Vous préférez nous écrire directement ?',
  },
};
export default produits;
export type ProduitsDict = typeof produits;
