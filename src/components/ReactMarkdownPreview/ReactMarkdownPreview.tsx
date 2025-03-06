import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import styles from "./reactMarkdownPreview.module.css";

interface ReactMarkdownPreviewProps {
  content: string;
}

const ReactMarkdownPreview = ({ content }: ReactMarkdownPreviewProps) => {
  return (
    <div className={`${styles.reactMarkdown} reactMarkdown`}>
      <ReactMarkdown
        rehypePlugins={[rehypeSlug]}
        remarkPlugins={[remarkBreaks]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ReactMarkdownPreview;
