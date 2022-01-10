import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import React from "react";
import ReactMarkdown from "react-markdown";

export type StaticContentBlockRecordProps = {
  title: string;
  text: string;
};

const StaticContentBlock = ({ title, text }: StaticContentBlockRecordProps) => {
  return (
    <div className="relative pt-12 overflow-hidden">
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="top-12 left-full transform translate-x-32" />
      </BackgroundPatternWrapper>
      <article className="max-w-4xl relative px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="mt-2 block text-3xl text-left leading-8 font-bold tracking-tight text-primary sm:text-4xl">
          {title}
        </h1>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto max-w-4xl prose-a:text-primary prose-a:no-underline">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </article>
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="bottom-12 right-full transform -translate-x-32" />
      </BackgroundPatternWrapper>
    </div>
  );
};

export default StaticContentBlock;
