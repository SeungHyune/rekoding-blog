import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PostItem } from "../Home/components";

import { SEARCH_PARAMS } from "@/constants/searchParams/searchParams";
import { usePosts } from "@/hooks";

import styles from "./search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const searchValue = useMemo(
    () => searchParams.get(SEARCH_PARAMS.GET.SEARCH) || "",
    [searchParams],
  );

  const { posts } = usePosts();

  const searchPosts = useMemo(() => {
    return posts.filter(
      ({ title }) =>
        title.toUpperCase().includes(searchValue.toUpperCase()) ||
        searchValue.trim() === "",
    );
  }, [posts, searchValue]);

  return (
    <section className={styles.search}>
      <h2>검색 ({searchPosts.length})</h2>
      {searchPosts.length > 0 ? (
        <ul className={styles.searchPostList}>
          {searchPosts.map(
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
      ) : (
        <p>{searchValue} 검색 결과가 없습니다.</p>
      )}
    </section>
  );
};

export default Search;
