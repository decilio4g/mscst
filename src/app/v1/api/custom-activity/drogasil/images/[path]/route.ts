import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";
import mime from "mime"; // npm install mime

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string }> }
) {
  const { path } = await params;

  try {
    const filePath = join(process.cwd(), "public", "images", path);
    const file = await fs.readFile(filePath);

    // Detecta o tipo MIME da imagem
    const mimeType = mime.getType(filePath) || "application/octet-stream";

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
      },
    });
       
   
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
