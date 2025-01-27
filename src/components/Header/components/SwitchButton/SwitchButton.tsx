import { useState } from "react";
import { LightIcon, DarkIcon } from "@components/icons";
import styles from "./switchButton.module.css";

const SwitchButton = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((isToggle) => !isToggle);
  };

  return (
    <article className={styles.switchContainer}>
      <LightIcon />
      <div
        className={styles.switch}
        style={{ background: isToggle ? "#FFC800" : "#e2e8f0" }}
        onClick={handleToggle}
      >
        <div
          className={styles.circle}
          style={{
            transform: isToggle
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
