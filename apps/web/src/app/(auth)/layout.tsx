import { LogoIcons } from "@/icons/LogoIcons";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
    children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-800">
            <div className="py-16 flex items-center justify-center">
                <Link href="/">
                    <LogoIcons />
                </Link>
            </div>
            {children}
        </div>
    );
}
