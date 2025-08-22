import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({ email: '', password: '' }));

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  // Demo auth: accept any non-empty credentials
  const res = NextResponse.json({ ok: true });
  res.cookies.set('session', JSON.stringify({ email }), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });
  return res;
}
