import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/services/response/post";
import { PostListType } from "@/types/response/post";

const usePostsQuery = () => {
  const { data: posts } = useQuery<PostListType[]>({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return {
    posts,
  };
};

export default usePostsQuery;
