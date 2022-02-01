import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockData from "components/Blog/BlogPosts.mock";
// components
import BlogPostMetaData from "components/Blog/BlogPostMetaData";

export default {
  title: "Blog/BlogPostMetaData",
  component: BlogPostMetaData,
  args: {
    authorName: mockData[0].author.name,
    content: mockData[0].content,
    imageData: mockData[0].author.photo.responsiveImage,
    postCreatedAtDate: mockData[0].createdAt,
  },
} as ComponentMeta<typeof BlogPostMetaData>;

const Template: ComponentStory<typeof BlogPostMetaData> = (args) => (
  <div className="max-w-sm">
    <BlogPostMetaData {...args} />
  </div>
);

export const WithTimeToRead = Template.bind({});

WithTimeToRead.args = {
  isShowingTimeToRead: true,
};

export const WithoutTimeToRead = Template.bind({});

WithoutTimeToRead.args = {
  isShowingTimeToRead: false,
};
