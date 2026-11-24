import type { FinDict } from './fr';

const fin: FinDict = {
  news: {
    meta: { title: 'News · TILAMED Pharma', description: 'The latest news from TILAMED Pharma: the Sèmè-Podji site, approvals, plant authorisations.' },
    lead: 'The latest news from TILAMED Pharma.',
    bodies: [
      [
        'The State of BENIN entrusts TILAMED PHARMA SA, under a long-term lease, with a 2-hectare industrial site in Sèmè-Podji, just past the Kraké border with NIGERIA.',
        'Located in the Sèmè-Podji industrial zone, close to Cotonou and its autonomous port, the site will host TILAMED Pharma\'s injectable solutions plant.',
      ],
      [
        'On 28 November 2024, the ministerial order granted by the Government of the REPUBLIC OF BENIN completed the approvals obtained during the year.',
        'In 2024, TILAMED PHARMA SA also obtained its industrial authorisation (9 September), the environmental and social compliance certificate (7 August) and APIEX\'s technical acceptability certificate (28 October).',
      ],
      [
        'On 30 June 2023, the BENIN Pharmaceutical Regulatory Agency and the Ministry of Health granted the authorisation to install and operate the plant (no. 1138 ABRP/DHE/DAE/SA).',
        'This authorisation allows TILAMED PHARMA SA to continue preparing its production unit in Sèmè-Podji.',
      ],
    ],
    extra: [
      {
        date: '2023-05-16', tag: 'Regulation',
        title: 'Favourable opinion from ABRP for the TILAMED Pharma plant',
        body: [
          'Meeting in committee on 16 May 2023, the BENIN Pharmaceutical Regulatory Agency (ABRP) gave a favourable opinion on the authorisation for TILAMED Pharma to open and operate a pharmaceutical plant.',
          'This important regulatory step allows TILAMED Pharma to continue preparing its injectable solutions production unit in Sèmè-Podji.',
        ],
      },
    ],
    pressCta: 'Journalists: press area',
  },
  media: {
    meta: { title: 'Media library · TILAMED Pharma', description: 'TILAMED Pharma photos: plant visits, teams, international trade fairs, and illustrative images of the process.' },
    lead: 'Photos and videos of TILAMED Pharma.',
    photosTitle: 'Our photos',
    photosIntro: 'Visits, teams and international trade fairs. More photos and videos of our site will be published here.',
    captions: [
      'Infusion fluid bags',
      'Pharmacist and infusion bag',
      'Team in a clean room',
      'Team at packaging',
      'Visit to an infusion plant',
      'Discussions during a plant visit',
      'Meeting at a pharmaceutical packaging fair',
      'International trade fairs',
      'Arab Health, Dubai',
      'MEDICA 2021 trade fair',
    ],
    videosTitle: 'The process on video',
    videosIntro: 'Illustrative images of the seven manufacturing steps.',
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo',
  },
  press: {
    meta: { title: 'Press area · TILAMED Pharma', description: 'Journalists: key information about TILAMED Pharma and press contact.' },
    lead: 'Journalists: key information and press contact.',
    briefTitle: 'TILAMED Pharma at a glance',
    brief: [
      'Public limited company with share capital of 1,000,000,000 FCFA, head office in Cotonou (BENIN).',
      'Production unit for liquid pharmaceutical solutions to WHO standards in Sèmè-Podji.',
      'Planned capacity: 15 million large-volume solutions and 35 million small-volume injectables per year.',
      '150 planned direct jobs, 70% of them technical.',
      'EDGE green building certification in progress.',
      'Motto: "Plus près, plus sûr pour votre santé" (Closer, safer for your health).',
    ],
    contactTitle: 'Press contact',
    contactText: 'Write to us stating your media outlet and the purpose of your request.',
    note: 'The official logo and high-definition images are available on request.',
    newsCta: 'All news',
  },
  contact: {
    meta: { title: 'Contact us · TILAMED Pharma', description: 'A question, a project, a tender? Write to the TILAMED Pharma team or call our offices in BENIN, BURKINA FASO and FRANCE.' },
    lead: 'A question, a project, a tender? Our team will answer.',
    formTitle: 'Write to us',
    intro: 'Choose the subject of your message: we forward it directly to the right person.',
    fields: {
      subject: 'Subject', name: 'Full name', org: 'Organisation', email: 'Email address', phone: 'Phone', country: 'Country',
      message: 'Your message', consent: 'I agree that TILAMED Pharma may use this information to answer my request.',
      submit: 'Send message', required: 'Required field', select: 'Choose…',
    },
    subjects: ['Order or tender', 'Become a distributor', 'Product documentation', 'Press', 'Job application', 'Supplier', 'Site visit or partnership', 'Other'],
    directTitle: 'Reach us directly',
    whatsapp: 'Message us on WhatsApp',
    officesTitle: 'Our offices',
  },
  offices: {
    meta: { title: 'Our offices · TILAMED Pharma', description: 'Three offices to serve you, in BENIN, BURKINA FASO and FRANCE, and access to the Sèmè-Podji plant.' },
    lead: 'Three offices to serve you, in BENIN, BURKINA FASO and FRANCE.',
    title: 'Three offices, one plant',
    call: 'Call',
    plantTitle: 'The Sèmè-Podji plant',
    plantText: 'Just past the Kraké border coming from NIGERIA, a few kilometres from Cotonou.',
  },
  faq: {
    meta: { title: 'Frequently asked questions · TILAMED Pharma', description: 'Product availability, plant, standards, deliveries, distribution, recruitment, pharmacovigilance: answers to your questions.' },
    lead: 'Answers to the questions we are asked most often.',
    title: 'Your questions, our answers',
    items: [
      { q: 'Are your products already available?', a: 'Not yet. Our range is in preparation. You can ask to be informed as soon as it is available from the Documentation request page.', link: 'documentation' },
      { q: 'Where is your plant?', a: 'In Sèmè-Podji, in southern BENIN, just past the Kraké border coming from NIGERIA, on a 2-hectare site.', link: 'site-seme-podji' },
      { q: 'What products will you make?', a: 'Infusion fluids (sodium chloride, glucose, Ringer lactate…), medicated solutions (paracetamol, metronidazole, levofloxacin, ciprofloxacin) and ampoule injectables, then other ranges as authorisations are granted.', link: 'produits' },
      { q: 'Do your products meet international standards?', a: 'We are aiming for ISO 9001 and ISO 14001 certification, and EDGE green building certification is in progress.', link: 'certifications' },
      { q: 'Do you deliver outside BENIN?', a: 'Yes. We cover 15 West African countries. The Beninese market remains our priority.', link: 'presence' },
      { q: 'How can I become a distributor?', a: 'Fill in the form on the Become a distributor page. Our sales department will get back to you.', link: 'distributeurs' },
      { q: 'Are you recruiting?', a: 'No job offers are published at the moment, but you can submit a speculative application.', link: 'candidature' },
      { q: 'How do I report an adverse effect?', a: 'Use the form on the Pharmacovigilance page. In an emergency, contact a doctor immediately.', link: 'pharmacovigilance' },
    ],
    more: 'Learn more',
    still: 'Didn\'t find your answer?',
  },
  legal: {
    mentions: {
      meta: { title: 'Legal notice · TILAMED Pharma', description: 'Publisher, hosting, intellectual property and medical information for the TILAMED Pharma website.' },
      lead: 'Information about the publisher and hosting of the website.',
      rows: {
        editor: 'Publisher', capital: 'TILAMED PHARMA SA, public limited company with share capital of 1,000,000,000 FCFA',
        hq: 'Head office', rccm: 'RCCM', ifu: 'IFU (tax ID)', phone: 'Phone', email: 'Email',
        director: 'Publication director', directorValue: 'The managing director of TILAMED PHARMA SA',
        host: 'Host',
      },
      sections: [
        { title: 'Intellectual property', text: ['The TILAMED Pharma name, logo and all content on this website are the property of TILAMED PHARMA SA. Any reproduction without written permission is prohibited.'] },
        { title: 'Medical information', text: ['Product information is intended for healthcare professionals. It does not replace the advice of a doctor or pharmacist.'] },
        { title: 'Photo credits', text: ['Illustrative photographs come from the Pexels image bank and are used under its licence. Process videos are illustrative images. Media library photos belong to TILAMED PHARMA SA.'] },
      ],
    },
    privacy: {
      meta: { title: 'Privacy policy · TILAMED Pharma', description: 'How TILAMED Pharma handles the data you provide through the website\'s forms.' },
      lead: 'How we handle the data you entrust to us.',
      sections: [
        { title: 'Data collected', text: ['We only collect the data you enter in our forms: contact, documentation request, distributor application, speculative job application (including your CV), pharmacovigilance report and news subscription.', 'This means your name, organisation, contact details, message and the information specific to each request.'] },
        { title: 'Use', text: ['This data is used solely to process your request. It is neither sold nor passed on to third parties.', 'Pharmacovigilance reports are handled confidentially by our responsible pharmacist and may be passed on to the health authorities where regulations require.'] },
        { title: 'Form hosting', text: ['The website\'s forms are processed on our server, hosted by Hostinger, then sent by e-mail to our teams through our mail service (OVH). They are not stored on the server.'] },
        { title: 'Retention period', text: ['Business requests are kept for no more than three years after the last contact; job applications for no more than two years. Pharmacovigilance reports are kept for the period required by regulations.'] },
        { title: 'Your rights', text: ['Under the Digital Code of the REPUBLIC OF BENIN, you have the right to access, rectify and delete your data. Write to us at contact@tilamedpharma.com. You may also contact the Personal Data Protection Authority (APDP).'] },
      ],
    },
    cookies: {
      meta: { title: 'Cookie policy · TILAMED Pharma', description: 'The TILAMED Pharma website uses no advertising cookies or tracking tools.' },
      lead: 'This website uses no advertising or tracking cookies.',
      sections: [
        { title: 'No trackers', text: ['This website sets no advertising cookies and uses no audience measurement tools. The language is chosen through the page address: nothing is stored in your browser to track you.', 'Fonts and images are hosted with the website: no data is sent to third-party services during your visit.'] },
        { title: 'External links', text: ['Links to Google Maps or social networks open those websites, which apply their own cookie policies.'] },
        { title: 'Changes', text: ['If audience measurement is added in the future, this page will be updated and your consent will be requested.'] },
      ],
    },
    sitemap: {
      meta: { title: 'Site map · TILAMED Pharma', description: 'All the pages of the TILAMED Pharma website.' },
      lead: 'All the pages of the TILAMED Pharma website.',
      legalTitle: 'Legal information',
    },
  },
};
export default fin;
