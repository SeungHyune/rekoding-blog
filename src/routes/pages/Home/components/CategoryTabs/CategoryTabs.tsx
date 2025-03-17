import { CategoryResponse } from "@/types/response/category";

interface CategoryTabsProps {
  styles: CSSModuleClasses;
  tab: string;
  categories: CategoryResponse[];
  handleClickTab: (newTab: string) => void;
}

const CategoryTabs = ({
  styles,
  tab,
  categories,
  handleClickTab,
}: CategoryTabsProps) => {
  const tabActiveStyle = {
    backgroundColor: "#fef0d3",
    color: "#ffaa00",
  };

  return (
    <article className={styles.mainPostTab}>
      <button
        type="button"
        style={tab === "TOTAL" ? tabActiveStyle : {}}
        onClick={() => handleClickTab("TOTAL")}
      >
        전체
      </button>
      {categories.map(({ value }) => (
        <button
          type="button"
          key={value}
          style={tab === value ? tabActiveStyle : {}}
          onClick={() => handleClickTab(value)}
        >
          {value}
        </button>
      ))}
    </article>
  );
};

export default CategoryTabs;
