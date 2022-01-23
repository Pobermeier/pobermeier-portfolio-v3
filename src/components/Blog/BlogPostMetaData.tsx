import { useMemo } from "react";
import { Image, ResponsiveImageType } from "react-datocms";
// utils
import { computeReadingTime } from "utils/words";
import { getDateTimeString, getFormattedLocaleString } from "utils/dateFns";

type Props = {
  isShowingTimeToRead: boolean;
  authorName: string;
  postCreatedAtDate: string;
  content: string;
  imageData: ResponsiveImageType;
};

const BlogPostMetaData = ({
  authorName,
  content,
  postCreatedAtDate,
  imageData,
  isShowingTimeToRead,
}: Props) => {
  const timeToRead = useMemo(
    () => isShowingTimeToRead && computeReadingTime(content),
    [content, isShowingTimeToRead],
  );

  const createdAtDate = new Date(postCreatedAtDate);
  const dateTime = getDateTimeString(createdAtDate);
  const formattedDate = getFormattedLocaleString(createdAtDate);

  return (
    <>
      <div className="flex-shrink-0">
        <span className="sr-only">{authorName}</span>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          layout="responsive"
          objectFit="cover"
          pictureClassName="h-10 w-10 rounded-full"
          data={imageData}
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{authorName}</p>
        <div className="flex space-x-1 text-sm text-gray-800 dark:text-gray-200">
          <time dateTime={dateTime}>{formattedDate}</time>
          {isShowingTimeToRead && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{timeToRead} min read</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPostMetaData;
