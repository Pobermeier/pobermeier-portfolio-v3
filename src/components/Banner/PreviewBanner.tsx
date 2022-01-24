// components
import Button from "components/Buttons/Button";
import Banner from "components/Banner/Banner";

interface Props {
  onLeavePreviewBtnClick: () => void;
}

const PreviewBanner = ({ onLeavePreviewBtnClick }: Props) => {
  return (
    <Banner
      className="bg-primary sticky top-0 z-50"
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
