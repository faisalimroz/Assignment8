import React from 'react';
import './ServiceInfo.css'
const ServiceInfo = (props) => {
    const {name,img,price}=props.cs
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

export default ServiceInfo;