<?php
/**
 * TILAMED Pharma · visuels « étiquette » des produits (SVG en ligne), en attendant les vraies photos.
 * Le contenant dépend du type de produit : flacon(s) de perfusion à la taille du volume, boîte d'ampoules,
 * flacon d'antibiotique ou de vaccin, flacon buvable, sac de croquettes, boîte vétérinaire (plaquette ou flacon).
 * L'étiquette porte le nom et le dosage du produit dans la langue de la page.
 * La marque TILAMED n'apparaît que sur les produits fabriqués (iv, liquids) ; les dispositifs médicaux gardent
 * l'illustration de leur catégorie (packshot() renvoie alors '').
 * Prototype et planche de validation : src/components/produits/packshot.ts (même dessin).
 */
declare(strict_types=1);

namespace Tlm;

const PK_BLUE = '#1C64BA';
const PK_GREEN = '#39A845';
const PK_NAVY = '#12305A';
const PK_SKY = '#4F9BE0';

function pk_n(float $n): string
{
    $r = round($n, 1);
    return $r == (int) $r ? (string) (int) $r : (string) $r;
}

/** Largeur approximative d'un texte, en « em » (Montserrat gras ; idéogrammes plus larges, arabe plus étroit). */
function pk_em(string $s): float
{
    $w = 0.0;
    foreach (mb_str_split($s) as $ch) {
        if (preg_match('/[\x{2E80}-\x{9FFF}\x{F900}-\x{FAFF}\x{FF00}-\x{FFEF}]/u', $ch)) { $w += 1.0; }
        elseif (preg_match('/\p{Arabic}/u', $ch)) { $w += 0.5; }
        elseif ($ch === ' ') { $w += 0.3; }
        elseif (preg_match('/\p{Lu}|\d/u', $ch)) { $w += 0.72; }
        else { $w += 0.62; }
    }
    return $w;
}

/** Coupe un texte en lignes d'une largeur maximale (en em). Les idéogrammes se coupent entre caractères. */
function pk_wrap(string $s, float $maxEm, int $maxLines): array
{
    $cjk = (bool) preg_match('/[\x{2E80}-\x{9FFF}]/u', $s) && !str_contains(trim($s), ' ');
    $tokens = $cjk ? mb_str_split($s) : (preg_split('/\s+/u', trim($s)) ?: []);
    $sep = $cjk ? '' : ' ';
    $lines = [];
    $cur = '';
    foreach ($tokens as $w) {
        $next = $cur === '' ? $w : $cur . $sep . $w;
        if ($cur !== '' && pk_em($next) > $maxEm) { $lines[] = $cur; $cur = $w; } else { $cur = $next; }
    }
    if ($cur !== '') { $lines[] = $cur; }
    if (count($lines) > $maxLines) {
        $lines = array_slice($lines, 0, $maxLines);
        $last = $lines[$maxLines - 1];
        $lines[$maxLines - 1] = ($cjk ? mb_substr($last, 0, max(1, mb_strlen($last) - 1)) : (string) preg_replace('/\s*\S*$/u', '', $last)) . '…';
    }
    return $lines;
}

/** « Chlorure de sodium 0,9 % » → ['Chlorure de sodium', '0,9 %'] ; sans dosage dans le nom : 1re présentation. */
function pk_split(string $name, array $formats): array
{
    if (preg_match('/^(.*?)\s(\d[\d,.]*\s?(?:%|mg\/ml|mg|g|UI|IU|MUI|MIU|µg|ml)(?:\b|\s|\/|$).*)$/u', $name, $m)
        && mb_strlen($m[1]) > 2
        && !preg_match('/[\x{2E80}-\x{9FFF}]|\p{Arabic}|\p{L}{4,}/u', $m[2])) {
        return [$m[1], $m[2]];
    }
    return [$name, (string) ($formats[0] ?? '')];
}

function pk_text(float $x, float $y, float $fs, string $weight, string $fill, string $s, string $anchor = ''): string
{
    return '<text x="' . pk_n($x) . '" y="' . pk_n($y) . '" font-size="' . pk_n($fs) . '" font-weight="' . $weight . '" fill="' . $fill . '"'
        . ($anchor !== '' ? ' text-anchor="' . $anchor . '"' : '') . '>' . h($s) . '</text>';
}

