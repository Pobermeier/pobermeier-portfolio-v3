import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Navigation/Navbar.mock";
// components
import Navbar from "components/Navigation/Navbar";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
