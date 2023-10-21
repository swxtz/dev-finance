import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    const secret = process.env.NEXTAUTH_SECRET;

    const token = await getToken({ req, secret });
    console.log("JSON Web Token", token);
    return NextResponse.json({ token: token});

}