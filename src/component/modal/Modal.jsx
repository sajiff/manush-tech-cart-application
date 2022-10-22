import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";
export const Modal = ({ open, closeModal, children }) => {
  if (!open) return null;

  return (
    <div className="modal-container">
      <div className="content-container">
        <FontAwesomeIcon
          className="modal-close-icon"
          onClick={closeModal}
          size="2x"
          icon={faXmark}
        />
        {children}
      </div>
      ;
    </div>
  );
};
