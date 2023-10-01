import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Dashboard/Header/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

interface DashboardLayoutProps {
    children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className={`h-screen ${poppins.className}`}>
            <div className="mt-12">
                <Link href="/dashboard">
                    <Header />
                </Link>
            </div>
            {children}
        </div>
    );
}
