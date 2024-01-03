import nextAuthOptions from "@/app/api/auth/[...nextauth]/provider";
import { apiUrl } from "@/utils/api";
import { getServerSession } from "next-auth";

interface ITransactions {
    id: string;
    ownerId: string;
    name: string;
    amount: number;
    description: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    type: string;
}

async function getTransactions(): Promise<ITransactions[]> {
    const token = await getServerSession(nextAuthOptions);

    const response = await fetch(`${apiUrl}/transactions/me`, {
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
            {transactions?.map((transaction) => (
                <div key={transaction.id}>
                    <p>{transaction.name}</p>
                    <p>{transaction.amount}</p>
                    <p>{transaction.description}</p>
                    <p>{transaction.date}</p>
                    <p>{transaction.type}</p>
                </div>
            ))}
        </div>
    );
}
