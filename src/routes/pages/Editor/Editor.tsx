import { useRef, useState } from "react";
import { useCategorys } from "@/hooks";
import styles from "./editor.module.css";
import { IMAGE_TYPES } from "./editor.constants";
import { db, storage } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FIREBASE_COLLECTION } from "@/constants/firebase/firebase";
import { PostListResponse } from "@/types/response/post";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [hashTagList, setHashTagList] = useState<string[]>([]);

  const [category, setCategory] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  const uploadInputRef = useRef<HTMLInputElement | null>(null);
  const hashTagInputRef = useRef<HTMLInputElement | null>(null);

  const [dateAt, setDateAt] = useState<Date>(new Date());

  const { categorys } = useCategorys();

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleHashTagKeydown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const isHashTagCreated = hashTagList.includes(event.currentTarget.value);

      if (isHashTagCreated) {
        if (hashTagInputRef.current) {
          hashTagInputRef.current.value = "";
        }
        return;
      }

      setHashTagList([...hashTagList, event.currentTarget.value]);

      if (hashTagInputRef.current) {
        hashTagInputRef.current.value = "";
      }
    }
  };

  const handleRemoveHashTag = (idx: number) => {
    const removeHashTagList = hashTagList.filter((_, index) => index !== idx);
    setHashTagList(removeHashTagList);
  };

  // 카테고리 변경
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLInputElement>,
    color: string,
  ) => {
    console.log(event.target.value);
    setCategory(event.target.value);
    setCategoryColor(color);
  };

  // 썸네일 업로드
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

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const createDate = new Date(event.target.value);

    setDateAt(createDate);
  };

  // 글 작성
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
          content: "",
          category: category,
          categoryColor: categoryColor,
          dateAt,
          likeCount: 0,
        };

        fetchPost(post);
      } catch (error) {
        console.error("업로드 실패:", error);
      }
    };

    const fetchPost = async (post: PostListResponse) => {
      await addDoc(collection(db, FIREBASE_COLLECTION.POSTS), post);
    };

    fetchStorage();
  };

  return (
    <section className={styles.editorContainer}>
      <form className={styles.editorFrom} onSubmit={handlePostSubmit}>
        <div className={styles.title}>
          <textarea
            name="title"
            id="title"
            value={title}
            placeholder="제목을 입력해주세요."
            required
            onChange={handleTitleChange}
          />
        </div>
        <article className={styles.fileUpload}>
          <div className={styles.fieldTitle}>썸네일</div>
          <div className={styles.fieldContent}>
            <input
              className={styles.uploadName}
              placeholder="첨부파일"
              ref={uploadInputRef}
              onMouseOver={() => setIsPreview(true)}
              onMouseOut={() => setIsPreview(false)}
            />
            <label htmlFor="file">파일찾기</label>
            <input type="file" id="file" onChange={handleUploadImage} />

            {isPreview && preview && (
              <div className={styles.previewImageBox}>
                <img src={preview} />
              </div>
            )}
          </div>
        </article>
        <article className={styles.categorys}>
          <div className={styles.fieldTitle}>카테고리</div>
          <div className={styles.fieldContent}>
            <ul>
              {categorys.map(({ value, color }) => (
                <li key={value}>
                  <input
                    key={value}
                    type="radio"
                    value={value}
                    name="category"
                    id={value}
                    onChange={(event) => handleChangeCategory(event, color)}
                  />
                  <label
                    htmlFor={value}
                    style={{ backgroundColor: `#${color}` }}
                  >
                    {value}
                  </label>
                </li>
              ))}
            </ul>
            <button type="button">+ 추가하기</button>
          </div>
        </article>
        <article className={styles.hashTagList}>
          <div className={styles.fieldTitle}>해시태그</div>
          <div className={styles.fieldContent}>
            <ul>
              {hashTagList.map((hashTag, idx) => (
                <li
                  key={`${idx}_${hashTag}`}
                  onClick={() => handleRemoveHashTag(idx)}
                >
                  {hashTag}
                </li>
              ))}
            </ul>
            <input
              type="text"
              name="hashTag"
              id="hashTag"
              ref={hashTagInputRef}
              placeholder="#태그입력"
              onKeyDown={handleHashTagKeydown}
            />
          </div>
        </article>
        <article className={styles.date}>
          <div className={styles.fieldTitle}>날짜</div>
          <div className={styles.fieldContent}>
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleChangeDate}
            />
          </div>
        </article>
        <div className={styles.btnBox}>
          <button type="button">취소</button>
          <button type="submit">작성</button>
        </div>
      </form>
    </section>
  );
};

export default Editor;
