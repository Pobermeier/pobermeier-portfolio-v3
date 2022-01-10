import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";
import { CmsComponentName } from "models/datoCMS";

interface Props {
  typeName: CmsComponentName;
  componentProps: StaticContentBlockRecordProps;
}

const CmsComponentMapper = ({ typeName, componentProps }: Props) => {
  switch (true) {
    case typeName === "StaticContentBlockRecord":
      const { title, text } = componentProps as StaticContentBlockRecordProps;

      return <StaticContentBlock title={title} text={text} />;

    default:
      return null;
  }
};

export default CmsComponentMapper;
