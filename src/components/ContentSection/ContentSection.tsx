import React, { ReactElement } from "react";
// types
import { ContentSectionAllowedComponent } from "models/datoCMS";
// components
import CmsComponentMapper from "components/CMS/CmsComponentMapper";
import ContentSectionHeading from "components/ContentSection/ContentSectionHeading";
import ContentSectionParagraph from "components/ContentSection//ContentSectionParagraph";

export interface ContentSectionProps {
  decorationElements?: ReactElement | ReactElement[];
  /** An optional description of the content section, which is rendered after the heading and before the main content */
  description?: string;
  /** A collection of allowed CMS components that can be passed as dynamic content */
  dynamicContent?: ContentSectionAllowedComponent[];
  /** An optional heading rendered at the top of the component */
  heading?: string;
  /** An optional id that is passed to the outermost element of the component */
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
      aria-label={heading}
      className="bg-gray-50 dark:bg-gray-900 py-10 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-12 relative"
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
