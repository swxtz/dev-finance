import { LoginForm } from "@/components/Forms/LoginForm";

export default function LoginPage() {
    return (
        <main>
            <div className="">
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">
                    Bem-vindo de volta
                </h2>
                <LoginForm />
            </div>
        </main>
    );
}
