import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import Data from './Const';
import fetchData from "./useApi";
import ValidateUser from "./validateUser";


const wrongCredentials = () => {
    alert('oops looks like you have entered wrong credentials')
}

const eraseInput = () => {
    const email = document.querySelector('#emailId');
    const pass = document.querySelector('#emailpasword');
    email.value = '';
    pass.value = ''
}


const Login = ({Login}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});
    const [Home, setHome] = useState(false);
    const [userName, setUserName] = useState('')


    
    const onSubmit =(email, password, users, e) => {
        e.preventDefault();
        let input = {email : email, password : password}
        let user = ValidateUser(input ,users) 
      
         if(user) {
            setHome(true);
            alert(`Hello ${user} please proceed to home page`)
         }else{
            wrongCredentials();
         }
         setUserName(user)
         eraseInput();
    }
    


const getData = async (url, view) => {
    let responseData = await fetchData(url, view);
    setUsers(responseData);
}

    useEffect(() => {
       const index = Data.findIndex((listItem)=> listItem.for === 'Users');
       const usrURL =  Data[index].url;
       getData(usrURL, Data[index].for);

      }, []);


    return(
        <div className='Login-Container' >
            <h1>Please Enter your details :</h1>
            <form onSubmit={(e)=>onSubmit(email, password, users, e)}>
                <div>
                    <label htmlFor='emailId' >Please Enter your Email Id :</label>
                    <input type='email'  
                        id='emailId' 
                        placeholder='Enter your Email ID.....'  
                        onChange={(e)=>setEmail(e.target.value)} 
                        required/>
                </div>

                <div>
                    <label htmlFor='emailId' >Please Enter your Password:</label>
                    <input type='password' 
                        id='emailpasword' 
                        placeholder='Enter your Password....' 
                        onChange={(e)=>setPassword(e.target.value)}
                        required/>
                </div>

                 <button className='btn-submit' type='submit' > 
                    Submit
                </button> 

                <Link  to='/home' className='link-dec'>
                    <button id='btnforhome' disabled={!Home} 
                        onClick={()=> Login(userName)}
                            >Proceed to Home PAge
                    </button> 
                </Link>

            </form>
        </div>
    )

}

export default Login;