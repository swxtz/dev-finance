"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionForm } from "../NewTransactionForm/NewTransactionForm";

export function NewTransactionModal() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <button className="text-green-600 hover:text-green-800 hover:transition-colors">
                    + Nova Transação
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-[#0f0f11a9] fixed inset-0" />
                <Dialog.Content className="bg-[#19191B] rounded-md fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
                    <div className="p-10">
                        <Dialog.Title className="text-lg text-gray-200 min-w-[500px]">Nova Transação</Dialog.Title>
                        <NewTransactionForm className="mt-7"  />
                    </div>
                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
