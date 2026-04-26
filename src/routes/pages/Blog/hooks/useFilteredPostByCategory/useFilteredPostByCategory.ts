import { useCategoriesQuery, usePostsQuery } from "@/hooks";
import { useMemo } from "react";

interface UseFilteredPostByCategoryProps {
  tab: string;
}

const useFilteredPostByCategory = ({ tab }: UseFilteredPostByCategoryProps) => {
  const { posts = [] } = usePostsQuery();
  const { categories = [] } = useCategoriesQuery();

  const postList = useMemo(() => {
    return posts.filter(({ category }) => {
      return category.toUpperCase() === tab || tab === "TOTAL";
    });
  }, [tab, posts]);

  return {
    categories,
    postList,
  };
};

export default useFilteredPostByCategory;
