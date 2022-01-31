import { Image } from "react-datocms";
import ReactMarkdown from "react-markdown";
// types
import { ResponsiveImage } from "models/datoCMS";
// components
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";

export interface TextWithImageProps {
  /**
   * Any kind of text string
   */
  text: string;
  /**
   * An image that is rendered on the right side of the text
   */
  image: {
    responsiveImage: ResponsiveImage;
  };
}

const TextWithImage = ({ image, text }: TextWithImageProps) => {
  return (
    <div className="lg:overflow-hidden">
      <div className="relative max-w-7xl mx-auto mt-12 mb-12 px-4 sm:px-6 lg:px-8">
        <BackgroundPatternWrapper>
          <BackgroundPattern positionClassName="hidden lg:block absolute left-full top-1/2 transform -translate-x-8 -translate-y-1/2" />
        </BackgroundPatternWrapper>

        <div className="relative lg:flex lg:items-center">
          <div className="relative mb-10 lg:mb-0 lg:mr-10">
            <svg
              className="absolute top-0 left-0 transform lg:-translate-x-8 -translate-y-12 md:-translate-y-18 lg:-translate-y-20 h-24 w-24 lg:h-36 lg:w-36 text-primary opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <div className="relative">
              <div className="text-lg sm:text-xl text-center lg:text-left prose prose-lg text-gray-600 dark:text-gray-100 mx-auto max-w-4xl prose-a:text-primary prose-a:no-underline dark:prose-strong:text-gray-400 prose-headings:text-primary">
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:flex-shrink-0 h-52 w-52 rounded-full lg:h-64 lg:w-64 mx-auto overflow-hidden">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              objectFit="cover"
              layout="responsive"
              pictureClassName="h-52 w-52 rounded-full lg:h-64 lg:w-64"
              data={image.responsiveImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;
