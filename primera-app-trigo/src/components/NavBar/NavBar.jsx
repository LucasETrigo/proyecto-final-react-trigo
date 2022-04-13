// rsf , creates skeleton

import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='hero'>
            <nav>
                <a href="index.html" className='logo'>LUCAS.</a>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>SERVICES</a></li>
                    <li><a href='#'>PRODUCTS</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;