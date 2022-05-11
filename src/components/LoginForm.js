import React from 'react'
import { UserContext } from "../context/UserContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


//STYLING - inline styling + ContactUs.scss

import {BsPerson } from "react-icons/bs";

const LoginForm = (props) => {

  const navigate = useNavigate();

  const { user, setUser, setLoggedIn } = useContext(UserContext)


  const handleInput = (e) =>{
    setUser({...user, [e.target.name]: e.target.value });
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate(`/main/${user.username}`);
  };

  return (
    <div>
    <div>
     <form  
      onSubmit={handleLoginForm}
     className='contact_form' style={{width:"375px", minHeight:"507px"}}>
     <div className='round_thing'>
    <BsPerson></BsPerson>
     </div>
         <div className='content_wrapper'>
         <input name="username" placeholder='Användarnamn' onChange={handleInput} ></input>
         <input name="password" type="password" placeholder='Lösenord' onChange={handleInput}></input>
         
         <button 
         type="submit"
         style={{width:"95%", color:"white"}} 
         className='button_form' >
         LOGGA IN</button>

         <button
          style={{width:"70%", backgroundColor:"black"}} 
          className='button_form'>SKAPA KONTO</button>
           <button
          style={{width:"70%", backgroundColor:"black"}} 
          className='button_form'>STÄNG</button>
         </div>  
     </form>
    </div>


    </div>
  )
}

export default LoginForm