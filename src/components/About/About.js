import React from 'react';
import './About.css'
import Intro from "./Intro/Intro";
import Reviews from "./Reviews/Reviews";
import Cards from "./Cards/Cards";

const About = () => {
    return (
        <div className="container-about">
            <article className="top">
                <Intro/>
                <Reviews/>
            </article>
            <article className="bottom">
                <Cards/>
            </article>
        </div>
    );
};

export default About;
