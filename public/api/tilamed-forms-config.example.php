<?php
/**
 * MODÈLE de configuration des formulaires (ce fichier-ci ne contient aucun secret).
 *
 * Sur le serveur Hostinger : copier ce fichier sous le nom « tilamed-forms-config.php »
 * dans le dossier qui CONTIENT public_html (donc hors du site public), puis remplir le mot de passe.
 *   ex. /home/u123456789/domains/tilamedpharma.com/tilamed-forms-config.php
 *
 * Ne jamais mettre le vrai fichier dans GitHub.
 */
return [
    // Boîte e-mail OVH qui envoie les messages (les e-mails du domaine sont chez OVH).
    'smtp_host'   => 'ssl0.ovh.net',
    'smtp_port'   => 465,
    'smtp_secure' => 'ssl',          // 'ssl' (port 465) ou 'tls' (port 587)
    'smtp_user'   => 'contact@tilamedpharma.com',
    'smtp_pass'   => 'MOT_DE_PASSE_DE_LA_BOITE',
    'from'        => 'contact@tilamedpharma.com',

    // Destinataires : 'default' pour tous, ou une adresse par formulaire.
    'to' => [
        'default' => ['contact@tilamedpharma.com'],
        // 'pharmacovigilance' => ['pharmacien.responsable@tilamedpharma.com'],
        // 'candidature'       => ['rh@tilamedpharma.com'],
    ],
];
