import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/login");
  };

  const LoggedIn = () => {
    return (
      <>
        <nav className="loggedInNav">
          <div className="links">
          <Link className="navLinks" to="/about">
              About
            </Link>
            <Link className="navLinks" to="/login">
              Login
            </Link>
            <Link className="navLinks" to="/register">
              Register
            </Link>
            <Link className="navLinks" to="/checkout">
              Checkout
            </Link>
            <Link className="navLinks" to="/myaccount">
              My Account
            </Link>
            <Link className="navLinks" to="/products">
              Products
            </Link>
          </div>
          <div className="navButtons">
            <button className="navButton" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </nav>
      </>
    );
  };

  const LoggedOut = () => {
    return (
      <>
        <nav className="loggedOutNav">
          <div className="links">
            <Link className="navLinks" to="/about">
              About
            </Link>
            <Link className="navLinks" to="/login">
              Login
            </Link>
            <Link className="navLinks" to="/register">
              Register
            </Link>
            <Link className="navLinks" to="/checkout">
              Checkout
            </Link>
            <Link className="navLinks" to="/myaccount">
              My Account
            </Link>
            <Link className="navLinks" to="/products">
              Products
            </Link>
          </div>
          
          <button className="navButton" onClick={() =>  navigate("/main")}>Main</button>
        </nav>
      </>
    );
  };
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;
};

export default Navbar;


//Samma navbar som det var på förra projektet men har gjort om lite för att få till alla sidor