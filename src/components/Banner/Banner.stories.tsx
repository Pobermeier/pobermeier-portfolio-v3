import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import Banner from "components/Banner/Banner";

export default {
  title: "Banner/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "This is a banner without any CTA Buttons.",
};
