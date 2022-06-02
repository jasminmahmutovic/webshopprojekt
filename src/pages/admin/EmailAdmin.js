import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import NavbarAdmin from "./components/NavbarAdmin";
import Modal from "../../modal/Modal"

//style
import "./scss/emailadmin.scss";
import { BsPersonCircle } from "react-icons/bs";

const EmailAdmin = (props) => {
  const { user} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false)
 

  let slicethis = user.textarea;
  let slicedMail = slicethis.substring(0, 10);


  const showEmail = () => {
    setIsOpen(!isOpen)
  }

  const answerMail = (e) =>{
    e.preventDefault()
    alert("Ditt mail är skickat till motagaren")
    document.getElementById("textfield").value = "";
    document.getElementById("textfield2").value = "";
  }
  return (
    <div style={{ display: "flex" }}>
      <NavbarAdmin></NavbarAdmin>
      <div className="emailWrapper">
        <div className="outerDiv">
          <div className="left">
            <div className="emailInformation" onClick={showEmail}>
              <div className="logo">
                <BsPersonCircle></BsPersonCircle>
              </div>
              <div className="userinformation">
                <p style={{ fontSize: "16px" }}>
                  {user.firstname} {user.lastname}
                </p>
                <p style={{ fontSize: "14px" }}>{slicedMail}...</p>
              </div>
            </div>
            <i className="iEmail">Din maillista slutar här...</i>
          </div>
        
          <Modal  open={isOpen} onClose={() => setIsOpen(false)}>         
             <div className="right">
            <div className="emailName">
              <p style={{ fontSize: "24px" }}>
                {user.firstname} {user.lastname}
              </p>
              <i style={{ fontSize: "20px", marginTop: "30px" }}>{user.mail}</i>
            </div>
            <div className="emailBody">
              <p style={{ fontSize: "18px" }}>{user.textarea}</p>
            </div>
            <div className="emailFile">
            <div className="file">
              <p style={{ fontSize: "14px" }}></p> {user.file}
            </div>
          </div>
          <div className="answerWrapper">
          <form onSubmit={() => alert("Ditt svar är skickat")}>
            <input 
            placeholder="svars rubrik" 
            id="textfield2"/>
            <textarea id="textfield"></textarea>
            <button type="submit" onClick={answerMail}>Skicka svar</button>
          </form>
          </div>
          </div></Modal>

        </div>
      </div>
    </div>
  );
};

export default EmailAdmin;
