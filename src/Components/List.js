import React from "react";

//import './index.css';
import ListContent from "./Listcontent";

const ListView = props => {

    return(
            <div>
                <div className='info-heading' >
                    <h2>Welcome to InfoDetail, here are some content that you may be intrested in.... </h2>
                </div>

                <ListContent/>
            </div>
        )

}

export default ListView;