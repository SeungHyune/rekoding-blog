import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import { LightIcon, DarkIcon } from "@components/icons";
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
    <article className={styles.switchContainer}>
      <LightIcon />
      <Switch
        isSwitch={theme === "DARK"}
        handleSwitchToggle={handleSwitchToggle}
      />
      <DarkIcon />
    </article>
  );
};

export default SwitchThemeButton;
