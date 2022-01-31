import ReactMarkdown from "react-markdown";
// components
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";

export type StaticContentBlockRecordProps = {
  /**
   * Optional heading
   */
  title?: string;
  /**
   * Main text content - a string of text or markdown
   */
  text: string;
};

const StaticContentBlock = ({ title, text }: StaticContentBlockRecordProps) => {
  return (
    <article className="relative pt-12 overflow-hidden">
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="top-24 left-full transform translate-x-40 rotate-45" />
      </BackgroundPatternWrapper>
      <div className="max-w-4xl relative px-4 sm:px-6 lg:px-8 mx-auto" data-aos="fade-up">
        {title && (
          <h2 className="mt-2 block text-3xl text-left leading-8 font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
        )}
        <div className="mt-6 prose prose-indigo prose-lg text-gray-600 dark:text-gray-100 mx-auto max-w-4xl prose-a:text-primary dark:prose-strong:text-gray-400 prose-headings:text-primary prose-blockquote:text-gray-700 prose-blockquote:dark:text-gray-400">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="bottom-24 right-full transform -translate-x-44 rotate-45" />
      </BackgroundPatternWrapper>
    </article>
  );
};

export default StaticContentBlock;
