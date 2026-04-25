import { create } from "zustand";

interface UseThemeStoreProps {
  theme: "LIGHT" | "DARK";
  setTheme: (theme: "LIGHT" | "DARK") => void;
  initTheme: () => void;
}

const getThemeByTime = (): "LIGHT" | "DARK" => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    return "LIGHT";
  }
  return "DARK";
};

const useThemeStore = create<UseThemeStoreProps>((set) => ({
  theme: getThemeByTime(),
  setTheme: (newTheme) => set({ theme: newTheme }),
  initTheme: () => set({ theme: getThemeByTime() }),
}));

export default useThemeStore;
