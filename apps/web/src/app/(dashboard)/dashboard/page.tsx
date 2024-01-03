import nextAuthOptions from "@/app/api/auth/[...nextauth]/provider";
import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

const apiUrl = process.env.API_URL;

export const metadata: Metadata = {
    title: "Dev.Finance | Dashboard",
};


interface IBalance {
    id: string;
    emailOwner: string;
    income: number;
    expense: number;
    balance: number;
    createdAt: string;
    updatedAt: string;
}

async function getBalance(token: string): Promise<IBalance> {
    const response = await fetch(`${apiUrl}/balance`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const balance = await response.json();
    return balance;
}

export default async function Dashboard() {
    const session = await getServerSession(nextAuthOptions);

    const balance = await getBalance(session!.token);

    return (
        <main className="mx-32">
            <div className="mt-20">
                {balance ? (
                    <MoneyWrapper
                        income={balance.income / 100}
                        expense={balance.expense / 100}
                        balance={balance.balance / 100}
                    />
                ) : (
                    <MoneyWrapper
                        income={10}
                        expense={0}
                        balance={0}
                    />
                )}
            </div>

            <div className="mt-16">
                <NewTransactionModal />
                
            </div>
        </main>
    );
}
