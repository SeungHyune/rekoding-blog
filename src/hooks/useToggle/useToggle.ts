import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);

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
