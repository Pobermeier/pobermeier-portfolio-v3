import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import FooterNavItem from "components/Footer/FooterNavItem";

export default {
  title: "Footer/FooterNavItem",
  component: FooterNavItem,
} as ComponentMeta<typeof FooterNavItem>;

const Template: ComponentStory<typeof FooterNavItem> = (args) => (
  <ul>
    <FooterNavItem {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  isExternalLink: true,
  name: "FooterNavItem",
  url: "/",
};
