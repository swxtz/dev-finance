import { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";

export default {
    title: "Dashboard/Modal/FormInput",
    component: FormInput,
} as Meta;

export const Default: StoryObj = {
    render: () => (
        <div className="bg-zinc-700 w-fit rounded">
            <FormInput placeholder="Valor" />
        </div>
    )
};