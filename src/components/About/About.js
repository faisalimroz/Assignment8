
import React, { useEffect, useState } from 'react';
import AboutUsDetail from '../AboutUsDetail/AboutUsDetail';
import './About.css'
//Here we fetch the data of about and send it to AboutUsDetail
const About = () => {
    const [about,setAbout]=useState([])
    useEffect(()=>{
        fetch('about.json')
        .then(res=>res.json())
        .then(data=>setAbout(data))
    },[])
    return (
        <div className='about-container'>
          
          <h1 className='text-3xl text-center mb-2 mt-3'>Who We are</h1>
          <div className='about'>
            {
           about.map(ab=><AboutUsDetail key={ab.id} ab={ab}></AboutUsDetail>)
           
             }
          </div>
           

        </div>
    );
};

export default About;<h2>About</h2>