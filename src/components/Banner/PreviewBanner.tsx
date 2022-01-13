import React from "react";
import Button from "components/Buttons/Button";
import Banner from "./Banner";

interface Props {
  onLeavePreviewBtnClick: () => void;
}

const PreviewBanner = ({ onLeavePreviewBtnClick }: Props) => {
  return (
    <Banner
      text="Live Preview Mode is currently active!"
      ctaButtons={
        <Button
          type="secondary"
          text="Leave Preview Mode"
          size="xs"
          isFullWidth
          onClick={onLeavePreviewBtnClick}
        />
      }
    />
  );
};

export default PreviewBanner;
