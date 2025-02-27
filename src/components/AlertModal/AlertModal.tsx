import Message from "../Message/Message";
import Modal from "../Modal/Modal";
import styles from "./alertModal.module.css";

interface AlertModalProps {
  children?: React.ReactNode;
  isShow: boolean;
  title: string;
  message: string;
  confirmText?: string;
  handleToggleClose: () => void;
}

const AlertModal = ({
  children,
  isShow,
  title,
  message,
  confirmText = "확인",
  handleToggleClose,
}: AlertModalProps) => {
  return (
    <>
      {isShow && (
        <Modal height="250px">
          <div className={styles.modalContainer}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.message}>
              <Message message={message} />
            </div>
            {children && <>{children}</>}
            <button className={styles.button} onClick={handleToggleClose}>
              {confirmText}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AlertModal;
