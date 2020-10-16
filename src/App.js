import React from 'react';
import './App.css';
import Slider from "./components/Slider/Slider";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";


function App() {
  return (
    <div >
      <Nav/>
      <Hero/>
      <Slider/>
    </div>
  );
}

export default App;
