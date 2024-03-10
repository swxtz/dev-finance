"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ITransactions } from "../Transactions";
import { DataTableHeaderCell } from "../DataTableHeaderCell";
import { DataTableCell } from "../DataTableCell";



export const columns: ColumnDef<ITransactions>[] = [
  {
    accessorKey: "description",
    header: () => <DataTableHeaderCell>Descrição</DataTableHeaderCell>,
  },
  {
    accessorKey: "amount",
    header: () => <DataTableHeaderCell>Valor</DataTableHeaderCell>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return DataTableCell({ children: formatted, isNegative: amount < 0 });
    }
  },
  {
    accessorKey: "date",
    header: () => <DataTableHeaderCell>Data</DataTableHeaderCell>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = new Intl.DateTimeFormat("pt-BR").format(date);

      return DataTableCell({ children: formatted });
    }
  },
];