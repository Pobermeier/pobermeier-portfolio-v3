import { ComponentStory, ComponentMeta } from "@storybook/react";
// mocks
import mockImageData from "./CardWithTopImage.mocks";
// components
import CardWithTopImage from "components/Card/CardWithTopImage";
import ContentSectionHeading from "components/ContentSection/ContentSectionHeading";
import ContentSectionParagraph from "components/ContentSection/ContentSectionParagraph";

export default {
  title: "Content/Card/CardWithTopImage",
  component: CardWithTopImage,
} as ComponentMeta<typeof CardWithTopImage>;

const Template: ComponentStory<typeof CardWithTopImage> = (args) => (
  <div className="max-w-sm">
    <CardWithTopImage {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  imageData: mockImageData,
  children: (
    <div className="text-center">
      <ContentSectionHeading headingText="This is a card with a top image" />
      <ContentSectionParagraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, molestiae voluptates
        impedit libero at est nobis veritatis asperiores dolore iusto sequi, temporibus nemo, unde
        sed! Nostrum unde similique reprehenderit. Minus id repellendus nisi? Delectus repellendus
        perspiciatis vero numquam fugiat natus saepe hic commodi autem consectetur recusandae
        architecto, est quasi beatae optio fuga culpa."
      />
    </div>
  ),
};
