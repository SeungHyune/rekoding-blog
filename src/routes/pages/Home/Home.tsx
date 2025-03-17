import { CategoryTabs, PostItem } from "./components";
import { useTabState, UseFilteredPostByCategoryProps } from "./hooks";
import styles from "./home.module.css";

const Home = () => {
  const { tab, handleClickTab } = useTabState();
  const { categories, postList } = UseFilteredPostByCategoryProps({ tab });

  return (
    <section>
      <article className={styles.mainTitle}>
        <h2>
          코드로 기록하며 성장하는 개발자, <br />
          지식의 공유와 개발 커뮤니티에 기여하는 열정을 가지고 있습니다.
        </h2>
        <p>
          안녕하세요 프론트엔드 개발자 조승현입니다.
          <br />
          지식을 공유하기 위해 개설한 블로그입니다.
        </p>
      </article>
      <CategoryTabs
        styles={styles}
        tab={tab}
        categories={categories}
        handleClickTab={handleClickTab}
      />
      <article className={styles.mainPosts}>
        <ul>
          {postList.map(
            ({
              id,
              title,
              content,
              imageUrl,
              dateAt,
              hashTag,
              category,
              categoryColor,
            }) => (
              <PostItem
                key={id}
                id={id}
                title={title}
                content={content}
                imageUrl={imageUrl}
                dateAt={dateAt}
                hashTag={hashTag}
                category={category}
                categoryColor={categoryColor}
              />
            ),
          )}
        </ul>
      </article>
    </section>
  );
};

export default Home;
