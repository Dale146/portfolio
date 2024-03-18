import React, { useEffect, useState } from "react";


const MobileProjects = () => {
  // fetch json
  const [fetchedData, setFetchedData] = useState({});
  
  // change the status of data
  useEffect(() => {
    fetch('data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        // set fetchedData = data
        setFetchedData(data);
      })
      .catch((error) => {
        console.log('failed fetching data', error);
      });
  }, []);

  // Ensure project is an array
  const projects = fetchedData.projects || [];
  console.log(projects)

  return (
    <div className="mobile-projects">
        {projects.map((project, index) => {
        const projectKeys = Object.keys(project);

        return (
          <div key={index}>
            {projectKeys.map((key) => (
              <div key={key} className="box">
              <img src={project[key].imgSrc} alt={project[key].imgAlt} />
              <h4>{project[key].title}</h4>
              <ul>
                {project[key].mainTools && project[key].mainTools.map((tool,i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <span>{project[key].year}</span>
              
              </div>
              ))}
          </div>
          
        );
      })}

      <button>Home</button>
    </div>
  );
};

export default MobileProjects;
