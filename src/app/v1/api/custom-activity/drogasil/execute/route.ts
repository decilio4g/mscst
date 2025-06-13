import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";

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
  const body = await request.text();
  const token = body?.toString() as string;

  console.log(token);
  const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET_DROGASIL as string;
  console.log({ jwtSecret });
  const decoded = jwt.verify(token, jwtSecret, {
    algorithms: ["HS256"],
  }) as unknown as CustomPayload;
  const decodedArgs = decoded.inArguments[0];

  console.log({ decodedArgs });

  try {
    await axios.post(
      `https://api-rd-internal-qa.raiadrogasil.io/v1/api/msatomjavacommunication/custom-messaging`,
      {
        template: decodedArgs.template,
        title: decodedArgs.title,
        message: decodedArgs.message,
        media_url: decodedArgs.media_url,
        url: decodedArgs.url,
        vucCode: decodedArgs.vuc_code,
        brand: decodedArgs.brand,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic cmQtcWE6c2Vuc2VkaWE=`,
        },
      }
    );
  } catch (err) {
    console.log({ err });
  }

  return NextResponse.json(
    { message: "Publish", success: true },
    { status: 200 }
  );
}
