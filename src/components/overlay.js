import React from "react";
import Home from "../images/icons/iconmonstr-home-7.svg";

const OverLay = ({ isOpen, onClose, children }) => {
  return (
    <div>
      {isOpen && (
        <div className="overlay">
          <div className="phone">
            <div className="overlay-background" onClick={onClose} />
            <div className="overlay-container">
              <div className="overlay-controls">
                <button className="overlay-close" type="button" onClick={onClose}>
                  <img src={Home} alt="home"></img>
                </button>
                
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
