"use client";

import { ArrowLeft } from "lucide-react";
import { AuthLogo } from "../AuthLogo";
import { useRouter } from "next/navigation";

export function AuthNavbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center mt-8 pb-8 mx-16 border-b-[1px] border-[#606060]">
      <div className="">
        <button
          onClick={() => router.back()}
          className="hover:brightness-200 transition-all"
        >
          <ArrowLeft color="#606060" size={32} />
        </button>
      </div>
      <AuthLogo />
      <div className=""></div>
    </nav>
  );
}
