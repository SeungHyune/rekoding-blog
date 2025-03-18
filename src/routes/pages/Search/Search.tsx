import { PostItem } from "../Home/components";
import { useFilteredPostsBySearch } from "./hooks";
import styles from "./search.module.css";

const Search = () => {
  const { searchValue, searchPosts } = useFilteredPostsBySearch();

  console.log("searchValue", searchValue);
  console.log("searchPosts", searchPosts);

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
