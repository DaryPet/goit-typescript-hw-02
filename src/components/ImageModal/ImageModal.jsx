import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    border: "none",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    background: "rgba(0, 0, 0, 0.50)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function ImageModal({ imageUrl, onClose }) {
  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      {/* {imageUrl && <img src={imageUrl} alt="Image" />} */}
      <img className={css.modal} src={imageUrl} alt="Modal" />
    </Modal>
  );
}
