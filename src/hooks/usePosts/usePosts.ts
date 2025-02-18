import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { PostListResponse, PostListType } from "@/types/response/post";
import { firebasePostConverter } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { collection, CollectionReference, getDocs } from "firebase/firestore";

const getPosts = async () => {
  try {
    const postsCollection: CollectionReference<PostListResponse> =
      await collection(db, FIREBASE_COLLECTION.POSTS).withConverter(
        firebasePostConverter,
      );

    const response = await getDocs(postsCollection);

    const postList: PostListType[] = response.docs.map((post) => ({
      ...post.data(),
      id: post.id,
    }));

    return postList;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

const usePosts = () => {
  const { data: posts } = useQuery<PostListType[]>({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return {
    posts,
  };
};

export default usePosts;
