import { useEffect, useRef, useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          if (imgRef.current) {
            imgRef.current.src = src;
          }
        }
      });
    }, {});

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Skeleton height="100%" />}
      <img
        ref={imgRef}
        src=""
        alt={alt}
        loading="lazy"
        onLoad={handleImageLoad}
      />
    </>
  );
};

export default LazyImage;
