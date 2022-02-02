import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/FullscreenPdfViewer/FullscreenPdfViewer.mock";
// components
import FullscreenPdfViewer from "components/FullscreenPdfViewer/FullscreenPdfViewer";

export default {
  title: "Content/FullscreenPdfViewer",
  component: FullscreenPdfViewer,
} as ComponentMeta<typeof FullscreenPdfViewer>;

const Template: ComponentStory<typeof FullscreenPdfViewer> = (args) => (
  <FullscreenPdfViewer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  ...mockData,
};
