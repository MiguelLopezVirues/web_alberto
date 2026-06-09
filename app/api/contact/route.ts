import { NextRequest, NextResponse } from 'next/server';

// Vercel environment variable required:
//   GOOGLE_SCRIPT_URL — deployed Google Apps Script web app URL

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: 'Cuerpo de la petición inválido.' }, { status: 400 });
  }

  const { nombre, email, motivo } = data;

  if (!nombre || !email || !motivo) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error('GOOGLE_SCRIPT_URL not set');
    return NextResponse.json({ error: 'Error de configuración del servidor.' }, { status: 500 });
  }

  const res = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, timestamp: new Date().toISOString() }),
    redirect: 'follow',
  });

  if (!res.ok) {
    console.error('Apps Script HTTP error', res.status);
    return NextResponse.json({ error: 'No se pudo enviar el mensaje.' }, { status: 502 });
  }

  const gasJson = await res.json().catch(() => null);
  console.log('Apps Script response:', JSON.stringify(gasJson));

  if (!gasJson?.success) {
    return NextResponse.json(
      { error: gasJson?.error || 'Error en el servidor de formulario.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
