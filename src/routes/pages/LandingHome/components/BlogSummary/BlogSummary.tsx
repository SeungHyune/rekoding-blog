import { Link, useNavigate } from "react-router-dom";
import { usePostsQuery } from "@/hooks";
import { formatDate } from "@/utils";
import styles from "./blogSummary.module.css";

const BlogSummary = () => {
  const { posts = [] } = usePostsQuery();
  const recentPosts = posts.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className={styles.blogSummary}>
      <h2 className={styles.sectionTitle}>Recent Posts</h2>
      <div className={styles.content}>
        <p>최근 작성한 기술 블로그 포스트입니다.</p>
        <div className={styles.listContainer}>
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className={styles.listItem}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postContent}>{post.content}</p>
              <div className={styles.postMeta}>
                <span
                  className={styles.category}
                  style={{ color: post.categoryColor }}
                >
                  {post.category}
                </span>
                <span className={styles.date}>{formatDate(post.dateAt)}</span>
              </div>
            </div>
          ))}
          {recentPosts.length === 0 && (
            <div className={styles.emptyMessage}>포스트가 없습니다.</div>
          )}
        </div>
      </div>
      <Link to="/blog" className={styles.moreButton}>
        블로그 전체보기
      </Link>
    </section>
  );
};

export default BlogSummary;
