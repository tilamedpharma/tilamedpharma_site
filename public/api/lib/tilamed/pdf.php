<?php
/**
 * TILAMED Pharma · fiche technique PDF d'un produit (mPDF), aux couleurs de la charte :
 * bandeau bleu #1C64BA + liseré vert #39A845 (aplats ≈ 70/30, jamais de dégradé), titres Montserrat, texte Carlito,
 * marine #12305A pour les titres et les valeurs. Les PDF sont mis en cache (data/cache/pdf) et régénérés
 * dès que le produit, son visuel ou ce gabarit changent.
 */
declare(strict_types=1);

namespace Tlm;

require_once __DIR__ . '/render.php';

function pdf_fonts(string $lang): array
{
    return match ($lang) {
        'ar' => ['body' => 'plexar', 'head' => 'plexar'],
        'zh' => ['body' => 'notosc', 'head' => 'notosc'],
        default => ['body' => 'carlito', 'head' => 'montserrat'],
    };
}

/** Attribut dir pour un texte affiché dans une langue de repli (ex. français dans une fiche arabe). */
function pdf_dir(string $used, string $lang): string
{
    return $lang === 'ar' && $used !== 'ar' ? ' dir="ltr" style="direction:ltr"' : '';
}

/** Texte latin dans une fiche arabe : encadré de marques LRE…PDF pour garder sa ponctuation à droite. */
function pdf_iso(string $html, string $used, string $lang): string
{
    return $lang === 'ar' && $used !== 'ar' ? "\u{202A}" . $html . "\u{202C}" : $html;
}

