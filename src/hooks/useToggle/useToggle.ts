import { useState } from "react";

const useToggle = (isDefaultToggleValue: boolean = false) => {
  const [isToggle, setIsToggle] = useState(isDefaultToggleValue);

  const handleToggleOpen = () => {
    setIsToggle(true);
  };

  const handleToggleClose = () => {
    setIsToggle(false);
  };

  const handleToggle = () => {
    setIsToggle((isToggle) => !isToggle);
  };

  return {
    isToggle,
    handleToggleOpen,
    handleToggleClose,
    handleToggle,
  };
};

export default useToggle;
