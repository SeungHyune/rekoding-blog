import { ModalPortal } from "./components";
import styles from "./modal.module.css";

interface ModalProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const Modal = ({
  width = "300px",
  height = "300px",
  borderRadius = "8px",
  backgroundColor = "white",
  children,
}: ModalProps) => {
  return (
    <ModalPortal>
      <section
        className={styles.modal}
        style={{ width, height, borderRadius, backgroundColor }}
      >
        {children}
      </section>
      <div className={styles.modalBackground} />
    </ModalPortal>
  );
};

export default Modal;
