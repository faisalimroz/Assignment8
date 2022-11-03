import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Services from '../Services/Services';
import './Home.css'
//It is the Home page. Here the data fetched and send to servicedetail

const Home = () => {

    const [courses,setCourse]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div className='courses'>
          
           {
            courses.map(course=><ServiceDetail key={course.id} course={course}></ServiceDetail>)
           }
        </div>
    );
};

export default Home; <h1>home</h1>