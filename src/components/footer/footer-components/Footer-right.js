import React from 'react';

const FooterRight = () => {
    return (
        <div className="footer-right">
            <p className='footer-company-about'>
                <span>About the COmpany</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the
                industry's standard dummy text ever since the 1500s,
            </p>
            <div className='footer-social'>
                <a href='https://twitter.com'>
                    <i className='fab fa-facebook'/></a>
                <a href='#'><i className='fab fa-twitter'/></a>
                <a href='#'><i className='fab fa-linkedin'/></a>
                <a href='#'><i className='fab fa-github'/></a>
                <a href='#'><i className='fab fa-instagram'/></a>
            </div>
        </div>
    );
};

export default FooterRight;
