import { NextResponse } from 'next/server';

export async function POST() {

  return NextResponse.json({ message: 'STOP', success: true }, { status: 200 });
}