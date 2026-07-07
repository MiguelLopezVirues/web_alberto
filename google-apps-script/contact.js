/**
 * Google Apps Script — Contact form handler for albertoaguadopsicologo.com
 *
 * SETUP (one-time):
 * 1. Go to script.google.com → New project
 * 2. Paste this entire file, replacing the default code
 * 3. Set NOTIFY_EMAIL below to Alberto's email address
 * 4. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Authorise the permissions when prompted (Sheets + Mail)
 * 6. Copy the deployment URL → set as GOOGLE_SCRIPT_URL in .env.local / Vercel
 *
 * RE-DEPLOYING after code changes:
 * Deploy → Manage deployments → Edit (pencil) → New version → Deploy
 * The URL stays the same.
 */

const SPREADSHEET_ID = '11HzN2-3UOEZs6d37UArLN-ePVPljerPRFrNeqyiVGYE';
const SHEET_NAME     = 'formulario_contacto';
const NOTIFY_EMAIL   = 'albertoaguadopsicologo@gmail.com'; // ← Alberto's email address

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    saveToSheet(data);
    console.log('Sheet saved for: ' + data.nombre);

    sendNotification(data);
    console.log('Email sent to: ' + NOTIFY_EMAIL);

    return ok();
  } catch (err) {
    console.error('doPost error: ' + err.message);
    return error(err.message);
  }
}

// ── Sheet ────────────────────────────────────────────────────────────────────

function saveToSheet({ timestamp, nombre, email, telefono, motivo }) {
  const sheet = getOrCreateSheet();

  sheet.appendRow([
    timestamp ? new Date(timestamp) : new Date(),
    nombre   || '',
    email    || '',
    telefono || '',
    motivo   || '',
  ]);
}

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  let   sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = sheet.getRange(1, 1, 1, 5);
    headers.setValues([['Fecha', 'Nombre', 'Email', 'Teléfono', 'Mensaje']]);
    headers.setFontWeight('bold');
    headers.setBackground('#ccead3');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(5, 400);
  }

  return sheet;
}

// ── Email ────────────────────────────────────────────────────────────────────

function sendNotification({ nombre, email, telefono, motivo }) {
  const subject = 'Nuevo contacto web: ' + nombre;

  const plain = [
    'Nombre:   ' + (nombre   || ''),
    'Email:    ' + (email    || ''),
    'Teléfono: ' + (telefono || '(no indicado)'),
    '',
    'Mensaje:',
    motivo || '',
  ].join('\n');

  console.log('Sending email to: ' + NOTIFY_EMAIL + ' | subject: ' + subject);

  GmailApp.sendEmail(NOTIFY_EMAIL, subject, plain, {
    name:     'Formulario web',
    replyTo:  email,
    htmlBody: buildEmailHtml({ nombre, email, telefono, motivo }),
  });

  console.log('MailApp.sendEmail returned');
}

