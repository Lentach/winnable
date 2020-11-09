import React, {useState} from 'react';
import './Nav.css'


const Nav = () => {
    const [open,setOpen] = useState(false)

    return (
        <nav>
            <div className='logo'><i className="fas fa-bong"/> Logo</div>
            <ul className='nav-links'
                style={{transform: open ? 'translateX(0px)' : ''}}>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#product'>Product</a></li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                <li>
                    <a href='#info'>Info</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"/>
        </nav>
    );
};

export default Nav;

