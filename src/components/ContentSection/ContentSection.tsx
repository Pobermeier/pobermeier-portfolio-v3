import React, { ReactElement } from "react";

import ContentSectionHeading from "./ContentSectionHeading";
import ContentSectionParagraph from "./ContentSectionParagraph";

interface Props {
  description?: string;
  heading?: string;
  decorationElements?: ReactElement | ReactElement[];
}

const ContentSection: React.FC<Props> = ({
  children,
  decorationElements,
  description,
  heading,
}) => {
  return (
    <div>
      <section
        className="bg-gray-50 dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 relative"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {heading && <ContentSectionHeading headingText={heading} />}
            {description && <ContentSectionParagraph text={description} />}
          </div>
          <div className={(heading || description) && "mt-12"}>{children}</div>
        </div>
        {decorationElements}
      </section>
    </div>
  );
};

export default ContentSection;
