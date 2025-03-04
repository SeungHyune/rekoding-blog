import styles from "./switch.module.css";

interface SwitchProps {
  isSwitch: boolean;
  switchOnColor?: string;
  switchOffColor?: string;
  handleSwitchToggle: () => void;
}

const Switch = ({
  isSwitch,
  switchOnColor = "#FFC800",
  switchOffColor = "#e2e8f0",
  handleSwitchToggle,
}: SwitchProps) => {
  return (
    <div
      className={styles.switch}
      style={{ background: isSwitch ? switchOnColor : switchOffColor }}
      onClick={handleSwitchToggle}
    >
      <div
        className={styles.circle}
        style={{
          transform: isSwitch
            ? "translate(3rem, 0.2rem)"
            : "translate(0.2rem, 0.2rem)",
        }}
      />
    </div>
  );
};

export default Switch;
