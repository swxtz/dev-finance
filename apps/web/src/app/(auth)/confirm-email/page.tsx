"use client";

import { useQueryConfirmEmail } from "@/hooks/querys/confirm-email";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function VerifyAccountPage() {
  const params = useSearchParams();

  const token = params.get("token");

  if (!token) {
    return (
      <div className="container">
        <div className="my-16 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-1xl text-gray-200 text-center font-bold md:text-2xl">
                            Erro ao verificar email!
            </h2>
            <span className="text-stone-400 text-center text-sm w-[400px] leading-relaxed">
                            Esse codigo expirou, por favor clique no botão
                            abaixo para mandar um no link no seu email
            </span>
          </div>

          <Link
            href="/login"
            className="bg-green-500 py-2 px-3 rounded-lg font-semibold text-stone-200 transition-all hover:bg-green-700 hover:text-stone-400"
          >
                        Fazer login
          </Link>
        </div>
      </div>
    );
  }

  const { isSuccess, isLoading, isError } = useQueryConfirmEmail(token);

  if (isError) {
    return (
      <div className="container">
        <div className="my-16 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-1xl text-gray-200 text-center font-bold md:text-2xl">
                            Erro ao verificar email!
            </h2>
            <span className="text-stone-400 text-center text-sm w-[400px] leading-relaxed">
                            Esse codigo expirou, por favor clique no botão
                            abaixo para mandar um no link no seu email
            </span>
          </div>

          <Link
            href="/login"
            className="bg-green-500 py-2 px-3 rounded-lg font-semibold text-stone-200 transition-all hover:bg-green-700 hover:text-stone-400"
          >
                        Fazer login
          </Link>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="container">
        <div className="my-16 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-1xl text-gray-200 text-center font-bold md:text-2xl">
                            Email verificado com sucesso!
            </h2>
            <span className="text-stone-400 text-center text-sm w-[400px] leading-relaxed">
                            Email verificado com sucesso, você ja pode começar a
                            organizar sua vida financeira.
            </span>
          </div>

          <Link
            href="/login"
            className="bg-green-500 py-2 px-3 rounded-lg font-semibold text-stone-200 transition-all hover:bg-green-700 hover:text-stone-400"
          >
                        Fazer login
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="my-16 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-1xl text-gray-200 text-center font-bold md:text-2xl">
                            Verificando o seu e-mail...
            </h2>
            <span>
              <Loader2
                className="animate-spin text-state-200"
                size={48}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="my-16 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-1xl text-gray-200 text-center font-bold md:text-2xl">
                        Email verificado com sucesso!
          </h2>
          <span className="text-stone-400 text-center text-sm w-[400px] leading-relaxed">
                        Email verificado com sucesso, você ja pode começar a
                        organizar sua vida financeira.
          </span>
        </div>

        <Link
          href="/login"
          className="bg-green-500 py-2 px-3 rounded-lg font-semibold text-stone-200 transition-all hover:bg-green-700 hover:text-stone-400"
        >
                    Fazer login
        </Link>
      </div>
    </div>
  );
}
