const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Set RESEND_API_KEY and CONTACT_EMAIL in Vercel project environment variables.
const TO_EMAIL   = process.env.CONTACT_EMAIL;   // e.g. alberto@example.com
const FROM_EMAIL = process.env.FROM_EMAIL;       // e.g. noreply@yourdomain.com

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, telefono, motivo } = req.body || {};

  if (!nombre || !email || !motivo) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to:   TO_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto web: ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${escHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escHtml(email)}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${escHtml(telefono)}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-wrap">${escHtml(motivo)}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
