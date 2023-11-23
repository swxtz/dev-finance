import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            sub: string;
            firstName: string;
            lastName: string;
            avatar: string | null;
            email: string;
            createdAt: string;
            updatedAt: string;
            iat: number;
            exp: number;
        }
    }
}