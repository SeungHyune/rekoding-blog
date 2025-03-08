import { QueryOptions, useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/services/response/post";
import { PostListResponse } from "@/types/response/post";

interface UsePostDetailProps {
  id?: string;
  options?: Omit<QueryOptions<PostListResponse, Error>, "queryKey">;
}

const usePostDetailQuery = ({ id, options }: UsePostDetailProps) => {
  const { data: postDetail } = useQuery<PostListResponse>({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id as string),
    enabled: !!id && !options?.initialData,
    ...options,
  });

  return {
    postDetail,
  };
};

export default usePostDetailQuery;
