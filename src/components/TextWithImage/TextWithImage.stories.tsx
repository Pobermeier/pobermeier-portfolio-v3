import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/TextWithImage/TextWithImage.mock";
// components
import TextWithImage from "components/TextWithImage/TextWithImage";

export default {
  title: "Content/TextWithImage",
  component: TextWithImage,
} as ComponentMeta<typeof TextWithImage>;

const Template: ComponentStory<typeof TextWithImage> = (args) => <TextWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
