import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Contact/ContactSection.mock";
// components
import ContactSection from "components/Contact/ContactSection";

export default {
  title: "Content/ContactSection",
  component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

const Template: ComponentStory<typeof ContactSection> = (args) => <ContactSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
