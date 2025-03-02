import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import styles from "./reactMarkdownPreview.module.css";

interface ReactMarkdownPreviewProps {
  content: string;
}

const ReactMarkdownPreview = ({ content }: ReactMarkdownPreviewProps) => {
  return (
    <div className={styles.reactMarkdown}>
      <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
    </div>
  );
};

export default ReactMarkdownPreview;
