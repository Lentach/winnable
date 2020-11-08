import React from 'react';

const FooterLeft = () => {
    return (
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
    );
};

export default FooterLeft;
