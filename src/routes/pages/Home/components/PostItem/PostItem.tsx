import { Link } from "react-router-dom";
import styles from "./postItem.module.css";
import { formatDate } from "@/utils";

interface PostItemProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  dateAt: string;
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

  return (
    <li>
      <Link to={`/post/${id}`} title="">
        <div className={styles.imgBox}>
          <img src={imageUrl} alt={`${title} 이미지`} />
          <span style={{ backgroundColor: `#${categoryColor}` }}>
            {category}
          </span>
        </div>
        <div className={styles.contentBox}>
          <strong>{title}</strong>
          <p>{content}</p>
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
    </li>
  );
};

export default PostItem;
