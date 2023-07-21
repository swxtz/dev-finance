import { LogIn } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="md:overflow-hidden px-9">
      <div className="">
        <h2 className="text-2xl text-gray-200 text-center pt-16 font-medium md:text-5xl">Gerencie sua vida financeira de uma forma simples.</h2>
        <p className="invisible hidden md:visible md:block mt-12 text-center text-gray-400 text-2xl w-[694px] mx-auto">Com a dev.finance você terá controle completo da sua vida financeira de forma fácil e rápida</p>
      </div>
      <div className="mt-16 flex items-center flex-col gap-8 md:flex-row md:justify-center">
        <Link href="/signup" className="w-[294px] h-12 bg-green-700 text-gray-200 text-base font-semibold flex items-center justify-center rounded-md md:w-fit md:px-6 md:py-4" >
          Comece agora
        </Link>
        <Link href="/signin" className="w-[294px] h-12 bg-slate-800 text-gray-200 text-base font-semibold flex items-center justify-center rounded-md gap-2 md:w-fit md:px-6 md:py-4" >
          Entre com a sua conta
          <LogIn />  
        </Link>
      </div>
    </main>
  );
}
