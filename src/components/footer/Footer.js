import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <h3>My<span>Logo</span></h3>
                <div className="footer-links">
                    <a href="#" className="link1">Home</a>
                    <a href='#'>Blog</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#'>Hello World</a>
                </div>

                <p className="footer-company">
                    Company Name @ 2020
                </p>
            </div>
            <div className="footer-center">
                <div>
                    <i className='fa fa-map-marker'/>
                    <p><span>XX-66, Wypuścić Stonogę</span>GreaterPoland Poland</p>
                </div>

                <div>
                    <i className='fa fa--phone'/>
                    <p>+48293847362</p>
                </div>

                <div>
                    <i className='fa fa---envelope'/>
                    <p><a href='#'/>samcznejprzygody@wujekstaszek.pet</p>
                </div>
            </div>
            <div className="footer-right">
                <p className='footer-company-about'>
                    <span>About the COmpany</span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                </p>
                <div className='footer-social'>
                    <a href='https://twitter.com'>
                        <i className='fab fa-facebook'/></a>
                    <a href='#'><i className='fab fa-twitter'/></a>
                    <a href='#'><i className='fab fa-linkedin'/></a>
                    <a href='#'><i className='fab fa-github'/></a>
                    <a href='#'><i className='fab fa-pornhub'/></a>
                </div>

            </div>
        </div>

    );
};

export default Footer;
















