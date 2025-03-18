import { useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useCategoriesQuery, usePostDetailQuery, usePostsQuery } from "@/hooks";
import { extractTitles } from "../../utils";
import { formatDate } from "@/utils";

const usePostData = () => {
  const { id } = useParams();

  const loaderData = useLoaderData();

  const { posts = [] } = usePostsQuery();
  const { categories = [] } = useCategoriesQuery();
  const { postDetail } = usePostDetailQuery({
    id,
    options: {
      initialData: loaderData,
    },
  });

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

  const tocList = extractTitles(postDetail?.content || "");

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleTocClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.substring(1);

    if (!targetId) {
      return;
    }

    smoothScrollTo(targetId);
  };

  const postDetailDate = formatDate(new Date(postDetail?.dateAt || ""));

  return {
    postDetail,
    postList,
    tocList,
    postDetailDate,
    handleTocClick,
  };
};

export default usePostData;
