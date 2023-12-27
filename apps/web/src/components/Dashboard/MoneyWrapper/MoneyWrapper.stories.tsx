import { Meta, StoryObj } from "@storybook/react";
import { MoneyWrapper } from "./MoneyWrapper";

export default {
    title: "Dashboard/MoneyWrapper",
    component: MoneyWrapper,
} as Meta;

export const Default: StoryObj = {
    render: () => (
        <MoneyWrapper income={1740000} expense={125900} balance={1614100} />
    ),
};
