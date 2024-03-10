"use client";

import Image from "next/image";

import Logo from "../../../assets/logo.svg";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { signOut } from "next-auth/react";

export function Header() {

  function handleLogout() {
    signOut();
  }

  return (
    <div className="flex justify-between items-center container mx-auto ">
      <Menu className="size-6 text-stone-100" />
      <Link href="/dashboard">
        <div className="flex flex-row gap-2">
          <Image
            src={Logo}
            alt="Dev.Finance"
            priority
            quality={100}
          />
          <span className="uppercase py-1 px-2 text-xs text-stone-300 bg-zinc-500 font-bold rounded-xl">
                        beta
          </span>
        </div>
      </Link>
      <button className="py-3 px-4 border border-red-500 " onClick={handleLogout}>Sair</button>
      <Avatar />
    </div>
  );
}
