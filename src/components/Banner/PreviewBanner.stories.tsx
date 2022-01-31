import { ComponentStory, ComponentMeta } from "@storybook/react";

import PreviewBanner from "./PreviewBanner";

export default {
  title: "PreviewBanner",
  component: PreviewBanner,
} as ComponentMeta<typeof PreviewBanner>;

const Template: ComponentStory<typeof PreviewBanner> = (args) => <PreviewBanner {...args} />;

export const Default = Template.bind({});
