"use client";

import { Mail, Lock, UserCircle2 } from "lucide-react";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { z } from "zod";

export function SignupForm() {
  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);               

    try {
      const name = z.string().min(3, { message: "Deve conter nome e sobrenome"}).parse(formData.get("name"));
      const email = z.string().email({ message: "Email inválido"}).parse(formData.get("email"));
      const pass = z.string().min(6, { message: "A senha deve conter no mínimo 6 caracteres"}).parse(formData.get("pass"));
      const passRetype = z.string().min(6, { message: "A senha deve conter no mínimo 6 caracteres"}).parse(formData.get("pass-retype"));

      if(pass !== passRetype) {
        return toast("As senhas não batem", {
          autoClose: 3000,
          type: "error",
          theme: "dark",
          closeOnClick: false,
          pauseOnHover: false
        });
      }

      console.log(name, email, pass);
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
          <span className="pl-2">Seu nome</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center">
            <UserCircle2 color="#9CA3AF" className="mx-3"/>
            <input type="text" name="name" id="name" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="Jonh Doe"/>
          </div>
        </div>

        <div className="">
          <span className="pl-2">E-mail</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center">
            <Mail color="#9CA3AF" className="mx-3"/>
            <input type="email" name="email" id="email" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="john.doe@example.com"/>
          </div>
        </div>

        <div className="">
          <span className="pl-2">Senha</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center">
            <Lock color="#9CA3AF" className="mx-3"/>
            <input type="password" name="pass" id="pass" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="**********" />
          </div>
        </div>

        <div className="">
          <span className="pl-2">Repita sua senha</span>
          <div className="flex flex-row bg-zinc-700 w-[294px] h-12 rounded-md gap-2.5 items-center">
            <Lock color="#9CA3AF" className="mx-3"/>
            <input type="password" name="pass-retype" id="pass-retype" className="bg-transparent w-56 outline-none font-medium placeholder:text-gray-400" placeholder="**********" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex flex-col">
        <button 
          type="submit"
          className="w-[294px] h-12 bg-green-700 rounded-md font-semibold transition-colors hover:bg-green-800"
        >
          Entrar
        </button>
        <Link href="/signin" className="text-center underline font-semibold text-sm mt-3">Ja possui uma conta? Clique aqui</Link>
        
      </div>
      <ToastContainer />
    </form>
  );
}