import { createHmac } from 'crypto';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

function verify(body: string, header: string, secret: string): boolean {
  // Sanity sends: "t=<timestamp>,v1=<hex_signature>"
  // Signature is HMAC-SHA256 of "<timestamp>.<body>"
  const ts = header.match(/t=([^,]+)/)?.[1];
  const v1 = header.match(/v1=([^,]+)/)?.[1];
  if (!ts || !v1) return false;
  const expected = createHmac('sha256', secret).update(`${ts}.${body}`).digest('hex');
  return v1 === expected;
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json({ error: 'Missing config' }, { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get('sanity-webhook-signature') ?? '';

  if (!verify(body, signature, secret)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  revalidateTag('sanity', 'max');
  return NextResponse.json({ revalidated: true });
}
