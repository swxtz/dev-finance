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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { ptBR } from "date-fns/locale";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";


const formSchema = z.object({
    description: z
        .string()
        .min(3, "Precisa de no minimo 3 caracteres.")
        .max(255, "Máximo de 255 caracteres."),
    value: z.string().max(255, "Máximo de 255 caracteres."),
    date: z.date(),
});

export function NewTransactionModal() {
    type formSchemaData = z.infer<typeof formSchema>;

    const form = useForm<formSchemaData>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit({ date, description, value }: formSchemaData) {
        const session = getSession();
        const dateIso = date.toISOString();

        const apiUrl = process.env.API_URL || "http://localhost:3333";

        const isNegative = value.includes("-") || value.startsWith("-");
        const transactionType = isNegative ? "EXPENSE" : "INCOME";

        const valueWithoutSymbols = value.replace(/\.|,/g, "");
        const removeNegative = valueWithoutSymbols.replace(/\.|,|-/g, "");

        const formattedValue = Number(removeNegative);

        session.then((token) => {
            fetch(`${apiUrl}/transactions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token?.token}`,
                },
                body: JSON.stringify({
                    type: transactionType,
                    description: description,
                    name: description,
                    amount: formattedValue,
                    date: dateIso,
                }),
            }).then((res) => {
                if (res.status === 201) {
                    toast.success("Transação criada com sucesso");
                } else {
                    toast.error("Erro ao criar nova transação, Tente Novamente!");
                }
                console.log(res);
            });
        });
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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex gap-3 flex-col">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <div className="flex flex-col">
                                                        <Input
                                                            type="text"
                                                            placeholder="Descrição"
                                                            className="outline-none"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="value"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <div className="flex flex-col">
                                                        <Input
                                                            type="text"
                                                            placeholder="Valor"
                                                            {...field}
                                                        />
                                                        <label
                                                            htmlFor=""
                                                            className="text-sm mx-auto py-4 text-gray-400"
                                                        >
                                                            Use o sinal -
                                                            (negativo) para
                                                            despesas e ,
                                                            (vírgula para casas
                                                            decimais)
                                                        </label>
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={
                                                                    "outline"
                                                                }
                                                                className={cn(
                                                                    "w-full justify-start text-left font-normal",
                                                                    !field.value &&
                                                                        "text-muted-foreground",
                                                                )}
                                                            >
                                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                                {field.value ? (
                                                                    format(
                                                                        field.value,
                                                                        "PPP",
                                                                        {
                                                                            locale: ptBR,
                                                                        },
                                                                    )
                                                                ) : (
                                                                    <span>
                                                                        Escolha
                                                                        uma data
                                                                    </span>
                                                                )}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <Calendar
                                                                mode="single"
                                                                selected={
                                                                    field.value!
                                                                }
                                                                onSelect={
                                                                    field.onChange
                                                                }
                                                                initialFocus
                                                                locale={ptBR}
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    {/* <div className="pt-4 flex items-center gap-2">
                <Checkbox
                    id="today-date"
                    onChange={(e) => handleUseTodayDate(e)}
                />
                <label htmlFor="today-date" className="text-sm text-gray-400">
                    Use a data de hoje
                </label>
            </div> */}
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-row justify-between pt-8">
                                    <DialogClose asChild>
                                        <Button
                                            variant="cancel"
                                            className="px-20"
                                        >
                                            Cancelar
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button
                                            variant="proceed"
                                            className="px-20"
                                            type="submit"
                                        >
                                            Adicionar
                                        </Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
