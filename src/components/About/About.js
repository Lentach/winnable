import React from 'react';
import './About.css'
import logoColton from '../../assets/about/image-colton.jpg'
import logoIrene from '../../assets/about/image-irene.jpg'
import logoAnne from '../../assets/about/image-anne.jpg'
import star from '../../assets/about/icon-star.svg'
import Intro from "./Intro/Intro";

const About = () => {
    return (
        <div className="container-about">
            <article className="top">
                <Intro/>
                <section className="reviews">
                    <div className="review">
                        <div className="stars">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                        <p>Rated 5 Stars in Reviews</p>
                    </div>

                    <div className="review">
                        <div className="stars">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                        <p>Rated 5 Stars in Report Guru</p>
                    </div>

                    <div className="review">
                        <div className="stars">
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                        </div>
                        <p>Rated 5 Stars in BestTech</p>
                    </div>
                </section>
            </article>

            <article className="bottom">
                <section className="review-cards">
                    <div className="review-card">
                        <div className="reviewer-info">
                            <img src={logoColton} alt="Colton Picture"/>
                            <div>
                                <p className="reviewer-name">Colton Smith</p>
                                <p className="reviewer-type">Verified Buyer</p>
                            </div>
                        </div>
                        <p className="review-text">
                            "We needed the same printed design as the one we had ordered a
                            week prior. Not only did they find the original order, but we also
                            received it in time. Excellent!"
                        </p>
                    </div>
                    <div className="review-card">
                        <div className="reviewer-info">
                            <img src={logoIrene} alt="Irene Picture"/>
                            <div>
                                <p className="reviewer-name">Irene Roberts</p>
                                <p className="reviewer-type">Verified Buyer</p>
                            </div>
                        </div>
                        <p className="review-text">
                            "Customer service is always excellent and very quick turn around.
                            Completely delighted with the simplicity of the purchase and the
                            speed of delivery."
                        </p>
                    </div>
                    <div className="review-card">
                        <div className="reviewer-info">
                            <img src={logoAnne} alt="Anne Picture"/>
                            <div>
                                <p className="reviewer-name">Anne Wallace</p>
                                <p className="reviewer-type">Verified Buyer</p>
                            </div>
                        </div>
                        <p className="review-text">
                            "Put an order with this company and can only praise them for the
                            very high standard. Will definitely use them again and recommend
                            them to everyone!"
                        </p>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default About;
