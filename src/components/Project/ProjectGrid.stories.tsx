import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockProjects from "components/Project/Project.mock";
// components
import ProjectGrid from "components/Project/ProjectGrid";

export default {
  title: "Project/ProjectGrid",
  component: ProjectGrid,
} as ComponentMeta<typeof ProjectGrid>;

const Template: ComponentStory<typeof ProjectGrid> = (args) => <ProjectGrid {...args} />;

export const Default = Template.bind({});

Default.args = {
  projects: mockProjects,
};
