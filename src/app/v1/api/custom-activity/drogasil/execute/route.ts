import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type CustomPayload = {
  inArguments: [
    {
      template: string;
      title: string;
      message: string;
      media_url: string;
      url: string;
      vuc_code: string;
      brand: string;
    }
  ];
};

export async function POST(request: NextRequest) {
  const token = request.body?.toString() as string;
  const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET_DROGASIL as string;

  const decoded = jwt.verify(token, jwtSecret, {
    algorithms: ["HS256"],
  }) as unknown as CustomPayload;
  const decodedArgs = decoded.inArguments[0];

  console.log({ decodedArgs });

  return NextResponse.json(
    { message: "Publish", success: true },
    { status: 200 }
  );
}
