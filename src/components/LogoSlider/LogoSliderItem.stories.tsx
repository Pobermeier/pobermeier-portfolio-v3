import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/LogoSlider/LogoSlider.mock";
// components
import LogoSliderItem from "components/LogoSlider/LogoSliderItem";

export default {
  title: "LogoSlider/LogoSliderItem",
  component: LogoSliderItem,
} as ComponentMeta<typeof LogoSliderItem>;

const Template: ComponentStory<typeof LogoSliderItem> = (args) => (
  <ul>
    <LogoSliderItem {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  width: 48,
  height: 48,
  imgSrc: mockData.logos[0].logo.url,
  technologyName: mockData.logos[0].name,
};
