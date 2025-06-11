import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Publish', success: true }, { status: 200 });
}