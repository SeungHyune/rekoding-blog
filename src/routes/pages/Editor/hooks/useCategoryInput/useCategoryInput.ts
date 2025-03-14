import { useState } from "react";

const useCategoryInput = () => {
  const [category, setCategory] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLInputElement>,
    color: string,
  ) => {
    console.log(event.target.value);
    setCategory(event.target.value);
    setCategoryColor(color);
  };

  return {
    category,
    categoryColor,
    handleChangeCategory,
  };
};

export default useCategoryInput;
