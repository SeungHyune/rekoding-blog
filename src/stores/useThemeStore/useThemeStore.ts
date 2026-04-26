import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseThemeStoreProps {
  theme: "LIGHT" | "DARK";
  setTheme: (theme: "LIGHT" | "DARK") => void;
}

const getThemeByTime = (): "LIGHT" | "DARK" => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "LIGHT" : "DARK";
};

const useThemeStore = create<UseThemeStoreProps>()(
  persist(
    (set) => ({
      theme: getThemeByTime(),
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useThemeStore;
