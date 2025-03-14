import { useRef, useState } from "react";

const useHashTagInput = () => {
  const hashTagInputRef = useRef<HTMLInputElement | null>(null);

  const [hashTagList, setHashTagList] = useState<string[]>([]);

  const clearInputField = () => {
    if (hashTagInputRef.current) {
      hashTagInputRef.current.value = "";
    }
  };

  const handleHashTagKeydown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const hashTagInputValue = event.currentTarget.value.trim();

      if (hashTagInputValue && !hashTagList.includes(hashTagInputValue)) {
        setHashTagList([...hashTagList, event.currentTarget.value]);
        clearInputField();
        return;
      }
    }

    if (event.key === "Backspace") {
      if (!hashTagInputRef.current) {
        return;
      }

      if (hashTagInputRef.current.value === "" && hashTagList.length > 0) {
        const updatedHashTagList = hashTagList.slice(0, -1);
        setHashTagList(updatedHashTagList);
      }
    }
  };

  const handleRemoveHashTag = (idx: number) => {
    const removeHashTagList = hashTagList.filter((_, index) => index !== idx);
    setHashTagList(removeHashTagList);
  };

  return {
    hashTagInputRef,
    hashTagList,
    handleHashTagKeydown,
    handleRemoveHashTag,
  };
};

export default useHashTagInput;
