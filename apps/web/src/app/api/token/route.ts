import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const secret = process.env.NEXTAUTH_SECRET;

    const token = await getToken({ req, secret });
    // console.log("JSON Web Token", token);

    
    return NextResponse.json(token);

}