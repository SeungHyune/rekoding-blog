import { CSSProperties } from "react";

interface ReactEditorProps {
  style?: CSSProperties;
  value: string;
  handleInputContent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReactEditor = ({
  style,
  value,
  handleInputContent,
}: ReactEditorProps) => {
  return (
    <textarea
      style={{
        width: "100%",
        height: "100%",
        outline: "none",
        whiteSpace: "pre-wrap",
        fontSize: "1.6rem",
        lineHeight: "2.7rem",
        ...style,
      }}
      value={value}
      placeholder="Markdown 문법으로 글을 작성해주세요."
      spellCheck={false}
      onChange={handleInputContent}
    />
  );
};

export default ReactEditor;
