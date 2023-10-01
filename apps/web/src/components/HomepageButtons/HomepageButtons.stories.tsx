import { HomepageButtons } from "./HomepageButtons";
import { Meta, StoryObj } from "@storybook/react";
import { LoginIcon } from "../../icons/LogInIcon"; 

export default {
    title: "Components/HomepageButton",
    component: HomepageButtons,
} as Meta;

export const Default: StoryObj = {
    render: () => (
        <div className="w-96">
            <HomepageButtons href="#" title="Comece agora" />
        </div>
    ),
};

export const Login: StoryObj = {
    render: () => (
        <div className="w-96">
            <HomepageButtons href="#" title="Entre com sua conta" icon={ <LoginIcon className="ml-2" /> } className="bg-slate-800" />
        </div>
    ),
};