import React, { useEffect, useState } from "react";
import kitsData from "../jsonData/aboutMe.json";
import html from "../images/html.svg";
import reactSvg from "../images/react.svg";
import CSS from "../images/css.svg";



const MyKits = () => {

  const [fetchedData, setFetchedData] = useState({})

  useEffect(() =>{
    fetch('data/test.json')
    .then((response)=>{
 return response.json()
    })
    .then((data) => 
    {
    console.log(data)
    setFetchedData(data)
    })
  }, [])

  console.log('fetched data!!', fetchedData.kits?.[0]?.HTML?.imgSrc)

const kitsArray = kitsData.kits[0];
const imgSrcTest = fetchedData.kits?.[0]?.HTML?.imgSrc

console.log('kitsdata',kitsData)
console.log('kitsarray', kitsArray.HTML.imgSrc)

  return (
    <div className="my-kits">
        {/* <img src={html} alt="html"/>
        <img src={reactSvg} alt="react"/>
        <img src={CSS} alt="CSS"/> */}

        <img src={imgSrcTest} alt={kitsArray.HTML.imgAlt}/>
        
    </div>
  );
};

export default MyKits;
