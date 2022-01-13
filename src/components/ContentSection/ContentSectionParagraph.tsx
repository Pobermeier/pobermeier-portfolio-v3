import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

const ContentSectionParagraph = ({ text }: Props) => {
  return (
    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-100">
      <ReactMarkdown>{text}</ReactMarkdown>
    </p>
  );
};

export default ContentSectionParagraph;
