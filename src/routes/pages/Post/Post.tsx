import { Fragment } from "react";
import { NavMenuIcon } from "@components/icons";
import { usePostData } from "./hooks";
import { ReactMarkdownPreview } from "@/components";
import { CategoryPostList } from "./components";
import NotFound from "../NotFound/NotFound";
import { useToggleMobileNav } from "@/hooks";
import styles from "./post.module.css";

const Post = () => {
  const { isMobile, isNavOpen, handleCloseNav, handleToggleNav } =
    useToggleMobileNav({ mobileWidth: 1280 });

  const { postDetail, postList, tocList, postDetailDate, handleTocClick } =
    usePostData();

  if (!postDetail) {
    return <NotFound />;
  }

  console.log(isNavOpen);

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul
          style={{
            transform: `translateX(${isNavOpen ? "0" : "-26rem"})`,
          }}
        >
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
          className={`${styles.leftSidebarMenu} leftSiderbarMenu`}
          style={{
            transform: `translateX(${isNavOpen ? "0" : "-26rem"})`,
          }}
          type="button"
          onClick={handleToggleNav}
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
        <ul className={styles.tocList}>
          {tocList.map(({ text, gapRemoveText }) => (
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
