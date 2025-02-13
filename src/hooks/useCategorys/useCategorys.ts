import {
  FIREBASE_COLLECTION,
  FIREBASE_ID,
} from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { CategoryResponse } from "@/types/response/category";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const useCategorys = () => {
  const [categorys, setCategorys] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    const getCategorys = async () => {
      try {
        const response = await getDoc(
          doc(db, FIREBASE_COLLECTION.CATEGORY_LIST, FIREBASE_ID.CATEGORY),
        );

        const data = response.data();

        if (data && Array.isArray(data.categoryList)) {
          setCategorys(data.categoryList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCategorys();
  }, []);

  return {
    categorys,
  };
};

export default useCategorys;
