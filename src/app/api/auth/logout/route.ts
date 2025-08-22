import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.redirect(new URL('/auth', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  res.cookies.set('session', '', { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 0 });
  return res;
}
