
import React, { useEffect, useState } from 'react';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const {name,img,price}=props.course
    
    return (
        <div>
            <div className='courselist'>
            

          
               
            <img src={img} alt=''/>
            <h1 className='text-2xl '>Course Name: {name}</h1>
            <p>Price:{price}</p>
            <button>Enroll Now</button>
       
        </div>
        </div>
    );
};

export default ServiceDetail;