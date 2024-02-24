"use client";

import { ValidationErrorMessage } from "@/components/ValidationErrorMessege/ValidationErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormButton } from "../FormButton";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import { ApiError } from "@/types/api-errors";

const loginSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleLogin(data: LoginSchema) {
        setIsLoading(true);
        const response = await api
            .post("/auth", data)
            .catch((error: ApiError) => {
                toast({
                    variant: "destructive",
                    title: "E-mail não verificado",
                    description: error.response.data.message,
                });
            });

        if(response?.status !== 200) {

            setIsLoading(false);
            toast({
                title: "Ops...",
                description: "Algo deu errado, tente novamente mais tarde",
                variant: "destructive",
            });
            return;
        }

        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            if (result.error) {
                console.error(result.error);
            }
            toast({
                title: "Credenciais inválidas",
                description: "E-mail ou senha incorretos",
                variant: "destructive",
            });
            setIsLoading(false);
            return;
        }

        router.replace("/dashboard");
    }
    return (
        <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-4 mx-auto">
                <div className="flex flex-col gap-4 mx-auto">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-semibold text-base text-ui-text"
                        >
                            E-mail
                        </label>
                        <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
                            <input
                                type="email"
                                id="email"
                                placeholder="jonh.doe@example.com"
                                className="bg-inherit outline-none w-full"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && (
                            <ValidationErrorMessage>
                                {errors.email.message}
                            </ValidationErrorMessage>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="font-semibold text-base text-ui-text"
                        >
                            Senha
                        </label>
                        <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                className="bg-inherit outline-none w-full"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && (
                            <ValidationErrorMessage>
                                {errors.password.message}
                            </ValidationErrorMessage>
                        )}
                    </div>
                </div>
                <div className="mx-auto mt-4">
                    {isLoading ? (
                        <FormButton>
                            <Loader2 className="animate-spin mx-auto" />
                        </FormButton>
                    ) : (
                        <FormButton>Entrar</FormButton>
                    )}
                </div>
            </div>
        </form>
    );
}
