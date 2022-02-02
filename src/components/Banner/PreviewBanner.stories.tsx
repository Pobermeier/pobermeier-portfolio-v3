import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import PreviewBanner from "components/Banner/PreviewBanner";
// utils
import { noop } from "utils/utilFns";

export default {
  title: "Banner/PreviewBanner",
  component: PreviewBanner,
} as ComponentMeta<typeof PreviewBanner>;

const Template: ComponentStory<typeof PreviewBanner> = (args) => <PreviewBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  onLeavePreviewBtnClick: noop,
};
