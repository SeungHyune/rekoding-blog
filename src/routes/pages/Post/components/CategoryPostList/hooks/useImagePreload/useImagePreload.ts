import { useNavigate } from "react-router-dom";
import { getPostDetail } from "@/services/response/post";

interface UseImagePreloadProps {
  handleCloseNav?: () => void;
}

const useImagePreload = ({ handleCloseNav }: UseImagePreloadProps) => {
  const navigate = useNavigate();

  const handlePostClick = async (event: React.MouseEvent, postId: string) => {
    event.preventDefault();

    try {
      const post = await getPostDetail(postId);

      const image = new Image();
      image.src = post.imageUrl;

      image.onload = () => {
        navigate(`/post/${postId}`);
      };

      if (handleCloseNav) {
        handleCloseNav();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlePostClick,
  };
};

export default useImagePreload;
