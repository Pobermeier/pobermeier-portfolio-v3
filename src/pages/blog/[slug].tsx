import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useQuerySubscription, renderMetaTags, Image } from "react-datocms";
// types
import { BlogPost as BlogPostType, SiteData } from "models/datoCMS";
// constants
import { isDev, PREVIEW_STORAGE_ITEM_NAME } from "Constants";
// components
import Layout from "components/Layout/Layout";
import StaticContentBlock from "components/StaticContentBlock/StaticContentBlock";
import Button from "components/Buttons/Button";
import BlogPostMetaData from "components/Blog/BlogPostMetaData";
const Navbar = dynamic(() => import("components/Navigation/Navbar"));
const Footer = dynamic(() => import("components/Footer/Footer"));
// graphql
import { request } from "clients/datocms";
import { GET_ALL_BLOG_PAGES_SLUGS } from "graphql/queries/getAllBlogSlugs";
import { GET_BLOG_POST } from "graphql/queries/getBlogPost";
import navbarContent from "content/navbar";
// content
import footerContent from "content/footer";

type PostData = {
  site: SiteData;
  blogPost: BlogPostType;
};

type InternalProps = {
  data: PostData;
};

type ExternalProps = {
  isPreview: boolean;
  deactivatePreviewMode: () => void;
};

type Props = InternalProps & ExternalProps;

const BlogPost = ({ data, isPreview, deactivatePreviewMode }: Props) => {
  const { data: postData } = useQuerySubscription({
    enabled:
      typeof window !== "undefined" && Boolean(localStorage.getItem(PREVIEW_STORAGE_ITEM_NAME)),
    query: GET_BLOG_POST,
    variables: { slug: data.blogPost.slug },
    initialData: data,
    preview: true,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  const {
    site: { favicon },
    blogPost: { title, content, seo, createdAt, author, headerImage },
  } = postData as PostData;

  const metaTags = renderMetaTags([...seo, ...favicon]);

  return (
    <Layout
      metaTags={metaTags}
      isPreview={isPreview}
      deactivatePreviewMode={deactivatePreviewMode}
      header={<Navbar {...navbarContent} />}
      footer={<Footer {...footerContent} />}
    >
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between mt-8">
        <Button as="a" text="Back to Blog Posts" type="secondary" size="xs" url="/blog" />
      </div>
      <div className="relative max-w-4xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-8">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          layout="responsive"
          objectFit="cover"
          pictureClassName="w-full h-full object-cover rounded-xl"
          data={headerImage.responsiveImage}
        />
      </div>
      <StaticContentBlock text={content} title={title} />
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-end mt-12">
        <BlogPostMetaData
          isShowingTimeToRead={false}
          authorName={author.name}
          imageData={author.photo.responsiveImage}
          content={content}
          postCreatedAtDate={createdAt}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const currentSlug = ctx.params?.slug;

  try {
    const data = await request(GET_BLOG_POST, { slug: currentSlug }, isDev);

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const data = await request(GET_ALL_BLOG_PAGES_SLUGS, null, isDev);

    const paths = data.allBlogPosts.map((post: { slug: string }) => ({
      params: { slug: post.slug },
    }));

    return {
      fallback: false,
      paths,
    };
  } catch (error) {
    console.log(error);
  }
}

export default BlogPost;
