import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PostListResponse } from "@/types/response/post";
import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { MODAL_MESSAGES } from "../../editor.constants";

interface UseFormSubmitProps {
  hashTagList: string[];
  category: string;
  categoryColor: string;
  selectedFile: File | null;
  handleOpenModalWithMessage: (title: string, message: string) => void;
}

const useFormSubmit = ({
  hashTagList,
  category,
  categoryColor,
  selectedFile,
  handleOpenModalWithMessage,
}: UseFormSubmitProps) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contentValue, setContentValue] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleInputContent = (event: React.ChangeEvent<HTMLDivElement>) => {
    setContentValue(event.target.innerText);
  };

  const handlePostSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      handleOpenModalWithMessage(
        MODAL_MESSAGES.THUMBNAIL_SELECTION.title,
        MODAL_MESSAGES.THUMBNAIL_SELECTION.message,
      );
      return;
    }

    const storageRef = ref(storage, `images/${selectedFile.name}`);

    const fetchStorage = async () => {
      try {
        await uploadBytes(storageRef, selectedFile);
        const url = await getDownloadURL(storageRef);

        const post = {
          title,
          imageUrl: url,
          hashTag: hashTagList,
          content: contentValue,
          category: category,
          categoryColor: categoryColor,
          dateAt: new Date(),
          likeCount: 0,
        };

        fetchPost(post);
      } catch (error) {
        console.error("업로드 실패:", error);
        handleOpenModalWithMessage(
          MODAL_MESSAGES.PERMISSION_DENIED.title,
          MODAL_MESSAGES.PERMISSION_DENIED.message,
        );
      }
    };

    const fetchPost = async (post: PostListResponse) => {
      await addDoc(collection(db, FIREBASE_COLLECTION.POSTS), post);
      navigate("/");
    };

    fetchStorage();
  };

  return {
    title,
    contentValue,
    handleTitleChange,
    handleInputContent,
    handlePostSubmit,
  };
};

export default useFormSubmit;
