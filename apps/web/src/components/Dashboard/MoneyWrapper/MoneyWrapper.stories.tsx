import { Meta, StoryObj } from "@storybook/react";
import { MoneyWrapper } from "./MoneyWrapper";

export default {
  title: "Dashboard/MoneyWrapper",
  component: MoneyWrapper,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <MoneyWrapper />
  ),
};
