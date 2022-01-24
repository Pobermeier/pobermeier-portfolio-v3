import { ReactElement } from "react";

interface Props {
  className?: string;
  ctaButtons?: ReactElement | ReactElement[];
  text: string;
  textClassName?: string;
}

const Banner = ({
  className = "bg-primary",
  ctaButtons,
  text,
  textClassName = "text-white",
}: Props) => {
  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
        <div className="flex-column sm:flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <p className={`ml-3 font-medium ${textClassName}`}>{text}</p>
          </div>
          {ctaButtons && (
            <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">{ctaButtons}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
