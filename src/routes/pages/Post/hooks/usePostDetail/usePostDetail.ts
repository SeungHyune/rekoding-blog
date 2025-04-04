import { usePostDetailQuery } from "@/hooks";
import { useLoaderData, useParams } from "react-router-dom";
import { extractTitles, splitMarkdownIntoSections } from "../../utils";
import { useEffect } from "react";
import { formatDate, smoothScrollTo } from "@/utils";

const usePostDetail = () => {
  const { id } = useParams();

  const loaderData = useLoaderData();

  const { postDetail } = usePostDetailQuery({
    id,
    options: {
      initialData: loaderData,
    },
  });

  const tocList = extractTitles(postDetail?.content || "");
  const postContentList = splitMarkdownIntoSections(postDetail?.content || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryId = Number(entry.target.id);
          const tocId = tocList[entryId].gapRemoveText;
          const toc = document.querySelector(`li[data-title="${tocId}"] a`);

          if (entry.isIntersecting) {
            toc?.setAttribute("style", "color: #ffaa00; background: #fff9ee");
          } else {
            toc?.setAttribute("style", "");
          }
        });
      },
      {
        rootMargin: "100px",
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
    postDetailDate,
    tocList,
    handleTocClick,
  };
};

export default usePostDetail;
