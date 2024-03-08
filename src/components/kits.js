import React from "react";
import kitsData from "../jsonData/aboutMe.json";
import html from "../images/html.svg";
import reactSvg from "../images/react.svg";
import CSS from "../images/css.svg";

const MyKits = () => {
const kitsArray = kitsData.kits[0];



  return (
    <div className="my-kits">
        <img src={html} alt="html"/>
        <img src={reactSvg} alt="react"/>
        <img src={CSS} alt="CSS"/>


        
    </div>
  );
};

export default MyKits;
