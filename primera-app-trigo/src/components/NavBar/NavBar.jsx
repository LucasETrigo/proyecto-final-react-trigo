// rsf , creates skeleton

import React from 'react';
import './NavBar.css';
import Cart from '../Cart/Cart';

function NavBar(props) {
    return (
            <nav>
                <a href="index.html" className='logo'>NFTxHype</a>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Products</a></li>
                </ul>
                <Cart />
            </nav>
    );
}

export default NavBar;