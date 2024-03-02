import React, { useState, useEffect } from "react";
import pixel from "../images/transparent_2024-03-01T00-27-27.png";
import sky1 from "../images/1.png";
import land from "../images/2.png";
import lake from "../images/3.png";
import scape from "../images/4.png";
import dog from "../images/Idle.png";

const Home = () => {
  // 初始化 dot 的初始位置


  return (
    <div className="home">
      <div className="container">
      <div>
      <img className="sky" src={sky1} alt="sky"/>
      </div>
      <img className="land" src={land}/>
      <img className="lake" src={lake}/>
      <img className="scape" src={scape}/>
      <div className="dog"></div>
      </div>
    </div>
  );
};

export default Home;
