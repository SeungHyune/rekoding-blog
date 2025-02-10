import { Fragment, useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { CommentIcon, LikeIcon, ShareIcon } from "@components/icons";
import { CategoryPostList } from "./components";
import styles from "./post.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { PostListResponse, PostListType } from "@/types/response/post";
import {
  collection,
  doc,
  DocumentData,
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase";
import { formatDate } from "@/utils";

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

const postConverter: FirestoreDataConverter<PostListResponse> = {
  toFirestore(post: PostListResponse): DocumentData {
    return {
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl,
      hashTag: post.hashTag,
      dateAt: post.dateAt,
      category: post.category,
      categoryColor: post.categoryColor,
      likeCount: post.likeCount,
    };
  },
  fromFirestore(snapshot): PostListResponse {
    const data = snapshot.data();
    return {
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl,
      hashTag: data.hashTag,
      dateAt: data.dateAt.toDate(),
      category: data.category,
      categoryColor: data.categoryColor,
      likeCount: data.likeCount,
    };
  },
};

const Post = () => {
  const [posts, setPosts] = useState<PostListType[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [postDetail, setPostDetail] = useState<PostListResponse | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsCollection = await collection(db, "posts").withConverter(
          postConverter,
        );
        const response = await getDocs(postsCollection);

        const postList = response.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }));

        setPosts(postList);
      } catch (error) {
        console.error(error);
      }
    };
    const getCategorys = async () => {
      try {
        const response = await getDoc(
          doc(db, "categoryList", "yJziodlqS1uKOkGiM6Bm"),
        );
        const data = response.data();

        if (data && Array.isArray(data.categoryList)) {
          setCategoryList(data.categoryList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCategorys();
    getPosts();
  }, []);

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        if (!id) return;

        const postDetailDoc = await doc(db, "posts", id).withConverter(
          postConverter,
        );
        const response = await getDoc(postDetailDoc);
        const post = response.data();

        if (!post) {
          throw new Error("해당 Post는 존재하지 않습니다.");
        }

        setPostDetail(post);
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

  const postDetailDateAt = new Date(postDetail.dateAt);
  const postDetailDate = formatDate(postDetailDateAt);

  return (
    <section className={styles.postContainer}>
      <aside className={`${styles.leftSidebar} leftSidebar`}>
        <ul>
          {postList.map(({ category, posts }) => (
            <Fragment key={category}>
              {posts.length > 0 && (
                <CategoryPostList
                  key={category}
                  category={category}
                  posts={posts}
                />
              )}
            </Fragment>
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
              <span>{postDetailDate}</span>
            </div>
          </div>
        </article>
        <article className={`${styles.contentBox} contentBox`}>
          <div className={styles.thumbnailBox}>
            <img src={postDetail.imageUrl} alt={postDetail.title} />
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
