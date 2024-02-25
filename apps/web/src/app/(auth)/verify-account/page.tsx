import { VerifyAccountForm } from "@/components/Auth/AuthForms/VerifyAccountForm";

export default function VerifyAccountPage() {
    return (
        <div className="container">
            <div className="my-16">
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Verifique sua conta!</h2>
            </div>

            <div className="">
                <VerifyAccountForm />
            </div>
        </div>
    );
}