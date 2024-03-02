import React, { useState, useEffect } from "react";
import pixel from "../images/transparent_2024-03-01T00-27-27.png";
import sky from "../images/sky.jpg";

const Home = () => {
  // 初始化 dot 的初始位置


  return (
    <div className="home">
      <div className="container">
      <div>

      <img className="sky" src={sky} alt="sky"/>
      </div>
      </div>
    </div>
  );
};

export default Home;
