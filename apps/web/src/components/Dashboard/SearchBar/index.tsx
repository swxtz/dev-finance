"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { NewTransactionModal } from "../NewTransactionModal";

export function SearchBar() {
  return (
    <div className="w-full flex flex-row gap-2">
      <input
        type="text"
        className="w-full p-4 rounded-sm bg-zinc-500/50 placeholder:text-stone-600 outline-none text-stone-200"
        placeholder="Busque uma transação"
      />
      <button
        type="button"
        className="flex flex-row gap-1 items-center text-teal-600 py-4 px-8 font-bold border-1.5 transition-all border-teal-500 rounded-md hover:bg-teal-700 hover:text-stone-200 hover:border-teal-700"
      >
        <MagnifyingGlassIcon className="size-[24px]" />
        Buscar
      </button>
      <NewTransactionModal />
    </div>
  );
}