/** Étiquette : bandeau de couleur (marque), nom sur 2-3 lignes, dosage, mention en pied. */
function pk_label(float $x, float $y, float $w, float $h, string $accent, array $l): string
{
    $name = (string) $l['name'];
    $dose = (string) ($l['dose'] ?? '');
    $sub = (string) ($l['sub'] ?? '');
    $fs0 = (float) ($l['fs'] ?? ($w >= 110 ? 11 : ($w >= 80 ? 9 : 7.5)));
    $inner = $w - 12;
    // Mot trop long pour l'étiquette (« Métronidazole ») : corps réduit.
    $longest = 0.0;
    // (idéogrammes : on coupe entre caractères, seul compte un bloc de 4 caractères)
    $words = preg_match('/[\x{2E80}-\x{9FFF}]/u', $name) ? [mb_substr($name, 0, 4)] : (preg_split('/\s+/u', $name) ?: []);
    foreach ($words as $word) { $longest = max($longest, pk_em($word)); }
    $fs = $longest > 0 ? min($fs0, $inner / ($longest * 1.06)) : $fs0;
    $band = max(8, $fs * 1.55);
    $lines = pk_wrap($name, $inner / $fs, $h > $band + $fs * 6 ? 3 : 2);
    $o = '<rect x="' . pk_n($x) . '" y="' . pk_n($y) . '" width="' . pk_n($w) . '" height="' . pk_n($h) . '" rx="3" fill="#fff" stroke="#DCE5F0"/>';
    $o .= '<path d="M' . pk_n($x) . ' ' . pk_n($y + 3) . 'a3 3 0 0 1 3-3h' . pk_n($w - 6) . 'a3 3 0 0 1 3 3v' . pk_n($band - 3) . 'h-' . pk_n($w) . 'z" fill="' . $accent . '"/>';
    if (!empty($l['brand'])) {
        $o .= '<text x="' . pk_n($x + 6) . '" y="' . pk_n($y + $band * 0.7) . '" font-size="' . pk_n($fs * 0.62) . '" font-weight="800" letter-spacing="' . pk_n($fs * 0.12) . '" fill="#fff">TILAMED</text>';
        $o .= '<rect x="' . pk_n($x + $w - 6 - $fs * 0.9) . '" y="' . pk_n($y + $band * 0.28) . '" width="' . pk_n($fs * 0.9) . '" height="' . pk_n($band * 0.44) . '" rx="1" fill="' . ($accent === PK_GREEN ? PK_BLUE : PK_GREEN) . '"/>';
    }
    $yy = $y + $band + $fs * 1.45;
    foreach ($lines as $ln) {
        $o .= pk_text($x + 6, $yy, $fs, '700', PK_NAVY, $ln);
        $yy += $fs * 1.22;
    }
    if ($dose !== '') {
        $yy += $fs * 0.25;
        $max = $inner / $fs;
        $dfs = $fs * (pk_em($dose) > $max ? 0.78 : 1.05);
        while (pk_em($dose) * $dfs > $inner * 1.02 && mb_strlen($dose) > 4) { $dose = mb_substr(rtrim($dose, '…'), 0, -1) . '…'; }
        $o .= pk_text($x + 6, $yy, $dfs, '800', $accent, $dose);
    }
    if ($sub !== '') {
        $sfs = $fs * 0.72;
        while (pk_em($sub) * $sfs > $inner && mb_strlen($sub) > 4) { $sub = mb_substr(rtrim($sub, '…'), 0, -1) . '…'; }
        $o .= '<rect x="' . pk_n($x + 6) . '" y="' . pk_n($y + $h - $fs * 1.7) . '" width="' . pk_n($w - 12) . '" height="1" fill="#E3EAF3"/>';
        $o .= pk_text($x + 6, $y + $h - $fs * 0.6, $sfs, '600', '#64748B', $sub);
    }
    return $o;
}

function pk_floor(float $cx, float $rx): string
{
    return '<ellipse cx="' . pk_n($cx) . '" cy="266" rx="' . pk_n($rx) . '" ry="7" fill="' . PK_NAVY . '" opacity=".10"/>';
}

