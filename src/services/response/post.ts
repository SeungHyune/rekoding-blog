import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { firebasePostConverter } from "@/utils";
import { doc, getDoc } from "firebase/firestore";

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
