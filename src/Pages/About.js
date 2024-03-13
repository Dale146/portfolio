import React, { useState,useEffect } from "react";
import Typewriter from "../components/typeWriter";
import Mymenu from "../components/menu";
import MyKits from "../components/kits";
import tian from "../images/tiantian.jpg";


const About = () => {
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
    
    // boolean used for my-kits and about-me section
    const [showComponent,setShowComponent] = useState(true);
    
    // string used to clarify className for display or none.
    const [animationClass, setAnimationClass] = useState("");

    // boolean used to check if the animation is used.
    const [animationTrigger, setAnimationTrigger] = useState(false);

    // set show menu to false
    const [showMenu, setShowMenu] = useState(false);
    // set hideContent to true
    const [hideContent, setHideContent] = useState(true);
    // initial component parameter is null
    const [selectedComponent, setSelectedComponent] = useState(null);
    // if fetchedData.options has values, and its not null or undefined, access [0].
    const optionsMenu = (fetchedData.options && fetchedData.options[0]) || [];


    // run function when menu is clicked
    const displayComponent = (component) => {
        // make initial content only display once.
        setHideContent(false);
        // make component display or hide with each click
        setShowMenu(!showMenu);
        // set the selected component string from the MENU component.
        setSelectedComponent(component);

    };
    // function for right slide button
    const handleDisplayContentRight = () => {
        // reverse the showComponent boolean
        setShowComponent(!showComponent)
        // give animation className
        setAnimationClass("slide-in-right");
        // set animation to used
        setAnimationTrigger(true);
    };

    const handleDisplayContentLeft = () => {
        setShowComponent(!showComponent);
        setAnimationClass("slide-in-left");
        setAnimationTrigger(true);
      };
    //   if the class of animation is triggered, clicking the same button will not effect, so using useEffect to clear the className after triggered.
      useEffect(() => {
        // if animation class is given, set it to false.
        if (animationTrigger === true) {
          setAnimationTrigger(false);
        //   after 5ms, replace an empty string to the className to make the animation work on everytime.
          setTimeout(() => {
            setAnimationClass("");
          }, 500); 
        }
      }, [animationTrigger]);
      

    return (
    // biggeset container
        <div className="about">
            {/* The container includes all the content */}
            <div className="about-container">

                {/* container for the image */}
                <section className="about-image-container">
                    <img src={tian} alt="tiantian"/>
                </section>

                {/* ----------------------------the container to make the button out of the animation class, so that it is not flipped-------------------------------- */}
                <div className="animation-flex">
                <button onClick={handleDisplayContentLeft}>left</button>
                {/* ____________________________The container for the content, kits and menu___________________ */}
                <section className={`about-content ${animationClass}`}>
                    {/* kits component. initial display is none. If showComponent is true, display */}
                    <div className={`kits-component ${showComponent ? "hide-status-kits" : "display-status-kits"}`}>
                    <MyKits/>
                    </div>
                    {/* Aboutme-section. Initial display is block. If showComponent is false, hide. */}
                    <div className={`status-component ${showComponent ? "display-status-kits" : "hide-status-kits"}`}>

                        {/* give class if true/false */}
                        <div className={`${hideContent ? "initial-content" : "hide-initial-content"}`}>
                        <p>...</p>
                        </div>
                        {/* give class if true/false */}
                        <div className={`${showMenu ? "show-component" : "hide-component"}`}>
                            <Mymenu onSelectComponent={displayComponent} />
                        </div>

                        {/* if selectedComponent is not = to null, run the value of selectedComponent.  */}
                        {selectedComponent != null && (
                            <div className="inside-content">
                            <h2>{optionsMenu[selectedComponent].title}</h2>
                            <p><Typewriter text={optionsMenu[selectedComponent].description} delay={10}/></p>
                        </div>
                        )}
                        {/* Show fill-content when initial-content and showMenu are both hidden */}
                        {(!hideContent && !showMenu && selectedComponent == null) && (
                          <div className="fill-content"></div>
                        )} 
                        <section className="bottom-nav">
                        <button>back</button>
                        {/* give the value of null */}
                        <button onClick={() => displayComponent(null)}>menu</button>
                         </section>
                    </div>
                </section>
                {/* ____________________________The container for the content, kits and menu___________________ */}
                    <button onClick={handleDisplayContentRight}>right</button>
                    {/* ----------------------------the container to make the button out of the animation class, so that it is not flipped-------------------------------- */}
                </div>
            </div>
        </div>
    );
}

export default About;
