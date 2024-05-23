import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles: Modal.Styles = {
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
interface ImageModalProps{
  imageUrl: string | null,
  onClose: ()=> void
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
      appElement={document.getElementById('root')!}
    >
      <img className={css.modal} src={imageUrl || ""} alt="Modal" />
    </Modal>
  );
}
export default ImageModal