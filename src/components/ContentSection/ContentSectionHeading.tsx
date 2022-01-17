interface Props {
  headingText: string;
}

const ContentSectionHeading = ({ headingText }: Props) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
      {headingText}
    </h2>
  );
};

export default ContentSectionHeading;
