import React, { useState, useEffect } from "react";
import Modal from "../components/modal";
import Typewriter from "../components/typeWriter";
import sky1 from "../images/1.png";
import land from "../images/2.png";
import lake from "../images/3.png";
import scape from "../images/4.png";
import dog from "../images/Idle.png";
import data from "../data.json";



const Home = () => {
  const dogString = data.dog;
  const secondString = data.secondString;

  // select the array thats used
  const [selectString, setSelectString] = useState([]);
  // for choosing the array number
  const [currentIndex, setCurrentIndex] = useState(0);
  // made for change the text in the modal
  const [modalText,setModalText] = useState(selectString[0]);

  // change the text inside the modal
  useEffect(() => {

  },[modalText]);

  // counting the array.length and make the index always smaller to it.
  // set the indexNumber each time clicked the button
  // set the modalText to to the srray index number.
  const showNextParagraph = () => {
    if (currentIndex < selectString.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setModalText(selectString[currentIndex + 1]);
    } else {
      console.log(selectString[currentIndex]);
    }
  };

  // Check if the modal is open
  const [isModalOpen, setModalOpen] = useState(false);

  // OnClick function to open the modal
  const handleOpenModal = (array) => {
    setSelectString(array);
    setCurrentIndex(0);
    setModalText(array[0]);
    setModalOpen(true);
  };

  // OnClick function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentIndex(0);
    
  };

  return (
    <div className="home">
      <button className="other" onClick={() => handleOpenModal(secondString)}>
        other
      </button>
      <div className="container">
        <div>
          <img className="sky" src={sky1} alt="sky" />
        </div>
        <img className="land" src={land} alt="land" />
        <img className="lake" src={lake} alt="lake" />
        <img className="scape" src={scape} alt="scape" />

        <div className="dog">
          <img
            src={dog}
            alt="dog"
            onClick={() => handleOpenModal(dogString)}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <button onClick={showNextParagraph}>111</button>
          <p>
            <Typewriter key={modalText} text={modalText} />
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
