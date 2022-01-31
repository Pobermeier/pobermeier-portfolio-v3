import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Hero/HeroSection.mock";
// components
import HeroSection from "components/Hero/HeroSection";

export default {
  title: "HeroSection",
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
