import { useState } from "react";
import { db, storage } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { PostListResponse } from "@/types/response/post";
import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { useNavigate } from "react-router-dom";

interface UseFormSubmitProps {
  hashTagList: string[];
  category: string;
  categoryColor: string;
  selectedFile: File | null;
  handleToggleOpen: () => void;
}

const useFormSubmit = ({
  hashTagList,
  category,
  categoryColor,
  selectedFile,
  handleToggleOpen,
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

    // 유효성 검사 필요.
    // 포스트 제목: 2 글자 이상 ~ 30글자 이하
    // 썸네일 이미지: 필수?
    // 해시태그 : 필수 X, 빈 값 가능
    // category : 필수,
    // categoryColor: 필수,
    // dateAt: 기본값 오늘 (필수),
    // likeCount: 무조건 0

    // 1. 제목 유효성 검사

    // const convertTitle = title.trim();

    if (!selectedFile) {
      alert("업로드할 이미지를 선택하세요.");
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
        handleToggleOpen();
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
