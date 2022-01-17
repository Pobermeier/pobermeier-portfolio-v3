import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

const ContentSectionParagraph = ({ text }: Props) => {
  return (
    <div className="mt-4 leading-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default ContentSectionParagraph;
