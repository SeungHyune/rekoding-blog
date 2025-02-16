import { auth } from "@/firebase";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseLoginProps {
  isLogin: boolean;
  setIsLogin: (updateIsLogin: boolean) => void;
}

const useLogin = create(
  persist<UseLoginProps>(
    (set) => ({
      isLogin: !!auth.currentUser,
      setIsLogin: (updateIsLogin) => set({ isLogin: updateIsLogin }),
    }),
    {
      name: "isLogin",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLogin;
