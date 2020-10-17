import React from 'react';
import './App.css';
import Slider from "./components/Slider/Slider";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import ContactUs from "./components/contactUs/ContactUs";


function App() {
  return (
    <div >
      <Nav/>
      <Hero/>
      <Slider/>
      <ContactUs/>
    </div>
  );
}

export default App;
