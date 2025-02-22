import { useMemo, useState } from "react";
import { PostItem } from "./components";

import { useCategorys, usePosts } from "@/hooks";

import styles from "./home.module.css";

const Home = () => {
  const [tab, setTab] = useState("TOTAL");

  const { posts = [] } = usePosts();
  const { categorys = [] } = useCategorys();

  const postList = useMemo(() => {
    return posts.filter(({ category }) => {
      return category.toUpperCase() === tab || tab === "TOTAL";
    });
  }, [tab, posts]);

  const handleClickTab = (newTab: string) => {
    if (tab === newTab) {
      return;
    }

    setTab(newTab);
  };

  const tabActiveStyle = {
    backgroundColor: "#fef0d3",
    color: "#ffaa00",
  };

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
      <article className={styles.mainPostTab}>
        <button
          type="button"
          style={tab === "TOTAL" ? tabActiveStyle : {}}
          onClick={() => handleClickTab("TOTAL")}
        >
          전체
        </button>
        {categorys.map(({ value }) => (
          <button
            type="button"
            key={value}
            style={tab === value ? tabActiveStyle : {}}
            onClick={() => handleClickTab(value)}
          >
            {value}
          </button>
        ))}
      </article>
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
