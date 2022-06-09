import React from 'react'
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";


//STYLING - inline styling + ContactUs.scss
import "./MenuNavbar.js";

import { BsPerson } from "react-icons/bs";

const RegistrerForm = () => {    
  //nytt state, eller ska vi använda user statet vi har?
  const [register, setRegister] = useState()
  const [error, setError] = useState()

  const handleInput = (e) => {
    setRegister({...register, [e.target.name]: e.target.value})
  };

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:5000/api/register", {
        method: "post",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }
    
  };


  return (
    <div>
      <div>
        <form
          onSubmit={handleRegister}
          className="contact_form"
          id="login_form"
          style={{ width: "375px", minHeight: "507px" }}
        >
          <div className="round_thing">
            <BsPerson></BsPerson>
          </div>
          <div className="content_wrapper">
            <input
              id="username"
              name="usernameInput"
              placeholder="Användarnamn"
              onChange={handleInput}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Lösenord"
              onChange={handleInput}
              required
            />
              <input
              name="mail"
              type="email"
              placeholder="Mail"
              onChange={handleInput}
              required
            />
              <input
              name="firstname"
              type="text"
              placeholder="firstname"
              onChange={handleInput}
              required
            />
             <input
              name="lastname"
              type="text"
              placeholder="lastname"
              onChange={handleInput}
              required
            />

            <button
              style={{ width: "70%", backgroundColor: "black" }}
              className="button_form"
            >
              SKAPA KONTO
            </button>
            <p className="error" style={{ fontSize: "12px", color: "white" }}>
              {" "}
              {error}{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrerForm