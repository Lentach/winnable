import React, {useState} from 'react';
import './Nav.css'


const Nav = () => {
    const [open,setOpen] = useState(false)

    return (
        <nav>
            <div className='logo'><i className="fas fa-bong"/>  Logo </div>
            <ul className='nav-links'
                style={{transform: open ? 'translateX(0px)' :''}}>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Home</a>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Product</a></li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Services</a>
                </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>About</a>
                  </li>
                <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Contact</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"/>
        </nav>
    );
};

export default Nav;

