import { CSSProperties } from "react";

interface ReactEditorProps {
  style?: CSSProperties;
  handleInputContent: (event: React.ChangeEvent<HTMLDivElement>) => void;
}

const ReactEditor = ({ style, handleInputContent }: ReactEditorProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const selection = window.getSelection();

      if (!selection || selection?.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      range.deleteContents();

      const br = document.createElement("br");
      range.insertNode(br);

      const newNode = document.createTextNode("\n");
      range.insertNode(newNode);

      range.setStartAfter(newNode);
      range.collapse(true);

      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        outline: "none",
        whiteSpace: "pre-wrap",
        fontSize: "1.6rem",
        lineHeight: "2.7rem",
        ...style,
      }}
      contentEditable
      onInput={handleInputContent}
      onKeyDown={handleKeyDown}
    />
  );
};

export default ReactEditor;
