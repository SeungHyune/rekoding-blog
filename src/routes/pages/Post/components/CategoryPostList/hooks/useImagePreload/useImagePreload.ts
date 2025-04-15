import { useNavigate } from "react-router-dom";
import { getPostDetail } from "@/services/response/post";

interface UseImagePreloadProps {
  handleCloseNav?: () => void;
}

const useImagePreload = ({ handleCloseNav }: UseImagePreloadProps) => {
  const navigate = useNavigate();

  const handlePostClick = async (postId) => {
    const post = await getPostDetail(postId);

    const image = new Image();
    image.src = post.imageUrl;

    image.onload = () => {
      navigate(`/post/${postId}`);
    };

    if (handleCloseNav) {
      handleCloseNav();
    }
  };

  return {
    handlePostClick,
  };
};

export default useImagePreload;
