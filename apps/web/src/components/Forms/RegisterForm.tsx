/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserIcon } from "@/icons/UserIcon";

import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { ValidationErrorMessage } from "../ValidationErrorMessege/ValidationErrorMessage";
import axios from "axios";
import { toast } from "react-toastify";

const createUserFormSchema = z
    .object({
        firstName: z.string().nonempty("O nome é obrigatório"),
        lastName: z.string().nonempty("O sobrenome é obrigatório"),
        email: z
            .string()
            .email("Formato de e-mail invalido")
            .nonempty("O e-mail é obrigatório")
            .toLowerCase(),
        password: z
            .string()
            .min(6, "A senha precisa de no minimo 6 caracteres")
            .nonempty("A senha é obrigatória"),
        confirmPassword: z
            .string()
            .min(1, "A confirmação de senha é obrigatória")
            .nonempty("A senha é obrigatória"),
        // terms: z.literal(true, {
        //     errorMap: () => ({
        //         message: "Você deve aceitar os Termos e Condições",
        //     }),
        // }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não coincidem",
    });

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    async function createUser(data: any) {
        await axios
            .post("http://localhost:3333/users", {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
            })
            .then(() => {
                toast.success("Conta criada com sucesso");
                // setInterval()
            })

            .catch((err) => {
                console.log(err.response.data);
                toast.error(err.response.data.message, {
                    autoClose: 5000,
                    hideProgressBar: false,
                });
            });
    }

    return (
        <form
            className="flex flex-col justify-center mt-14"
            onSubmit={handleSubmit(createUser)}
        >
            <div className="flex flex-col mx-auto gap-7">
                <div className="w-[294px] mx-auto md:w-96">
                    <span className="pl-2">Nome</span>
                    <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
                        <UserIcon color="#9CA3AF" className="mx-3" />
                        <input
                            type="text"
                            id="name"
                            className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
                            placeholder="John"
                            {...register("firstName")}
                        />
                    </div>
                    {errors.firstName && (
                        <ValidationErrorMessage>
                            {errors.firstName.message}
                        </ValidationErrorMessage>
                    )}
                </div>

                <div className="w-[294px] mx-auto md:w-96">
                    <span className="pl-2">Sobrenome</span>
                    <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
                        <UserIcon color="#9CA3AF" className="mx-3" />
                        <input
                            type="text"
                            id="surname"
                            className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
                            placeholder="Doe"
                            {...register("lastName")}
                        />
                    </div>
                    {errors.lastName && (
                        <ValidationErrorMessage>
                            {errors.lastName.message}
                        </ValidationErrorMessage>
                    )}
                </div>

                <div className="w-[294px] mx-auto md:w-96">
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
                    {errors.email && (
                        <ValidationErrorMessage>
                            {errors.email.message}
                        </ValidationErrorMessage>
                    )}
                </div>

                <div className="w-[294px] mx-auto md:w-96">
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
                    {errors.password && (
                        <ValidationErrorMessage>
                            {errors.password.message}
                        </ValidationErrorMessage>
                    )}
                </div>

                <div className="w-[294px] mx-auto md:w-96">
                    <span className="pl-2">Repita sua senha</span>
                    <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
                        <LockIcon color="#9CA3AF" className="mx-3" />
                        <input
                            type="password"
                            id="pass-retype"
                            className="bg-transparent w-full outline-none font-medium placeholder:text-gray-400"
                            placeholder="**********"
                            {...register("confirmPassword")}
                        />
                    </div>
                    {errors.confirmPassword && (
                        <ValidationErrorMessage>
                            {errors.confirmPassword.message}
                        </ValidationErrorMessage>
                    )}
                </div>

                <div className="mx-auto w-[294px] md:w-96">
                    <div className="flex flex-row items-center">
                        {/*  {...register("terms")} */}
                        <Checkbox.Root className="h-6 w-6 bg-zinc-700 rounded-lg outline-none">
                            <Checkbox.Indicator className="text-green-700 flex items-center justify-center">
                                <CheckIcon className="h-5 w-5" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>

                        <span className="ml-2 text-sm text-gray-300 ">
                            você concorda com todos os termos de serviços?
                        </span>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 flex flex-col">
                <button
                    type="submit"
                    className="w-[294px] h-12 bg-green-700 rounded-md font-semibold transition-colors hover:bg-green-800 md:w-96"
                >
                    Entrar
                </button>
                <Link
                    href="/login"
                    className="text-center underline font-semibold text-sm mt-3"
                >
                    Ja possui uma conta? Clique aqui
                </Link>
            </div>
        </form>
    );
}
