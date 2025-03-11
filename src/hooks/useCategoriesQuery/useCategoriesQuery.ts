import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/response/category";
import { CategoryResponse } from "@/types/response/category";

const useCategoriesQuery = () => {
  const { data: categories } = useQuery<CategoryResponse[] | undefined>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categories,
  };
};

export default useCategoriesQuery;
