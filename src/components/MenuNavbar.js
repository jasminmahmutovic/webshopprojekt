//react
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";




//bootstrap
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

//Styling
import "./MenuNavbar.scss"
import navImage from "../assets/navImage.jpg"

const MenuNavbar = () => {
  
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext); 

  const navigate = useNavigate()
  
  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
    navigate("main");
  };


  //för dropdown
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  //Här är du inloggad
  const LoggedIn = () => {
    return(
      <>
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
                  <NavDropdown.Item href="#action3">Byxor</NavDropdown.Item>
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

              <div className="links_end">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <NavDropdown 
              className="my_account" 
              title="Mitt konto"
              id="navbarScrollingDropdown"
              >
                  <NavDropdown.Item href="#action3">Mina köp</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Retunera</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                  <Button  as="input" type="submit" value="LOGGA UT" onClick={handleLogOut} />
                  </NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to="/checkout">
                  <Nav.Link>checkout</Nav.Link>
                  </LinkContainer>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
   )
  }
  
  //här är du utloggad
  const LoggedOut = () =>{
    return(
      <>
          <Navbar bg="black" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Cool Fashion</Navbar.Brand>
              <Navbar.Toggle className="hamburger" aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <NavDropdown  
                  show={show}  
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  title="SHOP" 
                  id="navbarScrollingDropdown">
                    <div className="categories">
                    <NavDropdown.Divider /> 
                    <p>Kategorier</p>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Byxor</NavDropdown.Item>
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
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Button  as="input" type="submit" value="LOGGA IN" onClick={() => navigate("/login")} />
                <LinkContainer to="/checkout">
                  <Nav.Link>Kassa</Nav.Link>
                  </LinkContainer>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
   )
  }
   
  //kollar om du är in eller utloggad
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;

};

export default MenuNavbar;


