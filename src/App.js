import React from 'react';
import './App.css';
import Slider from "./components/Slider/Slider";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import {sliderArr, sliderArr2} from "./data/slider.data";


function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Slider sliderArr={sliderArr}/>
      <Slider sliderArr={sliderArr2}/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
