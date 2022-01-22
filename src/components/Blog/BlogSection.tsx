// types
import { BlogPost } from "models/datoCMS";
// components
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import ContentSection from "components/ContentSection/ContentSection";
import BlogPostCard from "./BlogPostCard";

export interface BlogSectionProps {
  posts: BlogPost[];
  description?: string;
  heading?: string;
}

const BlogSection = ({ description, heading, posts }: BlogSectionProps) => {
  return (
    <ContentSection
      htmlId="blog"
      heading={heading}
      description={description}
      decorationElements={
        <>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="left-full transform translate-x-20 translate-y-40 rotate-45" />
          </BackgroundPatternWrapper>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="right-full bottom-0 transform -translate-x-40 -translate-y-24 rotate-45" />
          </BackgroundPatternWrapper>
        </>
      }
    >
      <ul className="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none relative z-10">
        {posts?.map((post) => (
          <li key={post.id}>
            <BlogPostCard post={post} key={post.id} />
          </li>
        ))}
      </ul>
    </ContentSection>
  );
};

export default BlogSection;
