import { SociaisButtons } from "@/components/Auth/SociaisButtons/SociaisButtons";
import { LoginForm } from "@/components/Forms/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dev.Finance | Login",
};


export default function LoginPage() {
    return (
        <main>
            <div className="">
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">
                    Bem-vindo de volta
                </h2>
                <LoginForm />
                <div className="flex justify-center items-center gap-4 my-8">
                    <div className="w-[80px] bg-zinc-700 h-0.5"></div>
                    <p className="text-gray-300 text-lg">ou</p>
                    <div className="w-[80px] bg-zinc-700 h-0.5"></div>
                </div>
                <SociaisButtons />
                <div className="mb-20"></div>
            </div>
        </main>
    );
}
