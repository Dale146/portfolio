import React from "react";
import { useState } from "react";
import Mystats from "../components/stats";
import Story from "../components/story";
import Mymenu from "../components/menu";

import tian from "../images/tiantian.jpg";

const About = () => {


    return (
        <div className="about">
            <div className="about-container">

                <section className="image-container">
                <img src={tian} alt="tiantian"/>

                </section>

                <section className="content">
                    <p>...</p>
                    <Mystats/>
                    <Story/>
                    <Mymenu/>
                </section>
                <section className="bottom-nav">
                    <button>back</button>
                    <button>menu</button>
                </section>
            </div>
        </div>
    )
}

export default About;