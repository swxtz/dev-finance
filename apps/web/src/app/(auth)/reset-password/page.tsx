import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redefina sua senha | Dev.Finance",
    description: "Redefina sua senha",
};

export default function ResetPassword() {
    return (
        <main>
            <div>
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Redefina sua senha</h2>
            </div>
        </main>
    );
}
