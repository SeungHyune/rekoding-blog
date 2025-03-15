import { useEffect, useRef, useState } from "react";
import {
  IMAGE_FILE_MAX_SIZE,
  IMAGE_TYPES,
  MODAL_MESSAGES,
} from "../../editor.constants";

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

    const showErrorAndResetInput = (modalMessage: {
      title: string;
      message: string;
    }) => {
      handleOpenModalWithMessage(modalMessage.title, modalMessage.message);
      setPreview(null);

      event.target.value = "";

      if (uploadInputRef.current) {
        uploadInputRef.current.value = "";
      }
    };

    if (file.size >= IMAGE_FILE_MAX_SIZE) {
      showErrorAndResetInput(MODAL_MESSAGES.MAX_FILE_SIZE_EXCEEDED);
      return;
    }

    if (!IMAGE_TYPES[fileType]) {
      showErrorAndResetInput(MODAL_MESSAGES.INVALID_FILE_TYPE);
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
