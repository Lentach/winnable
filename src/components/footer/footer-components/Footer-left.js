import React from 'react';

const FooterLeft = () => {
    return (
        <div className="footer-left">
            <h3>My<span>Logo</span></h3>
            <div className="footer-links">
                <a href="#" className="link1">Home</a>
                <a href='#home'>Blog</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
                <a href='#footer'>Hello World</a>
            </div>
            <p className="footer-company">
                Company Name @ 2020
            </p>
        </div>
    );
};

export default FooterLeft;
