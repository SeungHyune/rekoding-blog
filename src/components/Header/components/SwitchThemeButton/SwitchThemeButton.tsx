import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import { Switch } from "@/components";
import styles from "./switchThemeButton.module.css";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleSwitchToggle = () => {
    if (theme === "DARK") {
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  };

  return (
    <article className={styles.switchContainer} onClick={handleSwitchToggle}>
      <img src="/images/light-icon.svg" />
      <Switch
        isSwitch={theme === "DARK"}
        handleSwitchToggle={handleSwitchToggle}
      />
      <img src="/images/dark-icon.svg" />
    </article>
  );
};

export default SwitchThemeButton;
