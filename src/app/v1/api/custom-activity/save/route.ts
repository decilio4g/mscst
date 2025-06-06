import { NextResponse } from 'next/server';

export async function POST() {

  return NextResponse.json({ message: 'SAVE', success: true }, { status: 200 });
}