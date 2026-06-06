import { Fragment } from "react";
import { NavMenuIcon } from "@components/icons";
import { usePostsByCategory, usePostDetail } from "./hooks";
import { ReactMarkdownPreview } from "@/components";
import { CategoryPostList } from "./components";
import NotFound from "../NotFound/NotFound";
import { Link } from "react-router-dom";
import { useToggleMobileNav } from "@/hooks";
import useLogin from "@/stores/useLogin/useLogin";
import styles from "./post.module.css";

const Post = () => {
  const { isLogin } = useLogin();
  const { isMobile, isNavOpen, handleCloseNav, handleToggleNav } =
    useToggleMobileNav({ mobileWidth: 1280 });

  const { postList } = usePostsByCategory();
  const {
    id,
    postDetail,
    postContentList,
    postDetailDate,
    tocList,
    handleTocClick,
  } = usePostDetail();

  if (!postDetail) {
    return <NotFound />;
  }

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul className={isNavOpen ? styles.navOpen : ""}>
          {postList.map(({ category, posts }) => (
            <Fragment key={category}>
              {posts.length > 0 && (
                <CategoryPostList
                  key={category}
                  category={category}
                  posts={posts}
                  handleCloseNav={isMobile ? handleCloseNav : undefined}
                />
              )}
            </Fragment>
          ))}
        </ul>
        <button
          className={`${styles.leftSidebarMenu} leftSiderbarMenu ${isNavOpen ? styles.navOpen : ""}`}
          type="button"
          onClick={handleToggleNav}
        >
          목록
          <NavMenuIcon />
        </button>
      </aside>

      <section className={`${styles.postContent} postContent`}>
        <article className={styles.titleBox}>
          <div className={styles.titleHeader}>
            <h1>{postDetail.title}</h1>
            {isLogin && (
              <Link className={styles.editButton} to={`/editor/${id}`}>
                수정하기
              </Link>
            )}
          </div>
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
          {postContentList.map((content, index) => (
            <div
              className={`${styles.markdownSection} markdownSection`}
              id={String(index)}
              key={`${index}${content.header}`}
            >
              <ReactMarkdownPreview content={content.fullText} />
            </div>
          ))}
        </article>
      </section>
      <aside className={`${styles.rightSidebar} rightSidebar`}>
        <strong>Table of Contents</strong>
        <ul className={styles.tocList}>
          {tocList.map(({ heading, text, gapRemoveText }) => {
            const className = `tocList${heading}`;

            return (
              <li
                className={styles[className]}
                data-title={gapRemoveText}
                key={gapRemoveText}
              >
                <a
                  href={`#${gapRemoveText}`}
                  title={`${text} 타이틀로 이동`}
                  onClick={handleTocClick}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
};

export default Post;
