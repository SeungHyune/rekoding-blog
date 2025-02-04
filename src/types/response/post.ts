export interface PostListResponse {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  dateAt: string;
  hashTag: string[];
  category: string;
  categoryColor: string;
}

export interface PostResponse {
  title: string;
  thumbnailUrl: string;
  content: string;
  dateAt: string;
  hashTag: string[];
  likeCount: number;
}

export interface PostsDetailResponse {
  [key: number]: PostResponse;
}
