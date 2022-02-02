import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Blog/BlogPosts.mock";
// components
import BlogSection from "components/Blog/BlogSection";

export default {
  title: "Blog/BlogSection",
  component: BlogSection,
} as ComponentMeta<typeof BlogSection>;

const Template: ComponentStory<typeof BlogSection> = (args) => <BlogSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  heading: "Blog Posts",
  description: "This is the blog section",
  posts: mockData,
};
