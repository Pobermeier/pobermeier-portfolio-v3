// types
import { BlogPost } from "models/datoCMS";
// components
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import ContentSection from "components/ContentSection/ContentSection";
import BlogPostCard from "components/Blog/BlogPostCard";
import Grid from "components/Layout/Grid";

export interface BlogSectionProps {
  /**
   * A collection of blog posts
   */
  posts: BlogPost[];
  /**
   * Optional description
   */
  description?: string;
  /**
   * Optional heading
   */
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
      <Grid tag="ul">
        {posts?.map((post) => (
          <li key={post.id}>
            <BlogPostCard post={post} key={post.id} />
          </li>
        ))}
      </Grid>
    </ContentSection>
  );
};

export default BlogSection;
