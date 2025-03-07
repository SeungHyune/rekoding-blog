import { useQuery } from "@tanstack/react-query";
import { getCategorys } from "@/services/response/category";
import { CategoryResponse } from "@/types/response/category";

const useCategorysQuery = () => {
  const { data: categorys } = useQuery<CategoryResponse[] | undefined>({
    queryKey: ["categorys"],
    queryFn: getCategorys,
  });

  return {
    categorys,
  };
};

export default useCategorysQuery;
