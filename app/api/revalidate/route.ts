import { createHmac } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

function sign(body: string, secret: string): string {
  return createHmac('sha256', secret).update(body).digest('hex');
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  const deployHook = process.env.VERCEL_DEPLOY_HOOK;

  if (!secret || !deployHook) {
    return NextResponse.json({ error: 'Missing config' }, { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get('sanity-webhook-signature') ?? '';
  const expected = sign(body, secret);

  if (signature !== expected) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  await fetch(deployHook);
  return NextResponse.json({ revalidated: true });
}
