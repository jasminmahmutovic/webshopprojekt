import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

//style
import "./scss/ContactUs.scss";
import { IoMailOutline } from "react-icons/io5";

const ContactUs = () => {
  const { user, setUser, isOpen, setIsOpen } = useContext(UserContext);

  const sendingEmail = (e) => {
    e.preventDefault();
    
    alert(
      `Tack för ditt mail ${user.firstname} ${user.lastname}, vi svarar vanligtvis inom en arbetsdag.`
    );
    setIsOpen(!isOpen);

    // fetch('http://localhost:3000/emailAdmin/', {
    //   method: 'Post',
    //   headers: {"content-type": "application/json"},
    //   body:JSON.stringify(user)
    // }.then(() =>{
    //   console.log("added email");
    // }))

  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={sendingEmail} className="contact_form">
        <div className="round_thing">
          <IoMailOutline></IoMailOutline>
        </div>
        <div className="content_wrapper">
          <input
            value={user.firstname}
            name="firstname"
            placeholder="Förnamn"
            onChange={handleInput}
            required
          ></input>
          <input
            value={user.lastname}
            name="lastname"
            placeholder="Efternamn"
            onChange={handleInput}
          ></input>
          <input
            value={user.email}
            name="mail"
            placeholder="Mail"
            onChange={handleInput}
            required
          ></input>
          <input type="file"></input>
          <textarea
            name="textarea"
            placeholder="skriv ditt ärende här"
            onChange={handleInput}
            required
          ></textarea>
          <button className="button_form" type="submit">
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
