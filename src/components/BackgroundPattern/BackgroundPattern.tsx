import React from "react";

interface Props {
  positionClassName: string;
}

const BackgroundPattern = ({ positionClassName }: Props) => {
  return (
    <svg
      className={`absolute ${positionClassName}`}
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern
          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-primary text-opacity-25"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
    </svg>
  );
};

export default BackgroundPattern;
