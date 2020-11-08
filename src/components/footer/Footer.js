import React from 'react';
import './Footer.css'
import FooterLeft from "./footer-components/Footer-left";
import FooterCenter from "./footer-components/Footer.center";
import FooterRight from "./footer-components/Footer-right";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <FooterLeft/>
                <FooterCenter/>
                <FooterRight/>
            </div>
        </div>
    );
};

export default Footer;
















