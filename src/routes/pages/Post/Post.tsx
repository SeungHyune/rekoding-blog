import { Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CommentIcon,
  LikeIcon,
  NavMenuIcon,
  ShareIcon,
} from "@components/icons";
import { formatDate } from "@/utils";
import {
  useCategorysQuery,
  usePostsQuery,
  useToggle,
  usePostDetailQuery,
} from "@/hooks";
import { ReactMarkdownPreview } from "@/components";
import { CategoryPostList } from "./components";
import NotFound from "../NotFound/NotFound";
import styles from "./post.module.css";

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

  const { posts = [] } = usePostsQuery();
  const { categorys = [] } = useCategorysQuery();
  const { postDetail } = usePostDetailQuery({ id });

  const [isMobile, setIsMobile] = useState(false);
  const {
    isToggle: isPostListNav,
    handleToggleClose: handlePostListNavClose,
    handleToggle: handlePostListNavToggle,
  } = useToggle(true);

  useEffect(() => {
    if (window.innerWidth <= 1260) {
      handlePostListNavClose();
      setIsMobile(true);
    }
  }, []);

  const postList = useMemo(() => {
    return categorys.map(({ value }) => {
      const postList = posts.filter(
        ({ category }) => category.toUpperCase() === value,
      );

      return {
        category: value,
        posts: postList,
      };
    });
  }, [posts]);

  if (!postDetail) {
    return <NotFound />;
  }

  const TOC_LIST = extractTitles(postDetail.content);

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

  const postDetailDateAt = new Date(postDetail.dateAt);
  const postDetailDate = formatDate(postDetailDateAt);

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul
          style={{
            transform: `translateX(${isPostListNav ? "0" : "-26rem"})`,
          }}
        >
          {postList.map(({ category, posts }) => (
            <Fragment key={category}>
              {posts.length > 0 && (
                <CategoryPostList
                  key={category}
                  category={category}
                  posts={posts}
                  handlePostListNavClose={
                    isMobile ? handlePostListNavClose : undefined
                  }
                />
              )}
            </Fragment>
          ))}
        </ul>
        <button
          className={`${styles.leftSidebarMenu} leftSiderbarMenu`}
          style={{
            transform: `translateX(${isPostListNav ? "0" : "-26rem"})`,
          }}
          type="button"
          onClick={handlePostListNavToggle}
        >
          목록
          <NavMenuIcon />
        </button>
      </aside>

      <section className={`${styles.postContent} postContent`}>
        <article className={styles.titleBox}>
          <h1>{postDetail.title}</h1>
          <div className={styles.infoBox}>
            <ul className={styles.hashTagList}>
              {postDetail.hashTag.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
            <div>
              <span>{postDetailDate}</span>
            </div>
          </div>
        </article>
        <article className={`${styles.contentBox} contentBox`}>
          <div className={styles.thumbnailBox}>
            <img src={postDetail.imageUrl} alt={postDetail.title} />
          </div>
          <ReactMarkdownPreview content={postDetail.content} />
        </article>
      </section>
      <aside className={`${styles.rightSidebar} rightSidebar`}>
        <div className={styles.socialButtons}>
          <button type="button">
            <LikeIcon />
            <span>{postDetail.likeCount}</span>
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
