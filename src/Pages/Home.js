import React, { useState, useEffect } from "react";
import Modal from "../components/modal";
import Typewriter from "../components/typeWriter";
import sky1 from "../images/1.png";
import land from "../images/2.png";
import lake from "../images/3.png";
import scape from "../images/4.png";
import dog from "../images/Idle.png";
// import json data
import data from "../data.json";



const Home = () => {
  // import array from json file
  const dogString = data.dog.paragraphs;
  const secondString = data.secondString.paragraphs;
  const dogName = data.dog.name;
  const secondName = data.secondString.name;
  const dogMoreString = data.dog.more;
  const secondParagraph = data.secondString.more;

  // select the name thats used
  const [selectName, setSelectName] = useState("");
  // trigger is same function triggered twice
  const [dogTrigger, setDogTrigger] = useState(false);
  const [secondTrigger, setSecondTrigger] = useState(false);
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
      console.log(selectString)
    } else {
      console.log(selectString[currentIndex]);
    }
  };

  // Check if the modal is open
  const [isModalOpen, setModalOpen] = useState(false);

  // OnClick function to open the modal
  // the parameter are the arrays and the names
  const handleOpenModal = (array, name, array2) => {
    // change the name of the array
    setSelectName(name)
    // change the array
    setSelectString(array);
    // set the index to 0 just to reset
    setCurrentIndex(0);
    setModalText(array[0]);
    setModalOpen(true);
    console.log(modalText)
    console.log(selectString)
    console.log(dogTrigger)
    // switch by name of the array
    switch (name){
      case "dog":
        if (dogTrigger === false){
           setDogTrigger(true);
        }else{
          setCurrentIndex(0);
          setModalText(array2[0]);
          setSelectString(array2);
        };
        break;
        
      case "this is the name":
        if(secondTrigger === false){
          setSecondTrigger(true);

        }else{
          setCurrentIndex(0);
          setModalText(array2[0]);
          setSelectString(array2);
        }
        break;
        
        default:
        return null;
    };
  };

  // OnClick function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentIndex(0);
    console.log(dogTrigger)
    
  };

  return (
    <div className="home">
      {/* give the array and the name */}
      <button className="other" onClick={() => handleOpenModal(secondString, secondName, secondParagraph)}>
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
            onClick={() => handleOpenModal(dogString, dogName, dogMoreString)}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <button onClick={showNextParagraph}>111</button>
          {/* use select name */}
          <p>{selectName}</p>
          <p>
            {/* use modal text */}
            <Typewriter key={modalText} text={modalText} />
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
