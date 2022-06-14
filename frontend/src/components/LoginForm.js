import React from "react";
import {  useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'


//STYLING - inline styling + ContactUs.scss
import "./MenuNavbar.js";

import { BsPerson } from "react-icons/bs";

const LoginForm = () => {
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState("")
  const { setLoggedIn } = useContext(UserContext)


  const inputLogin = (e) => {
    setCheckUser({ ...checkUser, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/login`, {
        method: "post",
        body: JSON.stringify(checkUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 401) {
        const data = await res.json();
        console.log(data);
        alert("välkommen")
        navigate("/myaccount")
        setLoggedIn(true)
      } else {
        alert("fel lösenord eller användarnamn")
        throw "Wrong username or password";
      }
    } catch (error) {
      console.error("Error: ", error);
    }

  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleLogin}
          className="contact_form"
          id="login_form"
          style={{ width: "375px", minHeight: "507px" }}
        >
          <div className="round_thing">
            <BsPerson></BsPerson>
          </div>
          <div className="content_wrapper">
            <input
              id="inputUser"
              name="username"
              placeholder="Användarnamn"
              onChange={inputLogin}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Lösenord"
              onChange={inputLogin}
              required
            />

            <button
              type="submit"
              style={{ width: "95%", color: "white" }}
              className="button_form"
            >
              LOGGA IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