/** Flacon de perfusion en polypropylène, debout. */
function pk_bottle(float $cx, float $base, float $w, float $h, string $accent, array $lab): string
{
    $top = $base - $h;
    $sh = $h * 0.13;
    $nw = $w * 0.34;
    $o = '<rect x="' . pk_n($cx - $w / 2) . '" y="' . pk_n($top + $sh) . '" width="' . pk_n($w) . '" height="' . pk_n($h - $sh) . '" rx="' . pk_n($w * 0.11) . '" fill="#F7FAFD" stroke="#C6D6E8" stroke-width="1.5"/>';
    $o .= '<path d="M' . pk_n($cx - $w / 2 + 5) . ' ' . pk_n($top + $sh + 3) . 'L' . pk_n($cx - $nw / 2) . ' ' . pk_n($top + 6) . 'H' . pk_n($cx + $nw / 2) . 'L' . pk_n($cx + $w / 2 - 5) . ' ' . pk_n($top + $sh + 3) . 'Z" fill="#F7FAFD" stroke="#C6D6E8" stroke-width="1.5" stroke-linejoin="round"/>';
    $o .= '<rect x="' . pk_n($cx - $w / 2 + 4) . '" y="' . pk_n($top + $sh + $h * 0.08) . '" width="' . pk_n($w - 8) . '" height="' . pk_n($h - $sh - $h * 0.08 - 4) . '" rx="' . pk_n($w * 0.09) . '" fill="' . PK_SKY . '" opacity=".10"/>';
    $o .= '<rect x="' . pk_n($cx - $nw / 2 - 3) . '" y="' . pk_n($top - 10) . '" width="' . pk_n($nw + 6) . '" height="17" rx="3" fill="' . $accent . '"/>';
    $o .= '<rect x="' . pk_n($cx - $nw / 2 + 1) . '" y="' . pk_n($top - 14) . '" width="' . pk_n($nw - 2) . '" height="6" rx="2" fill="' . $accent . '" opacity=".55"/>';
    for ($i = 0; $i < 5; $i++) {
        $o .= '<rect x="' . pk_n($cx + $w / 2 - 9) . '" y="' . pk_n($top + $sh + $h * 0.2 + $i * $h * 0.1) . '" width="' . ($i % 2 ? 3 : 5) . '" height="1.2" fill="#9FB6D0"/>';
    }
    $o .= '<rect x="' . pk_n($cx - $w / 2 + 5) . '" y="' . pk_n($top + $sh + 10) . '" width="3" height="' . pk_n($h * 0.55) . '" rx="1.5" fill="#fff" opacity=".9"/>';
    $lw = $w - 22;
    if (($lab['sub'] ?? '') === ($lab['dose'] ?? '')) { $lab['sub'] = ''; }
    $lab['fs'] = $lab['fs'] ?? ($w >= 110 ? 12.5 : ($w >= 95 ? 11 : 9.5));
    return $o . pk_label($cx - $lw / 2 - 2, $top + $sh + $h * 0.17, $lw, $h * 0.56, $accent, $lab);
}

/** Boîte en perspective : la face avant sert d'étiquette. */
function pk_box(float $bx, float $by, float $bw, float $bh, string $accent, array $lab): string
{
    $o = '<path d="M' . pk_n($bx) . ' ' . pk_n($by) . 'l26 -16h' . pk_n($bw) . 'l-26 16z" fill="#EEF3F9" stroke="#D3DEEA" stroke-linejoin="round"/>';
    $o .= '<path d="M' . pk_n($bx + $bw) . ' ' . pk_n($by) . 'l26 -16v' . pk_n($bh) . 'l-26 16z" fill="#DCE5EF" stroke="#D3DEEA" stroke-linejoin="round"/>';
    $o .= '<path d="M' . pk_n($bx + $bw + 8) . ' ' . pk_n($by - 6) . 'l10 -6v' . pk_n($bh * 0.5) . 'l-10 6z" fill="' . $accent . '" opacity=".35"/>';
    $o .= pk_label($bx, $by, $bw, $bh, $accent, $lab + ['fs' => 15]);
    return $o . '<rect x="' . pk_n($bx) . '" y="' . pk_n($by + $bh - 5) . '" width="' . pk_n($bw) . '" height="5" fill="' . ($accent === PK_GREEN ? PK_BLUE : PK_GREEN) . '" opacity=".9"/>';
}

