import React, { useState, useEffect } from "react";
import pixel from "../images/transparent_2024-03-01T00-27-27.png";
import sky1 from "../images/1.png";
import land from "../images/2.png";
import lake from "../images/3.png";
import scape from "../images/4.png";
import dog from "../images/Idle.png";
import Modal from "../components/modal";
import Typewriter from "../components/typeWriter";


const Home = () => {



    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

  return (
    <div className="home">
      <div className="container">
      <div>
      <img className="sky" src={sky1} alt="sky"/>
      </div>
      <img className="land" src={land}/>
      <img className="lake" src={lake}/>
      <img className="scape" src={scape}/>
      <div className="dog">
          <img src={dog} alt="dog" onClick={handleOpenModal}/>
       </div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <p><Typewriter text="This is my prarasdasdsadjsadbhasjdsagddsadsadsadsadsadsadsadsadsa" delay={10}/></p>
          </Modal>
      </div>
    </div>
  );
};


export default Home;
