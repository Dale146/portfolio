import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bg1 from "../images/background-1.svg";
import bg2 from "../images/background-2.svg";
import bg3 from "../images/background-3.svg";
import bg4 from "../images/background-4.svg";
import favicon from "../images/favicon.png";

const Cover = () => {

  
    return(
        <>
        
        <div className="splash-container">
            <div className="card-container">
            <div className="splash-card">
                <div className="splashLogo">
                <img src={favicon} alt="favicon" />
                </div>
                <div className="splash-content">
                    <div className="splash-details">
                      <h1>DALE ZHENG<br/>
                      <span>FrontEnd Web Developer</span></h1>
            </div>

            </div>
            </div>
            </div>

            <div className="backgrounds">

            
            <img className="bg1" src={bg1} alt="bg1"/>
            <img className="bg2" src={bg2} alt="bg2"/>
            <img className="bg3" src={bg3} alt="bg3"/>
            <img className="bg4" src={bg4} alt="bg4"/>
            </div>
            <div className="links">
                    <Link className="fade-in-out" to="/home">PRESS HERE TO START</Link>
                </div>
        </div>


        </>
    )
}
export default Cover;