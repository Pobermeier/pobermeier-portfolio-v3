import React from "react";
import Button from "components/Buttons/Button";

interface Props {
  onLeavePreviewBtnClick: () => void;
}

const PreviewBanner = ({ onLeavePreviewBtnClick }: Props) => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
        <div className="flex-column sm:flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <p className="ml-3 font-medium text-white">Live Preview Mode is currently active!</p>
          </div>
          <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
            <Button
              type="secondary"
              text="Leave Preview Mode"
              size="xs"
              isFullWidth
              onClick={onLeavePreviewBtnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBanner;
