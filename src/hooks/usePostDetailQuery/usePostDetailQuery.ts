import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/services/response/post";
import { PostListResponse } from "@/types/response/post";

interface UsePostDetailProps {
  id?: string;
}

const usePostDetailQuery = ({ id }: UsePostDetailProps) => {
  const { data: postDetail } = useQuery<PostListResponse>({
    queryKey: ["postDetail", id],
    queryFn: () => getPostDetail(id as string),
    enabled: !!id,
  });

  return {
    postDetail,
  };
};

export default usePostDetailQuery;
