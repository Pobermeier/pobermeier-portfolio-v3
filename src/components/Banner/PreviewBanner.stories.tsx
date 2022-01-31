import { ComponentStory, ComponentMeta } from "@storybook/react";
import { noop } from "utils/utilFns";

import PreviewBanner from "components/Banner/PreviewBanner";

export default {
  title: "PreviewBanner",
  component: PreviewBanner,
} as ComponentMeta<typeof PreviewBanner>;

const Template: ComponentStory<typeof PreviewBanner> = (args) => <PreviewBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  onLeavePreviewBtnClick: noop,
};
