"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ITransactions } from "../Transactions";



export const columns: ColumnDef<ITransactions>[] = [
    {
        accessorKey: "description",
        header: "Descrição",
    },
    {
        accessorKey: "amount",
        header: "Valor",
    },
    {
        accessorKey: "date",
        header: "Data",
    },
];