function pk_ampoule(float $cx, float $base, string $accent, float $s = 1.05): string
{
    $p = fn (float $dx, float $dy) => pk_n($cx + $dx * $s) . ' ' . pk_n($base - $dy * $s);
    $o = '<path d="M' . $p(-11, 6) . 'V' . pk_n($base - 56 * $s) . 'Q' . $p(-11, 64) . ' ' . $p(-4, 70) . 'V' . pk_n($base - 80 * $s) . 'Q' . $p(-9, 86) . ' ' . $p(-6, 94)
        . 'Q' . $p(-3, 100) . ' ' . $p(0, 110) . 'Q' . $p(3, 100) . ' ' . $p(6, 94) . 'Q' . $p(9, 86) . ' ' . $p(4, 80) . 'V' . pk_n($base - 70 * $s) . 'Q' . $p(11, 64) . ' ' . $p(11, 56)
        . 'V' . pk_n($base - 6 * $s) . 'Q' . $p(11, 0) . ' ' . $p(5, 0) . 'H' . pk_n($cx - 5 * $s) . 'Q' . $p(-11, 0) . ' ' . $p(-11, 6) . 'Z" fill="#F4F9FE" stroke="#B5CAE2" stroke-width="1.3"/>';
    $o .= '<rect x="' . pk_n($cx - 9 * $s) . '" y="' . pk_n($base - 44 * $s) . '" width="' . pk_n(18 * $s) . '" height="' . pk_n(42 * $s) . '" rx="' . pk_n(5 * $s) . '" fill="' . PK_SKY . '" opacity=".28"/>';
    $o .= '<rect x="' . pk_n($cx - 5 * $s) . '" y="' . pk_n($base - 78 * $s) . '" width="' . pk_n(10 * $s) . '" height="' . pk_n(3 * $s) . '" rx="1" fill="' . $accent . '"/>';
    return $o . '<rect x="' . pk_n($cx - 7 * $s) . '" y="' . pk_n($base - 52 * $s) . '" width="' . pk_n(2.4 * $s) . '" height="' . pk_n(40 * $s) . '" rx="1" fill="#fff"/>';
}

function pk_vial(float $cx, float $base, string $accent, bool $powder, string $dose): string
{
    $o = '<rect x="' . pk_n($cx - 27) . '" y="' . pk_n($base - 72) . '" width="54" height="72" rx="7" fill="#F4F9FE" stroke="#B5CAE2" stroke-width="1.3"/>';
    $o .= $powder
        ? '<rect x="' . pk_n($cx - 24) . '" y="' . pk_n($base - 26) . '" width="48" height="23" rx="5" fill="#fff" stroke="#E2E9F2"/>'
        : '<rect x="' . pk_n($cx - 24) . '" y="' . pk_n($base - 40) . '" width="48" height="37" rx="5" fill="' . PK_SKY . '" opacity=".25"/>';
    $o .= '<rect x="' . pk_n($cx - 17) . '" y="' . pk_n($base - 82) . '" width="34" height="11" fill="#E7EDF4" stroke="#B5CAE2"/>';
    $o .= '<rect x="' . pk_n($cx - 21) . '" y="' . pk_n($base - 98) . '" width="42" height="18" rx="3" fill="#AEB9C6"/>';
    $o .= '<rect x="' . pk_n($cx - 18) . '" y="' . pk_n($base - 105) . '" width="36" height="9" rx="3" fill="' . $accent . '"/>';
    $o .= '<rect x="' . pk_n($cx - 27) . '" y="' . pk_n($base - 62) . '" width="54" height="30" fill="#fff" stroke="#DCE5F0"/><rect x="' . pk_n($cx - 27) . '" y="' . pk_n($base - 62) . '" width="54" height="6" fill="' . $accent . '"/>';
    $d = mb_strlen($dose) > 11 ? mb_substr($dose, 0, 10) . '…' : $dose;
    $o .= pk_text($cx, $base - 42, 8, '800', PK_NAVY, $d, 'middle');
    return $o . '<rect x="' . pk_n($cx - 23) . '" y="' . pk_n($base - 68) . '" width="2.4" height="60" rx="1" fill="#fff"/>';
}

