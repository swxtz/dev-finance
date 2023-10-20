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
<<<<<<< HEAD
                const response = await fetch("http://localhost:3333/auth", {
=======
                const response = await fetch(`http://localhost:3333/${apiUrl}`, {
>>>>>>> d3eba52 (fix: auth compatibility)
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
                const code = await response.status;
                console.log(code);

                console.log("1");

                console.log("log do user");
                console.log(user);

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
