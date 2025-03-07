import {
  FIREBASE_COLLECTION,
  FIREBASE_ID,
} from "@/constants/firebase/firebase";
import { db } from "@/firebase";
import { CategoryResponse } from "@/types/response/category";
import { doc, getDoc } from "firebase/firestore";

export const getCategorys = async () => {
  try {
    const response = await getDoc(
      doc(db, FIREBASE_COLLECTION.CATEGORY_LIST, FIREBASE_ID.CATEGORY),
    );

    const data = response.data();
    const categoryList: CategoryResponse[] = data?.categoryList;

    if (data && Array.isArray(categoryList)) {
      return categoryList;
    }
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};
