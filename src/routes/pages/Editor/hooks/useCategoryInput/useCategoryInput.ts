import { useState } from "react";

const useCategoryInput = (initialCategory = "", initialCategoryColor = "") => {
  const [category, setCategory] = useState(initialCategory);
  const [categoryColor, setCategoryColor] = useState(initialCategoryColor);

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLInputElement>,
    color: string,
  ) => {
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
