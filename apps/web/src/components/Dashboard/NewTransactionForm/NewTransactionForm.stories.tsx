import { Meta, StoryObj } from "@storybook/react";
import { NewTransactionForm } from "./NewTransactionForm";

export default {
  title: "Dashboard/Modal/NewTransactionForm",
  component: NewTransactionForm,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <div className="bg-[#19191B] rounded-md w-[500px] p-4">
      <NewTransactionForm />
    </div>
  )
};