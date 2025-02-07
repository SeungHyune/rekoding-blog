import { useEffect, useMemo, useState } from "react";
import { PostItem } from "./components";
import styles from "./home.module.css";
import { PostListType, PostListResponse } from "@/types/response/post";
import { db } from "@/firebase";
import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  FirestoreDataConverter,
  getDoc,
  getDocs,
} from "firebase/firestore";

// Firestore 데이터 변환기 정의
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

const Home = () => {
  const [posts, setPosts] = useState<PostListType[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [tab, setTab] = useState("TOTAL");

  useEffect(() => {
    const getPosts = async () => {
      const postsCollectionRef: CollectionReference<PostListResponse> =
        await collection(db, "posts").withConverter(postConverter);

      const response = await getDocs(postsCollectionRef);

      const postList = response.docs.map((post) => ({
        ...post.data(),
        id: post.id,
      }));

      setPosts(postList);
    };

    const getCategorys = async () => {
      const response = await getDoc(
        doc(db, "categoryList", "yJziodlqS1uKOkGiM6Bm"),
      );

      const data = response.data();

      if (data && Array.isArray(data.categoryList)) {
        setCategoryList(data.categoryList);
      }
    };

    getCategorys();
    getPosts();
  }, []);

  const postList = useMemo(() => {
    return posts.filter(({ category }) => {
      return category.toUpperCase() === tab || tab === "TOTAL";
    });
  }, [tab, posts]);

  const handleClickTab = (newTab: string) => {
    if (tab === newTab) {
      // 현재 tab을 선택한 경우
      // 리렌더링 방지
      return;
    }

    setTab(newTab);
  };

  const tabActiveStyle = {
    backgroundColor: "#fef0d3",
    color: "#ffaa00",
  };

  return (
    <section>
      <article className={styles.mainTitle}>
        <h2>
          코드로 기록하며 성장하는 개발자, <br />
          지식의 공유와 개발 커뮤니티에 기여하는 열정을 가지고 있습니다.
        </h2>
        <p>
          안녕하세요 프론트엔드 개발자 조승현입니다.
          <br />
          지식을 공유하기 위해 개설한 블로그입니다.
        </p>
      </article>
      <article className={styles.mainPostTab}>
        <button
          type="button"
          style={tab === "TOTAL" ? tabActiveStyle : {}}
          onClick={() => handleClickTab("TOTAL")}
        >
          전체
        </button>
        {categoryList.map((category) => (
          <button
            type="button"
            key={category}
            style={tab === category ? tabActiveStyle : {}}
            onClick={() => handleClickTab(category)}
          >
            {category}
          </button>
        ))}
      </article>
      <article className={styles.mainPosts}>
        <ul>
          {postList.map(
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
      </article>
    </section>
  );
};

export default Home;
