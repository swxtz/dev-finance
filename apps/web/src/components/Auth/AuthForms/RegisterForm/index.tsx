"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ValidationErrorMessage } from "@/components/ValidationErrorMessege/ValidationErrorMessage";
import { useMutationPostUser } from "@/hooks/mutations/post-user";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { FormButton } from "../FormButton";

export function RegisterForm() {
  const { mutateAsync } = useMutationPostUser();
  const [loading, isLoading] = useState(false);

  const createAccountSchema = z
    .object({
      firstName: z
        .string()
        .min(2, "Nome deve ter no mínimo 2 caracteres"),
      lastName: z
        .string()
        .min(2, "Sobrenome deve ter no mínimo 2 caracteres"),
      email: z.string().email("E-mail inválido"),
      password: z
        .string()
        .min(8, "Senha deve ter no mínimo 8 caracteres"),
      confirmPassword: z
        .string()
        .min(8, "Senha deve ter no mínimo 8 caracteres"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
    });

    type CreateAccountSchema = z.infer<typeof createAccountSchema>;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<CreateAccountSchema>({
      resolver: zodResolver(createAccountSchema),
    });

    function createAccount(data: CreateAccountSchema) {
      isLoading(true);
      mutateAsync({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      }).finally(() => {
        isLoading(false);
      });
    }
    return (
      <form
        className="flex flex-col mx-auto"
        onSubmit={handleSubmit(createAccount)}
      >
        <div className="flex flex-col gap-4 items-center">
          {/* field name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-semibold text-base text-ui-text"
            >
                        Nome
            </label>
            <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
              <input
                type="text"
                id="email"
                placeholder="John"
                className="bg-inherit outline-none w-full"
                {...register("firstName")}
              />
            </div>
            {errors.firstName && (
              <ValidationErrorMessage>
                {errors.firstName.message}
              </ValidationErrorMessage>
            )}
          </div>

          {/* field surname */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="surname"
              className="font-semibold text-base text-ui-text"
            >
                        Sobrenome
            </label>
            <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
              <input
                type="text"
                id="surname"
                placeholder="Doe"
                className="bg-inherit outline-none w-full"
                {...register("lastName")}
              />
            </div>
            {errors.lastName && (
              <ValidationErrorMessage>
                {errors.lastName.message}
              </ValidationErrorMessage>
            )}
          </div>

          {/* field email */}
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
                placeholder="john.doe@example.com"
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

          {/* field password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-semibold text-base text-ui-text"
            >
                        Senha
            </label>
            <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
              <input
                type="password"
                id="password"
                placeholder="***********"
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

          {/* field confirm-password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm-password"
              className="font-semibold text-base text-ui-text"
            >
                        Repita sua senha
            </label>
            <div className="px-4 py-3 bg-zinc-500 rounded-[8px] w-72 md:w-[500px]">
              <input
                type="password"
                id="confirm-password"
                placeholder="***********"
                className="bg-inherit outline-none w-full"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <ValidationErrorMessage>
                {errors.confirmPassword.message}
              </ValidationErrorMessage>
            )}
          </div>

          <p className="text-sm text-gray-300 mx-auto text-center font-medium">
                    Ao clicar em “Criar conta” você concorda com <br />{" "}
            <Link href="#" className="underline font-semibold">
                        todos os termos de serviços
            </Link>
                    .
          </p>
        </div>

        {/* <button
                type="submit"
                className="mt-12 bg-green-500 rounded-lg w-96 text-gray-200 py-3 mx-auto font-semibold text-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
                {loading ? (<Loader2 className="animate-spin mx-auto" />) : "Criar conta" }
            </button> */}

        {loading ? (
          <FormButton type="submit">
            <Loader2 className="animate-spin mx-auto" />
          </FormButton>
        ) : (
          <FormButton type="submit">Criar conta</FormButton>
        )}
      </form>
    );
}
