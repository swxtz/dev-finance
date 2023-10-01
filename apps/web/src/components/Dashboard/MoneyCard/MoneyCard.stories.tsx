import { Meta, StoryObj } from "@storybook/react";
import { MoneyCard } from "./MoneyCard";
import { IncomeIcon } from "../../../icons/IncomeIcon";
import { ExpenseIcon } from "../../../icons/ExpenseIcon";

export default {
    title: "Dashboard/MoneyCard",
    component: MoneyCard,
} as Meta;

export const Default: StoryObj = {
    render: () => <MoneyCard label="Entradas" icon={<IncomeIcon />} value="17.400,00" />
};

export const Green: StoryObj = {
    render: () => <MoneyCard color="green" label="Entradas" icon={<ExpenseIcon />} value="17.400,00" />
};