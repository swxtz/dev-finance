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
import { DatePickerForm } from "../DatePicker";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    description: z
        .string()
        .min(3, "Precisa de no minimo 3 caracteres.")
        .max(255, "Máximo de 255 caracteres."),
    value: z
        .string()
        .regex(/^\d+(,\d{2})?$/, "Valor inválido.")
        .max(255, "Máximo de 255 caracteres."),
    date: z.string().min(10, "Data inválida.").max(10, "Data inválida."),
});

type formSchemaData = z.infer<typeof formSchema>;



export function NewTransactionModal() {
    const { register, handleSubmit } = useForm<formSchemaData>({
        resolver: zodResolver(formSchema),
    });

    function onSubmitHandler(values: formSchemaData) {
        console.log(values);
    }

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
                </DialogHeader>

                <div className="pt-7">
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="flex gap-3 flex-col">
                            <div className="flex">
                                <Input
                                    type="text"
                                    placeholder="Descrição"
                                    className="outline-none"
                                    {...register("description")}
                                />
                            </div>
                            <div className="flex flex-col">
                                <Input type="text" placeholder="Valor" {...register("value")}/>
                                <label
                                    htmlFor=""
                                    className="text-sm mx-auto py-4 text-gray-400"
                                >
                                    Use o sinal - (negativo) para despesas e ,
                                    (vírgula para casas decimais)
                                </label>
                            </div>
                            <div className="w-full">
                                <DatePickerForm />
                            </div>
                            <div className="flex flex-row justify-between pt-8">
                                <DialogClose asChild>
                                    <Button variant="cancel" className="px-20">
                                        Cancelar
                                    </Button>
                                </DialogClose>
                                <Button
                                    variant="proceed"
                                    className="px-20"
                                    type="submit"
                                >
                                    Adicionar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
