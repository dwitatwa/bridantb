import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <div>
          <img
            src={`https://${node.data.target.fields.file.url}`}
            width="100%"
            alt={node.data.target.fields.description}
          />
        </div>
      );
    },
  },
};

function RichTextToComp({ theText }: { theText: Document }) {
  return (
    <div className="flex flex-col gap-5">
      {documentToReactComponents(theText, renderOptions)}
    </div>
  );
}

export default RichTextToComp;
