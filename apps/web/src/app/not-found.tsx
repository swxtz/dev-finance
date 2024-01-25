import { AuthNavbar } from "@/components/Auth/AuthNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 | Dev.Finance",
    description: "Ops... Página não encontrada",
};

export default function NotFound() {
    return (
        <div className="">
            <AuthNavbar />
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-5xl text-gray-200">404</h1>
                <h2 className="text-3xl text-gray-200">
                    Página não encontrada
                </h2>
            </div>
        </div>
    );
}
