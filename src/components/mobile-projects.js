import React, { useEffect, useState } from "react";
import upArrow from "../images/icons/iconmonstr-caret-up-circle-lined.svg";


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

    const [hiddenContent, setHiddenContent] = useState(false)
    const displayHiddenContent = (index, title) => {
      setHiddenContent(!hiddenContent);
      console.log(title)
    }
    
  return (
    
    <div className="mobile-projects">
      <h1>Projects</h1>
        {projects.map((project, index) => {
        const projectKeys = Object.keys(project);

        return (
          <div className="mobile-container" key={index}>
            {projectKeys.map((key) => (
              <div className="cover-container" onClick={displayHiddenContent}>
              <div key={key} className="box">
              <img src={project[key].imgSrc} alt={project[key].imgAlt} />
              <h3>{project[key].title}</h3>
              <ul>
                {project[key].mainTools && project[key].mainTools.map((tool,i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <span>{project[key].year}</span>
              </div>
             
              <div key={key} className={`hidden-content ${hiddenContent ? "show slide-in" : "hide"}`}>
                <h4>Project Description</h4>
                <p>{project[key].description}</p>
                <h4>Highlights</h4>
                  <ul>
                  {project[key].highlight && project[key].highlight.map((highlight,i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                  </ul>
                <h4>Any Insights?</h4>
                  <ul>
                  {project[key].insight && project[key].insight.map((insight,i) => (
                    <li key={i}>{insight}</li>
                  ))}
                  </ul>
                </div>
                    <section className="up-btn">
                    <img src={upArrow} alt="uparrow"/>
                    </section>

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
