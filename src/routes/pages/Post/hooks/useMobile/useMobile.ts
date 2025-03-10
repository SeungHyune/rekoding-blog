import { useEffect, useState } from "react";

interface UseMobileProps {
  handlePostListNavClose: () => void;
}

const useMobile = ({ handlePostListNavClose }: UseMobileProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1260) {
      handlePostListNavClose();
      setIsMobile(true);
    }
  }, []);

  return {
    isMobile,
  };
};

export default useMobile;
