/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        // token: {
        //     sub: string;
        //     firstName: string;
        //     lastName: string;
        //     avatarUrl: string | URL | null;
        //     email: string;
        //     createdAt: string;
        //     updatedAt: string;
        //     iat: number;
        //     exp: number;
        // };

        token: string;
    }
}
