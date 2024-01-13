import nextAuthOptions from "@/app/api/auth/[...nextauth]/provider";
import { apiUrl } from "@/utils/api";
import { getServerSession } from "next-auth";
import { DataTable } from "../DataTable";
import { columns } from "../DataTable/columns";

export interface ITransactions {
    amount: number;
    description: string;
    date: string;
}

async function getTransactions(): Promise<ITransactions[]> {
    const token = await getServerSession(nextAuthOptions);
    console.log(token);

    const response = await fetch(`${apiUrl}/transactions`, {
        headers: {
            Authorization: `Bearer ${token?.token}`,
        },
    });

    const transactions = await response.json();
    return transactions;
}

export async function Transactions() {
    const transactions = await getTransactions();
    console.log(transactions);
    return (
        <div>
            <h1>Transactions</h1>
            <DataTable columns={columns} data={transactions} />
        </div>
    );
}