function buildEmailHtml({ nombre, email, telefono, motivo }) {
  // Palette: tokens/palettes.ts → 'presencia-fluida' (default).
  const paper       = '#f9f9f7';
  const paperAlt    = '#ffffff';
  const ink         = '#1a1c1b';
  const inkSoft     = '#424843';
  const inkGhost    = '#727973';
  const line        = '#c2c8c1';
  const accentDeep  = '#495a51';

  // Web-safe email stacks. Fraunces/Atkinson don't load reliably in Gmail/Outlook,
  // so we fall back to Georgia (serif) + system sans for a warm, editorial read.
  const serif = "Georgia, 'Times New Roman', serif";
  const sans  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

  const phoneRow = telefono
    ? '<tr><td style="padding:8px 0 0;font:14px/1.5 ' + sans + ';color:' + inkSoft + '">'
      + '<span style="color:' + inkGhost + '">Tel&nbsp;·&nbsp;</span>'
      + '<a href="tel:' + esc(telefono) + '" style="color:' + inkSoft + ';text-decoration:none">' + esc(telefono) + '</a>'
      + '</td></tr>'
    : '';

  const replyBody = encodeURIComponent('Hola ' + nombre + ',\n\n');

  return '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1"></head>'
    + '<body style="margin:0;padding:0;background:' + paper + ';font-family:' + sans + ';color:' + ink + '">'
    + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + paper + ';padding:56px 20px">'
    + '<tr><td align="center">'

    // Card
    + '<table role="presentation" width="580" cellpadding="0" cellspacing="0" '
    + 'style="max-width:580px;width:100%;background:' + paperAlt + ';border:1px solid ' + line + ';border-radius:4px">'

    // Letterhead — hairline rule + small caps eyebrow + serif line
    + '<tr><td style="padding:44px 44px 0">'
    + '<div style="width:32px;height:1px;background:' + line + ';margin:0 0 22px;font-size:0;line-height:0">&nbsp;</div>'
    + '<p style="margin:0 0 10px;font:11px/1 ' + sans + ';font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:' + inkGhost + '">'
    + 'Nuevo mensaje</p>'
    + '<p style="margin:0;font:22px/1.3 ' + serif + ';color:' + ink + ';letter-spacing:-.005em">'
    + esc(nombre) + ' <span style="color:' + inkGhost + ';font-style:italic">te ha escrito</span>'
    + '</p>'
    + '</td></tr>'

    // Message — the star of the email, generous line-height, serif to feel like a letter
    + '<tr><td style="padding:28px 44px 0">'
    + '<p style="margin:0;font:16px/1.75 ' + serif + ';color:' + inkSoft + ';white-space:pre-wrap">'
    + esc(motivo) + '</p>'
    + '</td></tr>'

    // Divider
    + '<tr><td style="padding:32px 44px 0">'
    + '<div style="height:1px;background:' + line + ';font-size:0;line-height:0">&nbsp;</div>'
    + '</td></tr>'

    // Sender details — quiet, no uppercase labels, just prefixed with a hairline dot
    + '<tr><td style="padding:20px 44px 0">'
    + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
    + '<tr><td style="font:14px/1.5 ' + sans + ';color:' + inkSoft + '">'
    + '<span style="color:' + inkGhost + '">De&nbsp;·&nbsp;</span>'
    + '<a href="mailto:' + esc(email) + '" style="color:' + inkSoft + ';text-decoration:none;border-bottom:1px solid ' + line + '">'
    + esc(email) + '</a>'
    + '</td></tr>'
    + phoneRow
    + '</table>'
    + '</td></tr>'

    // Reply link — quiet text-link with arrow (mirrors the site's CtaLink), not a solid button
    + '<tr><td style="padding:36px 44px 44px">'
    + '<a href="mailto:' + esc(email) + '?subject=Re:%20Tu%20consulta&body=' + replyBody + '" '
    + 'style="font:14px/1 ' + sans + ';font-weight:600;color:' + accentDeep + ';text-decoration:none;letter-spacing:.01em">'
    + 'Responder a ' + esc(nombre)
    + ' <span style="display:inline-block;padding-left:4px">&rarr;</span>'
    + '</a>'
    + '</td></tr>'

    + '</table>'

    // Outer footer — outside the card, ultra-quiet
    + '<p style="margin:20px 0 0;font:11px/1.5 ' + sans + ';color:' + inkGhost + ';text-align:center">'
    + 'Formulario &middot; albertoaguadopsicologo.com'
    + '</p>'

    + '</td></tr></table></body></html>';
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function error(message) {
  return ContentService
    .createTextOutput(JSON.stringify({ success: false, error: message }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Manual test (run from the editor to verify email delivery) ───────────────

function testEnvio() {
  const data = {
    timestamp: new Date().toISOString(),
    nombre:    'Prueba Manual',
    email:     NOTIFY_EMAIL,
    telefono:  '600 000 000',
    motivo:    'Este es un mensaje de prueba enviado desde el editor de Apps Script.',
  };
  saveToSheet(data);
  console.log('Sheet row written');
  sendNotification(data);
  console.log('Done');
}
