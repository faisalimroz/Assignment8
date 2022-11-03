import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <div className='logo'>
                    <FontAwesomeIcon className='img'icon={faCheckSquare}></FontAwesomeIcon>
                    <h1 className='text-4xl'>Shikho</h1>
                 
                 
                 </div>
                <Link to='/home'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;