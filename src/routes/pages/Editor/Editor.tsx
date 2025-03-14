import { useCategoriesQuery, useToggle } from "@/hooks";
import { AlertModal, ReactEditor, ReactMarkdownPreview } from "@/components";
import {
  useCategoryInput,
  useHashTagInput,
  useImageUploadWithPreview,
  useFormSubmit,
} from "./hooks";
import styles from "./editor.module.css";

const Editor = () => {
  const { categories = [] } = useCategoriesQuery();

  const { isToggle, handleToggleClose, handleToggleOpen } = useToggle();

  const {
    isPreview,
    selectedFile,
    preview,
    uploadInputRef,
    handleUploadImage,
    handleShowPreview,
    handleHidePreview,
  } = useImageUploadWithPreview();

  const {
    hashTagInputRef,
    hashTagList,
    handleHashTagKeydown,
    handleRemoveHashTag,
  } = useHashTagInput();

  const { category, categoryColor, handleChangeCategory } = useCategoryInput();

  const {
    title,
    contentValue,
    handleTitleChange,
    handleInputContent,
    handlePostSubmit,
  } = useFormSubmit({
    hashTagList,
    selectedFile,
    category,
    categoryColor,
    handleToggleOpen,
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
                placeholder="첨부파일"
                ref={uploadInputRef}
                onMouseOver={handleShowPreview}
                onMouseOut={handleHidePreview}
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
                <li>
                  {" "}
                  <button type="button">+ 추가하기</button>
                </li>
              </ul>
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
            <ReactEditor handleInputContent={handleInputContent} />
            <div className={`${styles.btnBox} contentEditorBtnBox`}>
              <button className={styles.cancel} type="button">
                취소하기
              </button>
              <button className={styles.submit} type="submit">
                작성하기
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
        title="게시물을 등록할 권한이 없어요"
        message={`게시물은 관리자만 등록할 수 있어요. \n 권한을 확인해주세요.`}
        handleToggleClose={handleToggleClose}
      />
    </section>
  );
};

export default Editor;
