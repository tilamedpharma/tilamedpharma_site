<?php
/**
 * Back office TILAMED · comptes (administrateurs) et « Mon compte » (chacun).
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, db, now, current_user, audit, admin_count, password_problem, pass_fingerprint};

function users_page(): void
{
    $rows = db()->query('SELECT * FROM users ORDER BY active DESC, role, name')->fetchAll();
    $o = page_head('Utilisateurs', 'Les personnes qui peuvent se connecter au back office. <b>Administrateur</b> : tout, dont les comptes et les catégories. <b>Éditeur</b> : les produits (sans suppression définitive).',
        '<a class="abtn" href="' . url('utilisateurs/nouveau') . '">' . aicon('plus') . 'Ajouter un compte</a>');
    $o .= '<div class="atable-wrap"><table class="atable"><thead><tr><th>Nom</th><th>Rôle</th><th>État</th><th>Dernière connexion</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>';
    foreach ($rows as $u) {
        $pending = $u['pass'] === '';
        $o .= '<tr><td data-label="Nom"><span class="auser"><span class="aumenu__av" aria-hidden="true">' . h(initials($u['name'])) . '</span><span><b>' . h($u['name']) . '</b><small>' . h($u['email']) . '</small></span></span></td>'
            . '<td data-label="Rôle">' . h(ROLE_LABELS[$u['role']] ?? $u['role']) . '</td>'
            . '<td data-label="État">' . ($u['active'] ? ($pending ? '<span class="abadge abadge--hidden">Invitation envoyée</span>' : '<span class="abadge abadge--published">Actif</span>') : '<span class="abadge abadge--archived">Désactivé</span>') . '</td>'
            . '<td data-label="Dernière connexion"><small>' . h(dt($u['last_login'])) . '</small></td>'
            . '<td class="atable__act"><a class="abtn abtn--ghost abtn--sm" href="' . url('utilisateurs/' . (int) $u['id']) . '">Modifier</a></td></tr>';
    }
    $o .= '</tbody></table></div>';
    layout('Utilisateurs', $o, 'users');
}

function user_page(int $id = 0): void
{
    $u = null;
    if ($id) {
        $st = db()->prepare('SELECT * FROM users WHERE id = ?');
        $st->execute([$id]);
        $u = $st->fetch() ?: not_found();
    }
    $me = current_user();
    $errors = [];
    $v = ['name' => $u['name'] ?? '', 'email' => $u['email'] ?? '', 'role' => $u['role'] ?? 'editor', 'active' => (int) ($u['active'] ?? 1)];
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        if (($_POST['action'] ?? '') === 'invite' && $u) {
            $r = send_password_link($u, $u['pass'] === '');
            audit('user.invite', 'user', $id, $u['name']);
            flash($r['sent'] ? 'success' : 'error', $r['sent'] ? 'E-mail envoyé à ' . h($u['email']) . ' avec un lien pour choisir son mot de passe.'
                : 'L\'e-mail n\'a pas pu partir (SMTP). Transmettez ce lien vous-même à ' . h($u['name']) . ' : <code class="acopy">' . h($r['link']) . '</code>');
            redirect('utilisateurs/' . $id);
        }
        $v = ['name' => post_str('name', 80), 'email' => mb_strtolower(post_str('email', 160)), 'role' => post_str('role', 10), 'active' => empty($_POST['active']) ? 0 : 1];
        if (!$u) { $v['active'] = 1; }
        $pw = (string) ($_POST['password'] ?? '');
        if ($v['name'] === '') { $errors['name'] = 'Indiquez le nom.'; }
        if (!filter_var($v['email'], FILTER_VALIDATE_EMAIL)) { $errors['email'] = 'Adresse e-mail invalide.'; }
        else {
            $st = db()->prepare('SELECT COUNT(*) FROM users WHERE email = ? AND id != ?');
            $st->execute([$v['email'], $id]);
            if ((int) $st->fetchColumn() > 0) { $errors['email'] = 'Un compte utilise déjà cette adresse.'; }
        }
        if (!isset(ROLE_LABELS[$v['role']])) { $errors['role'] = 'Choisissez un rôle.'; }
        if ($pw !== '' && ($p = password_problem($pw, $v['email']))) { $errors['password'] = $p; }
        if ($u && $u['role'] === 'admin' && $u['active'] && ($v['role'] !== 'admin' || !$v['active']) && admin_count() <= 1) {
            $errors['role'] = 'Il faut garder au moins un administrateur actif.';
        }
        if ($u && (int) $u['id'] === $me['id'] && !$v['active']) { $errors['active'] = 'Vous ne pouvez pas désactiver votre propre compte.'; }
        if (!$errors) {
            if ($u) {
                db()->prepare('UPDATE users SET name = ?, email = ?, role = ?, active = ? WHERE id = ?')->execute([$v['name'], $v['email'], $v['role'], $v['active'], $id]);
                if ($pw !== '') {
                    $hash = password_hash($pw, PASSWORD_DEFAULT);
                    db()->prepare('UPDATE users SET pass = ?, reset_hash = NULL WHERE id = ?')->execute([$hash, $id]);
                    if ($id === $me['id']) { $_SESSION['ph'] = pass_fingerprint($hash); }
                }
                audit('user.update', 'user', $id, $v['name']);
                flash('success', 'Compte de ' . h($v['name']) . ' enregistré.' . ($pw !== '' ? ' Nouveau mot de passe défini : transmettez-le de manière sûre.' : ''));
                redirect('utilisateurs');
            }
            db()->prepare('INSERT INTO users (email, name, role, pass, created_at) VALUES (?, ?, ?, ?, ?)')->execute([$v['email'], $v['name'], $v['role'], $pw !== '' ? password_hash($pw, PASSWORD_DEFAULT) : '', now()]);
            $newId = (int) db()->lastInsertId();
            audit('user.create', 'user', $newId, $v['name']);
            if ($pw === '') {
                $st = db()->prepare('SELECT * FROM users WHERE id = ?');
                $st->execute([$newId]);
                $r = send_password_link($st->fetch(), true);
                flash($r['sent'] ? 'success' : 'error', $r['sent'] ? 'Compte créé. ' . h($v['name']) . ' a reçu un e-mail pour choisir son mot de passe (lien valable 3 jours).'
                    : 'Compte créé, mais l\'e-mail n\'a pas pu partir. Transmettez ce lien à ' . h($v['name']) . ' (valable 3 jours) : <code class="acopy">' . h($r['link']) . '</code>');
            } else {
                flash('success', 'Compte créé avec le mot de passe saisi : transmettez-le de manière sûre.');
            }
            redirect('utilisateurs');
        }
    }
    $o = page_head($u ? $u['name'] : 'Nouveau compte', $u ? h($u['email']) : 'Sans mot de passe saisi, la personne reçoit un e-mail pour choisir le sien.', '', '<a href="' . url('utilisateurs') . '">Utilisateurs</a> / ' . ($u ? 'Modifier' : 'Ajouter'));
    $o .= '<div class="anarrow"><form method="post" class="acard aform" novalidate>' . csrf_field()
        . field('Nom', input('name', $v['name'], ['required' => true, 'maxlength' => 80, 'autocomplete' => 'off']), '', $errors['name'] ?? '', true)
        . field('Adresse e-mail', input('email', $v['email'], ['type' => 'email', 'required' => true, 'autocomplete' => 'off']), 'Identifiant de connexion.', $errors['email'] ?? '', true)
        . field('Rôle', select('role', ROLE_LABELS, $v['role']), 'Éditeur : produits seulement (sans suppression définitive). Administrateur : tout.', $errors['role'] ?? '', true)
        . ($u ? field('Accès', '<label class="acheckline"><input type="checkbox" name="active" value="1"' . ($v['active'] ? ' checked' : '') . '> Compte actif (peut se connecter)</label>', '', $errors['active'] ?? '') : '')
        . field($u ? 'Définir un nouveau mot de passe' : 'Mot de passe (facultatif)', input('password', '', ['type' => 'password', 'autocomplete' => 'new-password']), $u ? 'Laisser vide pour ne pas le changer.' : 'Laisser vide pour envoyer une invitation par e-mail.', $errors['password'] ?? '')
        . '<div class="aform__act"><button class="abtn" type="submit">' . aicon('check') . 'Enregistrer</button><a class="alink" href="' . url('utilisateurs') . '">Annuler</a></div></form>';
    if ($u) {
        $o .= '<section class="acard"><div class="acard__h"><h2>Mot de passe oublié ?</h2><p class="acard__sub">Envoie à ' . h($u['email']) . ' un lien pour choisir un nouveau mot de passe.</p></div>'
            . post_button('utilisateurs/' . $id, $u['pass'] === '' ? 'Renvoyer l\'invitation' : 'Envoyer un lien de réinitialisation', 'abtn abtn--ghost', ['action' => 'invite'], '', 'mail') . '</section>';
    }
    $o .= '</div>';
    layout($u ? $u['name'] : 'Nouveau compte', $o, 'users');
}

function account_page(): void
{
    $me = current_user();
    $errors = [];
    $v = ['name' => $me['name'], 'email' => $me['email']];
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $v = ['name' => post_str('name', 80), 'email' => mb_strtolower(post_str('email', 160))];
        $current = (string) ($_POST['current'] ?? '');
        $pw = (string) ($_POST['password'] ?? '');
        if ($v['name'] === '') { $errors['name'] = 'Indiquez votre nom.'; }
        if (!filter_var($v['email'], FILTER_VALIDATE_EMAIL)) { $errors['email'] = 'Adresse e-mail invalide.'; }
        else {
            $st = db()->prepare('SELECT COUNT(*) FROM users WHERE email = ? AND id != ?');
            $st->execute([$v['email'], $me['id']]);
            if ((int) $st->fetchColumn() > 0) { $errors['email'] = 'Un compte utilise déjà cette adresse.'; }
        }
        $sensitive = $pw !== '' || $v['email'] !== mb_strtolower($me['email']);
        if ($sensitive && !password_verify($current, $me['pass'])) { $errors['current'] = 'Mot de passe actuel incorrect.'; }
        if ($pw !== '') {
            if ($p = password_problem($pw, $v['email'])) { $errors['password'] = $p; }
            elseif ($pw !== (string) ($_POST['password2'] ?? '')) { $errors['password2'] = 'Les deux mots de passe ne sont pas identiques.'; }
        }
        if (!$errors) {
            db()->prepare('UPDATE users SET name = ?, email = ? WHERE id = ?')->execute([$v['name'], $v['email'], $me['id']]);
            if ($pw !== '') {
                $hash = password_hash($pw, PASSWORD_DEFAULT);
                db()->prepare('UPDATE users SET pass = ?, reset_hash = NULL WHERE id = ?')->execute([$hash, $me['id']]);
                $_SESSION['ph'] = pass_fingerprint($hash);
                session_regenerate_id(true);
                audit('password.change', 'user', $me['id'], $v['name']);
            }
            flash('success', 'Votre compte est à jour.' . ($pw !== '' ? ' Nouveau mot de passe enregistré : vos autres sessions ouvertes sont fermées.' : ''));
            redirect('compte');
        }
    }
    $o = page_head('Mon compte', h(ROLE_LABELS[$me['role']] ?? $me['role']) . ' · dernière connexion le ' . h(dt($me['last_login'])));
    $o .= '<div class="anarrow"><form method="post" class="acard aform" novalidate>' . csrf_field()
        . '<div class="acard__h"><h2>Informations</h2></div>'
        . field('Nom', input('name', $v['name'], ['required' => true, 'maxlength' => 80, 'autocomplete' => 'name']), 'Affiché dans le journal des actions.', $errors['name'] ?? '', true)
        . field('Adresse e-mail', input('email', $v['email'], ['type' => 'email', 'required' => true, 'autocomplete' => 'email']), '', $errors['email'] ?? '', true)
        . '<div class="acard__h acard__h--sep"><h2>Changer de mot de passe</h2><p class="acard__sub">Laissez vide pour garder le mot de passe actuel.</p></div>'
        . field('Nouveau mot de passe', input('password', '', ['type' => 'password', 'autocomplete' => 'new-password']), 'Au moins ' . \Tlm\PASSWORD_MIN . ' caractères, avec des lettres et des chiffres.', $errors['password'] ?? '')
        . field('Confirmer le nouveau mot de passe', input('password2', '', ['type' => 'password', 'autocomplete' => 'new-password']), '', $errors['password2'] ?? '')
        . field('Mot de passe actuel', input('current', '', ['type' => 'password', 'autocomplete' => 'current-password']), 'Obligatoire pour changer de mot de passe ou d\'adresse e-mail.', $errors['current'] ?? '')
        . '<div class="aform__act"><button class="abtn" type="submit">' . aicon('check') . 'Enregistrer</button></div></form></div>';
    layout('Mon compte', $o, '');
}
