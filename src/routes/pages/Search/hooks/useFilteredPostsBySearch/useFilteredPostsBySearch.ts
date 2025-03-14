import { SEARCH_PARAMS } from "@/constants/searchParams/searchParams";
import { usePostsQuery } from "@/hooks";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useFilteredPostsBySearch = () => {
  const [searchParams] = useSearchParams();

  const searchValue = useMemo(
    () => searchParams.get(SEARCH_PARAMS.GET.SEARCH) || "",
    [searchParams],
  );

  const { posts = [] } = usePostsQuery();

  const searchPosts = useMemo(() => {
    return posts.filter(
      ({ title }) =>
        title.toUpperCase().includes(searchValue.toUpperCase()) ||
        searchValue.trim() === "",
    );
  }, [posts, searchValue]);

  return {
    searchValue,
    searchPosts,
  };
};

export default useFilteredPostsBySearch;
