import { useState } from "react";

interface UseToggleProps {
  isDefaultToggleValue?: boolean;
}

const useToggle = ({ isDefaultToggleValue = false }: UseToggleProps) => {
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
