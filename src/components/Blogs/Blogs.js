import React, { useEffect, useState } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blogs.css'
//here we call fetch the blogs and send it to BlogDetail

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[blogs])
    return (
        <div className='blog-superior'>
          
            {
                blogs.map(blog=><BlogDetail key={blog.id} blog={blog}></BlogDetail>) 
            }
        </div>
    );
};

export default Blogs;