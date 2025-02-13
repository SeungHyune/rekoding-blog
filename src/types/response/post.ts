export interface PostListResponse {
  title: string;
  content: string;
  imageUrl: string;
  dateAt: Date;
  hashTag: string[];
  category: string;
  categoryColor: string;
  likeCount: number;
}

export interface PostListType {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  dateAt: Date;
  hashTag: string[];
  category: string;
  categoryColor: string;
  likeCount: number;
}

export interface PostResponse {
  title: string;
  thumbnailUrl: string;
  content: string;
  dateAt: Date;
  hashTag: string[];
  likeCount: number;
}

export interface PostsDetailResponse {
  [key: number]: PostResponse;
}
