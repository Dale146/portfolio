import React from "react";

// import images
import sky from "../images/sky.png";
import mountain from "../images/mountain.png";
import lake from "../images/lake.png";
import land from "../images/land.png";


const Backgrounds = () => {
    return (
        <div className="background-images">
          <img className="sky" src={sky} alt="sky" />
          <img className="land" src={mountain} alt="land" />
          <img className="lake" src={lake} alt="lake" />
          <img className="scape" src={land} alt="scape" />
        </div>
    )
}

export default Backgrounds;
