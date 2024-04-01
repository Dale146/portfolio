import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import downArrow from "../images/icons/bookmark.svg";
import sky from "../images/sky.png";
import ladder from "../images/ladder.svg";



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
    <div className="projects-background">


    
    <div className="mobile-projects">
      <div className="project-flex-container">
      <div className="ladder">
       
      </div>
      <div className="sky1">
        <Link to ="/home">

        <img src={sky} alt="sky"/>
        </Link>
      </div>
    

      {projects.map((project, index) => {
        const projectKeys = Object.keys(project);
  
        return (
          <div className="mobile-container" key={index}>
            <div className="heading">
              <h1><span>Pro</span><span>jects</span></h1>
              </div>
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
                      <a href={project[key].github}> <button>GitHub</button></a>
                      <a href={project[key].livesite}> <button className="button-two">Live Site</button></a>
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

                    <div className="bottom-image">
                     <img src={project[key].logo} alt={project[key].imgAlt} />
                    </div>
                    <div className="year">
                      <span>{project[key].year}</span>
                    </div>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        );
      })}
      </div>
      
      
    </div>
    </div>
  );
};

export default MobileProjects;
