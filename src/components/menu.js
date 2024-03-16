import React, { useEffect, useState } from "react";

const Mymenu = ({ onSelectComponent }) => {
  // fetch json
  const [fetchedData, setFetchedData] = useState({});
  
  // change the status of data
  useEffect(() => {
    fetch('data/aboutMe.json')
      .then((response) => response.json())
      .then((data) => {
        // set fetchedData = data
        setFetchedData(data);
      })
      .catch((error) => {
        console.log('failed fetching data', error);
      });
  }, []);
  
  // Ensure optionsArray is an array
  const optionsArray = fetchedData.options || []; 
  console.log(optionsArray);

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
              <button className="btns" key={key} onClick={() => handleButtonClick(key)}>
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
