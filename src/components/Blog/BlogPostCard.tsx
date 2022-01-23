import { useMemo } from "react";
import Link from "next/link";
import { Image, ResponsiveImageType } from "react-datocms";
// types
import { BlogPost } from "models/datoCMS";
// utils
import { computeReadingTime } from "utils/words";
import { getDateTimeString, getFormattedLocaleString } from "utils/dateFns";
import CardWithTopImage from "components/Card/CardWithTopImage";

type Props = {
  post: BlogPost;
};

const BlogPostCard = ({ post }: Props) => {
  const timeToRead = useMemo(() => computeReadingTime(post.content), [post.content]);

  const createdAtDate = new Date(post.createdAt);
  const dateTime = getDateTimeString(createdAtDate);
  const formattedDate = getFormattedLocaleString(createdAtDate);

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <CardWithTopImage imageData={post.image.responsiveImage}>
          <header className="flex-1">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {post.category.title}
            </p>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-primary">{post.title}</p>
            </div>
          </header>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{post.shortDescription}</p>
          <footer className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{post.author.name}</span>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                layout="responsive"
                objectFit="cover"
                pictureClassName="h-10 w-10 rounded-full"
                data={post.author.photo.responsiveImage as ResponsiveImageType}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {post.author.name}
              </p>
              <div className="flex space-x-1 text-sm text-gray-800 dark:text-gray-200">
                <time dateTime={dateTime}>{formattedDate}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{timeToRead} min read</span>
              </div>
            </div>
          </footer>
        </CardWithTopImage>
      </a>
    </Link>
  );
};

export default BlogPostCard;
