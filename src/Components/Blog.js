import React from "react";
import { Link } from "react-router-dom";

import './view.css';

const DisplayBlog = blog => {
    let Item =[];

    for(let x in blog) {
        let data = <div className='single-item' key={Math.random()}  > <b> {x.toUpperCase()}: </b> { String(blog[x]) } </div>
        Item.push(data)
    }

    return Item;
}


const Blog = ({ blog }) => {
    const blogData = DisplayBlog(blog);
    return(
            <div className='blog-container' >
                {blogData}
                <Link to='/blogs' className='link-dec' > <button className='btn-back' > Go Back </button> </Link>
            </div>
        )

}

export default Blog;