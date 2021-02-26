import React from "react";
import { Redirect, Switch, Route } from 'react-router-dom'

import Header from './Header'
import ListView from "./List";
import Footer from "./Footer";
import { Provider } from './ContextApi';
import Data from './Const';
import fetchData from "./useApi";
import  DetailView  from "./Detailview";
import Blog from "./Blog";
import Login from "./Login";
import DefaultPage from "./Default";




class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            view : '',
            detailData : {},
            focousBlog : {},
            allData : [],
            login : false,
            name : ''
        }
    }

    getData = async (url, view) => {

        let responseData = await fetchData(url, view);
        this.setState({
            detailData : responseData
        });

    }

    selectList = ( id ) => {

        const index = Data.findIndex((listItem)=> listItem.id === id)

        const url = Data[index].url;
        this.setState({
            view : Data[index].for
        })
        this.getData(url, Data[index].for)

    }


    onSelectBlog = blog => {
        this.setState({
            focousBlog : blog
        })
    }

    onLogin = username => {
        this.setState({
            login : true,
            name : username
        })
    }

    onLogout = () => {
        this.setState({
            login : false,
            name : ''
        })
    }

    render() {

        let display ;

        if(this.state.login) {
            display = (<Switch>

                            <Route exact path ='/home'                         
                                render={(props) => (
                                    <Provider value={this.selectList}>
                                        <ListView/>
                                    </Provider>)
                            }/>

                            <Route exact path = {`/${this.state.view}`}                       
                                render={(props) => (
                                <DetailView 
                                topic = {this.state.view}
                                detail = {this.state.detailData}
                                blog = {this.onSelectBlog}
                                 />)
                            }/>

                            <Route exact path = {`/blog/${this.state.focousBlog.id}`}                       
                                render={(props) => (
                                <Blog 
                                blog={this.state.focousBlog}
                                 />)
                            }/>

                            <Route > <DefaultPage /> </Route> 

                    </Switch> )
        } else {
            display =   (<Switch>
                            
                            <Route exact path = '/login'                      
                                render={(props) => ( 
                                <Login Login = {this.onLogin} />
                                )
                            }/>  
                             <Route > <DefaultPage /> </Route> 
                              <Redirect from='/login'  /> 
                        </Switch> )
        }
      
        return(
            <>
                <Header name = {this.state.name} onLogout = {this.onLogout} />                    
                    {display}
                <Footer/>
            </>
        )
    }

}

export default Home