/** Flacon buvable en verre ambré, bouchon cranté. */
function pk_oral(float $cx, float $base, string $accent, array $lab): string
{
    $w = 88; $h = 150; $top = $base - $h;
    $L = $cx - $w / 2; $R = $cx + $w / 2;
    $o = '<path d="M' . pk_n($L) . ' ' . pk_n($base - 10) . 'V' . pk_n($top + 46) . 'Q' . pk_n($L) . ' ' . pk_n($top + 26) . ' ' . pk_n($cx - 16) . ' ' . pk_n($top + 18) . 'V' . pk_n($top + 6) . 'H' . pk_n($cx + 16)
        . 'V' . pk_n($top + 18) . 'Q' . pk_n($R) . ' ' . pk_n($top + 26) . ' ' . pk_n($R) . ' ' . pk_n($top + 46) . 'V' . pk_n($base - 10) . 'Q' . pk_n($R) . ' ' . pk_n($base) . ' ' . pk_n($R - 10) . ' ' . pk_n($base)
        . 'H' . pk_n($L + 10) . 'Q' . pk_n($L) . ' ' . pk_n($base) . ' ' . pk_n($L) . ' ' . pk_n($base - 10) . 'Z" fill="#8A4B1C"/>';
    $o .= '<path d="M' . pk_n($L + 6) . ' ' . pk_n($top + 50) . 'V' . pk_n($base - 14) . '" stroke="#fff" stroke-opacity=".35" stroke-width="4" stroke-linecap="round"/>';
    $o .= '<rect x="' . pk_n($cx - 21) . '" y="' . pk_n($top - 14) . '" width="42" height="24" rx="3" fill="' . $accent . '"/>';
    for ($i = 0; $i < 7; $i++) { $o .= '<rect x="' . pk_n($cx - 18 + $i * 6) . '" y="' . pk_n($top - 12) . '" width="1.6" height="20" fill="#fff" opacity=".25"/>'; }
    return $o . pk_label($L + 4, $top + 52, $w - 8, 80, $accent, $lab + ['fs' => 8.5]);
}

/** Sac d'aliment pour animaux (sans marque). */
function pk_sack(float $cx, float $base, float $w, float $h, string $accent, string $name, string $weight): string
{
    $top = $base - $h;
    $zig = '';
    for ($i = 0; $i <= 10; $i++) { $zig .= 'L' . pk_n($cx - $w / 2 + 2 + ($i * ($w - 4)) / 10) . ' ' . pk_n($top + ($i % 2 ? 0 : 5)); }
    $o = '<path d="M' . pk_n($cx - $w / 2 + 2) . ' ' . pk_n($top + 5) . $zig . 'L' . pk_n($cx + $w / 2 - 2) . ' ' . pk_n($top + 12) . 'L' . pk_n($cx + $w / 2 + 4) . ' ' . pk_n($base - 12)
        . 'Q' . pk_n($cx + $w / 2 + 5) . ' ' . pk_n($base) . ' ' . pk_n($cx + $w / 2 - 8) . ' ' . pk_n($base) . 'H' . pk_n($cx - $w / 2 + 8) . 'Q' . pk_n($cx - $w / 2 - 5) . ' ' . pk_n($base) . ' '
        . pk_n($cx - $w / 2 - 4) . ' ' . pk_n($base - 12) . 'L' . pk_n($cx - $w / 2 + 2) . ' ' . pk_n($top + 12) . 'Z" fill="' . $accent . '"/>';
    $o .= '<rect x="' . pk_n($cx - $w / 2 + 2) . '" y="' . pk_n($top + 14) . '" width="' . pk_n($w - 4) . '" height="3" fill="#fff" opacity=".35"/>';
    $lw = $w - 22; $ly = $top + $h * 0.3; $lh = $h * 0.52;
    $o .= '<rect x="' . pk_n($cx - $lw / 2) . '" y="' . pk_n($ly) . '" width="' . pk_n($lw) . '" height="' . pk_n($lh) . '" rx="6" fill="#fff"/>';
    $fs = $w > 110 ? 11 : 8.5;
    $o .= '<circle cx="' . pk_n($cx) . '" cy="' . pk_n($ly + $fs * 2) . '" r="' . pk_n($fs * 1.25) . '" fill="' . $accent . '" opacity=".14"/>';
    $o .= '<g transform="translate(' . pk_n($cx - $fs * 0.75) . ' ' . pk_n($ly + $fs * 1.25) . ') scale(' . pk_n($fs / 16) . ')" fill="' . $accent . '"><circle cx="5" cy="4" r="2.6"/><circle cx="12" cy="2.6" r="2.6"/><circle cx="19" cy="4" r="2.6"/><circle cx="2" cy="10" r="2.4"/><path d="M12 8c4 0 8 5 8 8s-3 3-8 3-8 0-8-3 4-8 8-8z"/></g>';
    $yy = $ly + $fs * 4.4;
    foreach (pk_wrap($name, ($lw - 8) / $fs, 2) as $ln) { $o .= pk_text($cx, $yy, $fs, '800', PK_NAVY, $ln, 'middle'); $yy += $fs * 1.2; }
    return $o . pk_text($cx, $ly + $lh - $fs * 0.8, $fs * 1.15, '800', $accent, $weight, 'middle');
}

