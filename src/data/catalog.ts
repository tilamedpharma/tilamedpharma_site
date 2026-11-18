// Généré par tools/build-catalog.mjs depuis l'ancien site — ne pas modifier à la main.
// 120 références visibles.
export type Group = 'serum' | 'medicines' | 'nutrition' | 'devices' | 'vet';
export type CatalogItem = {
  id: string; group: Group; family: 'iv' | 'liquids' | 'devices' | 'vet'; cat: string;
  name: { fr: string; en: string }; use: { fr: string; en: string };
  formats?: string[]; route?: string; phase?: number; line?: string; pack?: string; species?: string; keywords: string;
};
export const catalog: CatalogItem[] = [
 {
  "id": "nacl",
  "group": "serum",
  "family": "iv",
  "cat": "standard",
  "name": {
   "fr": "Chlorure de sodium 0,9 %",
   "en": "Sodium chloride 0.9%"
  },
  "use": {
   "fr": "Réhydratation, maintien d'une voie veineuse et dilution de médicaments.",
   "en": "Rehydration, keeping a vein open and diluting medicines."
  },
  "formats": [
   "100 ml",
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "sérum serum soluté NaCl sérum physiologique saline normal saline soluté isotonique perfusion infusion"
 },
 {
  "id": "g5",
  "group": "serum",
  "family": "iv",
  "cat": "standard",
  "name": {
   "fr": "Glucose 5 %",
   "en": "Glucose 5%"
  },
  "use": {
   "fr": "Apport d'eau et de calories ; solvant pour médicaments en perfusion.",
   "en": "Supplies water and calories; solvent for infused medicines."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "sérum serum soluté dextrose sérum glucosé glucosé G5 sucre perfusion infusion"
 },
 {
  "id": "g10",
  "group": "nutrition",
  "family": "iv",
  "cat": "standard",
  "name": {
   "fr": "Glucose 10 %",
   "en": "Glucose 10%"
  },
  "use": {
   "fr": "Apport calorique renforcé, sous surveillance médicale.",
   "en": "Higher calorie supply, under medical supervision."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c24",
  "keywords": "dextrose G10 sérum glucosé hypoglycémie perfusion"
 },
 {
  "id": "naclg",
  "group": "serum",
  "family": "iv",
  "cat": "standard",
  "name": {
   "fr": "Chlorure de sodium 0,9 % + glucose 5 %",
   "en": "Sodium chloride 0.9% + glucose 5%"
  },
  "use": {
   "fr": "Réhydratation avec apport en glucose.",
   "en": "Rehydration with added glucose."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c24",
  "keywords": "sérum serum soluté glucosalé dextrose saline mixte sérum glucosé salé"
 },
 {
  "id": "ringer",
  "group": "serum",
  "family": "iv",
  "cat": "standard",
  "name": {
   "fr": "Ringer lactate",
   "en": "Ringer lactate"
  },
  "use": {
   "fr": "Remplacement des pertes en eau et en électrolytes, en chirurgie et en urgence.",
   "en": "Replaces lost water and electrolytes in surgery and emergencies."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "sérum serum soluté Hartmann lactate de sodium électrolytes remplissage vasculaire choc déshydratation"
 },
 {
  "id": "para",
  "group": "medicines",
  "family": "iv",
  "cat": "specific",
  "name": {
   "fr": "Paracétamol 1 %",
   "en": "Paracetamol 1%"
  },
  "use": {
   "fr": "Traitement de la douleur et de la fièvre par voie intraveineuse.",
   "en": "Intravenous treatment of pain and fever."
  },
  "formats": [
   "100 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "acétaminophène acetaminophen antalgique analgésique antipyrétique douleur fièvre"
 },
 {
  "id": "metro",
  "group": "medicines",
  "family": "iv",
  "cat": "specific",
  "name": {
   "fr": "Métronidazole 0,5 %",
   "en": "Metronidazole 0.5%"
  },
  "use": {
   "fr": "Anti-infectieux utilisé à l'hôpital, sur prescription.",
   "en": "Hospital anti-infective, on prescription."
  },
  "formats": [
   "100 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "anti-infectieux antibiotique antiparasitaire infection anaérobie"
 },
 {
  "id": "levo",
  "group": "medicines",
  "family": "iv",
  "cat": "specific",
  "name": {
   "fr": "Lévofloxacine 0,5 %",
   "en": "Levofloxacin 0.5%"
  },
  "use": {
   "fr": "Antibiotique de la famille des fluoroquinolones, sur prescription.",
   "en": "Fluoroquinolone antibiotic, on prescription."
  },
  "formats": [
   "100 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "antibiotique fluoroquinolone quinolone infection"
 },
 {
  "id": "cipro",
  "group": "medicines",
  "family": "iv",
  "cat": "specific",
  "name": {
   "fr": "Ciprofloxacine 0,2 %",
   "en": "Ciprofloxacin 0.2%"
  },
  "use": {
   "fr": "Antibiotique de la famille des fluoroquinolones, sur prescription.",
   "en": "Fluoroquinolone antibiotic, on prescription."
  },
  "formats": [
   "100 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "antibiotique fluoroquinolone quinolone infection"
 },
 {
  "id": "ceftriaxone",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Ceftriaxone 1 g",
   "en": "Ceftriaxone 1 g"
  },
  "use": {
   "fr": "Antibiotique à large spectre (céphalosporine de 3e génération) pour les infections bactériennes graves : méningite, pneumonie, septicémie, fièvre typhoïde, gonococcie. Poudre pour solution injectable, voie IM ou IV, sur prescription.",
   "en": "Broad-spectrum antibiotic (third-generation cephalosporin) for serious bacterial infections: meningitis, pneumonia, sepsis, typhoid fever, gonorrhoea. Powder for solution for injection, IM or IV, on prescription."
  },
  "formats": [
   "1 g"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "b50",
  "keywords": "ceftriaxone rocephine céphalosporine cephalosporin antibiotique antibiotic injection injectable flacon vial poudre powder infection méningite meningitis pneumonie pneumonia typhoïde typhoid septicémie sepsis gonorrhée"
 },
 {
  "id": "vet-croquettes-chiot",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Croquettes chiot",
   "en": "Puppy dry food"
  },
  "use": {
   "fr": "Aliment complet pour chiots de 2 à 12 mois, riche en protéines pour bien grandir.",
   "en": "Complete food for puppies aged 2 to 12 months, rich in protein for healthy growth."
  },
  "formats": [
   "3 kg",
   "15 kg"
  ],
  "species": "dog",
  "keywords": "croquettes chiot puppy aliment nourriture food veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-croquettes-chien-adulte",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Croquettes chien adulte",
   "en": "Adult dog dry food"
  },
  "use": {
   "fr": "Aliment complet et équilibré pour chiens adultes de toutes tailles.",
   "en": "Complete, balanced food for adult dogs of all sizes."
  },
  "formats": [
   "4 kg",
   "15 kg"
  ],
  "species": "dog",
  "keywords": "croquettes adulte aliment nourriture food kibble veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-croquettes-chien-senior",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Croquettes chien senior",
   "en": "Senior dog dry food"
  },
  "use": {
   "fr": "Aliment adapté aux chiens de plus de 7 ans, pour garder des articulations souples et de la vitalité.",
   "en": "Food for dogs over 7 years old, to support supple joints and vitality."
  },
  "formats": [
   "3 kg",
   "12 kg"
  ],
  "species": "dog",
  "keywords": "croquettes senior âgé aliment nourriture food veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-croquettes-grande-race",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Croquettes chien grande race",
   "en": "Large-breed dog dry food"
  },
  "use": {
   "fr": "Pour les chiens de plus de 25 kg : croquettes plus grosses et apports adaptés aux articulations.",
   "en": "For dogs over 25 kg: larger kibble and nutrients suited to the joints."
  },
  "formats": [
   "15 kg"
  ],
  "species": "dog",
  "keywords": "croquettes grande race large breed aliment food veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-croquettes-chien-sensible",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Croquettes chien digestion sensible",
   "en": "Sensitive-digestion dog dry food"
  },
  "use": {
   "fr": "Recette facile à digérer pour les chiens à l'estomac sensible.",
   "en": "Easy-to-digest recipe for dogs with a sensitive stomach."
  },
  "formats": [
   "3 kg",
   "12 kg"
  ],
  "species": "dog",
  "keywords": "croquettes digestion sensible estomac sensitive aliment food veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-patee-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Pâtée chien",
   "en": "Wet dog food"
  },
  "use": {
   "fr": "Aliment humide en boîte, à donner seul ou avec les croquettes.",
   "en": "Canned wet food, to serve on its own or with dry food."
  },
  "formats": [
   "400 g",
   "800 g"
  ],
  "species": "dog",
  "keywords": "pâtée patee boîte conserve wet food can veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-batonnets-dentaires-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Bâtonnets dentaires chien",
   "en": "Dental chews for dogs"
  },
  "use": {
   "fr": "Friandises à mâcher qui aident à limiter le tartre et la mauvaise haleine.",
   "en": "Chews that help limit tartar and bad breath."
  },
  "formats": [
   "7 pcs",
   "28 pcs"
  ],
  "species": "dog",
  "keywords": "friandises bâtonnets dentaires dents tartre chews treats veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-lait-chiot",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-dog",
  "name": {
   "fr": "Lait maternisé chiot",
   "en": "Puppy milk replacer"
  },
  "use": {
   "fr": "Substitut du lait maternel pour chiots orphelins ou en complément de l'allaitement.",
   "en": "Milk replacer for orphaned puppies or to top up suckling."
  },
  "formats": [
   "400 g"
  ],
  "species": "dog",
  "keywords": "lait maternisé chiot milk replacer puppy veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-croquettes-chaton",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Croquettes chaton",
   "en": "Kitten dry food"
  },
  "use": {
   "fr": "Aliment complet pour chatons jusqu'à 12 mois et chattes en gestation ou en lactation.",
   "en": "Complete food for kittens up to 12 months and for pregnant or nursing queens."
  },
  "formats": [
   "2 kg",
   "4 kg"
  ],
  "species": "cat",
  "keywords": "croquettes chaton kitten aliment nourriture food veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-croquettes-chat-adulte",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Croquettes chat adulte",
   "en": "Adult cat dry food"
  },
  "use": {
   "fr": "Aliment complet et équilibré pour chats adultes.",
   "en": "Complete, balanced food for adult cats."
  },
  "formats": [
   "2 kg",
   "10 kg"
  ],
  "species": "cat",
  "keywords": "croquettes adulte aliment nourriture food kibble veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-croquettes-chat-sterilise",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Croquettes chat stérilisé",
   "en": "Neutered cat dry food"
  },
  "use": {
   "fr": "Aliment moins gras pour aider les chats stérilisés à garder leur poids idéal.",
   "en": "Lower-fat food to help neutered cats keep a healthy weight."
  },
  "formats": [
   "2 kg",
   "10 kg"
  ],
  "species": "cat",
  "keywords": "croquettes stérilisé sterilise castré neutered aliment food veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-croquettes-chat-senior",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Croquettes chat senior",
   "en": "Senior cat dry food"
  },
  "use": {
   "fr": "Aliment pour chats de plus de 7 ans, adapté au bon fonctionnement des reins.",
   "en": "Food for cats over 7 years old, supporting healthy kidney function."
  },
  "formats": [
   "2 kg"
  ],
  "species": "cat",
  "keywords": "croquettes senior âgé reins aliment food veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-patee-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Pâtée chat en sachets",
   "en": "Wet cat food pouches"
  },
  "use": {
   "fr": "Bouchées en sauce en sachets individuels, pour hydrater et varier l'alimentation.",
   "en": "Chunks in gravy in single-serve pouches, for hydration and variety."
  },
  "formats": [
   "12 × 85 g"
  ],
  "species": "cat",
  "keywords": "pâtée patee sachets bouchées wet food pouches veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-friandises-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Friandises chat",
   "en": "Cat treats"
  },
  "use": {
   "fr": "Petites bouchées croquantes à donner en récompense, avec modération.",
   "en": "Small crunchy bites to give as a reward, in moderation."
  },
  "formats": [
   "60 g"
  ],
  "species": "cat",
  "keywords": "friandises récompense treats snacks veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-lait-chaton",
  "group": "vet",
  "family": "vet",
  "cat": "vet-food-cat",
  "name": {
   "fr": "Lait maternisé chaton",
   "en": "Kitten milk replacer"
  },
  "use": {
   "fr": "Substitut du lait maternel pour chatons orphelins ou en complément de l'allaitement.",
   "en": "Milk replacer for orphaned kittens or to top up suckling."
  },
  "formats": [
   "200 g"
  ],
  "species": "cat",
  "keywords": "lait maternisé chaton milk replacer kitten veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-vermifuge-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Vermifuge chien (comprimés)",
   "en": "Dog dewormer (tablets)"
  },
  "use": {
   "fr": "Traitement contre les vers intestinaux ronds et plats du chien, selon l'avis du vétérinaire.",
   "en": "Treatment for intestinal roundworms and tapeworms in dogs, as advised by the vet."
  },
  "formats": [
   "2 cp",
   "10 cp"
  ],
  "species": "dog",
  "keywords": "vermifuge vers comprimés dewormer worms tablets veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-vermifuge-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Vermifuge chat (comprimés)",
   "en": "Cat dewormer (tablets)"
  },
  "use": {
   "fr": "Traitement contre les vers intestinaux ronds et plats du chat, selon l'avis du vétérinaire.",
   "en": "Treatment for intestinal roundworms and tapeworms in cats, as advised by the vet."
  },
  "formats": [
   "2 cp"
  ],
  "species": "cat",
  "keywords": "vermifuge vers comprimés dewormer worms tablets veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-pipettes-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Pipettes antipuces chien",
   "en": "Flea and tick spot-on for dogs"
  },
  "use": {
   "fr": "Pipettes à appliquer sur la peau entre les épaules, contre les puces et les tiques. Taille selon le poids du chien.",
   "en": "Spot-on pipettes applied to the skin between the shoulders, against fleas and ticks. Size by the dog's weight."
  },
  "formats": [
   "3 pipettes"
  ],
  "species": "dog",
  "keywords": "pipettes antipuces puces tiques spot-on fleas ticks veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-pipettes-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Pipettes antipuces chat",
   "en": "Flea and tick spot-on for cats"
  },
  "use": {
   "fr": "Pipettes à appliquer sur la peau à la base du cou, contre les puces et les tiques.",
   "en": "Spot-on pipettes applied to the skin at the base of the neck, against fleas and ticks."
  },
  "formats": [
   "3 pipettes"
  ],
  "species": "cat",
  "keywords": "pipettes antipuces puces tiques spot-on fleas ticks veterinaire vétérinaire animal animaux chat cat"
 },
 {
  "id": "vet-collier-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Collier antiparasitaire chien",
   "en": "Flea and tick collar for dogs"
  },
  "use": {
   "fr": "Collier qui protège contre les puces et les tiques pendant plusieurs mois.",
   "en": "Collar that protects against fleas and ticks for several months."
  },
  "formats": [
   "70 cm"
  ],
  "species": "dog",
  "keywords": "collier antiparasitaire puces tiques collar fleas ticks veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-shampooing-antiparasitaire",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Shampooing antiparasitaire",
   "en": "Antiparasitic shampoo"
  },
  "use": {
   "fr": "Shampooing pour chiens et chats qui élimine les puces et apaise la peau ; bien rincer.",
   "en": "Shampoo for dogs and cats that removes fleas and soothes the skin; rinse well."
  },
  "formats": [
   "250 ml"
  ],
  "species": "both",
  "keywords": "shampooing shampoing puces peau shampoo fleas skin veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-spray-antipuces",
  "group": "vet",
  "family": "vet",
  "cat": "vet-parasite",
  "name": {
   "fr": "Spray antipuces",
   "en": "Flea spray"
  },
  "use": {
   "fr": "Spray à pulvériser sur le pelage des chiens et des chats, contre les puces et les tiques.",
   "en": "Spray for the coat of dogs and cats, against fleas and ticks."
  },
  "formats": [
   "250 ml"
  ],
  "species": "both",
  "keywords": "spray antipuces puces tiques fleas ticks veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-anti-inflammatoire-chien",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Anti-inflammatoire chien (comprimés)",
   "en": "Anti-inflammatory for dogs (tablets)"
  },
  "use": {
   "fr": "Soulage la douleur et l'inflammation, notamment des articulations. Uniquement sur prescription vétérinaire.",
   "en": "Relieves pain and inflammation, particularly in the joints. Veterinary prescription only."
  },
  "formats": [
   "30 cp"
  ],
  "species": "dog",
  "keywords": "anti-inflammatoire douleur articulations comprimés pain joints tablets veterinaire vétérinaire animal animaux chien dog"
 },
 {
  "id": "vet-antibiotique-chien-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Antibiotique chien et chat (comprimés)",
   "en": "Antibiotic for dogs and cats (tablets)"
  },
  "use": {
   "fr": "Traitement des infections bactériennes. Uniquement sur prescription vétérinaire.",
   "en": "Treatment of bacterial infections. Veterinary prescription only."
  },
  "formats": [
   "10 cp"
  ],
  "species": "both",
  "keywords": "antibiotique infection comprimés antibiotic tablets veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-nettoyant-auriculaire",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Nettoyant auriculaire",
   "en": "Ear cleaner"
  },
  "use": {
   "fr": "Solution pour nettoyer les oreilles des chiens et des chats et prévenir les otites.",
   "en": "Solution to clean the ears of dogs and cats and help prevent ear infections."
  },
  "formats": [
   "125 ml"
  ],
  "species": "both",
  "keywords": "oreilles otite nettoyant auriculaire ear cleaner veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-solution-oculaire",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Solution oculaire",
   "en": "Eye cleansing solution"
  },
  "use": {
   "fr": "Nettoie le contour des yeux des chiens et des chats et élimine les écoulements.",
   "en": "Cleans around the eyes of dogs and cats and removes discharge."
  },
  "formats": [
   "60 ml"
  ],
  "species": "both",
  "keywords": "yeux oculaire collyre eyes eye veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-spray-cicatrisant",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Spray cicatrisant",
   "en": "Wound-healing spray"
  },
  "use": {
   "fr": "Protège les petites plaies et aide la peau à cicatriser.",
   "en": "Protects minor wounds and helps the skin heal."
  },
  "formats": [
   "100 ml"
  ],
  "species": "both",
  "keywords": "plaies cicatrisant blessure wound healing veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-vitamines-chien-chat",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Vitamines et minéraux",
   "en": "Vitamins and minerals"
  },
  "use": {
   "fr": "Complément alimentaire pour chiens et chats, pour la vitalité, le pelage et la croissance.",
   "en": "Supplement for dogs and cats, supporting vitality, coat and growth."
  },
  "formats": [
   "120 ml"
  ],
  "species": "both",
  "keywords": "vitamines minéraux complément supplement veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-rehydratation-orale",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Sels de réhydratation orale",
   "en": "Oral rehydration salts"
  },
  "use": {
   "fr": "Poudre à diluer dans l'eau en cas de diarrhée ou de forte chaleur, pour compenser les pertes en eau et en sels.",
   "en": "Powder to dissolve in water in case of diarrhoea or heat stress, to replace lost water and salts."
  },
  "formats": [
   "20 g"
  ],
  "species": "both",
  "keywords": "réhydratation sels diarrhée rehydration salts veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "vet-nacl-veterinaire",
  "group": "vet",
  "family": "vet",
  "cat": "vet-care",
  "name": {
   "fr": "Chlorure de sodium 0,9 % vétérinaire",
   "en": "Sodium chloride 0.9% for veterinary use"
  },
  "use": {
   "fr": "Soluté pour la réhydratation et la perfusion des animaux par le vétérinaire.",
   "en": "Fluid for rehydration and infusion of animals by the vet."
  },
  "formats": [
   "500 ml",
   "100 ml"
  ],
  "species": "both",
  "keywords": "chlorure sodium perfusion soluté sodium chloride infusion veterinaire vétérinaire animal animaux chien chat dog cat"
 },
 {
  "id": "acide-ascorbique",
  "group": "nutrition",
  "family": "iv",
  "cat": "vitamins",
  "name": {
   "fr": "Acide ascorbique (vitamine C) 0,5 g/5 ml",
   "en": "Ascorbic acid (vitamin C) 0.5 g/5 ml"
  },
  "use": {
   "fr": "Vitamine C injectable : carences et besoins accrus.",
   "en": "Injectable vitamin C for deficiency and increased needs."
  },
  "formats": [
   "0,5 g/5 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10x5",
  "keywords": "vitamine c ascorbic acid"
 },
 {
  "id": "aminophylline",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Aminophylline 25 mg/ml",
   "en": "Aminophylline 25 mg/ml"
  },
  "use": {
   "fr": "Bronchodilatateur : crises d'asthme et bronchospasme.",
   "en": "Bronchodilator for asthma attacks and bronchospasm."
  },
  "formats": [
   "25 mg/ml · 10 ml"
  ],
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "asthme asthma bronchospasme"
 },
 {
  "id": "butylscopolamine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Butylbromure de scopolamine 10 mg/ml",
   "en": "Butylscopolamine bromide 10 mg/ml"
  },
  "use": {
   "fr": "Antispasmodique : douleurs spasmodiques digestives et urinaires.",
   "en": "Antispasmodic for abdominal and urinary spasms."
  },
  "formats": [
   "10 mg/ml · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "antispasmodique spasfon buscopan colique"
 },
 {
  "id": "gluconate-calcium",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Gluconate de calcium 100 mg/ml",
   "en": "Calcium gluconate 100 mg/ml"
  },
  "use": {
   "fr": "Apport de calcium : hypocalcémie.",
   "en": "Calcium supply for hypocalcaemia."
  },
  "formats": [
   "100 mg/ml · 10 ml"
  ],
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "calcium hypocalcemie"
 },
 {
  "id": "chlorpromazine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Chlorpromazine 25 mg/ml",
   "en": "Chlorpromazine 25 mg/ml"
  },
  "use": {
   "fr": "Antipsychotique : agitation et troubles psychotiques.",
   "en": "Antipsychotic for agitation and psychotic disorders."
  },
  "formats": [
   "25 mg/ml · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "psychiatrie antipsychotique"
 },
 {
  "id": "diclofenac",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Diclofénac 25 mg/ml",
   "en": "Diclofenac 25 mg/ml"
  },
  "use": {
   "fr": "Anti-inflammatoire : douleurs aiguës.",
   "en": "Anti-inflammatory for acute pain."
  },
  "formats": [
   "25 mg/ml · 3 ml"
  ],
  "route": "IM",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "douleur pain anti-inflammatoire ains"
 },
 {
  "id": "eau-ppi",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Eau pour préparations injectables",
   "en": "Water for injection"
  },
  "use": {
   "fr": "Solvant pour la dilution des médicaments injectables.",
   "en": "Solvent for diluting injectable medicines."
  },
  "formats": [
   "5 ml",
   "10 ml"
  ],
  "route": "Solvant",
  "phase": 1,
  "line": "svp",
  "pack": "a10x10",
  "keywords": "eau ppi water solvant"
 },
 {
  "id": "ergometrine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Maléate d'ergométrine 0,2 mg",
   "en": "Ergometrine maleate 0.2 mg"
  },
  "use": {
   "fr": "Utérotonique : prévention et traitement des hémorragies du post-partum.",
   "en": "Uterotonic to prevent and treat postpartum haemorrhage."
  },
  "formats": [
   "0,2 mg · 1 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "obstetrique hemorragie post-partum maternite"
 },
 {
  "id": "fluphenazine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Décanoate de fluphénazine 25 mg/ml",
   "en": "Fluphenazine decanoate 25 mg/ml"
  },
  "use": {
   "fr": "Antipsychotique à action prolongée.",
   "en": "Long-acting antipsychotic."
  },
  "formats": [
   "25 mg/ml · 10 ml"
  ],
  "route": "IM",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "psychiatrie antipsychotique"
 },
 {
  "id": "furosemide",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Furosémide 10 mg/ml",
   "en": "Furosemide 10 mg/ml"
  },
  "use": {
   "fr": "Diurétique : œdèmes et insuffisance cardiaque.",
   "en": "Diuretic for oedema and heart failure."
  },
  "formats": [
   "10 mg/ml · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "diuretique lasilix oedeme"
 },
 {
  "id": "haloperidol",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Halopéridol 5 mg/ml",
   "en": "Haloperidol 5 mg/ml"
  },
  "use": {
   "fr": "Antipsychotique : agitation aiguë.",
   "en": "Antipsychotic for acute agitation."
  },
  "formats": [
   "5 mg/ml · 1 ml"
  ],
  "route": "IM",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "psychiatrie haldol"
 },
 {
  "id": "sulfate-magnesium",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Sulfate de magnésium 15 %",
   "en": "Magnesium sulphate 15%"
  },
  "use": {
   "fr": "Pré-éclampsie, éclampsie et carence en magnésium.",
   "en": "Pre-eclampsia, eclampsia and magnesium deficiency."
  },
  "formats": [
   "15 % · 10 ml",
   "15 % · 20 ml"
  ],
  "phase": 1,
  "line": "svp",
  "pack": "b20",
  "keywords": "magnesium eclampsie maternite"
 },
 {
  "id": "metoclopramide",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Métoclopramide 5 mg",
   "en": "Metoclopramide 5 mg"
  },
  "use": {
   "fr": "Antiémétique : nausées et vomissements.",
   "en": "Antiemetic for nausea and vomiting."
  },
  "formats": [
   "5 mg · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "nausee vomissement primperan"
 },
 {
  "id": "oxytocine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Ocytocine 10 UI",
   "en": "Oxytocin 10 IU"
  },
  "use": {
   "fr": "Déclenchement du travail et prévention des hémorragies du post-partum.",
   "en": "Labour induction and prevention of postpartum haemorrhage."
  },
  "formats": [
   "10 UI · 1 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "obstetrique accouchement maternite syntocinon"
 },
 {
  "id": "chlorure-potassium",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Chlorure de potassium 10 %",
   "en": "Potassium chloride 10%"
  },
  "use": {
   "fr": "Correction des carences en potassium, après dilution.",
   "en": "Corrects potassium deficiency, after dilution."
  },
  "formats": [
   "10 % · 10 ml (1 g)"
  ],
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "potassium kcl hypokaliemie"
 },
 {
  "id": "promethazine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Prométhazine 50 mg/ml",
   "en": "Promethazine 50 mg/ml"
  },
  "use": {
   "fr": "Antihistaminique : allergies, nausées et sédation.",
   "en": "Antihistamine for allergies, nausea and sedation."
  },
  "formats": [
   "50 mg/ml · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "allergie phenergan"
 },
 {
  "id": "quinine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Quinine injectable",
   "en": "Injectable quinine"
  },
  "use": {
   "fr": "Traitement du paludisme grave.",
   "en": "Treatment of severe malaria."
  },
  "formats": [
   "100 mg · 1 ml",
   "300 mg · 1 ml",
   "600 mg · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "paludisme malaria quinine"
 },
 {
  "id": "salbutamol",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Salbutamol 0,5 mg",
   "en": "Salbutamol 0.5 mg"
  },
  "use": {
   "fr": "Bronchodilatateur : crises d'asthme sévères.",
   "en": "Bronchodilator for severe asthma attacks."
  },
  "formats": [
   "0,5 mg · 1 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "asthme ventoline"
 },
 {
  "id": "nacl-10",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Chlorure de sodium 10 %",
   "en": "Sodium chloride 10%"
  },
  "use": {
   "fr": "Apport de sodium, après dilution.",
   "en": "Sodium supply, after dilution."
  },
  "formats": [
   "10 % · 10 ml"
  ],
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "sel sodium nacl hypertonique"
 },
 {
  "id": "vitamine-b",
  "group": "nutrition",
  "family": "iv",
  "cat": "vitamins",
  "name": {
   "fr": "Vitamines du complexe B",
   "en": "Vitamin B complex"
  },
  "use": {
   "fr": "Prévention et traitement des carences en vitamines B.",
   "en": "Prevents and treats vitamin B deficiency."
  },
  "formats": [
   "2 ml",
   "10 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "vitamine b complexe"
 },
 {
  "id": "betamethasone",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Bétaméthasone 4 mg/ml",
   "en": "Betamethasone 4 mg/ml"
  },
  "use": {
   "fr": "Corticoïde : réactions allergiques et inflammatoires sévères.",
   "en": "Corticosteroid for severe allergic and inflammatory reactions."
  },
  "formats": [
   "4 mg/ml · 1 ml"
  ],
  "route": "IM/IV",
  "phase": 1,
  "line": "svp",
  "pack": "a10",
  "keywords": "corticoide celestene allergie"
 },
 {
  "id": "enoxaparine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Énoxaparine sodique 40 mg/0,4 ml",
   "en": "Enoxaparin sodium 40 mg/0.4 ml"
  },
  "use": {
   "fr": "Anticoagulant : prévention des thromboses.",
   "en": "Anticoagulant to prevent blood clots."
  },
  "formats": [
   "40 mg/0,4 ml"
  ],
  "route": "SC",
  "phase": 1,
  "line": "svp",
  "pack": "s10",
  "keywords": "anticoagulant lovenox thrombose seringue"
 },
 {
  "id": "epinephrine",
  "group": "medicines",
  "family": "iv",
  "cat": "svp",
  "name": {
   "fr": "Épinéphrine (adrénaline) 0,3 mg",
   "en": "Epinephrine (adrenaline) 0.3 mg"
  },
  "use": {
   "fr": "Urgence : choc anaphylactique.",
   "en": "Emergency treatment of anaphylactic shock."
  },
  "formats": [
   "0,3 mg/0,3 ml"
  ],
  "route": "IM",
  "phase": 1,
  "line": "svp",
  "pack": "s10",
  "keywords": "adrenaline urgence anaphylaxie seringue"
 },
 {
  "id": "glucose-15",
  "group": "nutrition",
  "family": "iv",
  "cat": "nutrition",
  "name": {
   "fr": "Glucose 15 %",
   "en": "Glucose 15%"
  },
  "use": {
   "fr": "Apport calorique élevé, sous surveillance médicale.",
   "en": "High calorie supply, under medical supervision."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c24",
  "keywords": "dextrose glucose hypertonique serum"
 },
 {
  "id": "glucose-30",
  "group": "nutrition",
  "family": "iv",
  "cat": "nutrition",
  "name": {
   "fr": "Glucose 30 %",
   "en": "Glucose 30%"
  },
  "use": {
   "fr": "Hypoglycémie et apport calorique concentré.",
   "en": "Hypoglycaemia and concentrated calorie supply."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "dextrose glucose hypertonique hypoglycemie serum"
 },
 {
  "id": "bicarbonate",
  "group": "serum",
  "family": "iv",
  "cat": "serum-special",
  "name": {
   "fr": "Bicarbonate de sodium 1,4 %",
   "en": "Sodium bicarbonate 1.4%"
  },
  "use": {
   "fr": "Correction de l'acidose métabolique.",
   "en": "Corrects metabolic acidosis."
  },
  "formats": [
   "500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c24",
  "keywords": "bicarbonate acidose serum"
 },
 {
  "id": "mannitol",
  "group": "serum",
  "family": "iv",
  "cat": "serum-special",
  "name": {
   "fr": "Mannitol 10 % et 20 %",
   "en": "Mannitol 10% and 20%"
  },
  "use": {
   "fr": "Diurétique osmotique : œdème cérébral et hypertension intracrânienne.",
   "en": "Osmotic diuretic for brain swelling and raised intracranial pressure."
  },
  "formats": [
   "10 % · 500 ml",
   "20 % · 500 ml"
  ],
  "phase": 1,
  "line": "lvp",
  "pack": "c12",
  "keywords": "mannitol diuretique osmotique serum"
 },
 {
  "id": "ampicilline",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Ampicilline",
   "en": "Ampicillin"
  },
  "use": {
   "fr": "Antibiotique à large spectre de la famille des pénicillines.",
   "en": "Broad-spectrum penicillin antibiotic."
  },
  "formats": [
   "0,5 g",
   "1 g"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "b50",
  "keywords": "antibiotique penicilline"
 },
 {
  "id": "benzathine-penicilline",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Benzathine pénicilline 2,4 MUI",
   "en": "Benzathine penicillin 2.4 MIU"
  },
  "use": {
   "fr": "Antibiotique retard : syphilis, angines à streptocoque, prévention du rhumatisme articulaire.",
   "en": "Long-acting antibiotic for syphilis, strep throat and rheumatic fever prevention."
  },
  "formats": [
   "2,4 MUI"
  ],
  "route": "IM",
  "phase": 2,
  "line": "atb",
  "pack": "b50",
  "keywords": "antibiotique extencilline penicilline"
 },
 {
  "id": "benzylpenicilline",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Benzylpénicilline",
   "en": "Benzylpenicillin"
  },
  "use": {
   "fr": "Antibiotique : infections sensibles à la pénicilline.",
   "en": "Antibiotic for penicillin-sensitive infections."
  },
  "formats": [
   "1 MUI",
   "5 MUI"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "b50",
  "keywords": "antibiotique penicilline g"
 },
 {
  "id": "chloramphenicol",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Chloramphénicol 500 mg",
   "en": "Chloramphenicol 500 mg"
  },
  "use": {
   "fr": "Antibiotique : méningites et infections sévères.",
   "en": "Antibiotic for meningitis and severe infections."
  },
  "formats": [
   "500 mg"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "b50",
  "keywords": "antibiotique meningite"
 },
 {
  "id": "cloxacilline",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Cloxacilline",
   "en": "Cloxacillin"
  },
  "use": {
   "fr": "Antibiotique : infections à staphylocoques.",
   "en": "Antibiotic for staphylococcal infections."
  },
  "formats": [
   "500 mg",
   "1 g"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "b10",
  "keywords": "antibiotique staphylocoque"
 },
 {
  "id": "gentamicine",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Gentamicine",
   "en": "Gentamicin"
  },
  "use": {
   "fr": "Antibiotique aminoside : infections sévères.",
   "en": "Aminoglycoside antibiotic for severe infections."
  },
  "formats": [
   "40 mg · 2 ml",
   "80 mg · 2 ml"
  ],
  "route": "IM/IV",
  "phase": 2,
  "line": "atb",
  "pack": "a10x10",
  "keywords": "antibiotique gentalline aminoside"
 },
 {
  "id": "spectinomycine",
  "group": "medicines",
  "family": "liquids",
  "cat": "antibiotic",
  "name": {
   "fr": "Spectinomycine 2 g",
   "en": "Spectinomycin 2 g"
  },
  "use": {
   "fr": "Antibiotique : gonococcie.",
   "en": "Antibiotic for gonorrhoea."
  },
  "formats": [
   "2 g"
  ],
  "route": "IM",
  "phase": 2,
  "line": "atb",
  "pack": "b10",
  "keywords": "antibiotique gonococcie"
 },
 {
  "id": "immunoglobuline-anti-d",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Immunoglobuline humaine anti-D",
   "en": "Human anti-D immunoglobulin"
  },
  "use": {
   "fr": "Prévention de l'allo-immunisation rhésus chez la mère.",
   "en": "Prevents rhesus alloimmunisation in mothers."
  },
  "formats": [
   "1500 UI (300 µg)"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "rhesus anti-d maternite immunoglobuline"
 },
 {
  "id": "serum-antirabique",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Sérum antirabique",
   "en": "Anti-rabies serum"
  },
  "use": {
   "fr": "Prévention de la rage après une morsure.",
   "en": "Prevents rabies after a bite."
  },
  "formats": [
   "1000 UI"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "rage morsure serum"
 },
 {
  "id": "serum-antitetanique",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Sérum antitétanique",
   "en": "Anti-tetanus serum"
  },
  "use": {
   "fr": "Prévention du tétanos après une blessure.",
   "en": "Prevents tetanus after an injury."
  },
  "formats": [
   "1500 UI · 1 ml"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "tetanos blessure serum"
 },
 {
  "id": "vaccin-hepatite",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Vaccin contre l'hépatite",
   "en": "Hepatitis vaccine"
  },
  "use": {
   "fr": "Prévention de l'hépatite virale.",
   "en": "Prevents viral hepatitis."
  },
  "formats": [
   "20 µg · 0,5 ml"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "vaccin hepatite"
 },
 {
  "id": "vaccin-typhoide",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Vaccin contre la typhoïde",
   "en": "Typhoid vaccine"
  },
  "use": {
   "fr": "Prévention de la fièvre typhoïde.",
   "en": "Prevents typhoid fever."
  },
  "formats": [
   "0,5 ml"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "vaccin typhoide"
 },
 {
  "id": "vaccin-rabique",
  "group": "medicines",
  "family": "liquids",
  "cat": "vaccines",
  "name": {
   "fr": "Vaccin contre la rage",
   "en": "Rabies vaccine"
  },
  "use": {
   "fr": "Prévention de la rage, avant ou après exposition.",
   "en": "Prevents rabies, before or after exposure."
  },
  "formats": [
   "0,5 ml"
  ],
  "route": "IM",
  "phase": 3,
  "line": "cold",
  "pack": "uni",
  "keywords": "vaccin rage"
 },
 {
  "id": "amoxicilline-susp",
  "group": "medicines",
  "family": "liquids",
  "cat": "oral",
  "name": {
   "fr": "Amoxicilline suspension buvable",
   "en": "Amoxicillin oral suspension"
  },
  "use": {
   "fr": "Antibiotique pour l'enfant : infections ORL et respiratoires.",
   "en": "Children's antibiotic for ear, nose, throat and chest infections."
  },
  "formats": [
   "125 mg/5 ml",
   "250 mg/5 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b10",
  "keywords": "antibiotique enfant sirop clamoxyl"
 },
 {
  "id": "cotrimoxazole-susp",
  "group": "medicines",
  "family": "liquids",
  "cat": "oral",
  "name": {
   "fr": "Cotrimoxazole suspension buvable",
   "en": "Co-trimoxazole oral suspension"
  },
  "use": {
   "fr": "Antibiotique : infections urinaires et respiratoires.",
   "en": "Antibiotic for urinary and chest infections."
  },
  "formats": [
   "240 mg/5 ml · 100 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b10",
  "keywords": "antibiotique bactrim sirop enfant"
 },
 {
  "id": "fer-b12-folique",
  "group": "nutrition",
  "family": "liquids",
  "cat": "vitamins",
  "name": {
   "fr": "Fer + vitamine B12 + acide folique",
   "en": "Iron + vitamin B12 + folic acid"
  },
  "use": {
   "fr": "Prévention et traitement de l'anémie.",
   "en": "Prevents and treats anaemia."
  },
  "formats": [
   "100 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b10",
  "keywords": "fer anemie sirop vitamine"
 },
 {
  "id": "mebendazole-susp",
  "group": "medicines",
  "family": "liquids",
  "cat": "oral",
  "name": {
   "fr": "Mébendazole suspension buvable",
   "en": "Mebendazole oral suspension"
  },
  "use": {
   "fr": "Vermifuge : parasites intestinaux.",
   "en": "Dewormer for intestinal worms."
  },
  "formats": [
   "100 mg · 30 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b20",
  "keywords": "vermifuge parasite sirop enfant"
 },
 {
  "id": "metronidazole-susp",
  "group": "medicines",
  "family": "liquids",
  "cat": "oral",
  "name": {
   "fr": "Métronidazole suspension buvable 4 %",
   "en": "Metronidazole oral suspension 4%"
  },
  "use": {
   "fr": "Infections digestives parasitaires et bactériennes (amibiase, giardiase).",
   "en": "Gut infections caused by parasites and bacteria (amoebiasis, giardiasis)."
  },
  "formats": [
   "4 % · 100 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b10",
  "keywords": "flagyl amibe sirop"
 },
 {
  "id": "multivitamines-susp",
  "group": "nutrition",
  "family": "liquids",
  "cat": "vitamins",
  "name": {
   "fr": "Multivitamines solution buvable",
   "en": "Multivitamin oral solution"
  },
  "use": {
   "fr": "Complément vitaminique.",
   "en": "Vitamin supplement."
  },
  "formats": [
   "60 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b20",
  "keywords": "vitamines sirop enfant"
 },
 {
  "id": "paracetamol-susp",
  "group": "medicines",
  "family": "liquids",
  "cat": "oral",
  "name": {
   "fr": "Paracétamol suspension buvable",
   "en": "Paracetamol oral suspension"
  },
  "use": {
   "fr": "Fièvre et douleurs de l'enfant.",
   "en": "Fever and pain in children."
  },
  "formats": [
   "125 mg · 100 ml"
  ],
  "phase": 3,
  "line": "oral",
  "pack": "b10",
  "keywords": "fievre douleur sirop enfant doliprane"
 },
 {
  "id": "stethoscope",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Stéthoscope",
   "en": "Stethoscope"
  },
  "use": {
   "fr": "Écoute du cœur, des poumons et de l'abdomen.",
   "en": "Listening to the heart, lungs and abdomen."
  },
  "keywords": "auscultation cœur poumon examen"
 },
 {
  "id": "tensiometre",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Tensiomètre",
   "en": "Blood pressure monitor"
  },
  "use": {
   "fr": "Mesure de la pression artérielle, manuel ou électronique.",
   "en": "Measures blood pressure, manual or electronic."
  },
  "keywords": "sphygmomanomètre tension artérielle hypertension brassard blood pressure"
 },
 {
  "id": "oxymetre",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Oxymètre de pouls",
   "en": "Pulse oximeter"
  },
  "use": {
   "fr": "Mesure de la saturation en oxygène du sang et du pouls.",
   "en": "Measures blood oxygen saturation and pulse."
  },
  "keywords": "saturation SpO2 oxygène pouls saturomètre"
 },
 {
  "id": "thermometre",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Thermomètre médical",
   "en": "Medical thermometer"
  },
  "use": {
   "fr": "Mesure de la température corporelle.",
   "en": "Measures body temperature."
  },
  "keywords": "température fièvre infrarouge digital"
 },
 {
  "id": "otoscope",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Otoscope",
   "en": "Otoscope"
  },
  "use": {
   "fr": "Examen du conduit auditif et du tympan.",
   "en": "Examines the ear canal and eardrum."
  },
  "keywords": "oreille ORL tympan examen ear"
 },
 {
  "id": "ophtalmoscope",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Ophtalmoscope",
   "en": "Ophthalmoscope"
  },
  "use": {
   "fr": "Examen du fond de l'œil.",
   "en": "Examines the back of the eye."
  },
  "keywords": "œil oeil ophtalmologie rétine fond d'œil eye"
 },
 {
  "id": "doppler",
  "group": "devices",
  "family": "devices",
  "cat": "diagnostic",
  "name": {
   "fr": "Doppler fœtal",
   "en": "Fetal Doppler"
  },
  "use": {
   "fr": "Écoute du rythme cardiaque du fœtus pendant la grossesse.",
   "en": "Listens to the baby's heartbeat during pregnancy."
  },
  "keywords": "fœtus foetus grossesse maternité obstétrique rythme cardiaque sage-femme"
 },
 {
  "id": "boite-chirurgie",
  "group": "devices",
  "family": "devices",
  "cat": "surgery",
  "name": {
   "fr": "Boîtes d'instruments de petite chirurgie",
   "en": "Minor surgery instrument kits"
  },
  "use": {
   "fr": "Ensembles d'instruments prêts à l'emploi pour les soins et la petite chirurgie.",
   "en": "Ready-to-use instrument sets for care and minor surgery."
  },
  "keywords": "kit boîte instruments pansement suture soins infirmier"
 },
 {
  "id": "scalpel",
  "group": "devices",
  "family": "devices",
  "cat": "surg-cut",
  "name": {
   "fr": "Bistouri (manche et lames)",
   "en": "Scalpel (handle and blades)"
  },
  "use": {
   "fr": "Incision précise de la peau et des tissus. Le manche reçoit des lames stériles à usage unique (n° 10, 11, 15, 20…).",
   "en": "Precise cutting of skin and tissue. The handle takes sterile single-use blades (no. 10, 11, 15, 20…)."
  },
  "keywords": "bistouri scalpel lame blade incision couper coupe cut manche Bard-Parker"
 },
 {
  "id": "ciseaux-mayo",
  "group": "devices",
  "family": "devices",
  "cat": "surg-cut",
  "name": {
   "fr": "Ciseaux de Mayo",
   "en": "Mayo scissors"
  },
  "use": {
   "fr": "Ciseaux robustes, droits ou courbes, pour couper les tissus épais (fascia, muscle) et les fils de suture.",
   "en": "Strong straight or curved scissors for cutting thick tissue (fascia, muscle) and sutures."
  },
  "keywords": "ciseaux scissors Mayo coupe couper cut fil suture tissu épais fascia"
 },
 {
  "id": "ciseaux-metzenbaum",
  "group": "devices",
  "family": "devices",
  "cat": "surg-cut",
  "name": {
   "fr": "Ciseaux de Metzenbaum",
   "en": "Metzenbaum scissors"
  },
  "use": {
   "fr": "Ciseaux longs et fins pour la dissection délicate des tissus mous ; à ne pas utiliser pour couper les fils.",
   "en": "Long, fine scissors for delicate dissection of soft tissue; not meant for cutting sutures."
  },
  "keywords": "ciseaux scissors Metzenbaum Metz dissection couper cut tissu fin délicat"
 },
 {
  "id": "curette",
  "group": "devices",
  "family": "devices",
  "cat": "surg-cut",
  "name": {
   "fr": "Curette",
   "en": "Curette"
  },
  "use": {
   "fr": "Raclage et prélèvement de tissus, nettoyage des plaies et des cavités (utérus, os, peau).",
   "en": "Scraping and removing tissue, cleaning wounds and cavities (uterus, bone, skin)."
  },
  "keywords": "curette curetage raclage gratter scraping prélèvement biopsie gynécologie"
 },
 {
  "id": "pince-hemostatique",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince hémostatique",
   "en": "Haemostatic forceps (haemostat)"
  },
  "use": {
   "fr": "Clampage des vaisseaux sanguins pour arrêter un saignement. Crémaillère pour rester fermée (Kelly, Péan, Kocher, mosquito).",
   "en": "Clamping blood vessels to stop bleeding. Ratchet lock keeps it closed (Kelly, Péan, Kocher, mosquito)."
  },
  "keywords": "pince hémostatique hemostat haemostat clamp clampage saignement hémorragie vaisseau artère Kelly Péan Kocher mosquito"
 },
 {
  "id": "pince-adson",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince d'Adson",
   "en": "Adson forceps"
  },
  "use": {
   "fr": "Petite pince fine, avec ou sans griffes, pour tenir la peau et les tissus superficiels pendant la suture.",
   "en": "Small fine forceps, with or without teeth, for holding skin and surface tissue during suturing."
  },
  "keywords": "pince Adson forceps dissection peau suture griffes tweezers"
 },
 {
  "id": "pince-debakey",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince de DeBakey",
   "en": "DeBakey forceps"
  },
  "use": {
   "fr": "Pince atraumatique aux mors finement striés, pour saisir sans les abîmer les vaisseaux et les tissus fragiles.",
   "en": "Atraumatic forceps with finely grooved jaws, for holding blood vessels and fragile tissue without damage."
  },
  "keywords": "pince DeBakey forceps atraumatique vaisseau vasculaire cardiovasculaire dissection"
 },
 {
  "id": "pince-griffes",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince à griffes (pince à tissus)",
   "en": "Tissue forceps (toothed)"
  },
  "use": {
   "fr": "Pince à dents pour tenir fermement les tissus épais ou glissants : peau, fascia.",
   "en": "Toothed forceps for a firm hold on thick or slippery tissue: skin, fascia."
  },
  "keywords": "pince griffes dents tissue forceps tissu peau fascia saisir tenir"
 },
 {
  "id": "pince-allis",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince d'Allis",
   "en": "Allis clamp"
  },
  "use": {
   "fr": "Pince à crémaillère aux mors dentés pour saisir et maintenir les tissus pendant l'intervention (intestin, sein, tissus mous).",
   "en": "Ratcheted clamp with toothed jaws for grasping and holding tissue during surgery (bowel, breast, soft tissue)."
  },
  "keywords": "pince Allis clamp saisir tissu intestin crémaillère dents"
 },
 {
  "id": "pince-champ",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince à champ",
   "en": "Towel clamp"
  },
  "use": {
   "fr": "Fixation des champs opératoires stériles autour de la zone d'intervention (Backhaus).",
   "en": "Holds sterile surgical drapes in place around the operating area (Backhaus)."
  },
  "keywords": "pince champ towel clamp drap champ opératoire Backhaus fixation"
 },
 {
  "id": "pince-tampon",
  "group": "devices",
  "family": "devices",
  "cat": "surg-grasp",
  "name": {
   "fr": "Pince porte-tampon",
   "en": "Sponge-holding forceps"
  },
  "use": {
   "fr": "Tenue des compresses pour désinfecter la peau et absorber le sang ; utilisée aussi en gynécologie (Foerster).",
   "en": "Holds gauze swabs to disinfect skin and absorb blood; also used in gynaecology (Foerster)."
  },
  "keywords": "pince porte tampon sponge forceps compresse gaze désinfection Foerster gynécologie"
 },
 {
  "id": "porte-aiguille",
  "group": "devices",
  "family": "devices",
  "cat": "surg-suture",
  "name": {
   "fr": "Porte-aiguille",
   "en": "Needle holder"
  },
  "use": {
   "fr": "Maintien ferme de l'aiguille courbe pendant la suture des plaies et des incisions (Mayo-Hegar).",
   "en": "Firmly holds the curved needle while suturing wounds and incisions (Mayo-Hegar)."
  },
  "keywords": "porte aiguille needle holder suture coudre fil aiguille Mayo-Hegar fermeture plaie"
 },
 {
  "id": "agrafeuse",
  "group": "devices",
  "family": "devices",
  "cat": "surg-suture",
  "name": {
   "fr": "Agrafeuse cutanée",
   "en": "Skin stapler"
  },
  "use": {
   "fr": "Fermeture rapide de la peau par agrafes après une intervention ; dispositif stérile à usage unique, avec ôte-agrafes.",
   "en": "Quickly closes the skin with staples after surgery; sterile single-use device, with staple remover."
  },
  "keywords": "agrafeuse stapler agrafe staple fermeture peau plaie suture usage unique ôte-agrafes"
 },
 {
  "id": "ecarteur",
  "group": "devices",
  "family": "devices",
  "cat": "surg-expose",
  "name": {
   "fr": "Écarteur chirurgical",
   "en": "Surgical retractor"
  },
  "use": {
   "fr": "Maintien des bords de l'incision écartés pour bien voir et accéder à la zone opérée (Farabeuf, Army-Navy).",
   "en": "Holds the edges of an incision apart to see and reach the operating area (Farabeuf, Army-Navy)."
  },
  "keywords": "écarteur retractor écarter exposition incision Farabeuf Army-Navy Senn"
 },
 {
  "id": "ecarteur-weitlaner",
  "group": "devices",
  "family": "devices",
  "cat": "surg-expose",
  "name": {
   "fr": "Écarteur autostatique de Weitlaner",
   "en": "Weitlaner retractor"
  },
  "use": {
   "fr": "Écarteur qui reste ouvert seul grâce à sa crémaillère ; ses dents en râteau écartent la peau et les muscles.",
   "en": "Self-retaining retractor held open by its ratchet; rake-like teeth hold back skin and muscle."
  },
  "keywords": "écarteur autostatique Weitlaner retractor self-retaining râteau crémaillère orthopédie"
 },
 {
  "id": "ecarteur-gelpi",
  "group": "devices",
  "family": "devices",
  "cat": "surg-expose",
  "name": {
   "fr": "Écarteur autostatique de Gelpi",
   "en": "Gelpi retractor"
  },
  "use": {
   "fr": "Écarteur autostatique à pointes fines, pour les petites incisions profondes (orthopédie, rachis, périnée).",
   "en": "Self-retaining retractor with single sharp points, for small deep incisions (orthopaedics, spine, perineum)."
  },
  "keywords": "écarteur autostatique Gelpi retractor self-retaining pointe orthopédie rachis"
 },
 {
  "id": "speculum",
  "group": "devices",
  "family": "devices",
  "cat": "surg-expose",
  "name": {
   "fr": "Spéculum vaginal",
   "en": "Vaginal speculum"
  },
  "use": {
   "fr": "Examen gynécologique du col de l'utérus, frottis et soins (type Collin ou Cusco), en inox ou à usage unique.",
   "en": "Gynaecological examination of the cervix, smears and care (Collin or Cusco type), stainless or single-use."
  },
  "keywords": "spéculum speculum vaginal gynécologie col utérus frottis examen Cusco Collin femme"
 },
 {
  "id": "stylet",
  "group": "devices",
  "family": "devices",
  "cat": "surg-expose",
  "name": {
   "fr": "Stylet et sonde cannelée",
   "en": "Surgical probe"
  },
  "use": {
   "fr": "Exploration de la profondeur et du trajet d'une plaie, d'une fistule ou d'un abcès.",
   "en": "Explores the depth and path of a wound, fistula or abscess."
  },
  "keywords": "stylet sonde cannelée probe exploration plaie fistule abcès"
 },
 {
  "id": "cupules",
  "group": "devices",
  "family": "devices",
  "cat": "sterilisation",
  "name": {
   "fr": "Plateaux, haricots et cupules inox",
   "en": "Stainless trays, kidney dishes and bowls"
  },
  "use": {
   "fr": "Préparation et transport stériles des instruments et des solutions.",
   "en": "Sterile preparation and carrying of instruments and solutions."
  },
  "keywords": "haricot plateau cupule inox acier bassin gallipot"
 },
 {
  "id": "conteneur",
  "group": "devices",
  "family": "devices",
  "cat": "sterilisation",
  "name": {
   "fr": "Conteneurs et tambours de stérilisation",
   "en": "Sterilisation containers and drums"
  },
  "use": {
   "fr": "Stérilisation et stockage stérile des instruments.",
   "en": "Sterilising and storing instruments sterile."
  },
  "keywords": "tambour conteneur stérilisation autoclave boîte"
 },
 {
  "id": "lampe",
  "group": "devices",
  "family": "devices",
  "cat": "furniture",
  "name": {
   "fr": "Lampes d'examen",
   "en": "Examination lamps"
  },
  "use": {
   "fr": "Éclairage précis pour l'examen et les soins.",
   "en": "Precise lighting for examination and care."
  },
  "keywords": "lampe éclairage examen LED scialytique"
 },
 {
  "id": "chariot",
  "group": "devices",
  "family": "devices",
  "cat": "furniture",
  "name": {
   "fr": "Chariots de soins",
   "en": "Care trolleys"
  },
  "use": {
   "fr": "Transport du matériel de soins dans les services.",
   "en": "Carrying care supplies around the wards."
  },
  "keywords": "chariot soins infirmier urgence médicaments"
 },
 {
  "id": "brancard",
  "group": "devices",
  "family": "devices",
  "cat": "furniture",
  "name": {
   "fr": "Brancards",
   "en": "Stretchers"
  },
  "use": {
   "fr": "Transport des patients, en urgence et dans l'hôpital.",
   "en": "Moving patients in emergencies and around the hospital."
  },
  "keywords": "brancard civière urgence secours transport patient"
 },
 {
  "id": "bracelets",
  "group": "devices",
  "family": "devices",
  "cat": "consumables",
  "name": {
   "fr": "Bracelets d'identification",
   "en": "Identification bracelets"
  },
  "use": {
   "fr": "Identification sûre des patients et des nouveau-nés.",
   "en": "Safe identification of patients and newborns."
  },
  "keywords": "bracelet identification patient nouveau-né bébé maternité"
 },
 {
  "id": "tenues",
  "group": "devices",
  "family": "devices",
  "cat": "consumables",
  "name": {
   "fr": "Tenues professionnelles",
   "en": "Professional clothing"
  },
  "use": {
   "fr": "Tenues de bloc et blouses pour le personnel soignant.",
   "en": "Scrubs and coats for healthcare staff."
  },
  "keywords": "tenue blouse pyjama bloc vêtement soignant scrub"
 }
];
