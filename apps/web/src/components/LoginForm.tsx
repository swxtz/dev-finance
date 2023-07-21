"use client";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import z from "zod";

export function LoginForm() {
  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);               

    try {
      const email = z.string().email({ message: "Email inválido"}).parse(formData.get("email"));
      const pass = z.string().min(6, { message: "A senha deve conter no mínimo 6 caracteres"}).parse(formData.get("pass"));

      console.log(email, pass);
    } catch(err) {
      if (err instanceof z.ZodError) {
        return toast(err.issues[0].message, {
          autoClose: 3000,
          type: "error",
          theme: "dark",
          closeOnClick: false,
          pauseOnHover: false
        });
      }
    }    

  }
  return (
    <form className="flex flex-col justify-center mt-14" onSubmit={handleOnSubmit}>
      <div className="flex flex-col mx-auto gap-7">
        <div className="">
          <span className="pl-2">E-mail</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
            <Mail color="#9CA3AF" className="mx-3"/>
            <input type="email" name="email" id="email" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="john.doe@example.com"/>
          </div>
        </div>

        <div className="">
          <span className="pl-2">Senha</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center md:w-96">
            <Lock color="#9CA3AF" className="mx-3"/>
            <input type="password" name="pass" id="pass" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="**********" />
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
        <Link href="/signup" className="text-center underline font-semibold text-sm mt-3">Ja possui uma conta? Clique aqui</Link>
        
      </div>
      <ToastContainer />
    </form>
  );
}