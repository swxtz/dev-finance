/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ExpenseIcon } from "../../../icons/ExpenseIcon";

import { MoneyCard } from "../MoneyCard/MoneyCard";
import { IncomeIcon } from "../../../icons/IncomeIcon";
import { DollarIcon } from "../../../icons/DollarIcon";
import { useQueryGetBalance } from "@/hooks/useBalance";

export function MoneyWrapper() {
    const { data, isLoading, error } = useQueryGetBalance();

    if (error as any)
        return (
            <div className="mt-10">
                {"An error has occurred: " + (error as any).message}
            </div>
        );

    if (isLoading) {
        return <div>Carregando...</div>;
    }
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
