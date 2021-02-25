import React from "react";
import {useContext} from 'react';
import { Link } from "react-router-dom";



//import './index.css'
import Data from './Const';
import { UsersContext } from "./ContextApi";


const getList = listArray => {
    const List = listArray.map( (item, index) => {
        let url = `/${item.for}`
        
        return (<Link to={url} className='link-dec' key={item.id}  ><div className='list-item' id={item.id}  > {item.for}  </div></Link> )
    });

    return List;
}

const ListContent = props => {

    const List = getList(Data);
    const contextValue = useContext(UsersContext)
    const onSelect = (e) => {
        if(e.target.id) {
            contextValue(Number(e.target.id))
        }

    }


    return(
            <div className='list-container' onClick={(e)=>onSelect(e)} >
                  {List}                
            </div>
        )

}

export default ListContent;