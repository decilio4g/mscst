import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "IP not available";

  console.log({ ip });
  return NextResponse.json({ message: "SAVE", success: true }, { status: 200 });
}
