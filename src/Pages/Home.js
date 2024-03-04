import React, { useState } from "react";
import Modal from "../components/modal";
import Typewriter from "../components/typeWriter";
import sky1 from "../images/1.png";
import land from "../images/2.png";
import lake from "../images/3.png";
import scape from "../images/4.png";
import dog from "../images/Idle.png";

const Home = () => {
  const [dogString, setDogString] = useState([
    "This is paragraph 1",
    "This is paragraph 2",
    "This is paragraph 3",
  ]);
  
  const [modalText, setModalText] = useState(dogString[0]);


  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextParagraph = () => {
    if (currentIndex < dogString.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setModalText(dogString[currentIndex]);
      console.log(modalText)
      
    }else{
      console.log(dogString[currentIndex])
    }
  };

  // check if the modal is open
  const [isModalOpen, setModalOpen] = useState(false);

  // onclick function to make modal open
  const handleOpenModal = () => {
    setModalOpen(true);
    
    
  };

  // onclick function to make modal close
  const handleCloseModal = () => {
    setModalOpen(false);
   
  };

  return (
    <div className="home">
      <div className="container">
        <div>
          <img className="sky" src={sky1} alt="sky" />
        </div>
        <img className="land" src={land} />
        <img className="lake" src={lake} />
        <img className="scape" src={scape} />
        <div className="dog">
          <img src={dog} alt="dog" onClick={handleOpenModal} />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <button onClick={showNextParagraph}>1111</button>
          <p>
            <Typewriter text={modalText}/>
          </p>
          
        </Modal>
      </div>
    </div>
  );
};

export default Home;
