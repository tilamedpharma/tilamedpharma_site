<?php
/**
 * TILAMED Pharma · fiche technique PDF d'un produit (mPDF), aux couleurs de la charte :
 * bleu #1C64BA / vert #39A845 en aplats ≈ 70/30, titres marine #12305A en Montserrat, texte en Carlito.
 * Les PDF sont mis en cache (data/cache/pdf) et régénérés dès que le produit change.
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

/** Chemin du PDF (généré au besoin). */
function fiche_pdf(array $p, string $lang): string
{
    $key = substr(md5(implode('|', [VERSION, site()['built'] ?? '', $p['updated_at'], $p['state'], $lang, filemtime(__FILE__)])), 0, 12);
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
        'margin_left' => 16, 'margin_right' => 16, 'margin_top' => 34, 'margin_bottom' => 26, 'margin_header' => 10, 'margin_footer' => 8,
    ]);
    if ($lang === 'ar') { $mpdf->SetDirectionality('rtl'); }
    $t = t($lang);
    $f = $t['fiche'];
    [$name] = ptext($p, $lang, 'name');
    [$use] = ptext($p, $lang, 'use');
    $mpdf->SetTitle($f['techTitle'] . ' · ' . $name);
    $mpdf->SetAuthor('TILAMED Pharma');
    $mpdf->SetCreator('TILAMED Pharma · www.tilamedpharma.com');
    $mpdf->SetSubject($name);

    $c = site()['company'];
    $o = site()['offices'][0];
    $logo = root() . '/brand/Tilamed_logo_principal.png';
    $dir = $lang === 'ar' ? 'rtl' : 'ltr';
    $end = $lang === 'ar' ? 'left' : 'right';
    $start = $lang === 'ar' ? 'right' : 'left';

    $mpdf->SetHTMLHeader('<table width="100%" style="border-collapse:collapse"><tr>'
        . '<td style="text-align:' . $start . '"><img src="' . h($logo) . '" style="height:13mm"></td>'
        . '<td style="text-align:' . $end . ';vertical-align:middle;font-family:' . $fonts['head'] . ';font-size:8pt;color:#1E7A2E;letter-spacing:1.5pt;font-weight:bold">' . h(mb_strtoupper($f['techTitle'])) . '</td>'
        . '</tr></table>'
        . '<table width="100%" style="border-collapse:collapse;margin-top:2.5mm"><tr><td width="70%" style="background:#1C64BA;height:1.1mm;font-size:1pt">&nbsp;</td><td width="30%" style="background:#39A845;height:1.1mm;font-size:1pt">&nbsp;</td></tr></table>');
    $mpdf->SetHTMLFooter('<table width="100%" style="border-collapse:collapse"><tr><td width="70%" style="background:#1C64BA;height:.6mm;font-size:1pt">&nbsp;</td><td width="30%" style="background:#39A845;height:.6mm;font-size:1pt">&nbsp;</td></tr></table>'
        . '<table width="100%" style="font-size:7.5pt;color:#64748B;margin-top:2mm" dir="' . $dir . '"><tr>'
        . '<td style="text-align:' . $start . '"><b style="color:#12305A">' . h($c['legal']) . '</b> · ' . h(implode(', ', $o['address'])) . ' · <span dir="ltr">' . h($o['phone']) . '</span> · ' . h($c['email']) . ' · ' . h($c['web']) . '</td>'
        . '<td style="text-align:' . $end . ';white-space:nowrap">' . h($f['page']) . ' {PAGENO}/{nbpg}</td></tr>'
        . '<tr><td colspan="2" style="text-align:' . $start . ';padding-top:1mm">' . h($f['generated']) . ' ' . h(format_date($lang, gmdate('Y-m-d'))) . ' · ' . h($f['updated']) . ' ' . h(format_date($lang, substr($p['updated_at'], 0, 10))) . ' · RCCM ' . h($c['rccm']) . '</td></tr></table>');

    $st = $t['status'][$p['kind']] ?? ['badge' => '', 'note' => ''];
    $css = '<style>
      body { font-family: ' . $fonts['body'] . '; font-size: 10.5pt; color: #34445A; line-height: 1.45; }
      h1 { font-family: ' . $fonts['head'] . '; font-weight: bold; font-size: 21pt; color: #12305A; margin: 0; line-height: 1.15; }
      .lead { font-size: 12pt; color: #34445A; margin: 3mm 0 0; }
      .eyebrow { font-family: ' . $fonts['head'] . '; font-weight: bold; font-size: 7.5pt; letter-spacing: 1.4pt; color: #1E7A2E; }
      .tag { font-family: ' . $fonts['head'] . '; font-weight: bold; font-size: 7.5pt; color: #1C64BA; background: #ECF3FB; padding: 1mm 2.4mm; border-radius: 2mm; }
      table.spec { width: 100%; border-collapse: collapse; margin-top: 7mm; }
      table.spec td { padding: 2.2mm 3mm; border-bottom: .25mm solid #DDE5EF; vertical-align: top; font-size: 10pt; }
      table.spec td.l { width: 34%; background: #F3F7FB; color: #64748B; }
      table.spec td.v { color: #12305A; font-weight: bold; }
      h2 { font-family: ' . $fonts['head'] . '; font-weight: bold; font-size: 12.5pt; color: #12305A; margin: 8mm 0 0; }
      h3 { font-family: ' . $fonts['head'] . '; font-weight: bold; font-size: 10pt; color: #1C64BA; margin: 5.5mm 0 1.5mm; padding-' . $start . ': 2.5mm; border-' . $start . ': 1mm solid #39A845; }
      p { margin: 0 0 1.6mm; }
      ul { margin: 0 0 1.6mm; padding-' . $start . ': 5mm; }
      li { margin-bottom: .8mm; }
      .disc { margin-top: 8mm; padding: 3mm 4mm; background: #F3F7FB; border-' . $start . ': 1mm solid #1C64BA; font-size: 8.5pt; color: #64748B; }
    </style>';

    $html = $css . '<div dir="' . $dir . '">';
    $html .= '<table width="100%" style="border-collapse:collapse"><tr><td style="vertical-align:top">';
    $html .= '<div class="eyebrow">' . h(mb_strtoupper(($t['groups'][$p['grp']]['label'] ?? '') . ' · ' . cat_label($p['cat'], $lang))) . '</div>';
    $html .= '<h1>' . h($name) . '</h1>';
    if ($use !== '') { $html .= '<p class="lead">' . h($use) . '</p>'; }
    $html .= '<p style="margin-top:3mm"><span class="tag">' . h($st['badge']) . '</span></p>';
    $html .= '</td>';
    $img = $p['image'] !== '' ? data_dir() . '/uploads/images/' . $p['image'] : '';
    if ($img !== '' && is_file($img)) {
        $html .= '<td style="width:52mm;vertical-align:top;text-align:' . $end . '"><img src="' . h($img) . '" style="width:48mm;border:.3mm solid #DDE5EF"></td>';
    }
    $html .= '</tr></table>';

    $html .= '<table class="spec">';
    foreach (spec_rows($p, $lang) as [$label, $value]) {
        $html .= '<tr><td class="l">' . h($label) . '</td><td class="v">' . h($value) . '</td></tr>';
    }
    $html .= '</table>';
    $body = '';
    foreach (FICHE_FIELDS as $field => $key) {
        [$v] = ptext($p, $lang, $field);
        if ($v !== '') { $body .= '<h3>' . h($f['fields'][$key] ?? $field) . '</h3>' . rich_text($v); }
    }
    if ($body !== '') { $html .= '<h2>' . h($f['techTitle']) . '</h2>' . $body; }
    $html .= '<div class="disc">' . h($f['disclaimer']) . '<br>' . h(implode(' · ', $t['ui']['legal'])) . '</div>';
    $html .= '</div>';

    $mpdf->WriteHTML($html);
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
