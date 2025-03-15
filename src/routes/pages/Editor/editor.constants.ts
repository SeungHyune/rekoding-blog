export const IMAGE_TYPES: { [key: string]: boolean } = {
  "image/gif": true,
  "image/jpeg": true,
  "image/png": true,
  "image/jpg": true,
  "image/svg+xml": true,
};

export const MODAL_MESSAGES = {
  THUMBNAIL_SELECTION: {
    title: "썸네일을 선택하지 않았어요",
    message: "썸네일 이미지를 선택해주세요.",
  },
  INVALID_FILE_TYPE: {
    title: "파일 형식이 올바르지 않아요",
    message: "이미지 파일을 업로드해 주세요.",
  },
  MAX_FILE_SIZE_EXCEEDED: {
    title: "파일의 최대 크기를 초과했어요",
    message: "10MB 이하 파일을 업로드해 주세요.",
  },
  PERMISSION_DENIED: {
    title: "게시물을 등록할 권한이 없어요",
    message: `게시물은 관리자만 등록할 수 있어요. \n 권한을 확인해주세요.`,
  },
};

export const IMAGE_FILE_MAX_SIZE = 10000000;
