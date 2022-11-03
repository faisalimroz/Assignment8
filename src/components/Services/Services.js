import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

import './Services.css'
//Here the data fetch and send to the serviceInfo
const Services = () => {
   
    const [course,setCourse]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div className='cs'> 
          
            
            {
               course.map(cs=> <ServiceInfo key={cs.id} cs={cs}></ServiceInfo>)
            }
         
              
              
          
       

        </div>
        
    );
};

export default Services;