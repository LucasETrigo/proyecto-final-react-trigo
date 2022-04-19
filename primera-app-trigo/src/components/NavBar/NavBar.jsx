// rsf , creates skeleton

import React from 'react';
import './NavBar.css';
import Cart from '../Cart/Cart';

function NavBar(props) {
    return (
        <div className='hero'>
            <nav>
                <a href="index.html" className='logo'>Asic Argentina</a>
                <ul>
                    <li><a href='#'>INICIO</a></li>
                    <li><a href='#'>SOBRE NOSOTROS</a></li>
                    <li><a href='#'>PRODUCTOS</a></li>
                </ul>
                <Cart />
            </nav>
        </div>
    );
}

export default NavBar;