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
const NOTIFY_EMAIL   = 'miguel.lopezvirues@gmail.com'; // ← Alberto's email address

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
  const accent      = '#476250';
  const accentDeep  = '#607b68';
  const accentLight = '#ccead3';
  const ink         = '#1a1c1b';
  const inkGhost    = '#727973';
  const inkMuted    = '#424843';
  const border      = '#c2c8c1';
  const ground      = '#f9f9f7';

  function row(label, value) {
    return '<tr>'
      + '<td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;'
      + 'letter-spacing:.07em;text-transform:uppercase;color:' + inkGhost + ';'
      + 'white-space:nowrap;vertical-align:top;border-bottom:1px solid ' + border + '">' + label + '</td>'
      + '<td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:15px;color:' + ink + ';'
      + 'vertical-align:top;border-bottom:1px solid ' + border + '">' + value + '</td>'
      + '</tr>';
  }

  return '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"></head>'
    + '<body style="margin:0;padding:0;background:' + ground + ';font-family:Arial,sans-serif;">'
    + '<table width="100%" cellpadding="0" cellspacing="0" style="background:' + ground + ';padding:40px 16px">'
    + '<tr><td align="center">'
    + '<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">'

    // Header
    + '<tr><td style="background:' + accentDeep + ';padding:28px 32px;border-radius:8px 8px 0 0">'
    + '<p style="margin:0;font-size:13px;color:rgba(255,255,255,.7);letter-spacing:.06em;text-transform:uppercase">Nuevo contacto desde</p>'
    + '<p style="margin:4px 0 0;font-size:20px;font-weight:600;color:#fff;letter-spacing:-.01em">albertoaguadopsicologo.com</p>'
    + '</td></tr>'

    // Eyebrow
    + '<tr><td style="background:' + accentLight + ';padding:10px 32px">'
    + '<p style="margin:0;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:' + accent + '">'
    + 'Alguien quiere ponerse en contacto contigo</p>'
    + '</td></tr>'

    // Data rows
    + '<tr><td style="background:#fff;border:1px solid ' + border + ';border-top:none">'
    + '<table width="100%" cellpadding="0" cellspacing="0">'
    + row('Nombre', esc(nombre))
    + row('Email', '<a href="mailto:' + esc(email) + '" style="color:' + accentDeep + ';text-decoration:none">' + esc(email) + '</a>')
    + (telefono ? row('Teléfono', '<a href="tel:' + esc(telefono) + '" style="color:' + accentDeep + ';text-decoration:none">' + esc(telefono) + '</a>') : '')
    + '<tr>'
    + '<td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;'
    + 'letter-spacing:.07em;text-transform:uppercase;color:' + inkGhost + ';vertical-align:top">Mensaje</td>'
    + '<td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:15px;color:' + ink + ';'
    + 'vertical-align:top;line-height:1.65;white-space:pre-wrap">' + esc(motivo) + '</td>'
    + '</tr>'
    + '</table></td></tr>'

    // Reply CTA
    + '<tr><td style="background:#fff;padding:20px 32px 28px;border:1px solid ' + border + ';border-top:none;border-radius:0 0 8px 8px;text-align:center">'
    + '<a href="mailto:' + esc(email) + '?subject=Re:%20Tu%20consulta&body=Hola%20' + encodeURIComponent(nombre) + ',"'
    + ' style="display:inline-block;font-size:14px;font-weight:700;color:#fff;background:' + accentDeep + ';'
    + 'padding:12px 28px;border-radius:6px;text-decoration:none">Responder a ' + esc(nombre) + '</a>'
    + '</td></tr>'

    // Footer
    + '<tr><td style="padding:20px 0 0;text-align:center">'
    + '<p style="margin:0;font-size:11px;color:' + inkMuted + '">Alberto Aguado Calvo · Psicólogo General Sanitario</p>'
    + '</td></tr>'

    + '</table></td></tr></table></body></html>';
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
