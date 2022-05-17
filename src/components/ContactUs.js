import React from 'react'

import { UserContext } from "../context/UserContext";
import { useContext, useState } from 'react';

//style
import "./scss/ContactUs.scss"
import {IoMailOutline} from "react-icons/io5";

const ContactUs = (props) => {

  const { user, setUser } = useContext(UserContext)
  // const [emailOpen, setEmailOpen] = useState(false)




  const sendingEmail = () =>{
     alert(`Tack för ditt mail ${user.firstname} ${user.lastname}, vi svarar vanligtvis inom en arbetsdag.`)
  }

  const handleInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };


  return (
    <div>
     <form  method="post" className='contact_form'>
     <div className='round_thing'>
         <IoMailOutline></IoMailOutline>
     </div>
         <div className='content_wrapper'>
         <input name="firstname" placeholder='Förnamn' onChange={handleInput} required></input>
         <input name="lastname" placeholder='Efternamn' onChange={handleInput}></input>
         <input name="mail" placeholder='Mail' onChange={handleInput} required></input>
         <input type="file"></input>
         <textarea name="textarea" placeholder="skriv ditt ärende här" onChange={handleInput} required></textarea>
         <button className='button_form' onClick={sendingEmail}>Skicka</button>
         </div>  
     </form>
    </div>
  )
}

export default ContactUs