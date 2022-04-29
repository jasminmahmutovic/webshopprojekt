//react
import { useContext } from "react";
import { UserContext } from "../context/UserContext";




//bootstrap
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


//Styling
import "./MenuNavbar.scss"

const MenuNavbar = () => {

  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext); 

  
  const LoggedIn = () => {
    return(
      <>
      
  <Navbar bg="black" expand="md">
    <Container fluid>
      <Navbar.Brand href="#">Cool Fashion</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          navbarScroll
        >
  
          <NavDropdown  title="Shop" id="navbarScrollingDropdown">
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
              Här ska en bild vara
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
        <NavDropdown className="my_account" title="Mitt konto" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Mina köp</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Retunera</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Logga ut
            </NavDropdown.Item>
          </NavDropdown>
  
          <LinkContainer to="/checkout">
            <Nav.Link>Kassa</Nav.Link>
            </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </>
   )
  }
  
  const LoggedOut = () =>{
    return(
      <>
      
  <Navbar bg="black" expand="md">
    <Container fluid>
      <Navbar.Brand href="#">Cool Fashion</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          navbarScroll
        >
  
          <NavDropdown  title="Shop" id="navbarScrollingDropdown">
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
              Här ska en bild vara
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
        <LinkContainer to="/checkout">
            <Nav.Link>Logga in / Skapa konto</Nav.Link>
            </LinkContainer>
        <LinkContainer to="/checkout">
          <Nav.Link>Kassa</Nav.Link>
          </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </>
   )
  }
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;

 


};

export default MenuNavbar;


