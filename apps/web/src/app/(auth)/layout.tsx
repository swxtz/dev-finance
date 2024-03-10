import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import nextAuthOptions from "../api/auth/[...nextauth]/provider";
import { Inter } from "next/font/google";
import { AuthNavbar } from "@/components/Auth/AuthNavbar";

interface AuthLayoutProps {
    children: ReactNode;
}

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="container">
      <AuthNavbar />
      <main className={inter.className}>{children}</main>
    </div>
  );
}
