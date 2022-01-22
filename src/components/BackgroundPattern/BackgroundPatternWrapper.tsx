const BackgroundPatternWrapper: React.FC = ({ children }) => {
  return (
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full -z-9 pointer-events-none">
      <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPatternWrapper;
