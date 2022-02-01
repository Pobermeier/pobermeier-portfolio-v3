import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/LogoSlider/LogoSlider.mock";
// components
import LogoSlider from "components/LogoSlider/LogoSlider";

export default {
  title: "LogoSlider/LogoSlider",
  component: LogoSlider,
} as ComponentMeta<typeof LogoSlider>;

const Template: ComponentStory<typeof LogoSlider> = (args) => <LogoSlider {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
