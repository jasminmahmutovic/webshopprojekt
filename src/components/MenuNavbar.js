//react
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Components
import Search from "./Search";
import DropDownModal from "../modal/DropDownModal";
import Modal from '../modal/Modal';

//Styling
import "./scss/MenuNavbar.scss"
import LoginForm from "./LoginForm.js";
//ICON
import { BsBag } from "react-icons/bs";

const MenuNavbar = (props) => {

  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext); 
  const navigate = useNavigate()

  const [shopIsOpen, shopSetIsOpen] = useState(false) //dropdown till shop
  const [yourAccountOpen, accountSetIsOpen] = useState(false) //dropdown "mitt konto"
  const [logInOpen, setLogInOpen] = useState(false) //modal logga in
  const [navbarOpen, setNavbarOpen] = useState(false) //hamburgermeny



  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  
  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/");
  };


  //Här är du inloggad
  const LoggedIn = () => {
    return(
      <>
      <nav  className={`menuNav ${navbarOpen ? " showMenu" : ""}`} > 
         <div className={`innerNav ${navbarOpen ? "showInner" : ""}`} > 

         <button className="nav_button">COOL SHOP</button>

         <div style={{height:"1.5rem"}}>
         <button id="shop" 
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`} 
          onClick={() => shopSetIsOpen(!shopIsOpen)}>
          SHOP
          </button>

          <DropDownModal className='dropDown' open={shopIsOpen}>
            <div className={`drop_shop ${navbarOpen ? "showdrop" : ""}`}>
              <Link to="#">Byxor</Link>
              <Link to="#">Toppar</Link>
              <Link to="#">Klänningar & kjolar</Link>
              <Link to="#">Skjortor</Link>
              <Link to="#">ytterkläder</Link>
            </div>
          </DropDownModal>
         </div>

         <div  className={`closed_end${navbarOpen ? "end_div" : ""}`}>
         
         <Search></Search>

         <button id="loggaIn" 
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`} 
          onClick={() => accountSetIsOpen(!yourAccountOpen)}>
          MITT KONTO
         </button>
         <DropDownModal open={yourAccountOpen}>
          <div className="drop_Login" >
          <Link to="#">Mina köp</Link>
          <Link to="#">Retunera</Link>
          <button style={{marginBottom:"1rem"}}className="nav_button" onClick={handleLogOut}>Logga ut</button>
          </div>
         </DropDownModal>
          <button id="checkout" className="nav_button"><BsBag></BsBag></button>
          <button id="hamburger"  
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`}
          onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}
          </button>
         </div>
         </div>
         </nav>   
      </>
   )
  }
  
  //här är du utloggad
  const LoggedOut = () =>{
    return(
      <>
      <nav  className={`menuNav ${navbarOpen ? "showMenu" : ""}`} > 
         <div className={`innerNav ${navbarOpen ? "showInner" : ""}`} > 

         <button className="nav_button">COOL SHOP</button>

         <div style={{height:"1.5rem"}}>
         <button id="shop" 
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`} 
          onClick={() => shopSetIsOpen(!shopIsOpen)}>
          SHOP
          </button>

          <DropDownModal className='dropDown' open={shopIsOpen}>
            <div className={`drop_shop ${navbarOpen ? "showdrop" : ""}`}>
              <Link to="#">Byxor</Link>
              <Link to="#">Toppar</Link>
              <Link to="#">Klänningar & kjolar</Link>
              <Link to="#">Skjortor</Link>
              <Link to="#">ytterkläder</Link>
            </div>
          </DropDownModal>
         </div>
         <div  className={`closed_end${navbarOpen ? "end_div" : ""}`}>
         
         <Search></Search>


         <button id="loggaUt" 
          style={{marginRight:"1rem"}}
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`}
          onClick={() =>setLogInOpen(true)}>
          LOGGA IN
          </button>
          <Modal  open={logInOpen} onClose={() => setLogInOpen(false)}>
          <LoginForm></LoginForm> 
          </Modal>   
     
          
          <button id="checkout" className="nav_button"><BsBag></BsBag></button>

          <button id="hamburger"  
          className={`nav_button ${navbarOpen ? "open_navButton" : ""}`}
          onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}
          </button>
         </div>
          
      
         </div>
         </nav>   
      </>
   )
  }
   
  //kollar om du är in eller utloggad
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;
  
  
};

export default MenuNavbar;


