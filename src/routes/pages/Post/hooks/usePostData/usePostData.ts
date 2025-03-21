import { useEffect, useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useCategoriesQuery, usePostDetailQuery, usePostsQuery } from "@/hooks";
import { extractTitles } from "../../utils";
import { formatDate } from "@/utils";
import splitMarkdownIntoSections from "../../utils/splitMarkdownIntoSections/splitMarkdownIntoSections";

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
  const postContentList = splitMarkdownIntoSections(postDetail?.content || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryId = Number(entry.target.id);
          const tocId = tocList[entryId].gapRemoveText;
          const toc = document.querySelector(`li[data-title="${tocId}"]`);

          if (entry.isIntersecting) {
            toc?.setAttribute("style", "color: #ffaa00");
          } else {
            toc?.setAttribute("style", "");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    const postContentSections = document.querySelectorAll(".markdownSection");
    postContentSections.forEach((section) => observer.observe(section));

    return () => {
      postContentSections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [id]);

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
    postContentList,
    postList,
    tocList,
    postDetailDate,
    handleTocClick,
  };
};

export default usePostData;
