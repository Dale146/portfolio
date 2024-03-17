import React, { useEffect, useState } from "react";
import exm1 from "../images/movie.png";

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
        {/* {projects.map((project, index) => {
        const projectKeys = Object.keys(project);

        return (
          <div key={index}>
            {projectKeys.map((key) => (
              <div key={key} className="mobile-project-container">
              <img src={project[key].imgSrc} alt={project[key].imgAlt} />
              <h2>{project[key].title}</h2>
              <span>{project[key].mainTools}</span>
              </div>
              ))}
          </div>
          
        );
      })} */}
      <div className="box">
        
        <div className="circle-1"></div>
        <h2>The movie database</h2>
        <div className="box-container-2">

        <img src={exm1} alt="exm1"></img>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Rest API</li>
        </ul>
        </div>
        
      </div>
      <button>Home</button>
    </div>
  );
};

export default MobileProjects;
