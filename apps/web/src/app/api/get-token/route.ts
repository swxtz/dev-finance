import { getServerSession } from "next-auth";
import nextAuthOptions from "../auth/[...nextauth]/provider";

export async function GET() {
    const token = await getServerSession(nextAuthOptions);
    return Response.json(token);

}