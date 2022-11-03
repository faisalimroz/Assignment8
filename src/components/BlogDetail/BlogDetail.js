import React from 'react';
import './BlogDetail.css'
//here the data will recived
const BlogDetail = (props) => {
  const {name,Description}=props.blog
    return (
        <div  className='blog-container'>
           <div className='blog'>
               <h1 className='text-2xl'> {name}</h1>
               <p>{Description}</p>
            </div>
        </div>
        
           
           
       
    );
};

export default BlogDetail;