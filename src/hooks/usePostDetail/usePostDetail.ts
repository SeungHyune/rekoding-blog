import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { PostListResponse } from "@/types/response/post";
import { firebasePostConverter } from "@/utils";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface UsePostDetailProps {
  id?: string;
}

const usePostDetail = ({ id }: UsePostDetailProps) => {
  const [postDetail, setPostDetail] = useState<PostListResponse | null>(null);

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        if (!id) return;

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

        setPostDetail(post);
      } catch (error) {
        console.error(error);
      }
    };

    getPostDetail();
  }, [id]);

  return {
    postDetail,
  };
};

export default usePostDetail;
