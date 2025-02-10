import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { PostListResponse, PostListType } from "@/types/response/post";
import { firebasePostConverter } from "@/utils";
import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState<PostListType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsCollection: CollectionReference<PostListResponse> =
          await collection(db, FIREBASE_COLLECTION.POSTS).withConverter(
            firebasePostConverter,
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

    getPosts();
  }, []);

  return {
    posts,
  };
};

export default usePosts;
