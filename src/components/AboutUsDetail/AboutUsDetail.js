import React from 'react';
import './AboutUsDetail.css'
//here the data will be recived through props
const AboutUsDetail = (props) => {
    const {title,description,img}=props.ab
    return (
        <div className='about-detail'>
               <img src={img} alt=''/>
            <h1 className='text-2xl'>{title}</h1>
            <p>{description}</p>
          
        </div>
    );
};

export default AboutUsDetail;