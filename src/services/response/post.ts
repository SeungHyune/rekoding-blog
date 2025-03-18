import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { PostListResponse, PostListType } from "@/types/response/post";
import { firebasePostConverter } from "@/utils";
import {
  collection,
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export const getPostDetail = async (id: string) => {
  try {
    const postDetailDoc = await doc(
      db,
      FIREBASE_COLLECTION.POSTS,
      id,
    ).withConverter(firebasePostConverter);
    const response = await getDoc(postDetailDoc);
    const post = response.data();

    if (!post) {
      throw new Error("해당 Post는 존재하지 않습니다.");
    }

    return post;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

export const getPosts = async () => {
  try {
    const postsCollection: CollectionReference<PostListResponse> =
      await collection(db, FIREBASE_COLLECTION.POSTS).withConverter(
        firebasePostConverter,
      );

    const response = await getDocs(
      query(postsCollection, orderBy("dateAt", "desc")),
    );

    const postList: PostListType[] = response.docs.map((post) => ({
      ...post.data(),
      id: post.id,
    }));

    return postList;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};
