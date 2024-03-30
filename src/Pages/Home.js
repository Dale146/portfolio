import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import Typewriter from "../components/typeWriter";
import Backgrounds from "../components/background";
import About from "./About";
import OverLay from "../components/overlay";

// import images

import dog1 from "../images/dog1.png";
import hole from "../images/hole.svg";
import phone from "../images/smartphone.png";
import mask from "../images/mask.svg";







const Home = () => {

    // fetch json
    const [fetchedData, setFetchedData] = useState({});
  
    // change the status of data
    useEffect(() => {
      fetch('data/home.json')
        .then((response) => response.json())
        .then((data) => {
          // set fetchedData = data
          setFetchedData(data);
        })
        .catch((error) => {
          console.log('failed fetching data', error);
        });
    }, []);
  
    // Ensure toolIcons is an array
    const homeArrays = fetchedData || [];

    const [isOverlayOpen, setOverlayOpen] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Check window width on resize
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  // import array from json file
  const dogString = homeArrays && homeArrays.dog && homeArrays.dog.paragraphs;
  const dogAvatar = homeArrays && homeArrays.dog && homeArrays.dog.avatar;
  const secondString = homeArrays && homeArrays.secondString && homeArrays.secondString.paragraphs;
  const dogName = homeArrays && homeArrays.dog && homeArrays.dog.name;
  const secondName = homeArrays && homeArrays.secondString && homeArrays.secondString.name;
  const dogMoreString = homeArrays && homeArrays.dog && homeArrays.dog.more;
  const secondParagraph = homeArrays && homeArrays.secondString && homeArrays.secondString.more;
  

  // select the name thats used
  const [selectName, setSelectName] = useState("");

  const [selectAvatar, setSelectAvatar] = useState("");

  // if same trigger is used twice, set true
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
    } else {
      
    }};

  // Check if the modal is open
  const [isModalOpen, setModalOpen] = useState(false);

  // OnClick function to open the modal
  // the parameter are the arrays and the names
  const handleOpenModal = (array, name, secondArray, avatar) => {
    // change the name of the array
    setSelectName(name);

    setSelectAvatar(avatar);
    // change the array
    setSelectString(array);
    // set the index to 0 to reset
    setCurrentIndex(0);
    setModalText(array[0]);
    setModalOpen(true);
    
    // switch by name of the array
      switch (name){
        case "dog":
          if (dogTrigger === false){
            setDogTrigger(true);
          }else{
            setCurrentIndex(0);
            setModalText(secondArray[0]);
            setSelectString(secondArray);
          };
          break;
          
        case "this is the name":
          if(secondTrigger === false){
            setSecondTrigger(true);

          }else{
            setCurrentIndex(0);
            setModalText(secondArray[0]);
            setSelectString(secondArray);
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
    
    
  };
  

  return (
    <div className="home">
      {/* <Link to="/about" >
        <button onClick={() => setOverlayOpen(!isOverlayOpen)}>
          open
        </button>
      </Link> */}


      {/* give the array and the name */}
      {/* <button className="other" onClick={() => handleOpenModal(secondString, secondName, secondParagraph)}>
        other
      </button> */}
      <div className="container">
        <Backgrounds/>
        <div className="dog">
          <img
            src={dog1}
            alt="tiantian"
            onClick={() => handleOpenModal(dogString, dogName, dogMoreString, dogAvatar)}/>
        </div>
        {/* {windowWidth < 600 ? ( 

          <Link to="/about">
            <div className="hole">
              <img src={hole} alt="hole"/>
            </div>
          </Link>

          ) : (
            <div className="hole">
            <img onClick={() => setOverlayOpen(!isOverlayOpen)} src={hole} alt="hole"/>
          </div>
          )} */}
          <Link to="/projects">
            <div className="hole">
              <img className="hole-img" src={hole} alt="hole"/>
              <div className="mask-box">
              </div>
            </div>
          </Link>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} nextParagraph={showNextParagraph}>
          <div className="modal-avatar">

          <img src={selectAvatar} alt={selectName}/>
          {/* use select name */}
          <p>{selectName}</p>
          </div>
            {/* use modal text */}
          <p className="typewriter-content"><Typewriter key={modalText} text={modalText} delay={50}/> </p>        
          {windowWidth < 600 ? ( 
          <Link to="/about">
            <img className="mobile-phone" onClick={() => setOverlayOpen(!isOverlayOpen)} src={phone} alt="phone"/>
          </Link>
          ) : (
            <img className="mobile-phone" onClick={() => setOverlayOpen(!isOverlayOpen)} src={phone} alt="phone"/>
          )}
            
        </Modal>
        <OverLay isOpen={isOverlayOpen} onClose={() => setOverlayOpen(!isOverlayOpen)}>
        <About/>
        </OverLay>
      </div>


    </div>
  );
};

export default Home;