/** Chemin du PDF (généré au besoin). */
function fiche_pdf(array $p, string $lang): string
{
    $vis = visual($p);
    $key = substr(md5(implode('|', [VERSION, site()['built'] ?? '', $p['updated_at'], $p['state'], $lang, filemtime(__FILE__), $vis['file'] !== '' ? (string) @filemtime($vis['file']) : '', cat_label($p['cat'], $lang)])), 0, 12);
    $file = data_dir() . '/cache/pdf/' . $p['id'] . '-' . $lang . '-' . $key . '.pdf';
    if (is_file($file)) { return $file; }
    foreach (glob(data_dir() . '/cache/pdf/' . $p['id'] . '-' . $lang . '-*.pdf') ?: [] as $old) { @unlink($old); }

    require_once root() . '/api/lib/mpdf/autoload.php';
    // Cache des polices mPDF : un dossier par version (changer VERSION après un changement de polices).
    $tmp = data_dir() . '/tmp/mpdf-' . VERSION;
    @mkdir($tmp, 0750, true);
    $fonts = pdf_fonts($lang);
    $mpdf = new \Mpdf\Mpdf([
        'mode' => 'utf-8', 'format' => 'A4', 'tempDir' => $tmp,
        'fontDir' => [root() . '/api/lib/fonts'],
        'fontdata' => [
            'carlito' => ['R' => 'Carlito-Regular.ttf', 'B' => 'Carlito-Bold.ttf', 'I' => 'Carlito-Italic.ttf'],
            'montserrat' => ['R' => 'Montserrat-SemiBold.ttf', 'B' => 'Montserrat-Bold.ttf'],
            'plexar' => ['R' => 'IBMPlexSansArabic-Regular.ttf', 'B' => 'IBMPlexSansArabic-Bold.ttf', 'useOTL' => 0xFF, 'useKashida' => 75],
            'notosc' => ['R' => 'NotoSansSC-Regular.ttf', 'B' => 'NotoSansSC-Bold.ttf'],
        ],
        'default_font' => $fonts['body'],
        // Marges latérales nulles : le bandeau va d'un bord à l'autre ; le contenu a ses propres marges (.in).
        'margin_left' => 0, 'margin_right' => 0, 'margin_top' => 27, 'margin_bottom' => 27, 'margin_header' => 0, 'margin_footer' => 0,
    ]);
    if ($lang === 'ar') { $mpdf->SetDirectionality('rtl'); }
    $t = t($lang);
    $f = $t['fiche'];
    [$name, $nl] = ptext($p, $lang, 'name');
    [$use, $ul] = ptext($p, $lang, 'use');
    $mpdf->SetTitle($f['techTitle'] . ' · ' . $name);
    $mpdf->SetAuthor('TILAMED Pharma');
    $mpdf->SetCreator('TILAMED Pharma · www.tilamedpharma.com');
    $mpdf->SetSubject($name);

    $c = site()['company'];
    $o = site()['offices'][0];
    $rtl = $lang === 'ar';
    $dir = $rtl ? 'rtl' : 'ltr';
    $start = $rtl ? 'right' : 'left';
    $end = $rtl ? 'left' : 'right';
    $H = $fonts['head'];
    $url = site_url() . product_url($p, $lang);
    $groupLabel = $t['groups'][$p['grp']]['label'] ?? '';
    $st = $t['status'][$p['kind']] ?? ['badge' => '', 'note' => ''];

    // Pas d'espacement des lettres en arabe (il casse les liaisons) ni en chinois.
    $ls = fn (string $s): string => in_array($lang, ['ar', 'zh'], true) ? (string) preg_replace('/letter-spacing:\s*[\d.]+pt/', 'letter-spacing:0', $s) : $s;

    /* ---------- En-tête et pied de page (toutes les pages) ---------- */
    $mpdf->SetHTMLHeader($ls('<div style="padding:9mm 16mm 0"><table width="100%" style="border-collapse:collapse" dir="' . $dir . '"><tr>'
        . '<td style="text-align:' . $start . ';vertical-align:middle"><img src="' . h(root() . '/brand/Tilamed_logo_principal.png') . '" style="height:11mm"></td>'
        . '<td style="text-align:' . $end . ';vertical-align:middle;font-family:' . $H . ';font-size:7pt;color:#64748B;letter-spacing:1.2pt">'
        . '<span style="color:#1E7A2E;font-weight:bold">' . h(mb_strtoupper($f['techTitle'])) . '</span><br>' . h(mb_strtoupper($groupLabel)) . '</td></tr></table></div>'));
    $mpdf->SetHTMLFooter('<div style="padding:0 16mm 8mm">'
        . '<table width="100%" style="border-collapse:collapse"><tr><td width="70%" style="background:#1C64BA;height:.7mm;font-size:1pt">&nbsp;</td><td width="30%" style="background:#39A845;height:.7mm;font-size:1pt">&nbsp;</td></tr></table>'
        . '<table width="100%" style="border-collapse:collapse;font-size:7.3pt;color:#64748B;margin-top:2.5mm" dir="' . $dir . '"><tr>'
        . '<td style="text-align:' . $start . ';line-height:1.5"><b style="color:#12305A">' . h($c['legal']) . '</b> · ' . h(implode(', ', $o['address'])) . ' · RCCM ' . h($c['rccm'])
        . '<br>' . h($f['generated']) . ' ' . h(format_date($lang, gmdate('Y-m-d'))) . ' · ' . h($f['updated']) . ' ' . h(format_date($lang, substr($p['updated_at'], 0, 10))) . '</td>'
        . '<td style="text-align:' . $end . ';vertical-align:bottom;white-space:nowrap;font-family:' . $H . ';font-weight:bold;color:#12305A">' . h($f['page']) . ' {PAGENO} / {nbpg}</td></tr></table></div>');

    $nameSize = mb_strlen($name) > 48 ? 17 : (mb_strlen($name) > 30 ? 20 : 25);
    $css = '<style>
      body { font-family: ' . $fonts['body'] . '; font-size: 10.5pt; color: #34445A; line-height: 1.5; }
      .in { margin: 0 16mm; }
      .eyebrow { font-family: ' . $H . '; font-weight: bold; font-size: 7.5pt; letter-spacing: 1.6pt; color: #1E7A2E; }
      .band-eyebrow { font-family: ' . $H . '; font-weight: bold; font-size: 7.5pt; letter-spacing: 1.6pt; color: #BFE6C4; }
      h1 { font-family: ' . $H . '; font-weight: bold; font-size: ' . $nameSize . 'pt; color: #FFFFFF; margin: 2.5mm 0 0; line-height: 1.12; }
      .band-lead { font-size: 11.5pt; color: #E3EDF9; margin-top: 3mm; line-height: ' . ($lang === 'zh' ? '7.5mm' : '1.5') . '; }
      .pill { font-family: ' . $H . '; font-weight: bold; font-size: 7.5pt; color: #1C64BA; background-color: #FFFFFF; }
      .pill2 { font-family: ' . $H . '; font-weight: bold; font-size: 7.5pt; color: #FFFFFF; background-color: #17549C; }
      .facts td { background: #F3F7FB; padding: 3.2mm 4mm 3.6mm; vertical-align: top; }
      .fl { font-family: ' . $H . '; font-weight: bold; font-size: 6.5pt; letter-spacing: 1.1pt; color: #64748B; }
      .fv { font-family: ' . $H . '; font-weight: bold; font-size: 10pt; color: #12305A; margin-top: 1.2mm; line-height: 1.3; }
      .sec { margin-top: 7mm; }
      .num { font-family: ' . $H . '; font-weight: bold; font-size: 9pt; color: #39A845; }
      h2 { font-family: ' . $H . '; font-weight: bold; font-size: 13pt; color: #12305A; margin: 0; }
      .rule { margin-top: 2.2mm; height: .4mm; background: #DDE5EF; font-size: 1pt; }
      table.spec { width: 100%; border-collapse: collapse; margin-top: 2mm; }
      table.spec td { padding: 2.4mm 0; border-bottom: .25mm solid #E6ECF2; vertical-align: top; font-size: 10pt; }
      table.spec td.l { width: 38%; color: #64748B; padding-' . $end . ': 4mm; }
      table.spec td.v { color: #12305A; font-family: ' . $H . '; font-weight: bold; font-size: 9.5pt; }
      .body { margin-top: 3mm; }
      .body p { margin: 0 0 1.8mm; }
      .body ul { margin: 0 0 1.8mm; padding-' . $start . ': 5mm; }
      .body li { margin-bottom: 1mm; }
      .box { margin-top: 7mm; padding: 5mm 6mm; background: #ECF3FB; border-' . $start . ': 1.2mm solid #1C64BA; }
      .box-t { font-family: ' . $H . '; font-weight: bold; font-size: 10.5pt; color: #12305A; }
      .contact td { padding: 4.5mm 6mm; vertical-align: top; }
      .ct { font-family: ' . $H . '; font-weight: bold; font-size: 7pt; letter-spacing: 1.2pt; color: #BFE6C4; }
      .cv { font-size: 10pt; color: #FFFFFF; margin-top: 1.5mm; line-height: 1.55; }
      .disc { margin-top: 6mm; font-size: 8pt; color: #64748B; line-height: 1.45; }
    </style>';

    /* ---------- Bandeau ---------- */
    $html = $css . '<div dir="' . $dir . '" style="background:#1C64BA;padding:8mm 16mm 8mm;margin-top:3mm">'
        . '<table width="100%" style="border-collapse:collapse" dir="' . $dir . '"><tr><td style="vertical-align:middle;padding-' . $end . ':8mm">'
        . '<div class="band-eyebrow">' . h(mb_strtoupper($groupLabel . ' · ' . cat_label($p['cat'], $lang))) . '</div>'
        . '<h1' . pdf_dir($nl, $lang) . '>' . pdf_iso(h($name), $nl, $lang) . '</h1>'
        . ($use !== '' ? '<div class="band-lead"' . pdf_dir($ul, $lang) . '>' . pdf_iso(h($use), $ul, $lang) . '</div>' : '')
        // Espaceur : mPDF ignore marges et interlignes des blocs en cellule de tableau (lignes chinoises plus hautes).
        . '<div style="font-size:' . ($lang === 'zh' ? '14pt' : '8pt') . '">&nbsp;</div><div><span class="pill">&nbsp; ' . h($st['badge']) . ' &nbsp;</span>'
        . ($p['phase'] ? '&nbsp; <span class="pill2">&nbsp; P' . (int) $p['phase'] . ' &nbsp;</span>' : '') . '</div>'
        . '</td>';
    if ($vis['file'] !== '' && is_file($vis['file'])) {
        $html .= '<td style="width:66mm;vertical-align:middle;text-align:' . $end . '"><div style="background:#FFFFFF;padding:1.6mm;border-radius:2.5mm">'
            . '<img src="' . h($vis['file']) . '" style="width:62.8mm;border-radius:1.8mm"></div>'
            . (!$vis['photo'] ? '<div style="font-size:6.5pt;color:#CFE0F5;margin-top:1.4mm;text-align:' . $end . '">' . h($t['ui']['legal'][1] ?? '') . '</div>' : '')
            . '</td>';
    }
    $html .= '</tr></table></div>'
        . '<table width="100%" style="border-collapse:collapse" dir="ltr"><tr><td width="70%" style="background:#1C64BA;height:2.2mm;font-size:1pt">&nbsp;</td><td width="30%" style="background:#39A845;height:2.2mm;font-size:1pt">&nbsp;</td></tr></table>';

    /* ---------- En bref ---------- */
    $facts = [];
    if ($p['formats']) { $facts[] = [$t['ui']['formats'], implode(' · ', array_map(fn ($x) => format_label($lang, (string) $x), $p['formats']))]; }
    if ($p['route'] !== '') { $facts[] = [$t['ui']['route'], route_label($lang, $p['route'])]; }
    if ($p['pack'] !== '' && isset($t['packs'][$p['pack']])) { $facts[] = [$t['ui']['pack'], $t['packs'][$p['pack']]]; }
    if ($p['species'] !== '' && isset($f['speciesList'][$p['species']])) { $facts[] = [$f['species'], $f['speciesList'][$p['species']]]; }
    $facts[] = [$f['status'], $st['badge']];
    $facts = array_slice($facts, 0, 4);
    $html .= '<div class="in" dir="' . $dir . '" style="margin-top:7mm"><div class="eyebrow">' . h(mb_strtoupper($f['keyFacts'])) . '</div>'
        . '<table class="facts" width="100%" style="border-collapse:separate;border-spacing:1.6mm 0;margin:2.5mm -1.6mm 0" dir="' . $dir . '"><tr>';
    foreach ($facts as [$label, $value]) {
        $html .= '<td width="' . round(100 / count($facts)) . '%"><div class="fl">' . h(mb_strtoupper($label)) . '</div><div class="fv">' . h($value) . '</div></td>';
    }
    $html .= '</tr></table>';

    /* ---------- Sections numérotées ---------- */
    $n = 0;
    $section = function (string $title, string $body) use (&$n): string {
        $n++;
        return '<div class="sec"><table width="100%" style="border-collapse:collapse;border-bottom:.3mm solid #DDE5EF"><tr><td class="num" style="width:9mm;padding-bottom:2mm;vertical-align:baseline">' . str_pad((string) $n, 2, '0', STR_PAD_LEFT) . '</td>'
            . '<td style="padding-bottom:2mm;vertical-align:baseline"><h2>' . h($title) . '</h2></td></tr></table>' . $body . '</div>';
    };
    $spec = '<table class="spec">';
    $shown = array_column($facts, 0);
    foreach (spec_rows($p, $lang) as [$label, $value]) {
        if (in_array($label, $shown, true)) { continue; } // déjà dans « En bref »
        $spec .= '<tr><td class="l">' . h($label) . '</td><td class="v">' . h($value) . '</td></tr>';
    }
    $html .= $section($f['characteristics'], $spec . '</table>');
    $filled = 0;
    foreach (FICHE_FIELDS as $field => $k) {
        [$v, $vl] = ptext($p, $lang, $field);
        if ($v === '') { continue; }
        $filled++;
        $html .= $section($f['fields'][$k] ?? $field, '<div class="body"' . pdf_dir($vl, $lang) . '>' . rich_text($v) . '</div>');
    }
    if ($filled === 0) {
        $html .= '<div class="box"><div class="box-t">' . h($f['onRequestTitle']) . '</div><div style="margin-top:1.8mm">' . h($f['onRequest']) . '</div></div>';
    }

    /* ---------- Contact commercial ---------- */
    $html .= '<table class="contact" width="100%" style="border-collapse:collapse;margin-top:7mm;page-break-inside:avoid" dir="' . $dir . '"><tr>'
        . '<td style="background:#12305A;width:58%"><div class="ct">' . h(mb_strtoupper($f['contactTitle'])) . '</div>'
        . '<div class="cv" dir="ltr" style="text-align:' . $start . '">' . h($c['email']) . '<br>' . h($o['phone']) . '<br>' . h($c['web']) . '</div></td>'
        . '<td style="background:#39A845"><div class="ct" style="color:#EBF6ED">' . h(mb_strtoupper($f['web'])) . '</div>'
        . '<div class="cv" dir="ltr" style="font-size:8.5pt;text-align:' . $start . '"><a href="' . h($url) . '" style="color:#FFFFFF;text-decoration:none">' . h(str_replace('https://', '', $url)) . '</a></div></td></tr></table>';
    $html .= '<div class="disc">' . h($f['disclaimer']) . ' ' . h(implode(' · ', $t['ui']['legal'])) . '</div></div>';

    $mpdf->WriteHTML($ls($html));
    $part = $file . '.' . bin2hex(random_bytes(4)) . '.tmp';
    $mpdf->Output($part, \Mpdf\Output\Destination::FILE);
    rename($part, $file);
    return $file;
}

/** Nom du fichier téléchargé : TILAMED_Fiche-technique_chlorure-de-sodium-0-9_FR.pdf */
function fiche_filename(array $p, string $lang): string
{
    return 'TILAMED_Fiche-technique_' . $p['slug'] . '_' . strtoupper($lang) . '.pdf';
}
