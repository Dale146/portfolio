import React from "react";

const OverLay = ({ isOpen, onClose, children }) => {
  return (
    <div>
      {isOpen && (
        <div className="overlay">
          <div className="phone">
            <div className="overlay-background" onClick={onClose} />
            <div className="overlay-container">
              <div className="overlay-controls">
                <button className="overlay-close" type="button" onClick={onClose} />
              </div>
              <div className="screen">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverLay;
