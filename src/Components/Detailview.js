import React from "react";

import './view.css';
import ViewContent from "./ViewPage";
import SearchData from "./search";




class DetailView extends React.Component{

    constructor( props ) {
        super( props );

        this.state = {
            searchValue :'',
            detail : [],
            searchData : [],
            blog : false,
            topic : '',
            disable : true
        }
    }

    static getDerivedStateFromProps( props, state ) {
        if(props.topic) {
                state = {
                    detail : props.detail,
                    blog : (props.topic === 'blogs') ? true : false,
                    topic : props.topic,
                }
                return state;
        
        }
        return null
    }


    onChaneInput = (e) => {
        let input = e.target.value;
        const filteredDetail = SearchData(input, this.state.blog, this.state.detail);
        this.setState({
            searchValue: input,
            disable : false,
            searchData : filteredDetail
        })
    }



    getPlaceHolder = blog => (blog) ? 'Search by Author or title' : 'Search Name'

    getData = () => {

        if(this.state.searchValue === '') {
            return <ViewContent listDetail ={this.state.detail} isBlog = {this.state.blog} focousBlog = {this.props.blog} />
        }
        return <ViewContent listDetail ={this.state.searchData} isBlog = {this.state.blog} focousBlog = {this.props.blog} />

    }


    render() {

        let plachlder = this.getPlaceHolder(this.state.blog);
        let displayData = this.getData();



        return(
            <div>
                <div className='container'>
                    <div className='info-heading' >
                        <h2> Details of {this.state.topic} :</h2>
                    </div>
                    <div className='search' >
                         <input placeholder={plachlder} onChange= {(e)=> this.onChaneInput(e) } />
                    </div> 
                </div>
                    {displayData}
            </div>
        )

    }



}


export default DetailView;