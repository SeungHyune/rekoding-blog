import { Link } from "react-router-dom";
import { formatDate } from "@/utils";
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

  const formatContent = content
    .replace(/#+\s.*\n/g, "") // 모든 수준의 헤더 제거
    .replace(/\*\*(.+?)\*\*/g, "$1") // 굵은 글씨 제거
    .replace(/\*(.+?)\*/g, "$1") // 기울임 글씨 제거
    .replace(/!\[.*?\]\(.*?\)/g, "") // 이미지 제거
    .replace(/\[.*?\]\(.*?\)/g, "") // 링크 제거
    .replace(/- /g, "") // 목록 항목 제거
    .replace(/`{1,3}/g, "") // 백틱 제거 (시작)
    .trim(); // 앞뒤 공백 제거

  return (
    <Link to={`/post/${id}`} title="">
      <div className={styles.imgBox}>
        <LazyImage src={imageUrl} alt={`${title}`} />
        <span style={{ backgroundColor: `#${categoryColor}` }}>{category}</span>
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
