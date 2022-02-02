import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/ContentSection/ContentSection.mocks";
// components
import ContentSection from "components/ContentSection/ContentSection";

export default {
  title: "Content/ContentSection",
  component: ContentSection,
} as ComponentMeta<typeof ContentSection>;

const Template: ComponentStory<typeof ContentSection> = (args) => <ContentSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
