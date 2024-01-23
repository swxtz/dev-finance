/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ExpenseIcon } from "../../../icons/ExpenseIcon";

import { MoneyCard } from "../MoneyCard/MoneyCard";
import { IncomeIcon } from "../../../icons/IncomeIcon";
import { DollarIcon } from "../../../icons/DollarIcon";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

interface IBalance {
    id: string;
    emailOwner: string;
    income: number;
    expense: number;
    balance: number;
    createdAt: string;
    updatedAt: string;
}


// TODO Trocar url para .env.local
async function getBalance(): Promise<IBalance> {
    const token = await getSession();
    const response = await fetch("http://localhost:3333/balance", {
        headers: {
            Authorization: `Bearer ${token?.token}`,
        },
    });

    return response.json();
}

export function MoneyWrapper() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["balance"],
        queryFn: () => getBalance(),
    });

    console.log(`Money: ${data}`);

    if (error as any)
        return (
            <div className="mt-10">
                {"An error has occurred: " + (error as any).message}
            </div>
        );

    if (isLoading) {
        console.log(data);
        return <div>Carregando...</div>;
    }
    console.log(data);
    return (
        <div className="flex flex-row gap-8 mx-auto w-fit">
            <MoneyCard
                label="Entradas"
                value={data?.income}
                icon={<IncomeIcon />}
            />
            <MoneyCard
                label="Saídas"
                value={data?.expense}
                icon={<ExpenseIcon />}
            />
            <MoneyCard
                label="Total"
                value={data?.balance}
                icon={<DollarIcon />}
                color="green"
            />
        </div>
    );
}
