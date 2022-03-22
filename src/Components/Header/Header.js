import React from 'react';
import logo from '../Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='links'>
                <a href="/orders">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;