import { Image, ResponsiveImageType } from "react-datocms";
// components
import Card from "components/Card/Card";

type Props = {
  /**
   * Responsive image data
   */
  imageData: ResponsiveImageType;
};

const CardWithTopImage: React.FC<Props> = ({ imageData, children }) => {
  return (
    <Card
      contentSlotBottom={
        <div className="flex-shrink-0 -order-1">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            layout="responsive"
            objectFit="cover"
            pictureClassName="rounded-t-xl"
            data={imageData}
          />
        </div>
      }
    >
      {children}
    </Card>
  );
};

export default CardWithTopImage;
