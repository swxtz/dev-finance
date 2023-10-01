import { ExpenseIcon } from "../../../icons/ExpenseIcon";

import { MoneyCard } from "../MoneyCard/MoneyCard";
import { IncomeIcon } from "../../../icons/IncomeIcon";
import { DollarIcon } from "../../../icons/DollarIcon";

interface MoneyWrapperProps {
    income: string;
    expense: string;
    balance: string;
}

export function MoneyWrapper({ income, expense, balance }: MoneyWrapperProps) {
    return (
        <div className="flex flex-row gap-8 mx-auto w-fit">
            <MoneyCard label="Entradas" value={income} icon={<IncomeIcon />}  />
            <MoneyCard label="Saídas" value={expense} icon={<ExpenseIcon />}  />
            <MoneyCard label="Total" value={balance} icon={<DollarIcon />} color="green"  />
        </div>
    );
}