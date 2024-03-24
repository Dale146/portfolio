// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import "./style.scss";

function App() {
  return (
    
    <Router>
      <Routes>
    
      < Route exact path ="/" element ={<Home/>}/>
      <Route path= "/about" element ={<About/>}/>
      {/* <Projects/> */}
    
      </Routes>
    </Router>
  );
}

export default App;
