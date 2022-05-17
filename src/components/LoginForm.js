import React from 'react'
import { UserContext } from "../context/UserContext";
import { useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";


//STYLING - inline styling + ContactUs.scss
import "./MenuNavbar.js"

import {BsPerson } from "react-icons/bs";

const LoginForm = () => {

  const navigate = useNavigate();

  const { user, setUser, setLoggedIn } = useContext(UserContext)
  const [error, setError] = useState('');



  const userInlog = [
    {
      username: "Frida",
      password: "test123"
    },
    {
      username: "Jasmin",
      password: "test123"
    },
    {
      username: "Maia",
      password: "test123"
    },
    {
      username: "Amalia",
      password: "test123"
    },
  ];

  const superUser = [
    {username:"superuser",
      password: "test123"}]

  const handleInput = (e) =>{
    setUser({...user, [e.target.name]: e.target.value });
  }
  

   
  const handleSubmit = (e) => {
    e.preventDefault();

  
     
    userInlog.forEach((value) => {
      if(value.username === user.usernameInput && value.password === user.passwordInput){
        setLoggedIn(true)
        navigate("main")
        setError("")
      } else{
        setError("Användarnamn eller löseonrd är felaktigt...")
      }
    })


      superUser.forEach((value) => {   
        if(value.username === user.usernameInput && value.password === user.passwordInput ){
          setLoggedIn(true)
          alert("välkommen SUPERUSER, du navigeras om till admin")
          navigate("admin")
          setError("")
        } 
    })
    }



  return (
    <div>
    <div>
     <form  
      onSubmit={handleSubmit}
     className='contact_form' id="login_form" style={{width:"375px", minHeight:"507px" }}>
     <div className='round_thing'>
    <BsPerson></BsPerson>
     </div>
         <div className='content_wrapper'>
         <input 
         id="inputUser"
         name="usernameInput"
         placeholder='Användarnamn'
         onChange={handleInput}
         required />
        
         <input 
         name="passwordInput" 
         type="password" 
         placeholder='Lösenord' 
         onChange={handleInput} 
         required/>
         
         <button 
         type="submit"
         style={{width:"95%", color:"white"}} 
         className='button_form' >
         LOGGA IN</button>

         <button
          style={{width:"70%", backgroundColor:"black"}} 
          className='button_form'>SKAPA KONTO</button>
          <p className="error" style={{fontSize:"12px"}}> {error} </p>
         </div>  
     </form>
    </div>
    </div>
  )
}

export default LoginForm