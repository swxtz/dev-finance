import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

const apiUrl = process.env.API_URL || "";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },

            async authorize(credentials) {
                const response = await fetch(`${apiUrl}/auth`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const user = await response.json();

                if (user && response.ok) {
                    return user;
                }

                return null;
            },
        }),
    ],

    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        strategy: "jwt",
    },

    callbacks: {
        async jwt({ token, session }) {
            return { ...token, ...session };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
