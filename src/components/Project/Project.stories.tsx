import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockProjects from "components/Project/Project.mock";
// components
import Project from "components/Project/Project";

export default {
  title: "Project/Project",
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  <div className="max-w-sm">
    <Project {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  project: mockProjects[0],
};
