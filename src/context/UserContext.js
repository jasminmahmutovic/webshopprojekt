import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
 
  const [loggedIn, setLoggedIn] = useState(false);


  const [user, setUser] = useState({
    firstname: "", 
    lastname: "",
    password: "",
    mail: "",
    adress: "",
    city: "",
    zipCode: "",
  });

 
  
  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

//Kopierade över UserContexten från förra projektet då den är rätt lik det vi vill komma
//i fund med här :)