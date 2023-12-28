"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DatePicker } from "../DatePicker";
import { Button } from "@/components/ui/button";

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
                    <form action="" className="pt-7">
                        <div className="flex gap-3 flex-col">
                            <div className="flex">
                                <Input
                                    type="text"
                                    placeholder="Descrição"
                                    className="outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Input type="text" placeholder="Valor" />
                                <label
                                    htmlFor=""
                                    className="text-sm mx-auto py-4 text-gray-400"
                                >
                                    Use o sinal - (negativo) para despesas e ,
                                    (vírgula para casas decimais)
                                </label>
                            </div>
                            <div className="w-full">
                                <DatePicker />
                            </div>
                            <div className="flex flex-row justify-between pt-8">
                                <DialogClose asChild>
                                    <Button variant="cancel" className="px-20">
                                        Cancelar
                                    </Button>
                                </DialogClose>
                                <Button variant="proceed" className="px-20">
                                    Adicionar
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
