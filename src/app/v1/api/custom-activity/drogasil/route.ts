import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      'public',
      'store',
      'drogasil',
      'index.html'
    );

    const file = await fs.readFile(filePath, 'utf-8');

    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
