import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { CommentIcon, LikeIcon, ShareIcon } from "@components/icons";
import { CategoryPostList } from "./components";
import styles from "./post.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { PostListResponse, PostResponse } from "@/types/response/post";

function extractTitles(markdown: string) {
  const titles = markdown.match(/^(#+)\s+(.*)$/gm);
  if (!titles) return [];

  return titles.map((title) => {
    const text = title.replace(/^(#+)\s+/, "").trim();
    const textLowerCase = text.replace(/[.()\\/]/g, "").toLowerCase();
    const gapRemoveText = textLowerCase.replace(/\s+/g, "-");

    return { text, gapRemoveText }; // 레벨, 텍스트, HTML 태그 포함
  });
}

const Post = () => {
  const [posts, setPosts] = useState<PostListResponse[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [postDetail, setPostDetail] = useState<PostResponse | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("/posts");
        const postList = await response.json();
        setPosts(postList);
      } catch (error) {
        console.error(error);
      }
    };
    const getCategoryList = async () => {
      try {
        const response = await fetch("/categoryList");
        const categoryList = await response.json();
        setCategoryList(categoryList);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
    getCategoryList();
  }, []);

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const response = await fetch(`/posts/${id}`);
        const postDetail = await response.json();
        setPostDetail(postDetail);
      } catch (error) {
        console.error(error);
      }
    };

    getPostDetail();
  }, [id]);

  const postList = useMemo(() => {
    return categoryList.map((title) => {
      const postList = posts.filter(
        ({ category }) => category.toUpperCase() === title,
      );

      return {
        category: title,
        posts: postList,
      };
    });
  }, [posts]);

  if (!postDetail) {
    return <NotFound />;
  }

  const TOC_LIST = extractTitles(postDetail.content);

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

  console.log(postDetail);

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul>
          {postList.map(({ category, posts }) => (
            <CategoryPostList
              key={category}
              category={category}
              posts={posts}
            />
          ))}
        </ul>
      </aside>

      <section className={`${styles.postContent} postContent`}>
        <article className={styles.titleBox}>
          <h1>{postDetail.title}</h1>
          <div className={styles.infoBox}>
            <ul className={styles.hashTagList}>
              {postDetail.hashTag.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
            <div>
              <span>{postDetail.dateAt}</span>
            </div>
          </div>
        </article>
        <article className={`${styles.contentBox} contentBox`}>
          <div className={styles.thumbnailBox}>
            <img src={postDetail.thumbnailUrl} alt={postDetail.title} />
          </div>
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>
            {postDetail.content}
          </ReactMarkdown>
        </article>
      </section>
      <aside className={`${styles.rightSidebar} rightSidebar`}>
        <div className={styles.socialButtons}>
          <button type="button">
            <LikeIcon />
            <span>{postDetail.likeCount}</span>
          </button>
          <button type="button">
            <ShareIcon />
          </button>
          <button type="button">
            <CommentIcon />
          </button>
        </div>
        <ul className={styles.tocList}>
          {TOC_LIST.map(({ text, gapRemoveText }) => (
            <li key={`${gapRemoveText}`}>
              <a
                href={`#${gapRemoveText}`}
                title={`${text} 타이틀로 이동`}
                onClick={handleTocClick}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Post;
