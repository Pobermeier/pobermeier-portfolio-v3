import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Footer/Footer.mock";
// components
import Footer from "components/Footer/Footer";

export default {
  title: "Footer/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
