import Link from "next/link";
// types
import { BlogPost } from "models/datoCMS";
// components
import CardWithTopImage from "components/Card/CardWithTopImage";
import BlogPostMetaData from "components/Blog/BlogPostMetaData";

type Props = {
  /** All data related to a blog post */
  post: BlogPost;
};

const BlogPostCard = ({ post }: Props) => {
  const {
    author: {
      name,
      photo: { responsiveImage: authorResponsiveImage },
    },
    createdAt,
    content,
    category: { title: categoryTitle },
    image: { responsiveImage },
    shortDescription,
    title,
    slug,
  } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <CardWithTopImage imageData={responsiveImage}>
          <header className="flex-1">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{categoryTitle}</p>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-primary">{title}</p>
            </div>
          </header>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{shortDescription}</p>
          <footer className="mt-6">
            <BlogPostMetaData
              isShowingTimeToRead
              authorName={name}
              imageData={authorResponsiveImage}
              content={content}
              postCreatedAtDate={createdAt}
            />
          </footer>
        </CardWithTopImage>
      </a>
    </Link>
  );
};

export default BlogPostCard;
