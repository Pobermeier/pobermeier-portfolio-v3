import { ComponentStory, ComponentMeta } from "@storybook/react";
// components
import Button from "components/Buttons/Button";
import Card from "components/Card/Card";
import ContentSectionHeading from "components/ContentSection/ContentSectionHeading";
import ContentSectionParagraph from "components/ContentSection/ContentSectionParagraph";

export default {
  title: "Content/Card/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className="max-w-sm">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div className="text-center">
      <ContentSectionHeading headingText="This is a card with some text" />
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

export const WithCardFooterContent = Template.bind({});

WithCardFooterContent.args = {
  children: (
    <div className="text-center">
      <ContentSectionHeading headingText="This is a card" />
      <ContentSectionParagraph text="that also has some content in the card footer content slot" />
    </div>
  ),
  contentSlotBottom: (
    <div className="p-6">
      <Button text="Test" isFullWidth />
    </div>
  ),
};
