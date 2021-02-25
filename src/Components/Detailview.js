import React from "react";
import queryString from "query-string";

import './view.css';
import ViewContent from "./ViewPage";

const DetailView = props => {
    const detail = props.detail;
    const blog = (props.topic === 'blogs') ? true : false
    console.log( queryString.parse(window.location.pathname) );


    return(
            <div>
                <div className='info-heading' >
                    <h2> Details of {props.topic} :</h2>
                </div>

                <ViewContent listDetail ={detail} isBlog = {blog} focousBlog = {props.blog} />

            </div>
        )

}

export default DetailView;