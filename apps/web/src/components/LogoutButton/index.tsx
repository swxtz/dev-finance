"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="border border-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-lg transition-all"
      onClick={() => signOut()}
    >
            Sair
    </button>
  );
}
