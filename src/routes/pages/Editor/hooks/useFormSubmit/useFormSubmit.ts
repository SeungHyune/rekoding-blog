import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "@/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PostListResponse } from "@/types/response/post";
import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { MODAL_MESSAGES } from "../../editor.constants";
import Resizer from "react-image-file-resizer";

interface UseFormSubmitProps {
  postId?: string;
  initialPost?: PostListResponse;
  hashTagList: string[];
  category: string;
  categoryColor: string;
  selectedFile: File | null;
  handleOpenModalWithMessage: (title: string, message: string) => void;
}

const useFormSubmit = ({
  postId,
  initialPost,
  hashTagList,
  category,
  categoryColor,
  selectedFile,
  handleOpenModalWithMessage,
}: UseFormSubmitProps) => {
  const navigate = useNavigate();
  const isEditMode = Boolean(postId && initialPost);

  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [contentValue, setContentValue] = useState(initialPost?.content ?? "");
  const [dateValue, setDateValue] = useState(() => {
    const date = initialPost?.dateAt ?? new Date();
    return date.toISOString().slice(0, 10);
  });

  const resizeFile = (file: File) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        780,
        780,
        "WEBP",
        80,
        0,
        (url) => {
          resolve(url);
        },
        "file",
      );
    });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleInputContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContentValue(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  const handlePostSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile && !initialPost?.imageUrl) {
      handleOpenModalWithMessage(
        MODAL_MESSAGES.THUMBNAIL_SELECTION.title,
        MODAL_MESSAGES.THUMBNAIL_SELECTION.message,
      );
      return;
    }

    const uploadThumbnail = async (file: File) => {
      const resizerFile = (await resizeFile(file)) as File;
      const storageRef = ref(storage, `images/${resizerFile.name}`);
      await uploadBytes(storageRef, resizerFile);
      return getDownloadURL(storageRef);
    };

    const submitPost = async () => {
      try {
        const imageUrl = selectedFile
          ? await uploadThumbnail(selectedFile)
          : initialPost?.imageUrl || "";

        const post = {
          title,
          imageUrl,
          hashTag: hashTagList,
          content: contentValue,
          category,
          categoryColor,
          dateAt: new Date(dateValue),
          likeCount: initialPost?.likeCount ?? 0,
        };

        await fetchPost(post);
      } catch (error) {
        console.error("업로드 실패:", error);
        handleOpenModalWithMessage(
          MODAL_MESSAGES.PERMISSION_DENIED.title,
          MODAL_MESSAGES.PERMISSION_DENIED.message,
        );
      }
    };

    const fetchPost = async (post: PostListResponse) => {
      if (isEditMode && postId) {
        await updateDoc(doc(db, FIREBASE_COLLECTION.POSTS, postId), {
          title: post.title,
          content: post.content,
          imageUrl: post.imageUrl,
          hashTag: post.hashTag,
          dateAt: post.dateAt,
          category: post.category,
          categoryColor: post.categoryColor,
          likeCount: post.likeCount,
        });
        navigate(`/post/${postId}`);
        return;
      }

      const createdPost = await addDoc(
        collection(db, FIREBASE_COLLECTION.POSTS),
        post,
      );
      navigate(`/post/${createdPost.id}`);
    };

    await submitPost();
  };

  return {
    title,
    contentValue,
    dateValue,
    handleTitleChange,
    handleInputContent,
    handleDateChange,
    handlePostSubmit,
  };
};

export default useFormSubmit;
