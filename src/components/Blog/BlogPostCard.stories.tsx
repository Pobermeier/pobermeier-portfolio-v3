import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Blog/BlogPosts.mock";
// components
import BlogPostCard from "components/Blog/BlogPostCard";

export default {
  title: "Blog/BlogPostCard",
  component: BlogPostCard,
} as ComponentMeta<typeof BlogPostCard>;

const Template: ComponentStory<typeof BlogPostCard> = (args) => (
  <div className="max-w-sm">
    <BlogPostCard {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  post: mockData[0],
};
