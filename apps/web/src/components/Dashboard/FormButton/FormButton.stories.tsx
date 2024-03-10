import { Meta, StoryObj } from "@storybook/react";
import { FormButton } from "./FormButton";

export default {
  title: "Dashboard/Modal/FormButton",
  component: FormButton,
}as Meta;

export const Default: StoryObj = {
  render: () => (
    <FormButton color="green">Adicionar</FormButton>
  )
};

export const Cancel: StoryObj = {
  render: () => (
    <FormButton color="red">Cancelar</FormButton>
  )
};