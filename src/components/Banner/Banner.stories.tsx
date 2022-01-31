import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from "components/Banner/Banner";

export default {
  title: "Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const WithoutCtaButton = Template.bind({});

WithoutCtaButton.args = {
  text: "This is a banner without any CTA Buttons.",
};
