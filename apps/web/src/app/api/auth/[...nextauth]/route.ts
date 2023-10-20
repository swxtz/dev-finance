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
                const response = await fetch(`http://localhost:3333/auth`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                

                // const response = await axios.post(`${apiUrl}/auth/user`, {
                //     email: credentials?.email,
                //     password: credentials?.password
                // });

                const user = response.json();

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
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
