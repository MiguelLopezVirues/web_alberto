import { createHmac } from 'crypto';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

function verify(body: string, header: string, secret: string): boolean {
  // Sanity sends the raw HMAC-SHA256 hex of the body in sanity-webhook-signature
  const expected = createHmac('sha256', secret).update(body).digest('hex');
  return header === expected;
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  const body = await req.text();

  if (secret) {
    const signature = req.headers.get('sanity-webhook-signature') ?? '';
    if (!verify(body, signature, secret)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
  }

  revalidateTag('sanity', 'max');
  return NextResponse.json({ revalidated: true });
}
