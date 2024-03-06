// App.js
import React from 'react';
import jsonData from './data.json';
import Home from './Pages/Home';
import About from './Pages/About';
import "./style.scss";

function App() {
  return (
    <main>
      {/* <Home/> */}
      <About/>
    </main>
  );
}

export default App;
