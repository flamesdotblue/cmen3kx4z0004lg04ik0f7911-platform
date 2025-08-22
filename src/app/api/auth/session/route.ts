import { NextResponse } from 'next/server';

export async function GET() {
  // This endpoint is for client check only
  return NextResponse.json({ ok: true });
}

export const dynamic = 'force-dynamic';
