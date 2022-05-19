import { createContext, useState } from "react";

export const ContactFormContext = createContext();

const UserProvider = ({children}) => {
 
  
  

  const [contactForm, setContactForm] = useState({
    firstname: "", 
    lastname: "",
    mail: "",
    textarea: "", 
    file: "",
  });

 
  
  return (
    <>
      <ContactFormContext.Provider value={{contactForm, setContactForm}}>
        {children}
      </ContactFormContext.Provider>
    </>
  );
};
export default UserProvider;

//Kopierade över UserContexten från förra projektet då den är rätt lik det vi vill komma
//i fund med här :)