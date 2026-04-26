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
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>RECENT POSTS</h2>
          <div className={styles.line}></div>
        </div>
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
                  style={
                    {
                      "--category-color": post.categoryColor,
                    } as React.CSSProperties
                  }
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
        <Link to="/blog" className={styles.moreButton}>
          READ ALL POSTS →
        </Link>
      </div>
    </section>
  );
};

export default BlogSummary;
