import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get('session');
  let email: string | null = null;
  if (session?.value) {
    try {
      const parsed = JSON.parse(session.value);
      email = typeof parsed.email === 'string' ? parsed.email : null;
    } catch {}
  }
  return NextResponse.json({ ok: true, email });
}

export const dynamic = 'force-dynamic';
