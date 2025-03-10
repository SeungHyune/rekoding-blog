import { Fragment, useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
import { extractTitles } from "./utils";
import styles from "./post.module.css";
import { useMobile } from "./hooks";

const Post = () => {
  const { id } = useParams();

  const loaderData = useLoaderData();

  const { posts = [] } = usePostsQuery();
  const { categorys = [] } = useCategorysQuery();
  const { postDetail } = usePostDetailQuery({
    id,
    options: {
      initialData: loaderData,
    },
  });

  const {
    isToggle: isPostListNav,
    handleToggleClose: handlePostListNavClose,
    handleToggle: handlePostListNavToggle,
  } = useToggle(true);

  const { isMobile } = useMobile({ handlePostListNavClose });

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
