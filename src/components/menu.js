import React from "react";

const Mymenu = ({ onSelectComponent }) => {

    const handleButtonClick = (component) => {
        onSelectComponent(component);
    };

    return (
        <div className="my-menu">
            <button onClick={() => handleButtonClick("story")}>story</button>
            <button onClick={() => handleButtonClick("stats")}>stats</button>
        </div>
    );
};

export default Mymenu;
