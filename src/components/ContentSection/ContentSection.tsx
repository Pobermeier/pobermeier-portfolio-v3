import React, { ReactElement } from "react";

import CmsComponentMapper from "components/CMS/CmsComponentMapper";
import ContentSectionHeading from "components/ContentSection/ContentSectionHeading";
import ContentSectionParagraph from "components/ContentSection//ContentSectionParagraph";
import { ContentSectionAllowedComponent } from "models/datoCMS";

export interface ContentSectionProps {
  decorationElements?: ReactElement | ReactElement[];
  description?: string;
  dynamicContent?: ContentSectionAllowedComponent[];
  heading?: string;
  htmlId?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  decorationElements,
  description,
  dynamicContent,
  heading,
  htmlId,
}) => {
  return (
    <section
      id={htmlId}
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-18 relative"
    >
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <div className="text-center">
          {heading && <ContentSectionHeading headingText={heading} />}
          {description && <ContentSectionParagraph text={description} />}
        </div>
        <div className={(heading || description) && "mt-12"}>
          {children}
          {dynamicContent?.map((component) => (
            <CmsComponentMapper
              key={component.id}
              typeName={component.__typename}
              componentProps={component}
            />
          ))}
        </div>
      </div>
      {decorationElements}
    </section>
  );
};

export default ContentSection;
