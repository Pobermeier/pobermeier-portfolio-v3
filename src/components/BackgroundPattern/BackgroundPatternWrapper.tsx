import React from "react";

const BackgroundPatternWrapper: React.FC = ({ children }) => {
  return (
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPatternWrapper;
