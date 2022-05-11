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


<<<<<<< HEAD
=======
  //för dropdown
  const [show, setShow] = useState(false);
  const showDropdown = () =>{
      setShow(true);
  }
  const hideDropdown = () => {
      setShow(false);
  }

>>>>>>> a819d8ff5492d2cd0b6913ea500f18bda66d7a9d
  //Här är du inloggad
  const LoggedIn = () => {
    return(
      <>
<<<<<<< HEAD
      <nav  className={`menuNav ${navbarOpen ? " showMenu" : ""}`} > 
         <div className={`innerNav ${navbarOpen ? "showInner" : ""}`} > 
=======
        <Navbar bg="black" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Cool Fashion</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
        
                <NavDropdown 
                style={{width:'100%'}} 
                title="SHOP"
                id="navbarScrollingDropdown"
                show={show}  
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                >
                  <div className="categories">
                  <NavDropdown.Divider /> 
                  <p>Kategorier</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/pants">Byxor</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Jumpsuits</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Toppar & T-shirts</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Tröjor & Sweatshirts</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Klänningar</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Kjolar</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Matchande set</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Underkläder</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Ytterkläder</NavDropdown.Item>
                  </div>
        
                  <div className="inspiration">
                  <NavDropdown.Divider /> 
                  <p> Inspiration och Nyheter</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Vårnyheter</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Student</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Festival</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Tropical vaycay</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Summer in the city</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Boho summer</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">TikTok vibe</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Stand out from the crowd</NavDropdown.Item>
                  </div>
                  <div className="dropdown_img">
                  <NavDropdown.Divider /> 
                  <p>Senaste</p>
                  <NavDropdown.Divider />
                  <img src={navImage} style={{width:"10rem"}}/>
                    </div>
              </NavDropdown>
        
        
              </Nav>
>>>>>>> a819d8ff5492d2cd0b6913ea500f18bda66d7a9d

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


