import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user ? <button className='button-signout' onClick={handleSignOut}>Sign Out</button> :
                        <Link to='/login'>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;