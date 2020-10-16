import './Hero.css'
import React from "react";

const Hero = () => {
    return (
        <div className='hero-style'>
            <div className="hero-image">
                <div className="container">
                    <h1><span>Hello there</span></h1>
                    <span className="des">Web Dev</span>
                    <a className="btn" href='#'>Info</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
