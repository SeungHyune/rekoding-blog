import { useMemo } from "react";
import { useCategoriesQuery, usePostsQuery } from "@/hooks";

const usePostsByCategory = () => {
  const { posts = [] } = usePostsQuery();
  const { categories = [] } = useCategoriesQuery();

  const postList = useMemo(() => {
    return categories.map(({ value }) => {
      const postList = posts.filter(
        ({ category }) => category.toUpperCase() === value.toUpperCase(),
      );

      return {
        category: value,
        posts: postList,
      };
    });
  }, [posts, categories]);

  return {
    postList,
  };
};

export default usePostsByCategory;
