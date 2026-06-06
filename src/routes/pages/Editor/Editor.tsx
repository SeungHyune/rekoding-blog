import { useCategoriesQuery } from "@/hooks";
import { AlertModal, ReactEditor, ReactMarkdownPreview } from "@/components";
import { useLoaderData, useParams } from "react-router-dom";
import { PostListResponse } from "@/types/response/post";
import {
  useCategoryInput,
  useHashTagInput,
  useImageUploadWithPreview,
  useFormSubmit,
} from "./hooks";
import styles from "./editor.module.css";
import useFormModal from "./hooks/useFormModal/useFormModal";

const Editor = () => {
  const { id } = useParams();
  const loaderData = useLoaderData() as PostListResponse | undefined;
  const isEditMode = Boolean(id && loaderData);
  const { categories = [] } = useCategoriesQuery();

  const {
    modalMessage,
    isToggle,
    handleToggleClose,
    handleOpenModalWithMessage,
  } = useFormModal();

  const {
    isPreview,
    selectedFile,
    preview,
    uploadInputRef,
    handleUploadImage,
    handleShowPreview,
    handleHidePreview,
  } = useImageUploadWithPreview({
    handleOpenModalWithMessage,
  });

  const {
    hashTagInputRef,
    hashTagList,
    handleHashTagKeydown,
    handleRemoveHashTag,
  } = useHashTagInput(loaderData?.hashTag);

  const { category, categoryColor, handleChangeCategory } = useCategoryInput(
    loaderData?.category,
    loaderData?.categoryColor,
  );

  const {
    title,
    contentValue,
    dateValue,
    handleTitleChange,
    handleInputContent,
    handleDateChange,
    handlePostSubmit,
  } = useFormSubmit({
    postId: id,
    initialPost: loaderData,
    hashTagList,
    selectedFile,
    category,
    categoryColor,
    handleOpenModalWithMessage,
  });

  return (
    <section className={`${styles.editorContainer} editorSection`}>
      <article className={styles.editor}>
        <form className={styles.editorFrom} onSubmit={handlePostSubmit}>
          <div className={`${styles.title} textareaBox`}>
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
            <div className={styles.fieldTitle}>
              썸네일 <mark>*</mark>
            </div>
            <div className={styles.fieldContent}>
              <input
                className={styles.uploadName}
                placeholder={isEditMode ? "기존 썸네일 유지" : "첨부파일"}
                ref={uploadInputRef}
                onMouseOver={handleShowPreview}
                onMouseOut={handleHidePreview}
                readOnly
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
          <article className={styles.categories}>
            <div className={styles.fieldTitle}>
              카테고리 <mark>*</mark>
            </div>
            <div className={styles.fieldContent}>
              <ul>
                {categories.map(({ value, color }) => (
                  <li key={value}>
                    <input
                      key={value}
                      type="radio"
                      value={value}
                      name="category"
                      id={value}
                      checked={category === value}
                      onChange={(event) => handleChangeCategory(event, color)}
                    />
                    <label
                      htmlFor={value}
                      style={
                        {
                          "--category-color": `#${color}`,
                        } as React.CSSProperties
                      }
                      className={styles.categoryLabel}
                    >
                      {value}
                    </label>
                  </li>
                ))}
                <li>
                  {" "}
                  <button type="button">+ 추가하기</button>
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.dateField}>
            <div className={styles.fieldTitle}>
              작성일 <mark>*</mark>
            </div>
            <div className={styles.fieldContent}>
              <input
                type="date"
                value={dateValue}
                required
                onChange={handleDateChange}
              />
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
                <li className={styles.hashTagInput}>
                  <input
                    type="text"
                    name="hashTag"
                    id="hashTag"
                    ref={hashTagInputRef}
                    placeholder="#태그입력"
                    onKeyDown={handleHashTagKeydown}
                  />
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.contentEditor}>
            <ReactEditor
              value={contentValue}
              handleInputContent={handleInputContent}
            />
            <div className={`${styles.btnBox} contentEditorBtnBox`}>
              <button className={styles.cancel} type="button">
                취소하기
              </button>
              <button className={styles.submit} type="submit">
                {isEditMode ? "수정하기" : "작성하기"}
              </button>
            </div>
          </article>
        </form>
      </article>
      <article className={`${styles.preview} editorPreview`}>
        <h1 className={styles.previewTitle}>{title}</h1>
        <ReactMarkdownPreview content={contentValue} />
      </article>
      <AlertModal
        isShow={isToggle}
        title={modalMessage.title}
        message={modalMessage.message}
        handleToggleClose={handleToggleClose}
      />
    </section>
  );
};

export default Editor;
