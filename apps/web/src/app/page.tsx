import { LogIn } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen px-9">
      <div className="">
        <h2 className="text-2xl text-gray-200 text-center pt-16 font-medium">Gerencie sua vida financeira de uma forma simples.</h2>
      </div>
      <div className="mt-16 flex items-center flex-col gap-8">
        <Link href="#" className="w-[294px] h-12 bg-green-700 text-gray-200 text-base font-semibold flex items-center justify-center rounded-md" >
          Comece agora
        </Link>
        <Link href="#" className="w-[294px] h-12 bg-slate-800 text-gray-200 text-base font-semibold flex items-center justify-center rounded-md gap-2" >
          Entre com a sua conta
          <LogIn />  
        </Link>
      </div>
    </main>
  );
}
