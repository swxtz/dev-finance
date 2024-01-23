/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationErrorMessage } from "../ValidationErrorMessege/ValidationErrorMessage";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormButton } from "./FormButton";
import { Loader2 } from "lucide-react";


const loginFormSchema = z.object({
    email: z
        .string()
        .email("Formato de e-mail invalido")
        .nonempty("o e-mail é obrigatório")
        .toLowerCase(),
    password: z
        .string()
        .min(6, "A senha precisa de no minimo 6 caracteres")
        .nonempty("a senha é obrigatória"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function LoginForm() {
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
    });

    const router = useRouter();

    async function loginUser(data: LoginFormData) {

        setIsLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            alert("Credenciais invalidas");
            setIsLoading(false);
            return;
        }

        router.replace("/dashboard");
    }

    const [isLoading, setIsLoading] = useState(false);

    return (
        <form
            className="flex flex-col justify-center mt-14"
            onSubmit={handleSubmit(loginUser)}
        >
            <div className="flex flex-col mx-auto gap-7">
                <div className="">
                    <span className="pl-2">E-mail</span>
                    <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
                        <MailIcon color="#9CA3AF" className="mx-3" />
                        <input
                            type="email"
                            id="email"
                            className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
                            placeholder="john.doe@example.com"
                            {...register("email")}
                        />
                    </div>
                    {errors.email && <ValidationErrorMessage>{errors.email.message}</ValidationErrorMessage>} 
                </div>

                <div className="">
                    <span className="pl-2">Senha</span>
                    <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
                        <LockIcon color="#9CA3AF" className="mx-3" />
                        <input
                            type="password"
                            id="pass"
                            className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
                            placeholder="**********"
                            {...register("password")}
                        />
                    </div>
                    {errors.password && <ValidationErrorMessage>{errors.password.message}</ValidationErrorMessage>} 
                </div>
            </div>

            <div className="mx-auto mt-16 flex flex-col">
                {isLoading ? <FormButton><Loader2 className="animate-spin" /></FormButton> : <FormButton>Entrar</FormButton> }
                <Link
                    href="/register"
                    className="text-center underline font-semibold text-sm mt-3"
                >
                    Não possui uma conta? Clique aqui
                </Link>
            </div>
        </form>
    );
}
