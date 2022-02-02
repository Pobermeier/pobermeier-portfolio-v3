import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Buttons/Button.mock";
// components
import Button from "components/Buttons/Button";
// utils
import { noop } from "utils/utilFns";

export default {
  title: "Buttons/Button",
  component: Button,
  args: {
    as: "button",
    onClick: noop,
    text: "Button",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="max-w-md">
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  size: "lg",
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: "secondary",
  size: "lg",
};

export const SizeXs = Template.bind({});

SizeXs.args = {
  size: "xs",
};

export const SizeSm = Template.bind({});

SizeSm.args = {
  size: "sm",
};

export const SizeMd = Template.bind({});

SizeMd.args = {
  size: "md",
};

export const SizeLg = Template.bind({});

SizeLg.args = {
  size: "lg",
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  size: "lg",
  isFullWidth: true,
};

const [primaryButton, secondaryButton] = mockData;

export const PrimaryWithIcon = Template.bind({});

PrimaryWithIcon.args = {
  ...primaryButton,
};

export const SecondaryWithIcon = Template.bind({});

SecondaryWithIcon.args = {
  ...secondaryButton,
};
