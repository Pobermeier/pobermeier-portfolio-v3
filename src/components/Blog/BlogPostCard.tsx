import { useMemo } from "react";
import Link from "next/link";
import { Image, ResponsiveImageType } from "react-datocms";
// types
import { BlogPost } from "models/datoCMS";

type Props = {
  post: BlogPost;
};

const AVG_WORDS_PER_MIN = 250;

const getWordCount = (text: string) => text.match(/\w+/g)?.length ?? 0;

const computeReadingTime = (text: string) => {
  const count = getWordCount(text);

  const timetoReadMin = Math.ceil(count / AVG_WORDS_PER_MIN);

  return timetoReadMin;
};

const BlogPostCard = ({ post }: Props) => {
  const timeToRead = useMemo(() => computeReadingTime(post.content), [post.content]);

  const createdAtDate = new Date(post.createdAt);
  const dateTime = `${createdAtDate.getFullYear()}-${createdAtDate.getMonth()}-${createdAtDate.getDate()}`;
  const formattedDate = createdAtDate.toLocaleString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <article className="flex flex-col rounded-xl drop-shadow-lg overflow-hidden md:hover:drop-shadow-2xl md:hover:scale-105 transition-all">
          <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 flex flex-col justify-between">
            <header className="flex-1">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {post.category.title}
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-primary">{post.title}</p>
              </div>
            </header>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              {post.shortDescription}
            </p>
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
          </div>
          <div className="flex-shrink-0 -order-1">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              layout="responsive"
              objectFit="cover"
              pictureClassName="rounded-t-xl h-48 w-full object-cover"
              data={post.image.responsiveImage as ResponsiveImageType}
            />
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogPostCard;
