import React from 'react';

const FooterRight = () => {
    return (
        <div className="footer-right">
            <p className='footer-company-about'>
                <span>About the Company</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the
                industry's standard dummy text ever since the 1500s,
            </p>
            <div className='footer-social'>
                <a href='https://facebook.com'>
                    <i className='fab fa-facebook'/></a>
                <a href='https://twitter.com'><i className='fab fa-twitter'/></a>
                <a href='https://pl.linkedin.com/'><i className='fab fa-linkedin'/></a>
                <a href='https://github.com/'><i className='fab fa-github'/></a>
                <a href='https://instagram.com'><i className='fab fa-instagram'/></a>
            </div>
        </div>
    );
};

export default FooterRight;
