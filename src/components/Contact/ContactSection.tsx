import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import Button from "components/Buttons/Button";
import ContentSectionHeading from "components/ContentSection/ContentSectionHeading";
import ContentSectionParagraph from "components/ContentSection/ContentSectionParagraph";

export interface ContactSectionProps {
  ctaButtonText?: string;
  description?: string;
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
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 relative">
      <div className="max-w-xl mx-auto" data-aos="fade-up">
        <div className="text-center">
          {heading && <ContentSectionHeading headingText={heading} />}
          {description && <ContentSectionParagraph text={description} />}
        </div>
        <div className={(heading || description) && "mt-12"}>
          <form
            action="/success"
            data-netlify="true"
            id={`contact-form-${id}`}
            name={`contact-form-${id}`}
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button text={ctaButtonText} size="lg" isFullWidth></Button>
            </div>
          </form>
        </div>
      </div>
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="left-full transform translate-x-20 translate-y-40 rotate-45" />
      </BackgroundPatternWrapper>
      <BackgroundPatternWrapper>
        <BackgroundPattern positionClassName="right-full bottom-0 transform -translate-x-40 -translate-y-24 rotate-45" />
      </BackgroundPatternWrapper>
    </section>
  );
};

export default ContactSection;
