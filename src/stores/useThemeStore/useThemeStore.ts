import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseThemeStoreProps {
  theme: "LIGHT" | "DARK";
  setTheme: (theme: "LIGHT" | "DARK") => void;
}

const useThemeStore = create(
  persist<UseThemeStoreProps>(
    (set) => ({
      theme: "LIGHT",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useThemeStore;
