import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import DarkModeToggle from "components/Buttons/DarkModeToggle";

export default {
  title: "Buttons/DarkModeToggle",
  component: DarkModeToggle,
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = () => <DarkModeToggle />;

export const Default = Template.bind({});
