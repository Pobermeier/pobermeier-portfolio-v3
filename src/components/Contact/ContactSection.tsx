// components
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import ContactForm from "components/Contact/ContactForm";
import ContentSection from "components/ContentSection/ContentSection";

export interface ContactSectionProps {
  /**
   * The text that will be shown on the form submit button
   */
  ctaButtonText?: string;
  /**
   * A short description rendered below the headline and before the form
   */
  description?: string;
  /**
   * The heading that will be rendered above the form
   */
  heading?: string;
  id: string;
}

const ContactSection = ({
  ctaButtonText = "Send Message",
  description,
  heading,
  id,
}: ContactSectionProps) => {
  return (
    <ContentSection
      htmlId="contact"
      heading={heading}
      description={description}
      decorationElements={
        <>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="left-full transform translate-x-20 translate-y-40 rotate-45" />
          </BackgroundPatternWrapper>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="right-full bottom-0 transform -translate-x-40 -translate-y-24 rotate-45" />
          </BackgroundPatternWrapper>
        </>
      }
    >
      <ContactForm ctaButtonText={ctaButtonText} id={id} />
    </ContentSection>
  );
};

export default ContactSection;
