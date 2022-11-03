import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
//It is a footer file.Here we use Fontawesome for icon 
const Footer = () => {
    return (
        <div className='fullFooter'>
            <h2 className='text-3xl bold mb-3'>Lowest Price Gurantee</h2>
            <h2 className='text-2xl mt-3'>Set Your Stunning Career With us</h2>
           <div className='footer'>
              <div className='footers'>
                <FontAwesomeIcon className='icons' icon={faCheckSquare}></FontAwesomeIcon>
                <p>Lifetime Access</p>
              </div>
              <div className='footers'>
                <FontAwesomeIcon className='icons' icon={faCheckSquare}></FontAwesomeIcon>
                <p>Multiple Device Access</p>
              </div>
              <div className='footers'>
                <FontAwesomeIcon className='icons'icon={faCheckSquare}></FontAwesomeIcon>
                <p>Live Support</p>
              </div>
           </div>
           <h2 className='text-2xl last-item mb-3'>© 2022.All Rights Reserved</h2>
        </div>
    );
};

export default Footer;<h2>Footer</h2>