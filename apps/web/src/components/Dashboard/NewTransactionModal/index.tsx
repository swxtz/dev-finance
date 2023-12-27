"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogDescription,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export function NewTransactionModal() {
    return (
        <Dialog>
            <DialogTrigger className="text-green-600 hover:text-green-800 hover:transition-colors">
                + Nova Transação
            </DialogTrigger>
            <DialogContent className="border-0">
                <DialogHeader>
                    <DialogTitle className="text-gray-200 text-lg pt-4">
                        Nova Transação
                    </DialogTitle>
                    <form action="">
                        <div className="flex">
                            <input type="text" placeholder="Descrição" />
                        </div>
                        <div className="flex flex-col">
                            <input type="text" placeholder="Valor" />
                            <label htmlFor="">
                                Use o sinal - (negativo) para despesas e ,
                                (vírgula para casas decimais)
                            </label>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
