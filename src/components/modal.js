import React from "react";

const Modal = ({ isOpen, onClose,nextParagraph, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <button className="next-paragraph" onClick={nextParagraph}>next</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
