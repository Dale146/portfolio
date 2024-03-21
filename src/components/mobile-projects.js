import React, { useEffect, useState } from "react";
import downArrow from "../images/icons/bookmark.svg";



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
                <div className="prj-addons">
                  
                  <div className="card-2">
                  <div className="down-arrow">
                    <img src={downArrow} alt="downArrow"></img>
                  </div>
                    
                    <div className="prj-description">
                      <h3>Description</h3><br/>
                      <span>{project[key].description}</span>
                    </div>
                    <div className="prj-highlights">
                      <h3>Highlights</h3>
                        <ul>
                          {project[key].highlight && project[key].highlight.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    <div className="prj-insights">
                    <h3>Insights</h3>
                      <ul>
                        {project[key].insight && project[key].insight.map((insight, i) => (
                         <li key={i}>{insight}</li>
                        ))}
                      </ul>
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
