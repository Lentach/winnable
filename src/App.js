import React from 'react';
import './App.css';
import Slider from "./components/Slider/Slider";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import {sliderArr, sliderArr2} from "./data/slider.data";
import About from "./components/About/About";


function App() {
  return (
    <div>
        <Nav/>
        <div id='home'>
            <Hero/>
        </div>
        <div id='product'>
            <Slider sliderArr={sliderArr}/>
        </div>
        <div id='services'>
            <Slider sliderArr={sliderArr2}/>
        </div>
        <div id='contact'>
            <ContactUs/>
        </div>
        <div id="about">
            <About/>
        </div>
        <div id="info">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
