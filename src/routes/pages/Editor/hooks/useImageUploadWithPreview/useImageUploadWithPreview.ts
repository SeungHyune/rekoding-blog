import { useEffect, useRef, useState } from "react";
import { IMAGE_TYPES, MODAL_MESSAGES } from "../../editor.constants";

interface UseImageUploadWithPreviewProps {
  handleOpenModalWithMessage: (title: string, message: string) => void;
}

const useImageUploadWithPreview = ({
  handleOpenModalWithMessage,
}: UseImageUploadWithPreviewProps) => {
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
      handleOpenModalWithMessage(
        MODAL_MESSAGES.INVALID_FILE_TYPE.title,
        MODAL_MESSAGES.INVALID_FILE_TYPE.message,
      );
      event.target.value = "";

      if (uploadInputRef.current) {
        uploadInputRef.current.value = "";
      }

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
