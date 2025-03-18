import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import styles from "./themeButton.module.css";

const ThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleToggleTheme = () => {
    if (theme === "DARK") {
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  };

  return (
    <div
      className={styles.themeButton}
      style={{ backgroundColor: theme === "LIGHT" ? "#f5f5f5" : "#212121" }}
      onClick={handleToggleTheme}
    >
      {theme === "LIGHT" ? (
        <img src="/images/light-icon.svg" />
      ) : (
        <img src="/images/dark-icon.svg" />
      )}
    </div>
  );
};

export default ThemeButton;
