import React from "react";
import NavbarAdmin from "./components/NavbarAdmin";
import User from "../admin/components/User"

//style
import "./scss/emailadmin.scss";
import EmailFetch from "./components/EmailFetch";


const EmailAdmin = () => {

  return (
    <div style={{ display: "flex" }}>
      <NavbarAdmin></NavbarAdmin>
      <User></User>
      
      <div className="outerDivEmail">
      <h2>Email</h2>
      <div className="wrapperEmail">
      <EmailFetch></EmailFetch>
      </div>
      </div>

    </div>
  );
};

export default EmailAdmin;
