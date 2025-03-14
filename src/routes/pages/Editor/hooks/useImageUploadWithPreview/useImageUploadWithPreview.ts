import { useEffect, useRef, useState } from "react";
import { IMAGE_TYPES } from "../../editor.constants";

const useImageUploadWithPreview = () => {
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const [isPreview, setIsPreview] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    const fileType = file.type;

    if (!IMAGE_TYPES[fileType]) {
      alert("파일 형식이 올바르지 않습니다. 이미지 파일을 업로드해 주세요.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);

    if (uploadInputRef.current) {
      uploadInputRef.current.value = file.name;
    }

    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);
  };

  const handleShowPreview = () => {
    setIsPreview(true);
  };

  const handleHidePreview = () => {
    setIsPreview(false);
  };

  return {
    isPreview,
    selectedFile,
    preview,
    uploadInputRef,
    handleUploadImage,
    handleShowPreview,
    handleHidePreview,
  };
};

export default useImageUploadWithPreview;
