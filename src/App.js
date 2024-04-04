// App.js
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Cover from './Pages/Cover';
import Loader from "./components/loader";
import "./style.scss";

function App() {
  useEffect(() => {
    document.title = "Dale's Portfolio Website"; 
  }, []);
  return (
    <Router>
      <Routes>
      
      <Route exact path ="/" element ={<Cover/>}/>
      <Route path= "/home" element ={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/> 
      <Route path= "/about" element ={<About/>}/>
     
    
      </Routes>
    </Router>
  );
}

export default App;
