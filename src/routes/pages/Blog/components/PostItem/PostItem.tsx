import { Link } from "react-router-dom";
import { formatDate, markdownToPlainText } from "@/utils";
import { LazyImage } from "@/components";
import styles from "./postItem.module.css";

interface PostItemProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  dateAt: Date;
  hashTag: string[];
  category: string;
  categoryColor: string;
}

const PostItem = ({
  id,
  title,
  content,
  imageUrl,
  dateAt,
  hashTag,
  category,
  categoryColor,
}: PostItemProps) => {
  const postDateAt = new Date(dateAt);
  const formattedDate = formatDate(postDateAt);
  const formatContent = markdownToPlainText(content);

  return (
    <Link to={`/post/${id}`} title="">
      <div className={styles.imgBox}>
        <LazyImage src={imageUrl} />
        <span
          className={styles.category}
          style={
            { "--category-color": `#${categoryColor}` } as React.CSSProperties
          }
        >
          {category}
        </span>
      </div>
      <div className={styles.contentBox}>
        <strong>{title}</strong>
        <p>{formatContent}</p>
        <div className={styles.infoBox}>
          <span>{formattedDate}</span>
          <div className={styles.tagBox}>
            {hashTag.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
