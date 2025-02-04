import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { CommentIcon, LikeIcon, ShareIcon } from "@components/icons";
import { CategoryPostList } from "./components";
import { POSTS_DETAIL, POST_LIST, CATEGORY_LIST } from "@/constants/dummy";
import styles from "./post.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function extractTitles(markdown: string) {
  const titles = markdown.match(/^(#+)\s+(.*)$/gm);
  if (!titles) return [];

  return titles.map((title) => {
    const text = title.replace(/^(#+)\s+/, "").trim();
    const textLowerCase = text.replace(/[.()\\/]/g, "").toLowerCase();
    const gapRemoveText = textLowerCase.replace(/\s+/g, "-");

    return { text, gapRemoveText }; // 레벨, 텍스트, HTML 태그 포함
  });
}

const Post = () => {
  const { id } = useParams();

  const postList = useMemo(() => {
    return CATEGORY_LIST.map((title) => {
      const posts = POST_LIST.filter(
        ({ category }) => category.toUpperCase() === title,
      );

      return {
        category: title,
        posts,
      };
    });
  }, [POST_LIST]);

  const POST_DETAIL = POSTS_DETAIL[id];

  if (!POST_DETAIL) {
    return <NotFound />;
  }

  const TOC_LIST = extractTitles(POST_DETAIL.content);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleTocClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.substring(1);

    if (!targetId) {
      return;
    }

    smoothScrollTo(targetId);
  };

  console.log(POST_DETAIL);

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul>
          {postList.map(({ category, posts }) => (
            <CategoryPostList
              key={category}
              category={category}
              posts={posts}
            />
          ))}
        </ul>
      </aside>

      <section className={`${styles.postContent} postContent`}>
        <article className={styles.titleBox}>
          <h1>{POST_DETAIL.title}</h1>
          <div>
            <span>{POST_DETAIL.dateAt}</span>
          </div>
        </article>
        <article className={`${styles.contentBox} contentBox`}>
          <div className={styles.thumbnailBox}>
            <img src={POST_DETAIL.thumbnailUrl} alt={POST_DETAIL.title} />
          </div>
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>
            {POST_DETAIL.content}
          </ReactMarkdown>
        </article>
      </section>
      <aside className={`${styles.rightSidebar} rightSidebar`}>
        <div className={styles.socialButtons}>
          <button type="button">
            <LikeIcon />
            <span>{POST_DETAIL.likeCount}</span>
          </button>
          <button type="button">
            <ShareIcon />
          </button>
          <button type="button">
            <CommentIcon />
          </button>
        </div>
        <ul className={styles.tocList}>
          {TOC_LIST.map(({ text, gapRemoveText }) => (
            <li key={`${gapRemoveText}`}>
              <a
                href={`#${gapRemoveText}`}
                title={`${text} 타이틀로 이동`}
                onClick={handleTocClick}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Post;
