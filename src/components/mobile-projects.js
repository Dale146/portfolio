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

    
  return (
    <div className="mobile-projects">
      <h1>Projects</h1>
      {projects.map((project, index) => {
        const projectKeys = Object.keys(project);
  
        return (
          <div className="mobile-container" key={index}>
            {projectKeys.map((key) => (
              <div className="cover-container" key={`${index}-${key}`}>
                <div className="card">
                  <div className="logoBox">
                    <img src={project[key].logo} alt={project[key].imgAlt} />
                  </div>
                  <div className="prj-content">
                    <div className="prj-image">
                      <img src={project[key].imgSrc} alt={project[key].imgAlt}/>
                    </div>
                    <div className="prj-details">
                      <h2>{project[key].title}<br/>
                      <span>{project[key].shortdes}</span></h2>
                      <div className="kitsData">
                        {project[key].mainTools && project[key].mainTools.map((tool, i) => (
                          <h3 key={i}>{tool}</h3>
                        ))}
                      </div>
                      <div className="actionBtn">
                        <button>GitHub</button>
                        <button>Live Site</button>
                      </div>
                    </div>
                  </div>
                </div>
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
