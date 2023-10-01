import { ValidationErrorMessage, ValidationErrorMessageProps } from "./ValidationErrorMessage";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Components/ValidationErrorMessage",
    component: ValidationErrorMessage,
} as Meta;

type Story = StoryObj<ValidationErrorMessageProps>

export const Default: Story = {
    render: () => (
        <div className="w-96 bg-gray-700 py-6 flex items-center justify-center rounded-xl">
            <ValidationErrorMessage>Mensagem de error de exemplo</ValidationErrorMessage>
        </div>
    ),
};