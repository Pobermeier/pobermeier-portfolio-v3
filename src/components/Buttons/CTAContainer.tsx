// types
import { CallToAction } from "models/datoCMS";
// components
import Button from "components/Buttons/Button";

export interface CTAContainerProps {
  callToActions: CallToAction[];
}

const CTAContainer = ({ callToActions }: CTAContainerProps) => {
  return (
    <div className="my-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0">
      {callToActions?.map(({ ctaType, icon, id, isExternalLink, linkUrl, title }) => (
        <Button
          key={id}
          text={title}
          type={ctaType}
          as="a"
          iconUrl={icon?.url}
          isExternalLink={isExternalLink}
          url={linkUrl}
          size="lg"
        />
      ))}
    </div>
  );
};

export default CTAContainer;
