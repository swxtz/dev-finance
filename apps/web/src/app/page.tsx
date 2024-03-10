import { HomepageButtons } from "@/components/HomepageButtons/HomepageButtons";
import { LoginIcon } from "@/icons/LogInIcon";
import { LogoIcons } from "@/icons/LogoIcons";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-16 flex items-center justify-center">
        <Link href="/">
          <LogoIcons />
        </Link>
      </div>
      <main className="px-9">
        <div className="">
          <h1 className="flex items-center flex-col font-medium text-2xl text-center w-[318px] mx-auto md:text-4xl md:w-fit md:mt-14">
                        Gerencie sua vida financeira de uma forma simples.
          </h1>
          <p className="text-center hidden md:block text-gray-400 text-2xl md:mt-12">
                        Com a dev.finance você terá controle completo da sua
                        vida <br />
                        finaceira de forma fácil e rapida.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-20 w-[340px] mx-auto md:mt-16 md:flex-row md:w-[500px]">
          <HomepageButtons title="Comece agora" href="/register" className="hover:bg-teal-900 transition-all duration-300 ease-in-out" />

          <HomepageButtons
            title="Entre com sua conta"
            href="/login"
            className="bg-zinc-500 hover:bg-zinc-600 transition-all duration-300 ease-in-out"
            icon={<LoginIcon className="ml-2" />}
          />
        </div>
      </main>
    </>
  );
}
