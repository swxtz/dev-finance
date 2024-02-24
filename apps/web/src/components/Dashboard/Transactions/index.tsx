"use client";
import { useQueryGetTransactionsWithLimit } from "@/hooks/useQueryTransaction";
import { DataTable } from "../DataTable";
import { columns } from "../DataTable/columns";

export interface ITransactions {
    amount: number;
    description: string;
    date: string;
}

export function Transactions() {
    const { data, isLoading } = useQueryGetTransactionsWithLimit(1);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if(!data) {
        return <div>Falso...</div>;
    }

    return (
        <div>
            <h1>Transactions</h1>
            <DataTable columns={columns} data={data!} />
        </div>
    );
}
