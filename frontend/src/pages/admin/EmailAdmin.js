import React, { useState, useEffect } from "react";
import NavbarAdmin from "./components/NavbarAdmin";
import Modal from "../../modal/Modal"
import Users from "../../components/Users"

//style
import "./scss/emailadmin.scss";
import { BsPersonCircle } from "react-icons/bs";

const EmailAdmin = (props) => {
  const [renderEmail, setRenderEmail] = useState()
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    async function fetchBlogs() {
      let response = await fetch("http://localhost:5000/api/getEmails");
      let data = await response.json();
      console.log(data);
      setRenderEmail(data.email);
    }
    fetchBlogs();
  }, []);

  // let slicethis = renderEmail.body;
  // let slicedMail = slicethis.substring(0, 10);


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
      <Users></Users>
      <div className="emailWrapper">
        <div className="outerDiv">
   
        <div className="left">
            { renderEmail &&
            renderEmail.map((email) => (
              <div key={email._id}>
              <div className="emailInformation" onClick={showEmail}>
              <div className="logo">
                <BsPersonCircle></BsPersonCircle>
              </div>
              <div className="userinformation">
                <p style={{ fontSize: "16px" }}>
                  {email.name}
                </p>
                <p style={{ fontSize: "14px" }}>{email.body}...</p>
              </div>
            </div>
            <i className="iEmail">Din maillista slutar här...</i>
       
          {/* <Modal  open={isOpen} onClose={() => setIsOpen(false)}>         
             <div className="right">
            <div className="emailName">
              <p style={{ fontSize: "24px" }}>
                {email.name}
              </p>
              <i style={{ fontSize: "20px", marginTop: "30px" }}>{email.mail}</i>
            </div>
            <div className="emailBody">
              <p style={{ fontSize: "18px" }}>{email.body}</p>
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
          </div></Modal>  */}
            </div>
          ))}
          </div>
        
    

        </div>
    
    </div>
    </div>
  );
};

export default EmailAdmin;
