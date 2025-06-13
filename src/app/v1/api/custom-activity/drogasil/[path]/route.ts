import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string } }
) {

  const { path } = await params;

  try {
    const filePath = join(
      process.cwd(),
      "public",
      "store",
      "drogasil",
      path
    );
    const file = await fs.readFile(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": file ? "application/json" : "application/javascript",
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
