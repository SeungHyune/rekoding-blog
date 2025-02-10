import { PostListResponse } from "@/types/response/post";
import { DocumentData, FirestoreDataConverter } from "firebase/firestore";

// Firestore 데이터 변환기 정의
const firebasePostConverter: FirestoreDataConverter<PostListResponse> = {
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

export default firebasePostConverter;
