"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ITransactions } from "../Transactions";
import { DataTableHeaderCell } from "../DataTableHeaderCell";



export const columns: ColumnDef<ITransactions>[] = [
    {
        accessorKey: "description",
        header: () => <DataTableHeaderCell>Descrição</DataTableHeaderCell>,
    },
    {
        accessorKey: "amount",
        header: () => <DataTableHeaderCell>Valor</DataTableHeaderCell>,
    },
    {
        accessorKey: "date",
        header: () => <DataTableHeaderCell>Data</DataTableHeaderCell>,
    },
];