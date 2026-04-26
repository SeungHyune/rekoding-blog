import { CategoryTabs, HomeIntro, PostList } from "./components";
import { useTabState, UseFilteredPostByCategoryProps } from "./hooks";
import styles from "./blog.module.css";

const Blog = () => {
  const { tab, handleClickTab } = useTabState();
  const { categories, postList } = UseFilteredPostByCategoryProps({ tab });

  return (
    <section>
      <HomeIntro styles={styles} />
      <CategoryTabs
        styles={styles}
        tab={tab}
        categories={categories}
        handleClickTab={handleClickTab}
      />
      <PostList styles={styles} tab={tab} postList={postList} />
    </section>
  );
};

export default Blog;
