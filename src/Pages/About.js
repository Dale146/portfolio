import React, { useState } from "react";
import Typewriter from "../components/typeWriter";
import Mystats from "../components/stats";
import Story from "../components/story";
import Mymenu from "../components/menu";
import tian from "../images/tiantian.jpg";
import data from "../data.json";

const About = () => {
    // set show menu to false
    const [showMenu, setShowMenu] = useState(false);
    // set hideContent to true
    const [hideContent, setHideContent] = useState(true);
    // initial component parameter is null
    const [selectedComponent, setSelectedComponent] = useState(null);
    const optionsMenu = data.options[0];
    // run function when menu is clicked
    const displayComponent = (component) => {
        // make initial content only display once.
        setHideContent(false);
        // make component display or hide with each click
        setShowMenu(!showMenu);
        // set the selected component string from the MENU component.
        setSelectedComponent(component);

    };

    return (
        <div className="about">
            <div className="about-container">

                <section className="image-container">
                    <img src={tian} alt="tiantian"/>
                </section>

                <section className="content">
                    {/* give class if true/false */}
                    <div className={`${hideContent ? "initial-content" : "hide-initial-content"}`}>

                    <p>...</p>

                    </div>

                     {/* give class if true/false */}
                    <div className={`${showMenu ? "show-component" : "hide-component"}`}>
                        <Mymenu onSelectComponent={displayComponent} />
                    </div>
                    {selectedComponent != null && (
                    <div className="insde-content">
                        
                        <h2>{optionsMenu[selectedComponent].title}</h2>
                        <p>
                        <Typewriter text={optionsMenu[selectedComponent].description} delay={10}/></p>
                    </div>
                    )}


                </section>

                <section className="bottom-nav">
                    <button>back</button>
                    {/* give the value of null */}
                    <button onClick={() => displayComponent(null)}>menu</button>
                </section>
            </div>
        </div>
    );
}

export default About;