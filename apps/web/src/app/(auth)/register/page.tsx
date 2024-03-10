import { RegisterForm } from "@/components/Auth/AuthForms/RegisterForm";
import { SociaisButtons } from "@/components/Auth/SociaisButtons/SociaisButtons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev.Finance | Crie sua conta",
};


export default function Register() {
  return (
    <main>
      <div className="">
        <h2 className="text-2xl text-gray-200 text-center font-medium md:text-3xl">Insira seus dados</h2>
        <RegisterForm />
        <div className="flex justify-center items-center gap-4 my-8">
          <div className="w-[80px] bg-zinc-700 h-0.5" />
          <p className="text-gray-300 text-lg">ou</p>
          <div className="w-[80px] bg-zinc-700 h-0.5" />
        </div>
        <SociaisButtons />
        <div className="mb-20" />
      </div> 
    </main>
  );
}