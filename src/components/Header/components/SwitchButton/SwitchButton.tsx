import { LightIcon, DarkIcon } from "@components/icons";
import styles from "./switchButton.module.css";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";

const SwitchButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleToggle = () => {
    if (theme === "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  };

  return (
    <article className={styles.switchContainer}>
      <LightIcon />
      <div
        className={styles.switch}
        style={{ background: theme === "DARK" ? "#FFC800" : "#e2e8f0" }}
        onClick={handleToggle}
      >
        <div
          className={styles.circle}
          style={{
            transform:
              theme === "DARK"
                ? "translate(3rem, 0.2rem)"
                : "translate(0.2rem, 0.2rem)",
          }}
        />
      </div>
      <DarkIcon />
    </article>
  );
};

export default SwitchButton;
