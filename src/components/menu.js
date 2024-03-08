import React from "react";
import data from "../jsonData/aboutMe.json";

const Mymenu = ({ onSelectComponent }) => {
  const optionsArray = data.options;

  const handleButtonClick = (component) => {
    onSelectComponent(component);
  };

  return (
    <div className="my-menu">
      {optionsArray.map((option, index) => {
        const optionKeys = Object.keys(option);

        return (
          <div className="menu-options" key={index}>
            {optionKeys.map((key) => (
              <button key={key} onClick={() => handleButtonClick(key)}>
                {key}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Mymenu;
