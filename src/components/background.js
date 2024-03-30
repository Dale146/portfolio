import React from "react";
import { Link } from "react-router-dom";

// import images
import sky from "../images/sky.png";
import mountain from "../images/mountain.png";
import lake from "../images/lake.png";
import land from "../images/land.png";
import favicon from "../images/favicon.png";


const Backgrounds = () => {
    return (
        <div className="background-images">
          <Link to="/">

          <img className="bg-fav" src={favicon} alt="favicon"/>
          </Link>
          <img className="sky" src={sky} alt="sky" />
          <img className="land" src={mountain} alt="land" />
          <img className="lake" src={lake} alt="lake" />
          <img className="scape" src={land} alt="scape" />
        </div>
    )
}

export default Backgrounds;
