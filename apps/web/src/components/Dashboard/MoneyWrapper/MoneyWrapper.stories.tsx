import { Meta, StoryObj } from "@storybook/react";
import { MoneyWrapper } from "./MoneyWrapper";


export default {
    title: "Dashboard/MoneyWrapper",
    component: MoneyWrapper,
} as Meta;

export const Default: StoryObj = {
    render: () => <MoneyWrapper income="17.400,00" expense="1.259,00" balance="16.141,00" />
};