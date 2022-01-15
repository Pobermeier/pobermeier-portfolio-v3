import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

const ContentSectionParagraph = ({ text }: Props) => {
  return (
    <p className="mt-4 leading-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
      <ReactMarkdown>{text}</ReactMarkdown>
    </p>
  );
};

export default ContentSectionParagraph;
