import React, { useEffect, useState } from "react";

const MyKits = () => {
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

  // Ensure toolIcons is an array
  const toolIcons = fetchedData.kits || [];

  return (
    <div className="my-kits">
      {toolIcons.map((tool, index) => {
        const toolKeys = Object.keys(tool);

        return (
          <div key={index}>
            {toolKeys.map((key) => (
              <img key={key} src={tool[key].imgSrc} alt={tool[key].imgAlt} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default MyKits;
