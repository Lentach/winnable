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
                    <a>Home</a>
                </li>
                <li>
                    <a>Product</a></li>
                <li>
                    <a>Services</a>
                </li>
                <li>
                    <a>About</a>
                  </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"/>
        </nav>
    );
};

export default Nav;

