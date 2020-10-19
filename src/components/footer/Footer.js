import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

            <div className="footer-container">
                <div className="footer">
                    <div className="footer-heading">
                        <h2>About us</h2>
                        <a href="#">Blog</a>
                        <a href="#">Random</a>
                        <a href="#">Text</a>
                        <a href="#">Here</a>
                        <a href="#">we Go:)</a>
                    </div>
                    <div className="footer-heading">
                        <h2>Hire us</h2>
                        <a href="#">Jobs</a>
                        <a href="#">Random</a>
                        <a href="#">Food</a>
                        <a href="#">Support</a>
                        <a href="#">Services</a>
                    </div>
                    <div className="footer-heading">
                        <h2>media</h2>
                        <a href="#">Twitter</a>
                        <a href="#">Insta</a>
                        <a href="#">Facebook</a>
                        <a href="#">Youtube</a>
                        <a href="#">Pornhub</a>
                    </div>
                    <div className="footer-email-form">
                        <input
                            type="email"
                            placeholder='type something'
                            id='footer-email'/>
                            <input
                                type='submit'
                                value='Sign Up'
                                id='footer-email-btn'/>
                        </div>
                </div>
            </div>
    );
};

export default Footer;
