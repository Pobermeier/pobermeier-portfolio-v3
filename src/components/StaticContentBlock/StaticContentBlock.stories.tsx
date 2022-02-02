import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/StaticContentBlock/StaticContentBlock.mock";
// components
import StaticContentBlock from "components/StaticContentBlock/StaticContentBlock";

export default {
  title: "Content/StaticContentBlock",
  component: StaticContentBlock,
} as ComponentMeta<typeof StaticContentBlock>;

const Template: ComponentStory<typeof StaticContentBlock> = (args) => (
  <StaticContentBlock {...args} />
);

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
