"use client";

import { useQueryConfirmEmail } from "@/hooks/querys/confirm-email";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function VerifyAccountPage() {
    const params = useSearchParams();

    const token = params.get("token");

    if (!token) return null;

    const { isSuccess, isLoading, isError } = useQueryConfirmEmail(token);

    if (isError) {
        return (
            <div className="container">
                <div className="my-16">
                    <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Erro ao verificar sua conta!</h2>
                </div>
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="container">
                <div className="my-16">
                    <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Conta verificada com sucesso!</h2>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="container">
                <div className="my-16">
                    <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Verificando...</h2>
                    <Loader2 className="animate-spin" />
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="my-16">
                <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Verifique sua conta!</h2>
            </div>
        </div>
    );
}