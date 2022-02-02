import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import NavItem from "components/Navigation/NavItem";
// utils
import { noop } from "utils/utilFns";

export default {
  title: "Navigation/NavItem",
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <ul>
    <NavItem {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  isExternalLink: true,
  name: "NavItem",
  onClick: noop,
  url: "/",
};
