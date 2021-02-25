import React from "react";
import { Link } from "react-router-dom";


import './view.css';

class ViewContent extends React.Component{

        constructor( props ) {
                super(props);

                this.state = {
                    detail : undefined,
                    blog : false,
                    setBlog : null
                }
        }

    static getDerivedStateFromProps(props, state) {
        if(props.listDetail.length>1) {
            //console.log(props.focousBlog)
            state = {
                detail : props.listDetail,
                blog : props.isBlog,
                setBlog : props.focousBlog
            }
            return state
        }
        return null
    }


    getImage = (name, srcUrl) => {

        return(
            <div>
                <p className='head-name' > {name}</p>
                <img src={srcUrl} alt='userImage' key={Math.round()} />
            </div>
        )
    }

    getInnerData = (field, name) => {
        let itemqueue = [];
        const head = <div className='head-name' ><b> {name.toUpperCase()} :</b>  </div>
        itemqueue.push(head)

        for(let x in field) {
            if(typeof field[x] !== 'object') {
                let UIdata = <div className='multi-item' key={Math.random()}  > <b className='head-name'> {x.toUpperCase()} : </b>{field[x]} </div>
                itemqueue.push(UIdata)
            }
        }
        return itemqueue;
    }



    DisplayContent = (data, setBlog) => {
        //console.log(setBlog);

        const createdetail = data.map( item => {
            let innerItem =[];
            let outerItem = []

            for(let x in item) {
                if(typeof item[x] !== 'object') {
                    let imgUrl = String(item[x]).includes("https://");
                    if(imgUrl) {
                        let data = this.getImage(x, item[x]);
                        innerItem.push(data)
                    }else {
                        let data = <div className='single-item' key={Math.random()}  > <b> {x.toUpperCase()}: </b> { String(item[x]) } </div>
                        innerItem.push(data)
                    }    
                }else {
                    outerItem.push( this.getInnerData(item[x], x) )
                }  
            }
            if(this.state.blog){
            return <Link to={`/blog/${item.id}`} className='link-dec' key={`blog_${item.id}`} > <div className='outer-conatiner'  onClick={()=> setBlog(item)}  > <div className='item-container' key={Math.random()}  > {[innerItem, outerItem]} </div> </div> </Link> ;
             }
            return  <div className='outer-conatiner'  key={Math.random()}  > <div className='item-container' key={Math.random()}  > {[innerItem, outerItem]} </div> </div> ;
        })
        return createdetail;
    }


    render() {

        let detailListItem =  (this.state.detail)? this.DisplayContent(this.state.detail, this.state.setBlog) : ''

        return(
            <>
                <div className='conatiner' >
                        {detailListItem}
                </div>
            </>
        )
    }

}

export default ViewContent;