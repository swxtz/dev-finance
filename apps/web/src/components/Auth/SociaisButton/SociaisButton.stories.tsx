import { Meta, StoryObj } from "@storybook/react";
import { SociaisButton } from "./SociaisButton";

import GithubLogo from "../../../assets/github-logo.svg";
import GoogleLogo from "../../../assets/google-logo.svg";

export default {
    title: "Auth/Sociais/SociaisButton",
    component: SociaisButton,
} as Meta;

export const Default: StoryObj = {
    render: () => (
        <div className="bg-zinc-700 w-fit rounded px-10 py-10">
            <SociaisButton imgSource={GithubLogo} href="#" variant="github" text="github">
                Continue com Github
            </SociaisButton>
        </div>
    ),
};

export const Google: StoryObj = {
    render: () => (
        <div className="bg-zinc-700 w-fit rounded px-10 py-10">
            <SociaisButton imgSource={GoogleLogo} href="#" variant="google" text="google">
                Continue com Google
            </SociaisButton>
        </div>
    ),
};
