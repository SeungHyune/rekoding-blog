import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import styles from "./reactMarkdownPreview.module.css";

interface ReactMarkdownPreviewProps {
  content: string;
}

const normalizeMarkdown = (content: string) => {
  return content
    .replace(/<br\s*\/?>/gi, "\n\n")
    .replace(/\\([*_`~#[\]()!>-])/g, "$1")
    .replace(/(\*\*[^*\n]+?\*\*)\u200B(?=[가-힣A-Za-z0-9])/g, "$1")
    .replace(
      /\*\*([^*\n]*?[)\]}〉》」』”’])\*\*(?=[가-힣A-Za-z0-9])/g,
      "**$1\u200B**",
    );
};

const ReactMarkdownPreview = ({ content }: ReactMarkdownPreviewProps) => {
  const normalizedContent = normalizeMarkdown(content);

  return (
    <div className={`${styles.reactMarkdown} reactMarkdown`}>
      <ReactMarkdown
        rehypePlugins={[rehypeSlug]}
        remarkPlugins={[remarkBreaks]}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  );
};

export default ReactMarkdownPreview;
