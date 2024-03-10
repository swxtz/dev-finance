import { Meta, StoryObj } from "@storybook/react";
import { SociaisButtons } from "./SociaisButtons";


export default {
  title: "Auth/Sociais/SociaisButtons",
  component: SociaisButtons,
} as Meta;


export const Default: StoryObj = {
  render: () => (
    <div className="bg-zinc-700 w-fit rounded px-20 py-20">
      <SociaisButtons />
    </div>
  )
};