function pk_blister(float $x, float $y): string
{
    $o = '<g transform="rotate(-10 ' . pk_n($x + 60) . ' ' . pk_n($y + 30) . ')"><rect x="' . pk_n($x) . '" y="' . pk_n($y) . '" width="120" height="60" rx="6" fill="#E9EEF4" stroke="#C3CFDC"/>';
    for ($r = 0; $r < 2; $r++) {
        for ($c = 0; $c < 5; $c++) {
            $o .= '<circle cx="' . pk_n($x + 16 + $c * 22) . '" cy="' . pk_n($y + 17 + $r * 26) . '" r="8" fill="#fff" stroke="#C3CFDC"/><circle cx="' . pk_n($x + 14 + $c * 22) . '" cy="' . pk_n($y + 15 + $r * 26) . '" r="2.4" fill="#fff" opacity=".9"/>';
        }
    }
    return $o . '</g>';
}

function pk_ml(string $f): int
{
    return preg_match('/(\d+)\s?ml/i', $f, $m) ? (int) $m[1] : 500;
}

function pk_height(int $v): float
{
    return $v >= 500 ? 186 : ($v >= 250 ? 160 : ($v >= 100 ? 120 : 100));
}

/** Visuel « étiquette » d'un produit (SVG), ou '' si le produit garde l'illustration de sa catégorie. */
function packshot(array $p, string $lang): string
{
    if ($p['grp'] === 'devices') { return ''; }
    $t = t($lang);
    [$full] = ptext($p, $lang, 'name');
    $formats = array_map(fn ($f) => format_label($lang, (string) $f), $p['formats']);
    [$name, $dose] = pk_split($full, $formats);
    $accent = ($p['grp'] === 'nutrition' || in_array($p['cat'], ['serum-special', 'antibiotic', 'vet-food-cat'], true)) ? PK_GREEN : PK_BLUE;
    $brand = in_array($p['kind'], ['iv', 'liquids'], true);
    $packLabel = $p['pack'] !== '' ? (string) ($t['packs'][$p['pack']] ?? '') : '';
    $sub = implode(' · ', array_filter([$packLabel, $p['route'] !== '' ? route_label($lang, $p['route']) : '']));
    $body = '';
    $bb = [0, 0, 400, 300];
    $line = (string) $p['line'];

    if ($line === 'lvp') {
        $fm = $formats ? array_slice($formats, 0, 2) : ['500 ml'];
        if (count($fm) === 1) {
            $hh = pk_height(pk_ml($fm[0]));
            $bb = [120, 262 - $hh - 16, 160, $hh + 24];
            $lab = $hh >= 150 ? ['brand' => $brand, 'name' => $name, 'dose' => $dose, 'sub' => $fm[0]]
                : ['brand' => $brand, 'name' => $name, 'dose' => $dose === $fm[0] ? $dose : $dose . ' · ' . $fm[0]];
            $body .= pk_floor(200, 92) . pk_bottle(200, 262, $hh >= 150 ? 128 : 104, $hh, $accent, $lab);
        } else {
            $same = count(array_filter($fm, fn ($f) => str_contains($f, '·'))) === count($fm);
            usort($fm, fn ($a, $b) => pk_ml($b) <=> pk_ml($a));
            [$a, $b] = $fm;
            $part = fn (string $f, int $i) => trim(explode('·', $f)[$i] ?? $f);
            $bb = [92, 62, 238, 212];
            $body .= pk_floor(212, 130);
            $body .= pk_bottle(160, 262, 120, pk_height(pk_ml($a)), $accent, ['brand' => $brand, 'name' => $name, 'dose' => $same ? $part($a, 0) : $dose, 'sub' => $same ? $part($a, 1) : $a]);
            $hb = pk_height(pk_ml($b));
            $body .= pk_bottle(272, 262, $hb > 150 ? 104 : 84, $hb, $accent, ['brand' => $brand, 'name' => $name, 'dose' => $same ? $part($b, 0) : $dose, 'sub' => $same ? $part($b, 1) : $b, 'fs' => $hb > 150 ? 10.5 : 9.5]);
        }
    } elseif ($line === 'svp') {
        $bb = [66, 90, 304, 184];
        $body .= pk_floor(215, 140) . pk_box(142, 112, 196, 150, $accent, ['brand' => $brand, 'name' => $name, 'dose' => $dose, 'sub' => $sub]);
        $body .= pk_ampoule(84, 270, $accent) . pk_ampoule(114, 270, $accent);
    } elseif ($line === 'atb' || $line === 'cold') {
        $bb = [66, 90, 304, 184];
        $body .= pk_floor(215, 140) . pk_box(150, 112, 190, 150, $accent, ['brand' => $brand, 'name' => $name, 'dose' => $dose, 'sub' => $sub]);
        $body .= pk_vial(100, 270, $accent, $line === 'atb', $dose !== '' ? $dose : (string) ($formats[0] ?? ''));
    } elseif ($line === 'oral') {
        $bb = [66, 96, 310, 178];
        $body .= pk_floor(220, 150) . pk_box(186, 120, 160, 142, $accent, ['brand' => $brand, 'name' => $name, 'dose' => (string) ($formats[0] ?? $dose), 'sub' => $packLabel]);
        $body .= pk_oral(118, 268, $accent, ['brand' => $brand, 'name' => $name, 'dose' => '']);
    } elseif ($p['cat'] === 'vet-food-dog' || $p['cat'] === 'vet-food-cat') {
        $fm = array_slice($formats, 0, 2);
        if (count($fm) > 1) {
            $bb = [66, 64, 262, 210];
            $body .= pk_floor(205, 140) . pk_sack(250, 264, 150, 196, $accent, $name, $fm[1]) . pk_sack(128, 268, 104, 140, $accent, $name, $fm[0]);
        } else {
            $bb = [110, 64, 180, 210];
            $body .= pk_floor(200, 90) . pk_sack(200, 264, 150, 196, $accent, $name, (string) ($fm[0] ?? ''));
        }
    } elseif ($p['grp'] === 'vet') {
        $f = implode(' · ', $formats);
        $raw = implode(' ', $p['formats']);
        if (preg_match('/ml/i', $raw)) {
            $bb = [66, 96, 310, 178];
            $body .= pk_floor(220, 150) . pk_box(186, 120, 160, 142, $accent, ['brand' => false, 'name' => $name, 'dose' => $f]);
            $body .= pk_oral(118, 268, $accent, ['brand' => false, 'name' => $name, 'dose' => '']);
        } elseif (preg_match('/\bcp\b/i', $raw)) {
            $bb = [24, 86, 352, 188];
            $body .= pk_floor(215, 150) . pk_box(160, 108, 186, 150, $accent, ['brand' => false, 'name' => $name, 'dose' => $f]);
            $body .= pk_blister(30, 210);
        } else {
            $bb = [100, 86, 232, 182];
            $body .= pk_floor(230, 110) . pk_box(120, 108, 196, 150, $accent, ['brand' => false, 'name' => $name, 'dose' => $f]);
        }
    } else {
        return '';
    }
    // Cadrage 4:3 autour de la scène
    $pad = 14;
    [$x, $y, $w, $h] = [$bb[0] - $pad, $bb[1] - $pad, $bb[2] + $pad * 2, $bb[3] + $pad * 2];
    if ($w / $h > 4 / 3) { $nh = $w * 3 / 4; $y -= ($nh - $h) / 2; $h = $nh; } else { $nw = $h * 4 / 3; $x -= ($nw - $w) / 2; $w = $nw; }
    return '<svg class="pk" viewBox="' . pk_n($x) . ' ' . pk_n($y) . ' ' . pk_n($w) . ' ' . pk_n($h) . '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' . $body . '</svg>';
}
