import { useToggle } from "@/hooks";
import { useState } from "react";

const useFormModal = () => {
  const [modalMessage, setModalMessage] = useState({
    title: "",
    message: "",
  });

  const { isToggle, handleToggleClose, handleToggleOpen } = useToggle();

  const handleOpenModalWithMessage = (title: string, message: string) => {
    setModalMessage({
      title,
      message,
    });
    handleToggleOpen();
  };

  return {
    modalMessage,
    isToggle,
    handleToggleClose,
    handleOpenModalWithMessage,
  };
};

export default useFormModal;
