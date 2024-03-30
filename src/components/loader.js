import React from "react";

import bg1 from "../images/background-1.svg";
import bg2 from "../images/background-2.svg";
import bg3 from "../images/background-3.svg";
import bg4 from "../images/background-4.svg";


const Loader = ({  }) => {


  return (
    <div className="loader-container">

        <div className="loader zoom-in">
            <div className="backgrounds ld">

                    
            <img className="bg1 ld-1" src={bg1} alt="bg1"/>
            <img className="bg2 ld-2" src={bg2} alt="bg2"/>
            <img className="bg3 ld-3" src={bg3} alt="bg3"/>
            <img className="bg4 ld-4" src={bg4} alt="bg4"/>
            </div>
        </div>
    </div>
  );
};

export default Loader;
