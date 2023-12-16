import NextAuth from "next-auth/next";
import nextAuthOptions from "./provider";


const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };