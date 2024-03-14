import React from "react";
import close from "../images/icons/Chevron-Arrow-Down.svg"

const Modal = ({ isOpen, onClose,nextParagraph, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={nextParagraph}>
       
        {children}
        
          <img src={close} alt="close" className="modal-close" onClick={onClose}/>
        
      </div>
    </div>
  );
};

export default Modal;
