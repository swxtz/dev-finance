import { LoginForm } from "@/components/Auth/AuthForms/LoginForm";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dev.Finance | Login",
    description: "Bem-vindo de volta! Faça login para acessar sua conta.",
};


export default function LoginPage() {
    return (
        <div className="container mx-auto">
            <div className="my-16">
                <h2 className="text-ui-text text-center font-semibold text-2xl">Crie sua conta, e organize suas finanças</h2>
            </div>
            <div className="">
                <LoginForm />
            </div>
        </div>
    );
}
